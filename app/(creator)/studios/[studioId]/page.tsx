export default function StudioDetailPage() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Studio</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
            </svg>
            <span>Studios</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
            </svg>
            <span>Mentor Builder</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span>Create Mentor</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span>Mentors</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <span>Access</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>Leads</span>
          </button>
        </nav>
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hidden lg:block">
          <div className="flex items-start space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Duplicate existing mentors to quickly create variations with similar settings.</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 text-sm font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Back to Dashboard</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with user menu */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">AI Mentor Platform</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Creator Dashboard</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="relative p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.93 8.43 14.07 8 16 8c.7 0 1.37.1 2 .27V12c0 2.21-1.79 4-4 4s-4-1.79-4-4H4c0 4.41 3.59 8 8 8z" />
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <div className="relative">
                  <button className="flex items-center space-x-2 sm:space-x-3 hover:bg-gray-50 rounded-xl px-2 sm:px-3 py-2 transition-colors duration-200">
                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Creator" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" />
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Creator Account</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                  <div className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <button className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-sm text-gray-900">Profile Settings</button>
                    <button className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-sm text-gray-900">Billing & Plans</button>
                    <button className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-sm text-gray-900">Help Center</button>
                    <div className="border-t border-gray-200 my-2" />
                    <button className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-sm font-medium text-red-600">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Studio context header - Prepared Life */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-3">
            <button className="hover:text-blue-600 transition-colors duration-200">Studios</button>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
            <span className="text-gray-900 font-medium">Prepared Life</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Prepared Life</h2>
                <p className="text-sm sm:text-base text-gray-600">Studio</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button className="px-3 sm:px-5 py-2 sm:py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="hidden sm:inline">Invite Team</span>
              </button>
              <button className="px-3 sm:px-5 py-2 sm:py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
                <span className="hidden sm:inline">Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs: Mentors, Access, Leads */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            <button className="px-4 py-3 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">Mentors</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent">Access</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent">Leads</button>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Mentors tab content */}
          <div>
            {/* Action bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <input type="text" placeholder="Search mentors..." className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" readOnly />
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span>Create New Mentor</span>
              </button>
            </div>

            {/* Filter tabs */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <button className="px-4 sm:px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">All</button>
                <button className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Draft</button>
                <button className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Active</button>
                <button className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Archived</button>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Total Mentors</span>
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.33 7 8.5 7 7.5 6.33 7.5 5.5zM19 19H5v-4h14v4z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">9</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Active</span>
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">6</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Draft</span>
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Archived</span>
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">1</p>
              </div>
            </div>

            {/* Mentors grid - 9 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </div>
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Emergency Preparedness Mentor {i}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">Guidance for families on safety and emergency planning</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>1.2K users</span>
                      <span>2.1K chats</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200">Edit Mentor</button>
                      <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-all duration-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Mentor card */}
            <div className="mt-4 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Add New Mentor</h3>
                <p className="text-sm text-gray-600 mb-4 max-w-xs">Create a new AI mentor for this studio</p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                  Create Mentor
                </button>
              </div>
            </div>
          </div>

          {/* Access tab content - hidden */}
          <div className="hidden">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Studio Access</h3>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg">Invite User</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Role</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Joined</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="" className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
                            <p className="text-xs text-gray-500">sarah@example.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Owner</span></td>
                      <td className="px-6 py-4 text-sm text-gray-600">Jan 15, 2024</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-sm text-gray-500 hover:text-red-600">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Leads tab content - hidden */}
          <div className="hidden">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Studio Leads</h3>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg">Export</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Source</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">John Doe</td>
                      <td className="px-6 py-4 text-sm text-gray-600">john@example.com</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Landing Page</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Mar 18, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* User Access Drawer - hidden */}
      <div className="hidden fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">User Access</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-sm text-gray-600">Manage user permissions for this studio.</p>
          </div>
        </div>
      </div>

      {/* Invite User Modal - hidden */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Invite User</h3>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <input type="email" placeholder="colleague@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" disabled>
                <option>Editor</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50">Cancel</button>
            <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">Send Invite</button>
          </div>
        </div>
      </div>

      {/* Success Toast - hidden */}
      <div className="hidden fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg z-50 flex items-center space-x-3">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <span className="font-medium">Invitation sent successfully!</span>
      </div>
    </div>
  );
}
