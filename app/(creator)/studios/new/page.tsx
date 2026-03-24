import { NewStudioFormActions } from "./new-studio-form-actions"

export default function NewStudioPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div id="page-header" className="mb-6 sm:mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Create a New Studio</h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Set up a new workspace to build and manage your AI mentors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <form className="lg:col-span-2 space-y-6 block">
                <div id="workspace-basics-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Studio Basics</h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="workspace-name" className="block text-sm font-semibold text-gray-900 mb-2">Studio Name</label>
                      <input type="text" id="workspace-name" name="name" placeholder="e.g., Prepared Life" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                    </div>

                    <div>
                      <label htmlFor="workspace-slug" className="block text-sm font-semibold text-gray-900 mb-2">Studio Slug</label>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">/w/</span>
                        <input type="text" id="workspace-slug" name="slug" placeholder="prepared-life" className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">This will be used in your workspace URL.</p>
                    </div>
                  </div>
                </div>

                <div id="description-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M3 5v14h18V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm14 2H5v-2h14v2zm0-4H5v-2h14v2zm0-4H5V7h14v2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Description <span className="text-gray-400 font-normal text-sm">(Optional)</span></h3>
                  </div>

                  <div>
                    <label htmlFor="workspace-description" className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                    <textarea id="workspace-description" name="description" rows={4} placeholder="Describe what this workspace is for..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 resize-none" />
                    <p className="text-xs text-gray-500 mt-2">Help users understand the purpose of this workspace.</p>
                  </div>
                </div>

                <div id="branding-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Branding <span className="text-gray-400 font-normal text-sm">(Optional)</span></h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Upload Logo</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 576 512" aria-hidden>
                            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.5-.1 3.8-.2c1.1 .1 2.2 .2 3.3 .2h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h16c22.1 0 40-17.9 40-40V285.9c0-1 0-1.9-.1-2.8v-69.6H543.8zM460.1 174.1L512 142.9 512 96h-64v96.6l52.1 18.5zM460.1 174.1L512 142.9 512 96h-64v96.6l52.1 18.5zM288 160c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H320v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H224c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V160zM96 64H192v96.6L139.9 175 96 174.1V64zM64 256V174.1l43.9 .9L192 160.6V64H96V174.1L64 256zM64 256V174.1l43.9 .9L192 160.6V64H96V174.1L64 256zm384 216c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8V288H264v176c0 4.4-3.6 8-8 8H184c-4.4 0-8-3.6-8-8V288H96v184c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V285.9c0-1 0-1.9 .1-2.8V256h383.9v213.1c0 1-.1 1.9-.1 2.8V472z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG (max. 2MB)</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Primary Color</label>
                        <div className="flex items-center space-x-3">
                          <input type="color" defaultValue="#0ea5e9" className="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer" />
                          <input type="text" defaultValue="#0ea5e9" className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Accent Color</label>
                        <div className="flex items-center space-x-3">
                          <input type="color" defaultValue="#8b5cf6" className="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer" />
                          <input type="text" defaultValue="#8b5cf6" className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <NewStudioFormActions />
              </form>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div id="preview-panel" className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center space-x-2 mb-6">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      <h3 className="text-lg font-bold text-gray-900">Preview</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Studio</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Prepared Life</h4>
                            <p className="text-xs text-gray-500">/w/prepared-life</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Example Mentor Card</p>
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-200">
                          <div className="flex items-start space-x-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 14H4v-2h11v2zm0-4H4v-2h11v2zm0-4H4V6h11v2z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm mb-1">72-Hour Kit Planner</h4>
                              <p className="text-xs text-gray-600 line-clamp-2">Build a personalized emergency kit for your household</p>
                            </div>
                          </div>
                          <button className="w-full px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Open Mentor
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Color Scheme</p>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <div className="w-full h-12 rounded-lg" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)" }} />
                            <p className="text-xs text-gray-600 mt-2 text-center">Primary</p>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-12 bg-purple-500 rounded-lg" />
                            <p className="text-xs text-gray-600 mt-2 text-center">Accent</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                          </svg>
                          <div>
                            <p className="text-xs font-semibold text-gray-900 mb-1">Pro Tip</p>
                            <p className="text-xs text-gray-600 leading-relaxed">Your workspace preview updates in real-time as you fill out the form.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
