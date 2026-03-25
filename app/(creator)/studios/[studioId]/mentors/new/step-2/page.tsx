"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

type FlowStep = {
  id: string
  title: string
  subtitle: string
  goal: string
  aiInstructions: string
  questions: string[]
  completionRule: string
  allowSkip: boolean
  generateSummary: boolean
}

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }
  return `step-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

const INITIAL_STEPS: FlowStep[] = [
  {
    id: "seed-1",
    title: "Assess Your Household",
    subtitle: "Understand household size, special needs, and location risks",
    goal: "Understand household size, special needs, and location-specific risks to create a personalized emergency kit.",
    aiInstructions:
      "Ask the user about their household composition, including number of adults, children, and any special needs (elderly, infants, pets, medical conditions). Then inquire about their geographic location and primary risks (earthquakes, hurricanes, floods, etc.). Be conversational and supportive. Don't overwhelm them with too many questions at once.",
    questions: [
      "How many people are in your household (adults, children, infants)?",
      "Does anyone have special needs or medical conditions?",
      "What geographic location are you in, and what are the primary risks (earthquakes, hurricanes, etc.)?",
    ],
    completionRule: "AI decides when the step is complete",
    allowSkip: false,
    generateSummary: true,
  },
  {
    id: "seed-2",
    title: "Essential Supplies",
    subtitle: "Identify must-have items for your 72-hour kit",
    goal: "Prioritize essential supplies for the user's situation.",
    aiInstructions: "Guide the user through core supply categories with practical examples.",
    questions: ["What supplies do you already have at home?", "Do you need help prioritizing food, water, or medical items?"],
    completionRule: "AI decides when the step is complete",
    allowSkip: false,
    generateSummary: true,
  },
  {
    id: "seed-3",
    title: "Budget Planning",
    subtitle: "Prioritize purchases within your budget",
    goal: "Help the user plan purchases without overspending.",
    aiInstructions: "Ask about budget constraints and suggest phased purchasing.",
    questions: ["What is a comfortable monthly budget for preparedness supplies?"],
    completionRule: "AI decides when the step is complete",
    allowSkip: false,
    generateSummary: true,
  },
  {
    id: "seed-4",
    title: "Action Plan",
    subtitle: "Create your personalized shopping list and timeline",
    goal: "Leave the user with a clear next checklist.",
    aiInstructions: "Summarize decisions and propose a simple timeline.",
    questions: ["Would you like a week-by-week plan or a single shopping list?"],
    completionRule: "AI decides when the step is complete",
    allowSkip: false,
    generateSummary: true,
  },
]

function blankStep(): FlowStep {
  return {
    id: createId(),
    title: "",
    subtitle: "",
    goal: "",
    aiInstructions: "",
    questions: [],
    completionRule: "AI decides when the step is complete",
    allowSkip: false,
    generateSummary: true,
  }
}

const FLOW_DEFAULTS = {
  outcome: "",
  audience: "",
  transformation: "",
  extra: "",
}

function stepShell(
  partial: Pick<FlowStep, "title" | "subtitle" | "goal" | "aiInstructions" | "questions"> & {
    id?: string
    completionRule?: string
    allowSkip?: boolean
    generateSummary?: boolean
  }
): FlowStep {
  return {
    id: partial.id ?? createId(),
    title: partial.title,
    subtitle: partial.subtitle,
    goal: partial.goal,
    aiInstructions: partial.aiInstructions,
    questions: partial.questions,
    completionRule: partial.completionRule ?? "AI decides when the step is complete",
    allowSkip: partial.allowSkip ?? false,
    generateSummary: partial.generateSummary ?? true,
  }
}

/** Mock AI: full flow from modal answers (3–5 steps). */
function mockGenerateMentorFlow(input: typeof FLOW_DEFAULTS): FlowStep[] {
  const outcome = input.outcome.trim() || "reach a clear, practical outcome"
  const audience = input.audience.trim() || "people you serve"
  const transformation = input.transformation.trim() || "feel guided and confident"
  const extra = input.extra.trim()
  const ctx = extra ? ` ${extra}` : ""

  const templates: Parameters<typeof stepShell>[0][] = [
    {
      title: "Set context",
      subtitle: "Understand where they are today",
      goal: `Learn enough about ${audience} to personalize guidance toward: ${outcome}.`,
      aiInstructions: `Welcome ${audience}. Ask one or two open questions about their current situation and what “done” means for them. Keep tone supportive and concise.${ctx}`,
      questions: [
        `What prompted you to start working on ${outcome.split(",")[0]?.slice(0, 60) || "this"} today?`,
        "What would success look like at the end of this session?",
        "Is there anything I should know about your constraints or timeline?",
      ],
    },
    {
      title: "Explore options",
      subtitle: "Surface what matters most",
      goal: `Help ${audience} compare paths or priorities so they can move toward ${outcome}.`,
      aiInstructions: `Reflect back what you heard. Offer 2–3 structured prompts to clarify tradeoffs. Encourage honest answers; avoid overwhelming lists.${ctx}`,
      questions: [
        "Which option feels closest to what you need right now?",
        "What would you rule out after thinking it through?",
        "What support or resources do you already have?",
      ],
    },
    {
      title: "Commit to a plan",
      subtitle: "Turn insight into next steps",
      goal: `Co-create a short plan so the user experiences ${transformation}.`,
      aiInstructions: `Summarize themes from earlier messages. Propose a minimal next step, then ask for their tweak. Confirm buy-in before closing the step.${ctx}`,
      questions: [
        "What is the smallest step you will take in the next 24–48 hours?",
        "What might get in the way, and how will you handle it?",
      ],
    },
    {
      title: "Reflect and adjust",
      subtitle: "Lock in learning",
      goal: `Reinforce progress toward ${outcome} and capture one adjustment if needed.`,
      aiInstructions: `Celebrate specific progress. Ask what surprised them. Offer optional refinement of the plan if energy is low or blockers appeared.${ctx}`,
      questions: [
        "What’s the clearest takeaway for you from this step?",
        "Would you like to tweak your plan before moving on?",
      ],
    },
    {
      title: "Prepare for what’s next",
      subtitle: "Close the loop",
      goal: `Leave ${audience} ready to continue toward ${outcome} beyond this mentor.`,
      aiInstructions: `Give a brief recap bullet-style. Point to one habit or check-in. Invite them to return when context changes.${ctx}`,
      questions: [
        "When will you revisit this plan?",
        "Who (if anyone) should know about your next step?",
      ],
    },
  ]

  const count = 3 + (Math.abs(outcome.length + audience.length) % 3)
  return templates.slice(0, count).map((t) => stepShell(t))
}

/** Mock AI: step-level content from name + goal. */
function mockGenerateStepContent(title: string, goal: string): Pick<FlowStep, "aiInstructions" | "questions"> {
  const t = title.trim() || "this step"
  const g = goal.trim() || "make meaningful progress"
  return {
    aiInstructions: `Lead the user through "${t}" with empathy. Start by restating their objective in plain language (${g}). Ask concise follow-ups only when needed. Tie each reply back to the step goal and offer one concrete suggestion when appropriate.`,
    questions: [
      `What part of "${t}" feels unclear or stressful right now?`,
      `What would help you feel ready to move forward on: ${g.slice(0, 80)}${g.length > 80 ? "…" : ""}?`,
      "Is there anything you want to change about your plan before we continue?",
    ],
  }
}

export default function NewMentorStep2Page() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()
  const editorRef = useRef<HTMLDivElement>(null)
  const stepTitleInputRef = useRef<HTMLInputElement>(null)

  const [steps, setSteps] = useState<FlowStep[]>(INITIAL_STEPS)
  const [selectedId, setSelectedId] = useState<string>(INITIAL_STEPS[0]?.id ?? "")
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [flowModalOpen, setFlowModalOpen] = useState(false)
  const [flowForm, setFlowForm] = useState({ ...FLOW_DEFAULTS })

  useEffect(() => {
    if (!flowModalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFlowModalOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [flowModalOpen])

  const selected = useMemo(() => steps.find((s) => s.id === selectedId) ?? steps[0], [steps, selectedId])
  const selectedIndex = useMemo(() => {
    if (!selected) return 0
    const i = steps.findIndex((s) => s.id === selected.id)
    return i >= 0 ? i : 0
  }, [steps, selected])

  const patchStep = useCallback((id: string, patch: Partial<FlowStep>) => {
    setSteps((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  }, [])

  const scrollToEditor = useCallback(() => {
    requestAnimationFrame(() => {
      editorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [])

  const selectStep = useCallback(
    (id: string) => {
      setSelectedId(id)
    },
    []
  )

  const addStep = useCallback(() => {
    const next = blankStep()
    setSteps((prev) => [...prev, next])
    setSelectedId(next.id)
    scrollToEditor()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => stepTitleInputRef.current?.focus())
    })
  }, [scrollToEditor])

  const applyMockFlow = useCallback(() => {
    const generated = mockGenerateMentorFlow(flowForm)
    setSteps(generated)
    setSelectedId(generated[0]?.id ?? "")
    setFlowModalOpen(false)
    setFlowForm({ ...FLOW_DEFAULTS })
  }, [flowForm])

  const generateStepContent = useCallback(() => {
    if (!selected) return
    const { aiInstructions, questions } = mockGenerateStepContent(selected.title, selected.goal)
    patchStep(selected.id, { aiInstructions, questions })
  }, [selected, patchStep])

  const duplicateStep = useCallback(
    (id: string) => {
      let newId: string | null = null
      setSteps((prev) => {
        const i = prev.findIndex((s) => s.id === id)
        if (i < 0) return prev
        const src = prev[i]
        const copy: FlowStep = {
          ...src,
          id: createId(),
          title: src.title.trim() ? `Copy of ${src.title}` : "Copy of Untitled step",
          questions: [...src.questions],
        }
        newId = copy.id
        return [...prev.slice(0, i + 1), copy, ...prev.slice(i + 1)]
      })
      if (newId) {
        setSelectedId(newId)
        queueMicrotask(scrollToEditor)
      }
    },
    [scrollToEditor]
  )

  const deleteStep = useCallback((id: string) => {
    setSteps((prev) => {
      const idx = prev.findIndex((s) => s.id === id)
      const next = prev.filter((s) => s.id !== id)
      if (next.length === 0) {
        const fresh = blankStep()
        Promise.resolve().then(() => setSelectedId(fresh.id))
        return [fresh]
      }
      Promise.resolve().then(() => {
        setSelectedId((cur) => (cur === id ? next[Math.max(0, idx - 1)]!.id : cur))
      })
      return next
    })
  }, [])

  const reorder = useCallback((fromId: string, toId: string) => {
    if (fromId === toId) return
    setSteps((prev) => {
      const from = prev.findIndex((s) => s.id === fromId)
      const to = prev.findIndex((s) => s.id === toId)
      if (from < 0 || to < 0) return prev
      const copy = [...prev]
      const [moved] = copy.splice(from, 1)
      copy.splice(to, 0, moved)
      return copy
    })
  }, [])

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          <div id="page-header" className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Create a New AI Mentor</h1>
            <p className="mt-1 text-base text-gray-600 lg:text-lg">
              Build an AI mentor that guides users through a structured experience.
            </p>
          </div>

          <MentorWizardProgress currentStep={2} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="min-w-0 space-y-6 lg:col-span-4">
              <div
                id="mentor-steps-form"
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Mentor Step Flow</h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Define the steps users move through—this is the backbone of your guided experience.
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
                    <button
                      type="button"
                      id="generate-flow-btn"
                      onClick={() => setFlowModalOpen(true)}
                      className="flex items-center space-x-2 rounded-lg border-2 border-blue-600 bg-white px-4 py-2.5 font-semibold text-blue-600 shadow-sm transition-colors duration-200 hover:bg-blue-50 hover:shadow-md"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                      </svg>
                      <span className="hidden sm:inline">Generate Mentor Flow</span>
                      <span className="sm:hidden">Generate</span>
                    </button>
                    <button
                      type="button"
                      id="add-step-btn"
                      onClick={addStep}
                      className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                      </svg>
                      <span className="hidden sm:inline">Add Step</span>
                    </button>
                  </div>
                </div>

                <div id="steps-list" className="mb-6 space-y-3">
                  {steps.map((step, index) => {
                    const isActive = step.id === selectedId
                    const qCount = step.questions.length
                    return (
                      <div
                        key={step.id}
                        role="button"
                        tabIndex={0}
                        draggable
                        onDragStart={() => setDraggingId(step.id)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault()
                          if (draggingId) reorder(draggingId, step.id)
                          setDraggingId(null)
                        }}
                        onDragEnd={() => setDraggingId(null)}
                        onClick={() => selectStep(step.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            selectStep(step.id)
                          }
                        }}
                        className={`step-card cursor-pointer rounded-xl border-2 p-4 transition-colors duration-200 ${
                          isActive
                            ? "border-blue-500 bg-blue-50 shadow-sm ring-2 ring-blue-200 hover:border-blue-600"
                            : "border-gray-200 bg-gray-50 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex min-w-0 flex-1 items-center space-x-3">
                            <button
                              type="button"
                              className={`drag-handle cursor-move rounded-lg p-2 transition-colors duration-200 ${
                                isActive ? "hover:bg-blue-100" : "hover:bg-gray-200"
                              }`}
                              aria-label="Reorder step"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg
                                className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-gray-400"}`}
                                fill="currentColor"
                                viewBox="0 0 320 512"
                                aria-hidden
                              >
                                <path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" />
                              </svg>
                            </button>
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold text-white ${
                                isActive ? "bg-blue-600" : "bg-gray-400"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-base font-bold text-gray-900">
                                {step.title.trim() || "Untitled step"}
                              </h3>
                              <p className="truncate text-sm text-gray-600">
                                {step.subtitle.trim() || "Add a short description"}
                              </p>
                              <p className={`mt-1 text-xs ${isActive ? "text-blue-700" : "text-gray-500"}`}>
                                {qCount} question{qCount === 1 ? "" : "s"}
                              </p>
                            </div>
                          </div>
                          <div className="ml-2 flex shrink-0 items-center space-x-2">
                            <button
                              type="button"
                              className={`rounded-lg p-2 transition-colors duration-200 ${
                                isActive ? "hover:bg-blue-100" : "hover:bg-gray-200"
                              }`}
                              title="Edit"
                              onClick={(e) => {
                                e.stopPropagation()
                                selectStep(step.id)
                                scrollToEditor()
                              }}
                            >
                              <svg
                                className={`h-5 w-5 ${isActive ? "text-blue-700" : "text-gray-600"}`}
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                aria-hidden
                              >
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l6-35.4c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1V399.4zM439 7c7.3-7.3 19-7.3 26.3 0l47 47c7.3 7.3 7.3 19 0 26.3l-47 47-11.3-11.3 36.8-36.8c2.1-2.1 2.1-5.5 0-7.6s-5.5-2.1-7.6 0l-36.8 36.8L344 159 391 112l47 47c7.3 7.3 19 7.3 26.3 0s7.3-19 0-26.3l-47-47L439 7z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className={`rounded-lg p-2 transition-colors duration-200 ${
                                isActive ? "hover:bg-blue-100" : "hover:bg-gray-200"
                              }`}
                              title="Duplicate"
                              onClick={(e) => {
                                e.stopPropagation()
                                duplicateStep(step.id)
                              }}
                            >
                              <svg
                                className={`h-5 w-5 ${isActive ? "text-blue-700" : "text-gray-600"}`}
                                fill="currentColor"
                                viewBox="0 0 448 512"
                                aria-hidden
                              >
                                <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="rounded-lg p-2 transition-colors duration-200 hover:bg-red-100"
                              title="Delete"
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteStep(step.id)
                              }}
                            >
                              <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-start space-x-2">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                    </svg>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Click a step to edit its details. Drag and drop to reorder the flow.
                    </p>
                  </div>
                </div>
              </div>

              {selected ? (
                <div
                  ref={editorRef}
                  id="step-editor"
                  key={selected.id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                      Edit Step: {selected.title.trim() || "Untitled step"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        id="generate-step-content-btn"
                        onClick={generateStepContent}
                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
                          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2-47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                        </svg>
                        <span className="hidden sm:inline">Generate Step Content</span>
                        <span className="sm:hidden">Generate</span>
                      </button>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        Step {selectedIndex + 1} of {steps.length}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Step Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        ref={stepTitleInputRef}
                        type="text"
                        value={selected.title}
                        onChange={(e) => patchStep(selected.id, { title: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Short description
                      </label>
                      <input
                        type="text"
                        value={selected.subtitle}
                        onChange={(e) => patchStep(selected.id, { subtitle: e.target.value })}
                        placeholder="Shown in the step list"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Step Goal <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={selected.goal}
                        onChange={(e) => patchStep(selected.id, { goal: e.target.value })}
                        className="w-full min-h-[5.5rem] resize-y rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                      <p className="mt-2 text-xs text-gray-500">What should the user accomplish in this step?</p>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        AI Instructions <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={8}
                        value={selected.aiInstructions}
                        onChange={(e) => patchStep(selected.id, { aiInstructions: e.target.value })}
                        className="w-full min-h-[12rem] resize-y rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                      <p className="mt-2 text-xs text-gray-500">How the mentor should guide the user during this step</p>
                    </div>

                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900">Suggested Questions</label>
                          <p className="mt-1 text-xs text-gray-500">
                            The mentor uses these as guidance and adapts to the conversation.
                          </p>
                        </div>
                        <button
                          type="button"
                          id="add-question-btn"
                          onClick={() =>
                            patchStep(selected.id, { questions: [...selected.questions, ""] })
                          }
                          className="flex items-center space-x-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                          <span>Add Question</span>
                        </button>
                      </div>

                      <div className="space-y-2">
                        {selected.questions.map((q, qi) => (
                          <div
                            key={`${selected.id}-q-${qi}`}
                            className="flex items-start space-x-2 rounded-lg border border-gray-200 bg-gray-50 p-3"
                          >
                            <button
                              type="button"
                              className="drag-handle mt-1 cursor-move rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                              aria-label="Reorder question"
                            >
                              <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden>
                                <path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              value={q}
                              onChange={(e) => {
                                const next = [...selected.questions]
                                next[qi] = e.target.value
                                patchStep(selected.id, { questions: next })
                              }}
                              className="min-w-0 flex-1 rounded border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
                            />
                            <button
                              type="button"
                              className="rounded p-1.5 transition-colors duration-200 hover:bg-red-100"
                              aria-label="Remove question"
                              onClick={() => {
                                const next = selected.questions.filter((_, j) => j !== qi)
                                patchStep(selected.id, { questions: next })
                              }}
                            >
                              <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Completion Rule <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={selected.completionRule}
                        onChange={(e) => patchStep(selected.id, { completionRule: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      >
                        <option>AI decides when the step is complete</option>
                        <option>User clicks continue</option>
                        <option>All questions answered</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Allow Skip Step</h4>
                        <p className="text-xs text-gray-600">Let users skip this step if they want</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={selected.allowSkip}
                          onChange={(e) => patchStep(selected.id, { allowSkip: e.target.checked })}
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
                      </label>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Generate Step Summary</h4>
                        <p className="text-xs text-gray-600">Create a short recap before the next step</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={selected.generateSummary}
                          onChange={(e) => patchStep(selected.id, { generateSummary: e.target.checked })}
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="min-w-0 lg:col-span-8">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Live Preview</h3>
                <div className="text-sm text-gray-600">
                  This will simulate how your mentor behaves based on the current step.
                </div>
              </div>
            </div>
          </div>

          {flowModalOpen ? (
            <div
              className="fixed inset-0 z-50 flex min-h-0 items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="flow-modal-title"
            >
              <button
                type="button"
                className="absolute inset-0 bg-black/45"
                aria-label="Close dialog"
                onClick={() => setFlowModalOpen(false)}
              />
              <div
                className="relative z-10 max-h-[min(90vh,640px)] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white p-6 shadow-xl ring-1 ring-gray-100"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 id="flow-modal-title" className="text-lg font-bold text-gray-900">
                  Generate Mentor Flow
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Describe your mentor—we&apos;ll draft a flow you can refine (demo: mock data).
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-900">
                      What outcome should this mentor help achieve?
                    </label>
                    <textarea
                      value={flowForm.outcome}
                      onChange={(e) => setFlowForm((f) => ({ ...f, outcome: e.target.value }))}
                      rows={3}
                      className="w-full resize-none rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      placeholder="e.g. Build a personalized 72-hour emergency kit"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-900">
                      Who is this mentor for?
                    </label>
                    <input
                      type="text"
                      value={flowForm.audience}
                      onChange={(e) => setFlowForm((f) => ({ ...f, audience: e.target.value }))}
                      className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      placeholder="e.g. Families new to emergency planning"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-900">
                      What transformation should the user experience?
                    </label>
                    <textarea
                      value={flowForm.transformation}
                      onChange={(e) => setFlowForm((f) => ({ ...f, transformation: e.target.value }))}
                      rows={3}
                      className="w-full resize-none rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      placeholder="e.g. From overwhelmed to confident with a concrete checklist"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-900">
                      Optional: Additional context
                    </label>
                    <textarea
                      value={flowForm.extra}
                      onChange={(e) => setFlowForm((f) => ({ ...f, extra: e.target.value }))}
                      rows={2}
                      className="w-full resize-none rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      placeholder="Tone, constraints, industry, etc."
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-end gap-3 border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setFlowModalOpen(false)}
                    className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={applyMockFlow}
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          <div
            id="wizard-navigation"
            className="sticky bottom-0 mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:mt-8 lg:p-6"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-lg px-4 py-2.5 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:px-6"
              >
                Cancel
              </button>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => router.push(`/studios/${studioId}/mentors/new`)}
                  className="flex items-center space-x-2 rounded-lg px-4 py-2.5 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:px-6"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                  <span className="hidden sm:inline">Back to Details</span>
                  <span className="sm:hidden">Back</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg lg:px-8"
                  onClick={() => router.push(`/studios/${studioId}/mentors/new/step-3`)}
                >
                  <span className="hidden sm:inline">Continue to Conversations</span>
                  <span className="sm:inline lg:hidden">Continue</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
