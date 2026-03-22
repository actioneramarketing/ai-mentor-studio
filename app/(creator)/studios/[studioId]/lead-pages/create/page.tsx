import Link from "next/link"

export default async function CreateLeadPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = await params

  return (
    <div className="bg-gray-50 font-sans min-h-0">
      <main className="flex-1 overflow-y-auto">

          <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-[1800px] mx-auto">
            <div id="page-header" className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Create Lead Capture Page</h1>
              <p className="text-base lg:text-lg text-gray-600">Build a landing page that captures leads and grants access to your AI mentors.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <div id="page-basics" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Page Basics</h2>
                    <p className="text-sm text-gray-600">Define your lead page name and URL</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Page Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="e.g., Emergency Kit Lead Magnet"
                        defaultValue="72-Hour Emergency Kit Guide"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                      />
                      <p className="text-xs text-gray-500 mt-2">Internal name for your reference</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">URL Slug <span className="text-red-500">*</span></label>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 bg-gray-50 px-3 py-3 rounded-lg border border-gray-200">yourdomain.com/</span>
                        <input
                          type="text"
                          placeholder="emergency-kit-guide"
                          defaultValue="emergency-kit-guide"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">This will be your page URL</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Headline <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Get Your Free Emergency Preparedness Guide"
                        defaultValue="Build Your 72-Hour Emergency Kit in 10 Minutes"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Subheadline</label>
                      <textarea
                        rows={3}
                        placeholder="A supporting message that explains the value..."
                        defaultValue="Get personalized guidance from our AI coach to build a complete emergency kit tailored to your household."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div id="mentor-assignment" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M15.32 3.55c.42-.32 1.05-.24 1.39.19l.87 1.15-.01.01 5.25 7.1c.35.47.14 1.15-.4 1.15H15.5c-.28 0-.54-.12-.72-.33l-3.26-4.22-1.21 1.58.01.01-2.32 3.03c-.22.29-.6.48-1 .48H2.21c-.55 0-.84-.68-.5-1.14l4.26-5.67.01-.01 2.37-3.16c.2-.27.55-.43.9-.43h2.95c.31 0 .62.1.88.29l1.54 1.22z" />
                      </svg>
                      <span>Which mentor does this unlock?</span>
                    </h2>
                    <p className="text-sm text-gray-600">Choose which AI mentors users get access to after opting in</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <input type="radio" name="mentor-access" id="single-mentor" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="single-mentor" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Single Mentor</span>
                        <span className="block text-xs text-gray-600">Grant access to one specific mentor</span>
                      </label>
                    </div>

                    <div id="single-mentor-select" className="ml-7 space-y-3">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                        <option value="">Select a mentor...</option>
                        <option>72-Hour Emergency Planner</option>
                        <option>Family Safety Coach</option>
                        <option>Budget Preparedness Guide</option>
                        <option>Scenario Simulator</option>
                      </select>

                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">72-Hour Emergency Planner</h4>
                            <p className="text-xs text-gray-700">Helps users build a personalized 72-hour emergency kit</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                      <input type="radio" name="mentor-access" id="multiple-mentors" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="multiple-mentors" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Multiple Mentors</span>
                        <span className="block text-xs text-gray-600">Grant access to multiple mentors at once</span>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                      <input type="radio" name="mentor-access" id="full-studio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="full-studio" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Full Studio Access</span>
                        <span className="block text-xs text-gray-600">Grant access to all mentors in this workspace</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div id="form-builder" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Form Builder</h2>
                    <p className="text-sm text-gray-600">Configure which fields to collect from users</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Email Address</h4>
                            <p className="text-xs text-gray-600">Always required</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Required</span>
                      </div>
                      <input
                        type="text"
                        defaultValue="Enter your email"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-2">Placeholder text</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Name</h4>
                            <p className="text-xs text-gray-600">Optional field</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                        </label>
                      </div>
                      <input
                        type="text"
                        defaultValue="Your name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-2">Placeholder text</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Phone Number</h4>
                            <p className="text-xs text-gray-600">Optional field</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600" />
                        </label>
                      </div>
                    </div>

                    <button type="button" className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                      <span className="text-sm">Add Custom Field</span>
                    </button>
                  </div>
                </div>

                <div id="automation-integration" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">What happens after submission?</h2>
                    </div>
                    <p className="text-sm text-gray-700">Connect your lead page to your automation tools</p>
                  </div>

                  <div className="space-y-5">
                    <div className="bg-white rounded-lg p-5 border border-orange-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Send to Webhook</h4>
                          <p className="text-xs text-gray-600">Forward lead data to GHL, Zapier, Make, or any webhook URL</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" id="webhook-toggle" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600" />
                        </label>
                      </div>

                      <div id="webhook-config" className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Webhook URL <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="https://hooks.zapier.com/hooks/catch/..."
                            defaultValue="https://api.gohighlevel.com/webhook/abc123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all duration-200 text-sm"
                          />
                          <p className="text-xs text-gray-600 mt-2">Paste your webhook URL from GHL, Zapier, Make, or any platform</p>
                        </div>

                        <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span className="text-xs font-medium text-gray-700">Webhook connected and ready</span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <svg className="w-6 h-6 text-orange-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.38-1.21-6.49-3.2-8.96l.3-.37c0-2.15.74-4.8.74-4.8s-2.3.64-2.3 2.97c0 2.15 1.35 3.89 3.41 3.89 2.06 0 3.62-1.74 3.62-3.89C16.8 1.31 13.5.67 13.5.67z" />
                            </svg>
                            <p className="text-xs font-semibold text-gray-900">GoHighLevel</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <svg className="w-6 h-6 text-orange-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                            </svg>
                            <p className="text-xs font-semibold text-gray-900">Zapier</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <svg className="w-6 h-6 text-orange-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M21.98 11.37l-1.68-2.89-.01-.02c-.07-.12-.15-.23-.24-.34-.05-.06-.1-.11-.16-.16-.18-.18-.39-.31-.62-.41-.05-.02-.1-.04-.15-.05-.21-.08-.44-.12-.67-.11-.08 0-.16.01-.24.02-.22.03-.43.1-.62.2l-2.31 1.34-1.49-2.52c-.16-.27-.38-.5-.64-.66-.24-.15-.52-.25-.81-.28-.07 0-.14-.01-.21-.01-.25 0-.5.04-.73.13-.23.09-.45.22-.63.39l-2.4 2.39-.71-.71c-.39-.39-1.02-.39-1.41 0l-.71.71 8.49 8.49c.39.39 1.02.39 1.41 0l.71-.71-.71-.71c-.39-.39-.39-1.02 0-1.41l.71-.71 2.12 2.12c.39.39 1.02.39 1.41 0l2.12-2.12-.71-.71c-.39-.39-.39-1.02 0-1.41l.71-.71 1.41 1.41-.71.71c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.71-.71 2.83 2.83c.39.39 1.02.39 1.41 0l2.83-2.83-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71 1.64-1.64c.22-.22.51-.34.8-.34.3 0 .58.12.79.34l.85.85-1.41 1.41-2.37-2.37z" />
                            </svg>
                            <p className="text-xs font-semibold text-gray-900">Make</p>
                          </div>
                        </div>

                        <button type="button" className="w-full px-4 py-2.5 text-orange-700 font-semibold hover:bg-orange-100 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                          </svg>
                          <span>Test Webhook Connection</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 border border-orange-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Save to Database</h4>
                          <p className="text-xs text-gray-600">Store leads in your workspace database</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="post-submit-behavior" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Post-Submit Behavior</h2>
                    <p className="text-sm text-gray-600">Define what users see after submitting the form</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                      <input type="radio" name="post-submit" id="redirect-mentor" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="redirect-mentor" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Redirect to Mentor</span>
                        <span className="block text-xs text-gray-600">Take user directly to the mentor chat interface</span>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                      <input type="radio" name="post-submit" id="show-success" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="show-success" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Show Success Page</span>
                        <span className="block text-xs text-gray-600">Display a custom success message before mentor access</span>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                      <input type="radio" name="post-submit" id="open-chat" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="open-chat" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Open Chat Immediately</span>
                        <span className="block text-xs text-gray-600">Start the mentor conversation right away</span>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                      <input type="radio" name="post-submit" id="custom-redirect" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="custom-redirect" className="flex-1 cursor-pointer">
                        <span className="block font-semibold text-gray-900 text-sm">Custom Redirect URL</span>
                        <span className="block text-xs text-gray-600">Redirect to a specific external URL</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div id="cta-customization" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Button Customization</h2>
                    <p className="text-sm text-gray-600">Customize the submit button appearance</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Button Text <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        defaultValue="Get Instant Access"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Button Color</label>
                      <div className="grid grid-cols-5 gap-3">
                        <button type="button" className="w-full h-12 bg-blue-600 rounded-lg border-2 border-blue-700 shadow-md hover:scale-105 transition-transform duration-200" />
                        <button type="button" className="w-full h-12 bg-green-600 rounded-lg border-2 border-transparent hover:border-green-700 hover:scale-105 transition-all duration-200" />
                        <button type="button" className="w-full h-12 bg-orange-600 rounded-lg border-2 border-transparent hover:border-orange-700 hover:scale-105 transition-all duration-200" />
                        <button type="button" className="w-full h-12 bg-purple-600 rounded-lg border-2 border-transparent hover:border-purple-700 hover:scale-105 transition-all duration-200" />
                        <button type="button" className="w-full h-12 bg-gray-900 rounded-lg border-2 border-transparent hover:border-gray-700 hover:scale-105 transition-all duration-200" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Button Style</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-500 cursor-pointer">
                          <button type="button" className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md">
                            Solid
                          </button>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300">
                          <button type="button" className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg">
                            Outline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-1">
                <div className="sticky top-6">
                  <div id="preview-panel" className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                          <span>Live Preview</span>
                        </h3>
                        <div className="flex items-center space-x-2">
                          <button type="button" className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2h8v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                            </svg>
                          </button>
                          <button type="button" className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 max-h-[calc(100vh-200px)] overflow-y-auto">
                      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                        <div
                          className="relative h-64"
                          style={{ backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                        >
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-6">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                              </div>
                              <h1 className="text-2xl font-bold text-white mb-2">Build Your 72-Hour Emergency Kit in 10 Minutes</h1>
                              <p className="text-purple-100 text-sm">Get personalized guidance from our AI coach to build a complete emergency kit tailored to your household.</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="max-w-md mx-auto">
                            <div className="mb-6 text-center">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Instant Access</h3>
                              <p className="text-sm text-gray-600">Start your personalized emergency planning session now</p>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Your name"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-sm"
                                />
                              </div>

                              <div>
                                <input
                                  type="email"
                                  placeholder="Enter your email"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-sm"
                                />
                              </div>

                              <button type="button" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2">
                                <span>Get Instant Access</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                              </button>

                              <p className="text-xs text-center text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                              <div className="flex items-center justify-center space-x-6 text-center">
                                <div>
                                  <div className="text-2xl font-bold text-blue-600 mb-1">10min</div>
                                  <div className="text-xs text-gray-600">Average Time</div>
                                </div>
                                <div className="w-px h-12 bg-gray-200" />
                                <div>
                                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                                  <div className="text-xs text-gray-600">Free Access</div>
                                </div>
                                <div className="w-px h-12 bg-gray-200" />
                                <div>
                                  <div className="text-2xl font-bold text-blue-600 mb-1">AI</div>
                                  <div className="text-xs text-gray-600">Powered</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        <span>This is how your lead page will appear to visitors</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">Page URL</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        defaultValue="yourdomain.com/emergency-kit-guide"
                        readOnly
                        className="flex-1 px-4 py-2.5 bg-white border border-green-200 rounded-lg text-sm text-gray-700 focus:outline-none"
                      />
                      <button type="button" className="px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}
