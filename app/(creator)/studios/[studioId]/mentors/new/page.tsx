"use client"

import { useParams, useRouter } from "next/navigation"
import { MentorWizardProgress } from "./mentor-wizard-progress"

export default function NewMentorPage() {
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

              <MentorWizardProgress currentStep={1} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="basics-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Mentor Basics</h2>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="mentor-name" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Name</label>
                        <input
                          type="text"
                          id="mentor-name"
                          placeholder="e.g., Emergency Preparedness Coach"
                          defaultValue="Emergency Preparedness Coach"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                        <p className="text-xs text-gray-500 mt-2">This is what users will see when browsing coaches</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Mentor Icon</label>
                        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200 ring-4 ring-blue-500 ring-offset-2">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 7.9-36.3 29.1-36.3 52.1V440c0 22.1 17.9 40 40 40H192V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V480h113.7c22.1 0 40-17.9 40-40V134.9c0-23-14.3-44.2-36.3-52.1L269.4 2.9z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.5 2.1-16.3 2.1c-35.3 0-64-28.7-64-64V120c0-35.3 28.7-64 64-64c12.1 0 23.5 3.4 33.3 9.3C157.3 24.6 169.2 0 184 0zM328 0c32.8 0 59.2 26.3 59.2 58.8c0 20.3-10.1 38.2-25.5 49.1L384 242.8c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6c15.2 0 28.7 10.5 31.2 25.6l22.3 135.1c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6c15.2 0 28.7 10.5 31.2 25.6l22.3 135.1c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M151.6 42.4C145.5 35.8 137 32 128 32H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64c9 0 17.5-3.8 23.6-10.4z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M273.2 96.2c-20.2 4.4-36.6 20.6-42.6 41.2l-50.6 192c-4.5 17.1-22 29-39.6 29H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h92.4l50.6-192c4.5-17.1 22-29 39.6-29H528c17.7 0 32 14.3 32 32s-14.3 32-32 32H302.8l-24.3 92.2c-4.5 17.1-22 29-39.6 29H136.5l-24.3 92.2c-4.5 17.1-22 29-39.6 29H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h24.6l24.3-92.2c4.5-17.1 22-29 39.6-29h102.4l24.3-92.2c4.5-17.1 22-29 39.6-29H528c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mentor-description" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Description</label>
                        <textarea
                          id="mentor-description"
                          rows={4}
                          placeholder="Describe what this mentor helps users accomplish..."
                          defaultValue="Build a personalized 72-hour emergency kit based on your household, location, and needs. Get step-by-step guidance for preparedness planning."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">Keep it clear and outcome-focused (2-3 sentences)</p>
                      </div>

                      <div>
                        <label htmlFor="mentor-category" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Category</label>
                        <select id="mentor-category" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>Preparedness</option>
                          <option>Business</option>
                          <option>Health</option>
                          <option>Skills & Training</option>
                          <option>Planning</option>
                          <option>Security</option>
                          <option>Finance</option>
                          <option>Personal Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Mentor Type</label>
                        <p className="text-sm text-gray-600 mb-3">Select the type of mentor experience you want to create.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button type="button" className="type-selector p-4 border-2 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-left" data-type="Chat Coach">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Chat Coach</h3>
                            </div>
                            <p className="text-sm text-gray-600">Free-form conversational mentor that answers questions.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Planner">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M384 0L224 96v224L384 416l160-96V96L384 0zM0 96v320c0 35.3 28.7 64 64 64h96V32H64C28.7 32 0 60.7 0 96z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Planner</h3>
                            </div>
                            <p className="text-sm text-gray-600">Guides users through building a structured plan.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Scenario Simulator">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.4-64.1 0-82.6z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Scenario Simulator</h3>
                            </div>
                            <p className="text-sm text-gray-600">Runs simulated situations for training and preparation.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Checklist Builder">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Checklist Builder</h3>
                            </div>
                            <p className="text-sm text-gray-600">Guides users through completing a list of tasks.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="advanced-options" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Advanced Options</h3>
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" /></svg>
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="ai-model" className="block text-sm font-semibold text-gray-900 mb-2">AI Model</label>
                        <select id="ai-model" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>Use Studio Default</option>
                          <option>GPT-4o</option>
                          <option>GPT-4o Mini</option>
                          <option>UX Pilot Sonnet</option>
                          <option>UX Pilot Haiku</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2">Override the workspace AI model for this mentor if needed.</p>
                      </div>

                      <div>
                        <label htmlFor="max-session-time" className="block text-sm font-semibold text-gray-900 mb-2">Maximum Session Time</label>
                        <select id="max-session-time" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>No limit</option>
                          <option>15 minutes</option>
                          <option>30 minutes</option>
                          <option>45 minutes</option>
                          <option>60 minutes</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="max-messages" className="block text-sm font-semibold text-gray-900 mb-2">Maximum Messages Per Session</label>
                        <input
                          type="number"
                          id="max-messages"
                          placeholder="e.g., 50"
                          defaultValue="100"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Allow Session Resume</h4>
                          <p className="text-sm text-gray-600">Let users continue previous conversations</p>
                        </div>
                        <button type="button" className="w-14 h-8 bg-blue-600 rounded-full relative transition-colors duration-200">
                          <div className="w-6 h-6 bg-white rounded-full absolute right-1 top-1 shadow-sm" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="help-panel" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 lg:p-8">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M320 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V96zM96 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V96zM32 416H96V96H32c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32zM544 96H480V416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">What makes a great mentor?</h3>
                        <p className="text-sm text-gray-600">Follow these principles for the best user experience</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Define a clear outcome</h4>
                          <p className="text-sm text-gray-700">Users should know exactly what they&apos;ll achieve by the end</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Keep sessions focused</h4>
                          <p className="text-sm text-gray-700">Avoid trying to solve too many problems in one mentor</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Guide users step-by-step</h4>
                          <p className="text-sm text-gray-700">Break complex tasks into manageable, sequential steps</p>
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
                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                          <div className="p-5">
                            <div className="flex items-start space-x-4 mb-4">
                              <div id="preview-icon" className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 id="preview-name" className="font-bold text-gray-900 mb-1 text-sm">Emergency Preparedness Coach</h3>
                                <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">Free</span>
                              </div>
                            </div>
                            <p id="preview-description" className="text-sm text-gray-600 mb-4 leading-relaxed">Build a personalized 72-hour emergency kit based on your household, location, and needs. Get step-by-step guidance for preparedness planning.</p>
                            <button type="button" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm">
                              Open Coach
                            </button>
                            <p id="preview-type" className="text-xs text-gray-500 mt-3 text-center">Chat Coach</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview updates as you fill out the form. Changes are saved automatically.</p>
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
                    <button type="button" disabled className="px-4 lg:px-6 py-2.5 text-gray-500 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 hidden sm:block">
                      <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                      Back
                    </button>
                    <button
                      type="button"
                      className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-2`)}
                    >
                      <span>Continue to Instructions</span>
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
