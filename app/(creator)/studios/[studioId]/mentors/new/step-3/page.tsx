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

            <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
              <div id="page-header" className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create a New AI Mentor</h1>
                <p className="mt-1 text-base lg:text-lg text-gray-600">
                  Build an AI mentor that guides users through a structured experience.
                </p>
              </div>

              <MentorWizardProgress currentStep={3} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="conversation-starters-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Conversation Starters</h2>
                        <p className="text-sm text-gray-600">Create suggested prompts to help users begin interacting with your mentor.</p>
                      </div>
                      <button type="button" id="add-starter-btn" className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                        <span className="hidden sm:inline">Add Starter</span>
                      </button>
                    </div>

                    <div id="starters-list" className="space-y-4">
                      <div className="starter-card bg-gray-50 border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24v8H24V56zm0 64H104V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V120zm64 0h96v96H88v-96zm320 0V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V120H88v96h96v-96h96V120zm96 0h32c13.3 0 24 10.7 24 24v8H408V120zm0 64h32V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z" /></svg>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Edit">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l6-35.4c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1V399.4zM439 7c7.3-7.3 19-7.3 26.3 0l47 47c7.3 7.3 7.3 19 0 26.3l-47 47-11.3-11.3 36.8-36.8c2.1-2.1 2.1-5.5 0-7.6s-5.5-2.1-7.6 0l-36.8 36.8L344 159 391 112l47 47c7.3 7.3 19 7.3 26.3 0s7.3-19 0-26.3l-47-47L439 7z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Duplicate">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="ml-14">
                          <h3 className="font-bold text-gray-900 mb-2">Help me build a 72-hour emergency kit</h3>
                          <p className="text-sm text-gray-600 mb-3">Get started with personalized recommendations</p>
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1 font-semibold">Prompt:</p>
                            <p className="text-sm text-gray-700">Help me create a personalized 72-hour emergency kit based on my household and location.</p>
                          </div>
                        </div>
                      </div>

                      <div className="starter-card bg-gray-50 border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.6-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Edit">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Duplicate">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="ml-14">
                          <h3 className="font-bold text-gray-900 mb-2">What are must-have items for families?</h3>
                          <p className="text-sm text-gray-600 mb-3">Essential items for households with children</p>
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1 font-semibold">Prompt:</p>
                            <p className="text-sm text-gray-700">What are the essential emergency preparedness items for a family with children?</p>
                          </div>
                        </div>
                      </div>

                      <div className="starter-card bg-gray-50 border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M0 64C0 46.3 14.3 32 32 32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64zM0 192c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM64 384c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Edit">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Duplicate">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="ml-14">
                          <h3 className="font-bold text-gray-900 mb-2">Can you help me do this on a budget?</h3>
                          <p className="text-sm text-gray-600 mb-3">Budget-friendly preparedness options</p>
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1 font-semibold">Prompt:</p>
                            <p className="text-sm text-gray-700">I need to build an emergency kit but I&apos;m on a tight budget. Can you help me prioritize and find affordable options?</p>
                          </div>
                        </div>
                      </div>

                      <div className="starter-card bg-gray-50 border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Edit">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200" title="Duplicate">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="ml-14">
                          <h3 className="font-bold text-gray-900 mb-2">What items do I need for my region?</h3>
                          <p className="text-sm text-gray-600 mb-3">Location-specific preparedness guidance</p>
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1 font-semibold">Prompt:</p>
                            <p className="text-sm text-gray-700">What specific emergency preparedness items should I have based on my geographic location and local risks?</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                        <div>
                          <p className="text-sm text-gray-700 leading-relaxed mb-2">Users will see these starters when they first open your mentor. Create 3-5 clear options that represent common use cases.</p>
                          <p className="text-xs text-gray-600">Drag and drop to reorder starters.</p>
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
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Tips for great conversation starters</h3>
                        <p className="text-sm text-gray-600">Follow these best practices to engage users</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Use action-oriented language</h4>
                          <p className="text-sm text-gray-700">Start with verbs like &quot;Help me&quot;, &quot;Show me&quot;, &quot;Create&quot;, or &quot;Guide me&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Address common scenarios</h4>
                          <p className="text-sm text-gray-700">Think about the most frequent questions or needs your users have</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Keep titles concise</h4>
                          <p className="text-sm text-gray-700">Short, scannable titles work best (8-12 words maximum)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Choose relevant icons</h4>
                          <p className="text-sm text-gray-700">Icons help users quickly identify the type of guidance they need</p>
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
                                <h3 className="font-bold text-gray-900 text-base mb-1">Welcome to Your Emergency Planning Session</h3>
                                <p className="text-xs text-gray-600">Choose a starter question below or type your own</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <button type="button" className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors duration-200 group">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24v8H24V56zm0 64H104V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V120zm64 0h96v96H88v-96z" /></svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">Help me build a 72-hour kit</p>
                                  </div>
                                </div>
                              </button>
                              <button type="button" className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors duration-200 group">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7z" /></svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">What are must-have items for families?</p>
                                  </div>
                                </div>
                              </button>
                              <button type="button" className="w-full text-left p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors duration-200 group">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M0 64C0 46.3 14.3 32 32 32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64z" /></svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">Can you help me do this on a budget?</p>
                                  </div>
                                </div>
                              </button>
                              <button type="button" className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition-colors duration-200 group">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">What items do I need for my region?</p>
                                  </div>
                                </div>
                              </button>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <div className="flex items-center space-x-2">
                                <input type="text" placeholder="Or type your own question..." className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <button type="button" className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.8 12.5-11.4 22.4-23.9 25.4c-4.7 1-9.4 1.4-14.1 1.4c-4.4 0-8.8-.4-13.1-1.2l-3.4-.7-56.2 90.3c-8.4 13.5-24.6 21.5-41.7 21.5H192c-8.5 0-16.8-2.7-24.2-7.6L96 480 16 352 128 224l96 64 288-320L498.1 5.6z" /></svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview shows how users will see your conversation starters when they first open the mentor.</p>
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
                      <span className="hidden sm:inline">Back to Instructions</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      type="button"
                      className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                      onClick={() => router.push(`/studios/${studioId}/mentors/new/step-4`)}
                    >
                      <span className="hidden sm:inline">Continue to Mentor Steps</span>
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
