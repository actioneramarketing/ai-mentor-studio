export default function StudioDetailPage() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <header id="header" className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Coach Library</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-3 hover:bg-gray-50 rounded-xl px-3 py-2 transition-colors duration-200">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="Admin"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
              <div className="text-left hidden lg:block">
                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
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
    </header>

      <div className="flex flex-1 min-h-0">
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0">
          <nav className="flex-1 p-4 space-y-1">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
              </svg>
              <span>Studios</span>
            </a>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M15.32 3.55c.42-.32 1.05-.24 1.39.19l.87 1.15-.01.01 5.25 7.1c.35.47.14 1.15-.4 1.15H15.5c-.28 0-.54-.12-.72-.33l-3.26-4.22-1.21 1.58.01.01-2.32 3.03c-.22.29-.6.48-1 .48H2.21c-.55 0-.84-.68-.5-1.14l4.26-5.67.01-.01 2.37-3.16c.2-.27.55-.43.9-.43h2.95c.31 0 .62.1.88.29l1.54 1.22z" />
              </svg>
              <span>Mentor Builder</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              <span>Create a Mentor</span>
            </button>
            <div className="border-t border-gray-200 my-4" />
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>
              <span>Site Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
              </svg>
              <span>Instructions</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.93 8.43 14.07 8 16 8c.7 0 1.37.1 2 .27V12c0 2.21-1.79 4-4 4s-4-1.79-4-4H4c0 4.41 3.59 8 8 8z" />
              </svg>
              <span>Support</span>
            </button>
          </nav>
          <div className="p-4 mt-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Duplicate existing mentors to quickly create variations with similar settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-auto">
          <div id="workspace-context-header" className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Studios</a>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
              <span className="text-gray-900 font-medium">Prepared Life</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Prepared Life</h2>
                  <p className="text-gray-600">Studio</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-5 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span>Invite Team</span>
                </button>
                <button className="px-5 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                  <span>Studio Settings</span>
                </button>
              </div>
            </div>
          </div>

          <div id="action-bar" className="mb-8 bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search mentors..."
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center space-x-2 ml-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              <span>Create New Mentor</span>
            </button>
            </div>
          </div>

          <div id="filter-tabs" className="flex items-center space-x-2 mb-6">
            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg transition-all duration-200">
              All
            </button>
            <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200">
              Draft
            </button>
            <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200">
              Active
            </button>
            <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200">
              Archived
            </button>
          </div>

          <div id="empty-state" className="hidden">
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center">
              <div className="max-w-lg mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Mentors Yet</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Create your first AI mentor to start building your library. Each mentor can be customized to provide specific guidance and support.</p>
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                  <span>Create Your First Mentor</span>
                </button>
              </div>
            </div>
          </div>

          <div id="coaches-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - 72-Hour Kit Planner */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 14H4v-2h11v2zm0-4H4v-2h11v2zm0-4H4V6h11v2zm5 7h-2v2h2v-2zm0-4h-2v2h2v-2zm0-4h-2v2h2V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">72-Hour Kit Planner</h3>
                      <span className="text-xs text-gray-500 font-medium">Planner</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Helps users build personalized 72-hour emergency kits based on household size, location, and specific needs.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 2d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4zm0 4.5h4v-2.5H9v2.5zM5 3v2.5H3v-2.5H5zm0 4.5H3v-2.5h2v2.5zM5 12v2.5H3v-2.5H5zm0 4.5v2.5H3v-2.5h2zM19 12v2.5h-2v-2.5h2zm0 4.5v2.5h-2v-2.5h2zm-14 0H3v-2.5h2v2.5zm14-9H17V6h2v1.5zm0 4.5H17v-2.5h2v2.5zm0 4.5H17v-2.5h2v2.5z" /></svg>
                    <span>v2.1</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 2 - Emergency Chat Guide */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Emergency Chat Guide</h3>
                      <span className="text-xs text-gray-500 font-medium">Chat Mentor</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Real-time conversational guidance for emergency preparedness questions and immediate action steps.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 1d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4zm0 4.5h4v-2.5H9v2.5zM5 3v2.5H3v-2.5H5z" /></svg>
                    <span>v1.8</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 3 - Fire Evacuation Simulator */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.38-1.21-6.49-3.2-8.59-.03.17-.05.33-.05.5 0 2.06 1.35 3.73 3.41 3.73 2.07 0 3.63-1.67 3.63-3.73 0-.19-.02-.37-.04-.54C19.2 4.9 20 2.35 20 .67h-6.5z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Fire Evacuation Simulator</h3>
                      <span className="text-xs text-gray-500 font-medium">Scenario Simulator</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Interactive scenario-based training for fire evacuation planning and emergency response procedures.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 3d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v1.5</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 4 - First Aid Assistant */}
            <div className="bg-white rounded-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-75">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M15.5 16.5c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-2.5c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">First Aid Assistant</h3>
                      <span className="text-xs text-gray-500 font-medium">Chat Mentor</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Draft</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Step-by-step first aid guidance and medical emergency response instructions for common situations.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 5d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v0.3</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 5 - Water Storage Planner */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Water Storage Planner</h3>
                      <span className="text-xs text-gray-500 font-medium">Planner</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Calculate water storage needs and create customized water emergency preparedness plans for households.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 4d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v1.2</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 6 - Power Outage Simulator */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Power Outage Simulator</h3>
                      <span className="text-xs text-gray-500 font-medium">Scenario Simulator</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Interactive training for managing extended power outages and maintaining safety during electrical emergencies.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 1w ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v2.0</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 7 - Home Safety Checklist */}
            <div className="bg-white rounded-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-75">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Home Safety Checklist</h3>
                      <span className="text-xs text-gray-500 font-medium">Planner</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Draft</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Comprehensive home safety assessment tool with room-by-room preparedness recommendations.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 1w ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v0.5</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 8 - Weather Emergency Guide */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.05 5.41 2 7.73 2 10.5c0 2.97 2.33 5.44 5.37 5.5h10.13c1.5 0 2.5-1.5 2.5-3 0-1.5-1.5-3-3-3z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Weather Emergency Guide</h3>
                      <span className="text-xs text-gray-500 font-medium">Chat Mentor</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Real-time guidance for severe weather preparation and response across different climate conditions.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 6d ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v1.9</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3">Edit Mentor</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg><span>Preview</span></button>
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg><span>Duplicate</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>

            {/* Card 9 - Legacy Kit Builder */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-50">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Legacy Kit Builder</h3>
                      <span className="text-xs text-gray-500 font-medium">Planner</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Archived</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Deprecated version of emergency kit planning tool. Replaced by 72-Hour Kit Planner.</p>
                <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    <span>Edited 3w ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M9 3v2.5h4v-2.5h-4z" /></svg>
                    <span>v1.0</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl cursor-not-allowed mb-3">Archived</button>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M17.65 3 14 3.5V2H8v1.5L4.35 3C3.5 3.2 3 4 3 5v2c0 1.1.9 2 2 2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9h1c1.1 0 2-.9 2-2V5c0-1-.5-1.8-1.35-2zM7 9H5V6h2v3zm12 0h-2V6h2v3z" /></svg><span>Restore</span></button>
                  <button className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span>Delete</span></button>
                </div>
              </div>
            </div>
          </div>

          <div id="stats-section" className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 font-medium">Total Mentors</span>
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">9</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 font-medium">Active</span>
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">6</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 font-medium">In Draft</span>
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 font-medium">Archived</span>
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
