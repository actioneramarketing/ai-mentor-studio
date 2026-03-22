export default function StudiosPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Studios</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your AI studios, mentors, and audience</p>
          </div>

          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span>Create Studio</span>
          </button>
        </div>
        <div className="hidden">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center shadow-sm">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Create Your First Studio</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">A studio is your dedicated space to build, organize, and manage AI mentors for a specific topic or audience. Get started by creating your first studio.</p>

              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span>Create Your First Studio</span>
              </button>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2.7 14l1.42 1.42 2.92-2.92c.34.19.69.37 1.05.54l-2.85 3.95 1.42 1.42 3.26-4.52c.44.26.91.5 1.4.72l-3.62 5.01 1.42 1.42 4.4-6.1c1.65.58 3.43.95 5.32.95v-2c-1.58 0-3.09-.32-4.47-.88l1.4-1.94 4.87 4.87 1.42-1.42-4.87-4.87 1.94-1.4c.56 1.38.88 2.89.88 4.47h2c0-1.89-.37-3.67-.95-5.32l-6.1 4.4-1.42-1.42 5.01-3.62c-.22-.49-.46-.96-.72-1.4l-4.52 3.26-1.42-1.42 3.95-2.85c-.17-.36-.35-.71-.54-1.05l-2.92 2.92-1.42-1.42 1.77-1.77c-1.31-.13-4.6-1.53-6.89-3.57z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quick Setup</h4>
                <p className="text-sm text-gray-600">Create your studio in minutes with our guided setup process.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Team Ready</h4>
                <p className="text-sm text-gray-600">Invite team members and collaborate on building AI mentors.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure &amp; Private</h4>
                <p className="text-sm text-gray-600">Your studio data is encrypted and completely private.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Prepared Life</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>

                <p className="text-sm text-gray-600 mb-5">Emergency preparedness and safety coaching platform for families and individuals</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">12</div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">2.4K</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">18.5K</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-xs font-semibold text-green-600">+24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "76%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Last activity: 2 hours ago</p>
                  <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                    Manage Studio
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm-1.41 12.66L10.25 13.3l-6.84 6.84L2 18.54 8.84 11.7 2 4.84 3.41 3.43l6.84 6.84 6.34-6.34 1.41 1.41-6.34 6.34 6.84 6.84 1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Live Your List</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>

                <p className="text-sm text-gray-600 mb-5">Goal setting and life planning coaching system for personal achievement</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">8</div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">1.8K</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">12.3K</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-xs font-semibold text-green-600">+18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "68%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Last activity: 5 hours ago</p>
                  <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                    Manage Studio
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Prepared Business</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Draft</span>
                </div>

                <p className="text-sm text-gray-600 mb-5">Business continuity and risk management coaches for organizations</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">5</div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">420</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">3.2K</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-xs font-semibold text-green-600">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "52%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Last activity: 1 day ago</p>
                  <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                    Manage Studio
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Skills Academy</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>

                <p className="text-sm text-gray-600 mb-5">Professional development and training coaches for career advancement</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">15</div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">3.1K</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">22.7K</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-xs font-semibold text-green-600">+31%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "81%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Last activity: 3 hours ago</p>
                  <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                    Manage Studio
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Wellness Hub</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>

                <p className="text-sm text-gray-600 mb-5">Health, fitness, and mental wellness coaching for holistic wellbeing</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">10</div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">2.7K</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">16.4K</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-xs font-semibold text-green-600">+22%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Last activity: 4 hours ago</p>
                  <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                    Manage Studio
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Create New Studio</h3>
                <p className="text-sm text-gray-600 mb-6 max-w-xs">Start a new AI studio for a specific topic or audience</p>

                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M14.6 10.26v1.31L17 10.9 17 9h-3v1.26h-2v1.17l1.08 1.08c.27-.27.57-.44.92-.44.61 0 1.1.49 1.1 1.1v1.08h2v-1.08c0-.58-.28-1.09-.7-1.43l.7-.7c.27.27.5.59.69.95l1.12-1.04c-.19-.44-.48-.85-.85-1.22L17 10.9l-2.4.36zM4 17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3.56l1.81 1.81c.11.11.24.16.36.16.14 0 .27-.05.38-.16l.71-.71-8.5-8.5 1.42-1.41 8.5 8.5 1.41 1.41-8.5 8.5-1.41-1.41 6.09-6.09H5c-.55 0-1 .45-1 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Ready to scale your AI mentors?</h3>
                  <p className="text-sm sm:text-base text-gray-600">Create unlimited studios and mentors with advanced analytics and team features</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
