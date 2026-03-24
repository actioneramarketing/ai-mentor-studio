"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

export default function NewMentorStep5Page() {
  const params = useParams()
  const studioId = String(params.studioId ?? "")
  const router = useRouter()

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto">

            <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
              <div id="page-header" className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create a New AI Mentor</h1>
                <p className="mt-1 text-base lg:text-lg text-gray-600">
                  Build an AI mentor that guides users through a structured experience.
                </p>
              </div>

              <MentorWizardProgress currentStep={5} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="cta-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Post-Session Call To Action</h2>
                      <p className="text-sm text-gray-600">Define what users should do after completing the mentor experience.</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">CTA Type <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div id="cta-none" className="cta-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">No Call To Action</h3>
                                <p className="text-xs text-gray-600">End session without additional action</p>
                              </div>
                            </div>
                          </div>

                          <div id="cta-button" className="cta-option border-2 border-blue-500 bg-blue-50 rounded-xl p-4 cursor-pointer hover:border-blue-600 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Show Button</h3>
                                <p className="text-xs text-gray-600">Display a button with custom link</p>
                              </div>
                            </div>
                          </div>

                          <div id="cta-email" className="cta-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Capture Email</h3>
                                <p className="text-xs text-gray-600">Collect user email before continuing</p>
                              </div>
                            </div>
                          </div>

                          <div id="cta-redirect" className="cta-option border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 hidden" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">Redirect to Link</h3>
                                <p className="text-xs text-gray-600">Automatically redirect to a URL</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="cta-config-button" className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Button Text <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            defaultValue="Download Your Emergency Kit Plan"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Button Link <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="https://example.com/download-plan"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                          />
                          <p className="text-xs text-gray-500 mt-2">Enter the URL users will be directed to when they click the button</p>
                        </div>
                      </div>

                      <div id="cta-config-email" className="space-y-4 hidden">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Headline <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="Get Your Personalized Plan"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                          <textarea
                            rows={3}
                            placeholder="Enter your email to receive your personalized emergency preparedness plan."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Button Text <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="Get My Plan"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                          />
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                            <p className="text-xs text-gray-700 leading-relaxed">Collect user emails before continuing. Integrations can be configured later in workspace settings.</p>
                          </div>
                        </div>
                      </div>

                      <div id="cta-config-redirect" className="space-y-4 hidden">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Redirect URL <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="https://example.com/next-steps"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Redirect Timing <span className="text-red-500">*</span></label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                            <option>Immediately</option>
                            <option>After confirmation</option>
                          </select>
                          <p className="text-xs text-gray-500 mt-2">Choose when to redirect the user to the URL</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Display Settings</h3>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Show CTA after</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                            <option>Final step only</option>
                            <option>After every step</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Require user interaction</h4>
                            <p className="text-xs text-gray-600">Users must complete the CTA before finishing the session</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                          </label>
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
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Tips for effective CTAs</h3>
                        <p className="text-sm text-gray-600">Maximize conversion and user engagement</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Keep your CTA clear and action-oriented</h4>
                          <p className="text-sm text-gray-700">Use strong action verbs like &quot;Download&quot;, &quot;Get&quot;, or &quot;Start&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Offer something valuable</h4>
                          <p className="text-sm text-gray-700">Provide a plan, checklist, or clear next step that users want</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Avoid overwhelming users with options</h4>
                          <p className="text-sm text-gray-700">One clear CTA is more effective than multiple choices</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Align your CTA with the mentor&apos;s outcome</h4>
                          <p className="text-sm text-gray-700">The action should feel like a natural next step</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <div id="preview-panel" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-gray-900">Live Preview</h3>
                        <span className="text-xs text-gray-500">User view</span>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-8 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Session Complete!</h3>
                            <p className="text-green-50 text-sm">You&apos;ve completed your emergency preparedness plan</p>
                          </div>

                          <div id="preview-cta-content" className="p-6">
                            <div className="text-center space-y-4">
                              <div className="space-y-3">
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <div className="flex items-start space-x-3 text-left">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900">Household assessed</p>
                                      <p className="text-xs text-gray-600">2 adults, 2 children</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <div className="flex items-start space-x-3 text-left">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900">Supplies identified</p>
                                      <p className="text-xs text-gray-600">32 essential items</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <div className="flex items-start space-x-3 text-left">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900">Budget planned</p>
                                      <p className="text-xs text-gray-600">$250-300 estimated</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="pt-4 border-t border-gray-200">
                                <button type="button" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7L73.4 211.3c-12.5-7.3-28.4-2.3-35.7 10.2s-2.3 28.4 10.2 35.7l192 112L480 128V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V416c0 53 43 96 96 96H416c53 0 96-43 96-96V128c0-53-43-96-96-96H320z" /></svg>
                                  <span className="text-sm">Download Your Emergency Kit Plan</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div id="preview-cta-email" className="p-6 hidden">
                            <div className="text-center space-y-4">
                              <h4 className="font-bold text-gray-900 text-base">Get Your Personalized Plan</h4>
                              <p className="text-sm text-gray-600">Enter your email to receive your personalized emergency preparedness plan.</p>

                              <div className="space-y-3">
                                <input
                                  type="email"
                                  placeholder="your@email.com"
                                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                <button type="button" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm">
                                  Get My Plan
                                </button>
                              </div>
                            </div>
                          </div>

                          <div id="preview-cta-redirect" className="p-6 hidden">
                            <div className="text-center space-y-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                                <svg className="w-6 h-6 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                              </div>
                              <p className="text-sm text-gray-600">Redirecting you to the next step...</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview shows what users will see after completing all mentor steps.</p>
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
                    <button type="button" className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                      <span className="hidden sm:inline">Back to Mentor Steps</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      type="button"
                      className="px-6 lg:px-8 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-6`)}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      <span className="hidden sm:inline">Continue to Access &amp; Visibility</span>
                      <span className="sm:inline lg:hidden">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                </main>
    </div>
  )
}
