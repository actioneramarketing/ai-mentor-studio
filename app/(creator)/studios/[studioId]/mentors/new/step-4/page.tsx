"use client"

export default function NewMentorStep4Page() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - same as step-2 */}
        <aside id="sidebar" className="w-64 bg-white border-r border-gray-200 flex flex-col fixed lg:static h-full z-40 -translate-x-full lg:translate-x-0 transition-transform duration-300">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M96 64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V64zM64 160c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160zM64 288c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM64 416c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V416z" /></svg>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-sm">Prepared Life</h2>
                <p className="text-xs text-gray-500">Workspace</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H416c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 43.1 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" /></svg>
                <span className="text-sm font-medium">Workspaces</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                <span className="text-sm font-medium">Coach Designer</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                <span className="text-sm font-semibold">Create a Coach</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-2.8-24.9-6.9-49.9-12.1-74.9c-5.2-25-11.5-49.9-18.8-74.8c7.3-24.9 13.6-49.8 18.8-74.8c5.2-25 9.3-50 12.1-74.9h117.4c11.4 25.9 20.3 52.8 25.9 80.7c-5.6 27.9-14.5 54.8-25.9 80.7zM320 32c-24.9 0-49.7 4.1-73.2 12.1C237.7 78.8 205.9 100.1 174 126.2c-31.9 26.1-53.2 57.9-66.9 72.8C93.5 213.9 88 234.9 88 256s5.5 42.1 19.1 56.9c13.7 14.9 35 46.8 66.9 72.8c31.9 26.1 63.7 47.4 72.8 82.1C270.3 475.9 295.1 480 320 480c24.9 0 49.7-4.1 73.2-12.1c9.2-34.7 40.9-56 72.8-82.1c31.9-26.1 53.2-57.9 66.9-72.8C426.5 298.1 432 277.1 432 256s-5.5-42.1-19.1-56.9c-13.7-14.9-35-46.8-66.9-72.8c-31.9-26.1-63.7-47.4-72.8-82.1C390.3 36.1 365.5 32 320 32zM135.2 117.2C145 92.1 169.6 72 198.2 72h117.4c28.6 0 53.2 20.1 63 45.2c3.2 7.9 6 16 8.4 24.1H126.8c2.4-8.1 5.1-16.2 8.4-24.1zM8.1 256c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64H8.1zm120.6 170.8c-11.4-25.9-20.3-52.8-25.9-80.7c5.6-27.9 14.5-54.8 25.9-80.7H135.3c-2.8 24.9-6.9 49.9-12.1 74.9c-5.2 25-11.5 49.9-18.8 74.8c7.3 24.9 13.6 49.8 18.8 74.8c5.2 25 9.3 50 12.1 74.9H8.1zM376.7 440H503.9c-11.4-25.9-20.3-52.8-25.9-80.7c-5.6-27.9-14.5-54.8-25.9-80.7H376.7c2.8 24.9 6.9 49.9 12.1 74.9c5.2 25 11.5 49.9 18.8 74.8c-7.3 24.9-13.6 49.8-18.8 74.8c-5.2 25-9.3 50-12.1 74.9z" /></svg>
                <span className="text-sm font-medium">Site Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM64 96v64H320V96H64zM64 224v64H320V224H64zm0 96v192H320V320H64z" /></svg>
                <span className="text-sm font-medium">Instructions</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 0c53.9 0 101 27.2 128.7 68.7L256 256 127.3 68.7C155 27.2 202.1 0 256 0zM127.3 443.3C155 484.8 202.1 512 256 512c53.9 0 101-27.2 128.7-68.7L256 256 127.3 443.3zM256 256L384.7 68.7C424 130.4 448 191.1 448 256s-24 125.6-63.3 187.3L256 256zM127.3 68.7L256 256 63.3 443.3C24 381.6 0 320 0 256S24 130.4 63.3 68.7z" /></svg>
                <span className="text-sm font-medium">Support</span>
              </a>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-start space-x-2 mb-2">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                <h4 className="font-semibold text-gray-900 text-sm">Quick Tip</h4>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">Keep steps focused on a single outcome. Ask 2-4 guiding questions per step.</p>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header id="header" className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button type="button" id="mobile-menu-toggle" className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </button>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                  <span className="font-medium text-sm hidden sm:inline">Back to Coaches</span>
                </a>
                <div className="h-6 w-px bg-gray-200 hidden sm:block" />
                <div className="hidden sm:flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400 text-sm" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M96 64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V64zM64 160c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160z" /></svg>
                  <span className="text-sm font-medium text-gray-700">Prepared Life Workspace</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 hidden sm:block">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 208v25.4c0 45.4-15.5 89.5-43 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S18.8 416 28 416H420c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-15.7-19.6C399.5 322.9 384 278.8 384 233.4V208c0-83.8-55.5-146.6-128-158.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-57.4 46.6-104 104-104h8zm64 352H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z" /></svg>
                </button>
                <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto">
            <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
              <div id="page-header" className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Create a New AI Mentor</h1>
                <p className="text-base lg:text-lg text-gray-600">Build an AI mentor that guides users through a structured experience.</p>
              </div>

              <div id="wizard-progress" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 mb-6 lg:mb-8">
                <div className="flex items-center justify-between overflow-x-auto pb-2">
                  <div className="flex items-center space-x-2 lg:space-x-4 min-w-max">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap">Basics</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-green-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap">Instructions</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-green-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Conversation Starters</span>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap lg:hidden">Starters</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-blue-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">4</div>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Mentor Steps</span>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap lg:hidden">Steps</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">5</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Call To Action</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">CTA</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">6</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Access &amp; Visibility</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Access</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">7</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Preview &amp; Publish</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Publish</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="mentor-steps-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Mentor Step Flow</h2>
                        <p className="text-sm text-gray-600">Build a structured flow that guides users through your mentoring session.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button type="button" id="generate-flow-btn" className="px-4 py-2.5 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                          <span className="hidden sm:inline">Generate with AI</span>
                        </button>
                        <button type="button" id="add-step-btn" className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                          <span className="hidden sm:inline">Add Step</span>
                        </button>
                      </div>
                    </div>

                    <div id="steps-list" className="space-y-3 mb-6">
                      <div className="step-card bg-blue-50 border-2 border-blue-300 rounded-xl p-4 hover:border-blue-400 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-base">Assess Your Household</h3>
                              <p className="text-sm text-gray-600 truncate">Understand household size, special needs, and location risks</p>
                              <p className="text-xs text-blue-700 mt-1">3 questions</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
                            <button type="button" className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200" title="Edit">
                              <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l6-35.4c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1V399.4zM439 7c7.3-7.3 19-7.3 26.3 0l47 47c7.3 7.3 7.3 19 0 26.3l-47 47-11.3-11.3 36.8-36.8c2.1-2.1 2.1-5.5 0-7.6s-5.5-2.1-7.6 0l-36.8 36.8L344 159 391 112l47 47c7.3 7.3 19 7.3 26.3 0s7.3-19 0-26.3l-47-47L439 7z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200" title="Duplicate">
                              <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                            </button>
                            <button type="button" className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="step-card bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-gray-400 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-base">Essential Supplies</h3>
                              <p className="text-sm text-gray-600 truncate">Identify must-have items for your 72-hour kit</p>
                              <p className="text-xs text-gray-500 mt-1">4 questions</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
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
                      </div>

                      <div className="step-card bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-gray-400 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-base">Budget Planning</h3>
                              <p className="text-sm text-gray-600 truncate">Prioritize purchases within your budget</p>
                              <p className="text-xs text-gray-500 mt-1">2 questions</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
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
                      </div>

                      <div className="step-card bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <button type="button" className="drag-handle cursor-move p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="w-10 h-10 bg-gray-400 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">4</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-base">Action Plan</h3>
                              <p className="text-sm text-gray-600 truncate">Create your personalized shopping list and timeline</p>
                              <p className="text-xs text-gray-500 mt-1">2 questions</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
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
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                        <p className="text-sm text-gray-700 leading-relaxed">Click a step to edit its details. Drag and drop to reorder the flow.</p>
                      </div>
                    </div>
                  </div>

                  <div id="step-editor" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Edit Step: Assess Your Household</h2>
                      <div className="flex items-center space-x-3">
                        <button type="button" id="generate-step-content-btn" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                          <span className="hidden sm:inline">Generate Step Content</span>
                          <span className="sm:hidden">Generate</span>
                        </button>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Step 1 of 4</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Step Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          defaultValue="Assess Your Household"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Step Goal <span className="text-red-500">*</span></label>
                        <textarea
                          rows={2}
                          defaultValue="Understand household size, special needs, and location-specific risks to create a personalized emergency kit."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">What should the user accomplish in this step?</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">AI Instructions <span className="text-red-500">*</span></label>
                        <textarea
                          rows={5}
                          defaultValue="Ask the user about their household composition, including number of adults, children, and any special needs (elderly, infants, pets, medical conditions). Then inquire about their geographic location and primary risks (earthquakes, hurricanes, floods, etc.). Be conversational and supportive. Don't overwhelm them with too many questions at once."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">Explain how the AI should guide the user during this step</p>
                        <p className="text-xs text-blue-600 mt-1 flex items-start space-x-1">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <span>The AI will have access to user responses from previous steps.</span>
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <label className="block text-sm font-semibold text-gray-900">Suggested Questions</label>
                            <p className="text-xs text-gray-500 mt-1">The AI will use these as guidance and adapt based on the conversation.</p>
                          </div>
                          <button type="button" id="add-question-btn" className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                            <span>Add Question</span>
                          </button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-start space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <button type="button" className="drag-handle cursor-move p-1 hover:bg-gray-200 rounded transition-colors duration-200 mt-1">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">How many people are in your household (adults, children, infants)?</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button type="button" className="p-1.5 hover:bg-gray-200 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                              </button>
                              <button type="button" className="p-1.5 hover:bg-red-100 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                              </button>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <button type="button" className="drag-handle cursor-move p-1 hover:bg-gray-200 rounded transition-colors duration-200 mt-1">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">Does anyone have special needs or medical conditions?</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button type="button" className="p-1.5 hover:bg-gray-200 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                              </button>
                              <button type="button" className="p-1.5 hover:bg-red-100 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                              </button>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <button type="button" className="drag-handle cursor-move p-1 hover:bg-gray-200 rounded transition-colors duration-200 mt-1">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M64 64c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" /></svg>
                            </button>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">What geographic location are you in, and what are the primary risks (earthquakes, hurricanes, etc.)?</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button type="button" className="p-1.5 hover:bg-gray-200 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231z" /></svg>
                              </button>
                              <button type="button" className="p-1.5 hover:bg-red-100 rounded transition-colors duration-200">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">The AI will ask these questions to gather information from the user</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Completion Rule <span className="text-red-500">*</span></label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>AI decides when the step is complete</option>
                          <option>User clicks continue</option>
                          <option>All questions answered</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2">How should the mentor determine this step is finished?</p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Allow Skip Step</h4>
                          <p className="text-xs text-gray-600">Let users skip this step if they want</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Generate Step Summary</h4>
                          <p className="text-xs text-gray-600">AI creates a summary before moving to the next step</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div id="help-panel" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 lg:p-8">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Tips for designing mentor steps</h3>
                        <p className="text-sm text-gray-600">Create effective step-by-step guidance</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Keep steps focused on a single outcome</h4>
                          <p className="text-sm text-gray-700">Each step should accomplish one clear goal</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Ask 2-4 guiding questions per step</h4>
                          <p className="text-sm text-gray-700">Too many questions can overwhelm users</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Avoid overwhelming users with information</h4>
                          <p className="text-sm text-gray-700">Break complex topics into digestible steps</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Use step summaries for longer flows</h4>
                          <p className="text-sm text-gray-700">Help users track their progress and decisions</p>
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
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                              <span className="text-white font-semibold text-sm">Step 1 of 4</span>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-6 h-1.5 bg-white rounded-full" />
                              <div className="w-6 h-1.5 bg-white bg-opacity-30 rounded-full" />
                              <div className="w-6 h-1.5 bg-white bg-opacity-30 rounded-full" />
                              <div className="w-6 h-1.5 bg-white bg-opacity-30 rounded-full" />
                            </div>
                          </div>

                          <div className="p-5">
                            <h3 className="font-bold text-gray-900 text-base mb-3">Assess Your Household</h3>

                            <div className="space-y-3">
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <div className="flex items-start space-x-2 mb-2">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0A56 56 0 1 1 168 256zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-gray-900 leading-relaxed">Let&apos;s start by understanding your household. This will help me create a personalized emergency kit for you.</p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <div className="flex items-start space-x-2">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0A56 56 0 1 1 168 256zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-gray-900 font-semibold mb-2">How many people are in your household?</p>
                                    <p className="text-xs text-gray-600">Please include adults, children, and infants.</p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                                <div className="flex items-start space-x-2">
                                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9 0-16.1-7.2-16.1-16.1c0-100.7-81.6-182.3-182.3-182.3C99.6 265.6 18 347.2 18 447.9c0 8.9-7.2 16.1-16.1 16.1z" /></svg>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-gray-900">We have 2 adults and 2 children (ages 5 and 8).</p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <div className="flex items-start space-x-2">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0A56 56 0 1 1 168 256zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-gray-900 font-semibold">Does anyone have special needs or medical conditions?</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <div className="flex items-center space-x-2">
                                <input type="text" placeholder="Type your response..." className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <button type="button" className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors duration-200">
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
                          <p className="text-xs text-gray-700 leading-relaxed">This preview shows how users will experience this step during their mentoring session.</p>
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
                      <span className="hidden sm:inline">Back to Conversation Starters</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button type="button" className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                      <span className="hidden sm:inline">Continue to Call To Action</span>
                      <span className="sm:inline lg:hidden">Continue</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div id="add-step-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Add New Step</h2>
            <button type="button" id="close-step-modal-btn" className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.4 29.9 25.2 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Step Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="e.g., Assess Your Household"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Step Goal <span className="text-red-500">*</span></label>
              <textarea
                rows={3}
                placeholder="e.g., Understand household size, special needs, and location-specific risks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">What should the user accomplish in this step?</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">AI Instructions <span className="text-red-500">*</span></label>
              <textarea
                rows={4}
                placeholder="Explain how the AI should guide the user during this step..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
              />
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3">
            <button type="button" id="cancel-step-modal-btn" className="px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-200 rounded-lg transition-colors duration-200">
              Cancel
            </button>
            <button type="button" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Create Step
            </button>
          </div>
        </div>
      </div>

      <div id="add-question-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Add Question</h2>
            <button type="button" id="close-question-modal-btn" className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.4 29.9 25.2 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
            </button>
          </div>

          <div className="p-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Question <span className="text-red-500">*</span></label>
              <textarea
                rows={3}
                placeholder="e.g., How many people are in your household?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">The AI will ask this question to gather information</p>
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3">
            <button type="button" id="cancel-question-modal-btn" className="px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-200 rounded-lg transition-colors duration-200">
              Cancel
            </button>
            <button type="button" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
