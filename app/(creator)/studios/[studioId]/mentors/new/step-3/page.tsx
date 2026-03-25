"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

export default function NewMentorStep3Page() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          <div id="page-header" className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Create a New AI Mentor</h1>
            <p className="mt-1 text-base text-gray-600 lg:text-lg">
              Build an AI mentor that guides users through a structured experience.
            </p>
          </div>

          <MentorWizardProgress currentStep={3} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-6 lg:col-span-2">
              <div
                id="conversations-form"
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:p-8"
              >
                <h2 className="mb-2 text-xl font-bold text-gray-900">Conversations</h2>
                <p className="mb-6 text-sm text-gray-600">
                  Set how the mentor runs multi-turn dialogue inside each step of your flow.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Opening message</label>
                    <textarea
                      rows={4}
                      defaultValue="Hi! I’ll walk you through this session one step at a time. You can answer in your own words—I'll adapt as we go."
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      First thing users see when they start a session (before step one).
                    </p>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-900">Follow-up depth</label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        className="rounded-xl border-2 border-blue-500 bg-blue-50 p-4 text-left transition-colors duration-200 hover:bg-blue-100"
                      >
                        <p className="text-sm font-semibold text-gray-900">Balanced</p>
                        <p className="mt-1 text-xs text-gray-600">Clarifying questions when helpful, without dragging on.</p>
                      </button>
                      <button
                        type="button"
                        className="rounded-xl border-2 border-gray-200 bg-white p-4 text-left transition-colors duration-200 hover:bg-gray-50"
                      >
                        <p className="text-sm font-semibold text-gray-900">Thorough</p>
                        <p className="mt-1 text-xs text-gray-600">More follow-ups to fully understand the user.</p>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Remember context across steps</h4>
                      <p className="text-xs text-gray-600">Let the mentor use answers from earlier steps in the flow.</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-gray-700">
                  Starters come next—short suggested prompts users can tap to begin. The flow you defined stays the source of truth for the session structure.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-sm font-bold text-gray-900">How this fits</h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-800">Flow</span> defines steps.
                    <span className="font-semibold text-gray-800"> Conversations</span> shapes how the mentor talks within those steps.
                    <span className="font-semibold text-gray-800"> Starters</span> offer quick entry points.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  onClick={() => router.push(`/studios/${studioId}/mentors/new/step-2`)}
                  className="flex items-center space-x-2 rounded-lg px-4 py-2.5 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:px-6"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                  <span className="hidden sm:inline">Back to Flow</span>
                  <span className="sm:hidden">Back</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg lg:px-8"
                  onClick={() => router.push(`/studios/${studioId}/mentors/new/step-4`)}
                >
                  <span className="hidden sm:inline">Continue to Starters</span>
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
