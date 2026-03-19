export default function NewMentorPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <header id="header" className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">AI Coach Library</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Admin Dashboard</p>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <button id="user-menu-button" className="flex items-center space-x-2 sm:space-x-3 hover:bg-gray-50 rounded-xl px-2 sm:px-3 py-2 transition-colors duration-200">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Admin" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">admin@example.com</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                <div id="user-menu" className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span className="text-sm text-gray-900">Manage Account</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                    <span className="text-sm text-gray-900">Billing</span>
                  </a>
                  <div className="border-t border-gray-200 my-2" />
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                    </svg>
                    <span className="text-sm font-medium">Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        <aside id="sidebar" className="w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 lg:min-h-[calc(100vh-73px)] lg:sticky lg:top-[73px]">
          <nav className="p-4">
            <div className="space-y-1">
              <a href="#" id="nav-workspaces" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                </svg>
                <span className="text-sm sm:text-base">Workspaces</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M15.32 3.55c.42-.32 1.05-.24 1.39.19l.87 1.15-.01.01 5.25 7.1c.35.47.14 1.15-.4 1.15H15.5c-.28 0-.54-.12-.72-.33l-3.26-4.22-1.21 1.58.01.01-2.32 3.03c-.22.29-.6.48-1 .48H2.21c-.55 0-.84-.68-.5-1.14l4.26-5.67.01-.01 2.37-3.16c.2-.27.55-.43.9-.43h2.95c.31 0 .62.1.88.29l1.54 1.22z" />
                </svg>
                <span className="text-sm sm:text-base">Coach Designer</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span className="text-sm sm:text-base">Create a Coach</span>
              </a>

              <div className="border-t border-gray-200 my-4" />

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
                <span className="text-sm sm:text-base">Site Settings</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
                <span className="text-sm sm:text-base">Instructions</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.93 8.43 14.07 8 16 8c.7 0 1.37.1 2 .27V12c0 2.21-1.79 4-4 4s-4-1.79-4-4H4c0 4.41 3.59 8 8 8z" />
                </svg>
                <span className="text-sm sm:text-base">Support</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hidden lg:block">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Create multiple workspaces to organize coaches by brand, department, or use case.</p>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div id="page-header" className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </button>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create a New Workspace</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">Set up a new workspace to build and manage your AI mentors.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div id="workspace-basics-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Workspace Basics</h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="workspace-name" className="block text-sm font-semibold text-gray-900 mb-2">Workspace Name</label>
                      <input type="text" id="workspace-name" placeholder="e.g., Prepared Life" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                    </div>

                    <div>
                      <label htmlFor="workspace-slug" className="block text-sm font-semibold text-gray-900 mb-2">Workspace Slug</label>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">/w/</span>
                        <input type="text" id="workspace-slug" placeholder="prepared-life" className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
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
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                    <textarea rows={4} placeholder="Describe what this workspace is for..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 resize-none" />
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
                          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
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

                <div id="action-buttons" className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <button className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 order-2 sm:order-1">
                    Cancel
                  </button>
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 order-1 sm:order-2 flex-1 sm:flex-initial">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Create Workspace</span>
                  </button>
                </div>
              </div>

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
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Workspace</p>
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
    </div>
  );
}
