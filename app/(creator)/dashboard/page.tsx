export default function DashboardPage() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Studio Selection Modal - hidden by default */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" aria-hidden>
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Select AI Studio</h2>
              <p className="text-sm text-gray-600 mt-1">Choose where you want to create your new mentor</p>
            </div>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <div className="px-6 sm:px-8 py-4">
            <div className="relative">
              <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="Search studios..." className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" readOnly />
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <span className="font-medium">Recently Used</span>
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-6 overflow-y-auto max-h-[calc(90vh-280px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">Career Coach AI</h4>
                      <p className="text-xs text-gray-500">Professional Development</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                </div>
                <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">8</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">542</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">Wellness Hub</h4>
                      <p className="text-xs text-gray-500">Health & Fitness</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                </div>
                <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">6</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">1.2K</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                </svg>
                <span className="font-medium">All Studios</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2.7 14l1.42 1.42 2.92-2.92c.34.19.69.37 1.05.54l-2.85 3.95 1.42 1.42 3.26-4.52c.44.26.91.5 1.4.72l-3.62 5.01 1.42 1.42 4.4-6.1c1.65.58 3.43.95 5.32.95v-2c-1.58 0-3.09-.32-4.47-.88l1.4-1.94 4.87 4.87 1.42-1.42-4.87-4.87 1.94-1.4c.56 1.38.88 2.89.88 4.47h2c0-1.89-.37-3.67-.95-5.32l-6.1 4.4-1.42-1.42 5.01-3.62c-.22-.49-.46-.96-.72-1.4l-4.52 3.26-1.42-1.42 3.95-2.85c-.17-.36-.35-.71-.54-1.05l-2.92 2.92-1.42-1.42 1.77-1.77c-1.31-.13-4.6-1.53-6.89-3.57z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">Startup Advisor</h4>
                      <p className="text-xs text-gray-500">Business & Strategy</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                </div>
                <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">5</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">389</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">Study Buddy</h4>
                      <p className="text-xs text-gray-500">Education & Learning</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                </div>
                <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">3</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">0</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">Creative Studio</h4>
                      <p className="text-xs text-gray-500">Art & Design</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                </div>
                <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">4</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">724</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button className="px-5 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              <span>Create New Studio</span>
            </button>
            <button disabled className="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
              <span>Continue</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1600px] mx-auto">
        <section className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Welcome back, Sarah 👋</h2>
              <p className="text-sm sm:text-base text-gray-600">Manage your AI Studios, mentors, and track your growth</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 sm:py-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
                <span className="text-sm sm:text-base">Analytics</span>
              </button>
              <button className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span className="text-sm sm:text-base">Create Mentor</span>
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-green-600 font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                  </svg>
                  12%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Total Users</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">2,847</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.33 7 8.5 7 7.5 6.33 7.5 5.5zM19 19H5v-4h14v4z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-green-600 font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                  </svg>
                  8%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Total Mentors</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">24</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-green-600 font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                  </svg>
                  24%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Conversations</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">18.5K</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V5h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.67 3 1.33 3 2.17 0 .88-.72 1.68-2.52 1.68-1.96 0-2.49-1.02-2.56-2.15h-2.2c.12 2.19 1.76 3.42 3.68 3.83V19h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-green-600 font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                  </svg>
                  18%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Revenue (MRR)</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">$4.2K</p>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v2c0 .55.22 1.05.59 1.42L10 14.59V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.41l6.41-6.41c.37-.37.59-.87.59-1.42V7c0-1.1-.9-2-2-2zm-2 0H7V5h10v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Milestone Reached! 🎉</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">Your &quot;Career Coach AI&quot; studio just reached 500 users!</p>
                  <p className="text-xs sm:text-sm text-gray-600">Keep up the great work. Your mentors are making an impact.</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap">
                View Details
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Your Studios</h3>
              <p className="text-sm sm:text-base text-gray-600">Quick access to your most active studios</p>
            </div>
            <button className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center space-x-2">
              <span className="text-sm sm:text-base">View All Studios</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-xl">
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">Career Coach AI</h4>
                      <p className="text-xs sm:text-sm text-gray-500">Professional Development</p>
                    </div>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 py-3 sm:py-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">8</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">542</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">2.4K</p>
                    <p className="text-xs text-gray-600">Chats</p>
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-2">
                    <span>Monthly Growth</span>
                    <span className="font-semibold text-green-600">+18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span>Last activity: 2 hours ago</span>
                </div>
                <button className="w-full px-4 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">Manage Studio</button>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-xl">
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">Wellness Hub</h4>
                      <p className="text-xs sm:text-sm text-gray-500">Health & Fitness</p>
                    </div>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 py-3 sm:py-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">6</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">1.2K</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">8.1K</p>
                    <p className="text-xs text-gray-600">Chats</p>
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-2">
                    <span>Monthly Growth</span>
                    <span className="font-semibold text-green-600">+24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span>Last activity: 1 hour ago</span>
                </div>
                <button className="w-full px-4 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">Manage Studio</button>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-xl">
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M9.19 6.35c-2.04 2.29-3.28 5.48-3.28 9.15s1.24 6.86 3.28 9.15l1.42-1.42c-1.79-2.04-2.85-4.75-2.85-7.73s1.06-5.69 2.85-7.73L9.19 6.35zM18.81 6.35l-1.42 1.42c1.79 2.04 2.85 4.75 2.85 7.73s-1.06 5.69-2.85 7.73l1.42 1.42c2.04-2.29 3.28-5.48 3.28-9.15s-1.24-6.86-3.28-9.15zM14.78 9.72c1.19 1.19 1.89 2.73 1.89 4.28s-.7 3.09-1.89 4.28l1.42 1.42c1.68-1.68 2.66-3.91 2.66-5.7s-.98-4.02-2.66-5.7L14.78 9.72zM9.22 9.72l-1.42 1.42c1.68 1.68 2.66 3.91 2.66 5.7s-.98 4.02-2.66 5.7l1.42 1.42c1.19-1.19 1.89-2.73 1.89-4.28s-.7-3.09-1.89-4.28z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">Startup Advisor</h4>
                      <p className="text-xs sm:text-sm text-gray-500">Business &amp; Strategy</p>
                    </div>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 py-3 sm:py-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">5</p>
                    <p className="text-xs text-gray-600">Mentors</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">389</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">3.2K</p>
                    <p className="text-xs text-gray-600">Chats</p>
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-2">
                    <span>Monthly Growth</span>
                    <span className="font-semibold text-green-600">+31%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span>Last activity: 4 hours ago</span>
                </div>
                <button className="w-full px-4 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">Manage Studio</button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <section className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">View All</button>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3 sm:space-x-4 pb-4 sm:pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 2c2.21 0 6 1.08 6 2v1H9v-1c0-.92 3.79-2 6-2zM3 12v2h2.42c-.14 1-.42 1.9-.75 2.72L3 18.5v2h4v-1h1v1h2v-1h1v1h4v-2l-2.67-1.78c-.33-.82-.61-1.72-.75-2.72H21v-2H3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">12 new users joined</p>
                    <p className="text-xs sm:text-sm text-gray-600">Career Coach AI studio</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full whitespace-nowrap">+12</span>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 pb-4 sm:pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">524 conversations completed</p>
                    <p className="text-xs sm:text-sm text-gray-600">Across all studios today</p>
                    <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap">+524</span>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 pb-4 sm:pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">3 users upgraded to premium</p>
                    <p className="text-xs sm:text-sm text-gray-600">Wellness Hub studio</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full whitespace-nowrap">+$147</span>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 pb-4 sm:pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">18 signups from lead magnet</p>
                    <p className="text-xs sm:text-sm text-gray-600">&quot;Free Career Assessment&quot; funnel</p>
                    <p className="text-xs text-gray-500 mt-1">7 hours ago</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full whitespace-nowrap">+18</span>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.33 7 8.5 7 7.5 6.33 7.5 5.5zM19 19H5v-4h14v4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">New mentor published</p>
                    <p className="text-xs sm:text-sm text-gray-600">&quot;Interview Prep Coach&quot; in Career Coach AI</p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full whitespace-nowrap">New</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
                    </svg>
                    <span className="text-sm sm:text-base">Create New Mentor</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
                <button className="w-full px-4 py-3 sm:py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
                    </svg>
                    <span className="text-sm sm:text-base">Create Lead Magnet</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
                <button className="w-full px-4 py-3 sm:py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                    </svg>
                    <span className="text-sm sm:text-base">View Analytics</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
                <button className="w-full px-4 py-3 sm:py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                    <span className="text-sm sm:text-base">Manage Plans</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
                <button className="w-full px-4 py-3 sm:py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                    </svg>
                    <span className="text-sm sm:text-base">Create New Studio</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">Pro Tip</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">Create a lead magnet to attract more users to your studios. Free assessments work great!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-8 sm:mb-10">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6 gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Performance Overview</h3>
                <p className="text-sm text-gray-600">Last 30 days across all studios</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg">30 Days</button>
                <button className="px-3 sm:px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-50">7 Days</button>
                <button className="px-3 sm:px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-50">90 Days</button>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  <span className="text-xs text-green-600 font-semibold">+22%</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Views</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">24.8K</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  <span className="text-xs text-green-600 font-semibold">+18%</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">New Users</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">487</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  </svg>
                  <span className="text-xs text-green-600 font-semibold">+31%</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Engagement Rate</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">68%</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-xs text-green-600 font-semibold">+0.3</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Avg. Rating</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
