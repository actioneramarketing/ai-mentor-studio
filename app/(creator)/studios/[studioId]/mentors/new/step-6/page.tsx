"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

export default function NewMentorStep6Page() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto">

            <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
              <div id="page-header" className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Access &amp; Visibility</h1>
                <p className="mt-1 text-base lg:text-lg text-gray-600">
                  Control who can access this mentor and how it is shared
                </p>
              </div>

              <MentorWizardProgress currentStep={6} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="access-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Access &amp; Visibility</h2>
                      <p className="text-sm text-gray-600">Control who can access this mentor and how it is shared</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Access Type <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="border-2 border-blue-500 bg-blue-50 rounded-xl p-4 cursor-pointer hover:border-blue-600 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Free (Public Access)</h3>
                                <p className="text-xs text-gray-600">Anyone can access this mentor</p>
                              </div>
                            </div>
                          </div>

                          <div className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Members Only</h3>
                                <p className="text-xs text-gray-600">Requires workspace membership</p>
                              </div>
                            </div>
                          </div>

                          <div className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Paid Access</h3>
                                <p className="text-xs text-gray-600">Users must purchase to access</p>
                              </div>
                            </div>
                          </div>

                          <div className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Private (Invite Only)</h3>
                                <p className="text-xs text-gray-600">Only invited users can access</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Plan Selection</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>Select a plan</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2">Required when Paid Access is selected</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Visibility</label>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3 border-2 border-blue-500 bg-blue-50 rounded-xl p-4 cursor-pointer hover:border-blue-600 transition-all duration-200">
                            <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">Public (Discoverable)</h3>
                              <p className="text-xs text-gray-600">Mentor appears in directories and search</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">Unlisted (Link Only)</h3>
                              <p className="text-xs text-gray-600">Only accessible via direct link</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">Private</h3>
                              <p className="text-xs text-gray-600">Not listed or shareable</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Require name and email before access</h4>
                          <p className="text-xs text-gray-600">Collect leads before users access this mentor</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                        </label>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Optional CTA</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">CTA Title</label>
                            <input
                              type="text"
                              placeholder="e.g., Get Your Emergency Plan"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">CTA Button Text</label>
                            <input
                              type="text"
                              placeholder="e.g., Download Now"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">CTA Link</label>
                            <input
                              type="text"
                              placeholder="https://example.com/download"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="help-panel" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 lg:p-8">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Access &amp; visibility tips</h3>
                        <p className="text-sm text-gray-600">Control reach and monetization</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Start with Public for maximum reach</h4>
                          <p className="text-sm text-gray-700">You can always restrict access later</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Lead capture builds your audience</h4>
                          <p className="text-sm text-gray-700">Collect emails to follow up and re-engage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <div id="preview-panel" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-gray-900">Preview</h3>
                        <span className="text-xs text-gray-500">Summary</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Mentor Name</p>
                          <p className="text-sm font-semibold text-gray-900">72-Hour Emergency Kit Builder</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Free (Public Access)</span>
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Public (Discoverable)</span>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">Lead Capture</p>
                          <p className="text-sm font-medium text-gray-900">Off</p>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">CTA Preview</p>
                          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Get Your Emergency Plan</p>
                            <button type="button" className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg">
                              Download Now
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview shows how your access settings will appear to users.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="wizard-navigation" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 mt-6 lg:mt-8 sticky bottom-0">
                <div className="flex items-center justify-between">
                  <button type="button" className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    Cancel
                  </button>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-5`)}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                      <span className="hidden sm:inline">Back to Call To Action</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      type="button"
                      className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-7`)}
                    >
                      <span className="hidden sm:inline">Continue to Preview</span>
                      <span className="sm:hidden">Continue</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                </main>
    </div>
  )
}
