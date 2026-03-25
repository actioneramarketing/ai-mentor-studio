"use client"

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { useParams, useRouter } from "next/navigation"

import { MentorWizardProgress } from "./mentor-wizard-progress"

const INITIAL_CATEGORIES = ["Preparedness", "Mindset", "Business"]

function PlaceholderIcon() {
  return (
    <svg
      className="h-10 w-10 text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

type AddCategoryModalProps = {
  open: boolean
  titleId: string
  name: string
  onNameChange: (v: string) => void
  onClose: () => void
  onSave: () => void
}

function AddCategoryModal({
  open,
  titleId,
  name,
  onNameChange,
  onClose,
  onSave,
}: AddCategoryModalProps) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id={titleId} className="text-lg font-semibold text-gray-900">
          Add Category
        </h2>
        <div className="mt-4">
          <label
            htmlFor="new-category-name"
            className="mb-1 block text-sm font-semibold text-gray-900"
          >
            Category Name
          </label>
          <input
            id="new-category-name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="e.g., Fitness"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            autoFocus
          />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Save Category
          </button>
        </div>
      </div>
    </div>
  )
}

export default function NewMentorPage() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()
  const modalTitleId = useId()

  const [mentorName, setMentorName] = useState("Emergency Preparedness Mentor")
  const [mentorDescription, setMentorDescription] = useState(
    "Build a personalized 72-hour emergency kit based on your household, location, and needs. Get step-by-step guidance for preparedness planning.",
  )
  const [iconObjectUrl, setIconObjectUrl] = useState<string | null>(null)
  const [isDraggingIcon, setIsDraggingIcon] = useState(false)
  const iconInputRef = useRef<HTMLInputElement>(null)

  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState(
    INITIAL_CATEGORIES[0] ?? "",
  )
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")

  const [aiUsageMode, setAiUsageMode] = useState<"studio" | "custom">("studio")
  const [customProvider, setCustomProvider] = useState<"openai" | "anthropic">(
    "openai",
  )
  const [customApiKey, setCustomApiKey] = useState("")

  const revokeIconUrl = useCallback((url: string | null) => {
    if (url) URL.revokeObjectURL(url)
  }, [])

  useEffect(() => {
    return () => revokeIconUrl(iconObjectUrl)
  }, [iconObjectUrl, revokeIconUrl])

  function applyIconFile(file: File | null) {
    if (!file || !file.type.startsWith("image/")) return
    setIconObjectUrl((prev) => {
      revokeIconUrl(prev)
      return URL.createObjectURL(file)
    })
  }

  function openCategoryModal() {
    setNewCategoryName("")
    setCategoryModalOpen(true)
  }

  function closeCategoryModal() {
    setCategoryModalOpen(false)
    setNewCategoryName("")
  }

  function saveNewCategory() {
    const trimmed = newCategoryName.trim()
    if (!trimmed) return
    const existing = categories.find(
      (c) => c.toLowerCase() === trimmed.toLowerCase(),
    )
    if (existing) {
      setSelectedCategory(existing)
    } else {
      setCategories((prev) => [...prev, trimmed])
      setSelectedCategory(trimmed)
    }
    closeCategoryModal()
  }

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          <div id="page-header" className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Create a New AI Mentor
            </h1>
            <p className="mt-1 text-base text-gray-600 lg:text-lg">
              Build an AI mentor that guides users through a structured
              experience.
            </p>
          </div>

          <MentorWizardProgress currentStep={1} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-6 lg:col-span-2">
              <div
                id="basics-form"
                className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8"
              >
                <h2 className="text-xl font-bold text-gray-900">
                  Mentor Basics
                </h2>

                <div>
                  <label
                    htmlFor="mentor-name"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Mentor Name
                  </label>
                  <input
                    type="text"
                    id="mentor-name"
                    value={mentorName}
                    onChange={(e) => setMentorName(e.target.value)}
                    placeholder="e.g., Emergency Preparedness Mentor"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    This is what users will see when browsing mentors
                  </p>
                </div>

                <div>
                  <span className="mb-2 block text-sm font-semibold text-gray-900">
                    Mentor Icon
                  </span>
                  <input
                    ref={iconInputRef}
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => {
                      applyIconFile(e.target.files?.[0] ?? null)
                      e.target.value = ""
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => iconInputRef.current?.click()}
                    onDragEnter={(e) => {
                      e.preventDefault()
                      setIsDraggingIcon(true)
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault()
                      setIsDraggingIcon(false)
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      setIsDraggingIcon(false)
                      applyIconFile(e.dataTransfer.files?.[0] ?? null)
                    }}
                    className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 transition-colors ${
                      isDraggingIcon
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    {iconObjectUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={iconObjectUrl}
                        alt=""
                        className="h-24 w-24 rounded-xl object-cover shadow-sm"
                      />
                    ) : (
                      <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
                        <PlaceholderIcon />
                      </div>
                    )}
                    <div className="text-center">
                      <span className="text-sm font-semibold text-blue-600">
                        Click to upload
                      </span>
                      <span className="text-sm text-gray-600">
                        {" "}
                        or drag and drop
                      </span>
                      <p className="mt-1 text-xs text-gray-500">
                        Square image recommended (PNG, JPG, WEBP)
                      </p>
                    </div>
                  </button>
                </div>

                <div>
                  <label
                    htmlFor="mentor-description"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Mentor Description
                  </label>
                  <textarea
                    id="mentor-description"
                    rows={4}
                    value={mentorDescription}
                    onChange={(e) => setMentorDescription(e.target.value)}
                    placeholder="Describe what this mentor helps users accomplish..."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <p className="mt-2 text-sm text-gray-600">
                    This description helps users understand what this mentor
                    does and why they should use it.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Keep it clear and outcome-focused (2–3 sentences).
                  </p>
                </div>

                <div>
                  <span className="mb-2 block text-sm font-semibold text-gray-900">
                    Category
                  </span>
                  <p className="mb-3 text-xs text-gray-500">
                    Workspace-level categories organize mentors across your
                    studio.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="mentor-category" className="sr-only">
                        Category
                      </label>
                      <select
                        id="mentor-category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={openCategoryModal}
                      className="shrink-0 rounded-lg border-2 border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                    >
                      + Add Category
                    </button>
                  </div>
                </div>
              </div>

              <div
                id="ai-usage-settings"
                className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    AI Usage Settings
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Choose how this mentor uses AI. By default, it uses your
                    studio&apos;s configuration.
                  </p>
                </div>

                <fieldset className="space-y-4">
                  <legend className="sr-only">AI configuration source</legend>
                  <label className="flex cursor-pointer gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                    <input
                      type="radio"
                      name="ai-usage"
                      checked={aiUsageMode === "studio"}
                      onChange={() => setAiUsageMode("studio")}
                      className="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        Use Studio AI Configuration
                      </span>
                      <p className="text-sm text-gray-600">
                        Inherit API keys and defaults from Studio Settings.
                      </p>
                    </div>
                  </label>
                  <label className="flex cursor-pointer gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                    <input
                      type="radio"
                      name="ai-usage"
                      checked={aiUsageMode === "custom"}
                      onChange={() => setAiUsageMode("custom")}
                      className="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        Use Custom API Key for this Mentor
                      </span>
                      <p className="text-sm text-gray-600">
                        Route this mentor through a dedicated provider key.
                      </p>
                    </div>
                  </label>
                </fieldset>

                {aiUsageMode === "custom" ? (
                  <div className="space-y-4 border-t border-gray-100 pt-6">
                    <div>
                      <label
                        htmlFor="custom-provider"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Provider
                      </label>
                      <select
                        id="custom-provider"
                        value={customProvider}
                        onChange={(e) =>
                          setCustomProvider(
                            e.target.value as "openai" | "anthropic",
                          )
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="openai">OpenAI (ChatGPT)</option>
                        <option value="anthropic">Anthropic (Claude)</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="custom-api-key"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        API Key
                      </label>
                      <input
                        id="custom-api-key"
                        type="password"
                        autoComplete="off"
                        value={customApiKey}
                        onChange={(e) => setCustomApiKey(e.target.value)}
                        placeholder="sk-..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                      <p className="mt-2 text-sm text-gray-600">
                        Use a separate API key to track usage and costs for this
                        mentor independently.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        console.log("Test API Key", {
                          provider: customProvider,
                          keyLength: customApiKey.length,
                        })
                      }
                      className="rounded-lg border-2 border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                    >
                      Test API Key
                    </button>
                  </div>
                ) : null}
              </div>

              <div
                id="help-panel"
                className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 lg:p-8"
              >
                <div className="mb-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                      aria-hidden
                    >
                      <path d="M320 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V96zM96 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V96zM32 416H96V96H32c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32zM544 96H480V416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                      What makes a great mentor?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Follow these principles for the best user experience
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "Define a clear outcome",
                      body: "Users should know exactly what they will achieve by the end",
                    },
                    {
                      title: "Keep sessions focused",
                      body: "Avoid trying to solve too many problems in one mentor",
                    },
                    {
                      title: "Guide users step-by-step",
                      body: "Break complex tasks into manageable, sequential steps",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-3">
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-700">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div
                  id="preview-panel"
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">
                      Live Preview
                    </h3>
                    <span className="text-xs text-gray-500">User view</span>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                      <div className="p-5">
                        <div className="mb-4 flex items-start space-x-4">
                          <div
                            id="preview-icon"
                            className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md ring-1 ring-gray-200"
                          >
                            {iconObjectUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={iconObjectUrl}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <PlaceholderIcon />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3
                              id="preview-name"
                              className="mb-1 text-sm font-bold text-gray-900"
                            >
                              {mentorName || "Mentor name"}
                            </h3>
                            <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                              {selectedCategory || "Category"}
                            </span>
                          </div>
                        </div>
                        <p
                          id="preview-description"
                          className="mb-4 text-sm leading-relaxed text-gray-600"
                        >
                          {mentorDescription ||
                            "Description will appear here as you type."}
                        </p>
                        <button
                          type="button"
                          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                        >
                          Open Mentor
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <div className="flex items-start space-x-2">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <p className="text-xs leading-relaxed text-gray-700">
                        This preview updates as you fill out the form. Changes
                        are saved when you complete the wizard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="wizard-navigation"
            className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:mt-8 lg:p-6"
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
                  disabled
                  className="hidden rounded-lg px-4 py-2.5 font-semibold text-gray-500 hover:bg-gray-100 sm:block lg:px-6"
                >
                  <svg
                    className="mr-2 inline h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    aria-hidden
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                  Back
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg lg:px-8"
                  onClick={() =>
                    router.push(`/studios/${studioId}/mentors/new/step-2`)
                  }
                >
                  <span>Continue to Flow</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    aria-hidden
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddCategoryModal
        open={categoryModalOpen}
        titleId={modalTitleId}
        name={newCategoryName}
        onNameChange={setNewCategoryName}
        onClose={closeCategoryModal}
        onSave={saveNewCategory}
      />
    </div>
  )
}
