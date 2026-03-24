"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

export default function NewMentorStep7Page() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto">

            <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
              <div id="page-header" className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Preview &amp; Publish</h1>
                <p className="mt-1 text-base lg:text-lg text-gray-600">
                  Review your mentor and publish it when you&apos;re ready
                </p>
              </div>

              <MentorWizardProgress currentStep={7} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="review-panel" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Review Your Mentor</h2>
                      <p className="text-sm text-gray-600">Everything looks good? Publish when ready.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Mentor Overview</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Mentor Name</p>
                            <p className="text-sm font-semibold text-gray-900">72-Hour Emergency Kit Builder</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Description</p>
                            <p className="text-sm text-gray-700">Build a personalized emergency preparedness plan for your household in 72 hours. Get step-by-step guidance on supplies, evacuation routes, and communication plans.</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Category</p>
                            <span className="inline-block px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">Emergency Preparedness</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Experience Summary</h3>
                        <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                          <li>Assess Your Household</li>
                          <li>Identify Essential Supplies</li>
                          <li>Plan Your Budget</li>
                          <li>Create Communication Plan</li>
                          <li>Review &amp; Complete</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Access Summary</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Free (Public Access)</span>
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Public (Discoverable)</span>
                          <span className="px-2.5 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">Lead Capture: Off</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">CTA Summary</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Title</p>
                            <p className="text-sm font-medium text-gray-900">Get Your Emergency Plan</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Button Text</p>
                            <p className="text-sm font-medium text-gray-900">Download Now</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Link</p>
                            <p className="text-xs text-blue-600 font-medium truncate">https://example.com/download</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Edit</h3>
                        <div className="flex flex-wrap gap-3">
                          <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            onClick={() => router.push(`/studios/${studioId}/mentors/new`)}
                          >
                            Edit Basics (Step 1)
                          </button>
                          <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            onClick={() => router.push(`/studios/${studioId}/mentors/new/step-4`)}
                          >
                            Edit Steps (Step 4)
                          </button>
                          <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            onClick={() => router.push(`/studios/${studioId}/mentors/new/step-6`)}
                          >
                            Edit Access (Step 6)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <div id="live-preview" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-sm font-bold text-gray-900">Live Preview</h3>
                        <span className="text-xs text-gray-500">User view</span>
                      </div>

                      <div className="bg-gray-50 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                          <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
                            <h4 className="text-white font-bold text-sm">72-Hour Emergency Kit Builder</h4>
                            <p className="text-blue-100 text-xs mt-0.5">Your AI guide</p>
                          </div>

                          <div className="p-4 space-y-4 min-h-[200px]">
                            <div className="flex justify-start">
                              <div className="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%]">
                                <p className="text-xs text-gray-500 mb-1">Step 1 — Assess Your Household</p>
                                <p className="text-sm text-gray-800">How many people are in your household? Include adults and children.</p>
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <div className="bg-blue-100 rounded-lg rounded-tr-none px-4 py-2.5 max-w-[85%]">
                                <p className="text-sm text-gray-800">2 adults, 2 children</p>
                              </div>
                            </div>

                            <div className="border-t border-gray-200 pt-3">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  placeholder="Type your response..."
                                  readOnly
                                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                />
                                <button type="button" className="px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg">
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                            <p className="text-xs text-gray-700 leading-relaxed">This preview shows how users will experience your mentor. No functionality in this demo.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="wizard-navigation" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 mt-6 lg:mt-8 sticky bottom-0">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    onClick={() => router.push(`/studios/${studioId}/mentors/new/step-6`)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    <span className="hidden sm:inline">Back</span>
                  </button>
                  <div className="flex items-center space-x-3">
                    <button type="button" className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300">
                      Save as Draft
                    </button>
                    <button type="button" className="px-6 lg:px-8 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      <span>Create Mentor</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                </main>
    </div>
  )
}
