"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "../mentor-wizard-progress"

export default function NewMentorStep2Page() {
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

              <MentorWizardProgress currentStep={2} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="instructions-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Mentor Instructions</h2>
                    <p className="text-sm text-gray-600 mb-6">Define how your AI mentor behaves and guides users.</p>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Mentor Role</label>
                        <input
                          type="text"
                          defaultValue="Emergency Preparedness Expert"
                          placeholder="Emergency Preparedness Expert"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                        <p className="text-xs text-gray-500 mt-2">Describe the role or expertise the AI mentor represents</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Mentor Objective</label>
                        <textarea
                          rows={5}
                          placeholder="Describe the outcome this mentor helps users achieve..."
                          defaultValue="Help users build a comprehensive 72-hour emergency preparedness kit tailored to their household, location, and specific needs."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">What should users accomplish by the end of this session?</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Tone &amp; Teaching Style</label>
                        <div className="flex flex-wrap gap-2">
                          <button type="button" className="tone-chip px-4 py-2 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-full font-medium text-sm hover:bg-blue-100 transition-colors duration-200">
                            Friendly
                          </button>
                          <button type="button" className="tone-chip px-4 py-2 border-2 border-gray-200 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors duration-200">
                            Professional
                          </button>
                          <button type="button" className="tone-chip px-4 py-2 border-2 border-gray-200 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors duration-200">
                            Motivational
                          </button>
                          <button type="button" className="tone-chip px-4 py-2 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-full font-medium text-sm hover:bg-blue-100 transition-colors duration-200">
                            Teacher
                          </button>
                          <button type="button" className="tone-chip px-4 py-2 border-2 border-gray-200 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors duration-200">
                            Strategic Advisor
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Select the tone and teaching style your mentor should use (multiple selections allowed)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Response Style</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button type="button" className="response-style-card p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.5-8-39.9-1.8l-48 24C240.4 47.9 233 64 233 82V192 64 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V192 82c0 18-7.4 34.1-20 45.9l-48 24c-11.5 6.2-22 15.9-28.6 27.9s-8.6 25.8-5.2 39.5z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Concise</h3>
                            </div>
                            <p className="text-sm text-gray-600">Short, direct responses</p>
                          </button>
                          <button type="button" className="response-style-card p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Conversational</h3>
                            </div>
                            <p className="text-sm text-gray-600">Natural, flowing dialogue</p>
                          </button>
                          <button type="button" className="response-style-card p-4 border-2 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-left">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24v8H24V56zm0 64H104V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V120zm64 0h96v96H88v-96zm320 0V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V120H88v96h96v-96h96V120zm96 0h32c13.3 0 24 10.7 24 24v8H408V120zm0 64h32V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Step-by-Step Guidance</h3>
                            </div>
                            <p className="text-sm text-gray-600">Structured, sequential guidance</p>
                          </button>
                          <button type="button" className="response-style-card p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5.8-11.4C237.4 55.1 208 42.4 176 42.4c-32 0-61.4 12.7-88.2 24.4c-11.4 4.8-24.2 2-32.4-6.7S48 34.6 48 22.1V22.1C48 6.9 59.4-3.2 74.4 1.4C104.6 12.7 138.2 26.4 176 26.4c32 0 61.4-12.7 88.2-24.4c11.4-4.8 24.2-2 32.4 6.7s12.8 20.5 5.6 31.1c-10.2 15.5-24.2 28.7-41.2 38.7c-17 10-37.4 16.9-60.6 19.9V456c0 11.5 11.7 19.3 22.4 15.5z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Detailed Explanation</h3>
                            </div>
                            <p className="text-sm text-gray-600">Comprehensive explanations</p>
                          </button>
                          <button type="button" className="response-style-card p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left sm:col-span-2">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-2.8-24.9-6.9-49.9-12.1-74.9c-5.2-25-11.5-49.9-18.8-74.8c7.3-24.9 13.6-49.8 18.8-74.8c5.2-25 9.3-50 12.1-74.9h117.4c11.4 25.9 20.3 52.8 25.9 80.7c-5.6 27.9-14.5 54.8-25.9 80.7zM320 32c-24.9 0-49.7 4.1-73.2 12.1C237.7 78.8 205.9 100.1 174 126.2c-31.9 26.1-53.2 57.9-66.9 72.8C93.5 213.9 88 234.9 88 256s5.5 42.1 19.1 56.9c13.7 14.9 35 46.8 66.9 72.8c31.9 26.1 63.7 47.4 72.8 82.1C270.3 475.9 295.1 480 320 480c24.9 0 49.7-4.1 73.2-12.1c9.2-34.7 40.9-56 72.8-82.1c31.9-26.1 53.2-57.9 66.9-72.8C426.5 298.1 432 277.1 432 256s-5.5-42.1-19.1-56.9c-13.7-14.9-35-46.8-66.9-72.8c-31.9-26.1-63.7-47.4-72.8-82.1C390.3 36.1 365.5 32 320 32zM135.2 117.2C145 92.1 169.6 72 198.2 72h117.4c28.6 0 53.2 20.1 63 45.2c3.2 7.9 6 16 8.4 24.1H126.8c2.4-8.1 5.1-16.2 8.4-24.1zM8.1 256c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64H8.1z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Action-Oriented</h3>
                            </div>
                            <p className="text-sm text-gray-600">Focus on practical, actionable steps</p>
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Select one or more response styles (multiple selections allowed)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Guidance Rules</label>
                        <textarea
                          rows={5}
                          placeholder={"Always ask clarifying questions before giving recommendations.\nFocus on practical, actionable advice.\nAvoid overwhelming the user with too many options."}
                          defaultValue="Always provide safe and responsible guidance.
Encourage preparedness planning without causing fear or panic.
Focus on practical, actionable steps that users can implement immediately.
Ask clarifying questions before giving recommendations."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">Define behavioral guidelines the mentor should follow</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Advanced Instructions <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <textarea
                          rows={6}
                          placeholder="Ask about household size and location before recommending emergency supplies."
                          defaultValue="Ask clarifying questions about household size, location, and specific needs before providing recommendations.

Consider factors like:
- Number of adults and children
- Geographic location and climate
- Available storage space
- Budget constraints
- Special dietary or medical needs

Provide personalized recommendations based on these factors."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">Optional additional instructions that guide how the AI should respond</p>
                      </div>
                    </div>
                  </div>

                  <div id="help-panel" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 lg:p-8">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Tips for writing great mentor instructions</h3>
                        <p className="text-sm text-gray-600">Follow these best practices to create effective guidance</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Define a clear outcome</h4>
                          <p className="text-sm text-gray-700">Be specific about what users will achieve by the end</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Encourage helpful guidance</h4>
                          <p className="text-sm text-gray-700">Set a supportive, encouraging tone that builds confidence</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Ask clarifying questions</h4>
                          <p className="text-sm text-gray-700">Gather context before providing recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Avoid overly long responses</h4>
                          <p className="text-sm text-gray-700">Keep guidance focused and digestible for users</p>
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
                          <div className="p-5">
                            <div className="flex items-start space-x-3 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M0 80v352c0 26.5 21.5 48 48 48h48V32H48C21.5 32 0 53.5 0 80zm128 400h320V32H128v448zm64-248c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48z" /></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 text-sm mb-1">Emergency Preparedness Expert</h3>
                                <span className="text-xs text-gray-500">Friendly • Teacher • Step-by-Step</span>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                              <p className="text-sm text-gray-700 leading-relaxed mb-3">Hi, I&apos;m your Emergency Preparedness Expert. I&apos;ll guide you step-by-step to build a personalized 72-hour emergency kit based on your household, location, and needs.</p>
                              <p className="text-sm text-gray-700 leading-relaxed">I&apos;ll ask clarifying questions to create a comprehensive plan that&apos;s practical and tailored just for you.</p>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-start space-x-2 text-xs text-gray-600">
                                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                <span>Asks clarifying questions</span>
                              </div>
                              <div className="flex items-start space-x-2 text-xs text-gray-600">
                                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                <span>Provides safe guidance</span>
                              </div>
                              <div className="flex items-start space-x-2 text-xs text-gray-600">
                                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                <span>Focuses on actionable steps</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview shows how your mentor will introduce itself to users based on your instructions.</p>
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
                      <span className="hidden sm:inline">Back to Basics</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      type="button"
                      className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-3`)}
                    >
                      <span className="hidden sm:inline">Continue to Conversation Starters</span>
                      <span className="sm:inline lg:hidden">Continue</span>
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
