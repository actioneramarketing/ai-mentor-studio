"use client"

export default function NewMentorStep3Page() {
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
              <p className="text-xs text-gray-700 leading-relaxed">Good conversation starters help users quickly understand what your mentor can do for them.</p>
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
                    <div className="w-8 lg:w-12 h-0.5 bg-blue-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">3</div>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Conversation Starters</span>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap lg:hidden">Starters</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">4</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Mentor Steps</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Steps</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">5</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap">Call To Action</span>
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
                    <button type="button" className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
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
      </div>

      <div id="add-starter-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Add Conversation Starter</h2>
            <button type="button" id="close-modal-btn" className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.4 29.9 25.2 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Icon</label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                <button type="button" className="icon-selector p-3 border-2 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24v8H24V56z" /></svg>
                  </div>
                </button>
                <button type="button" className="icon-selector p-3 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0z" /></svg>
                  </div>
                </button>
                <button type="button" className="icon-selector p-3 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-green-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M0 64C0 46.3 14.3 32 32 32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64z" /></svg>
                  </div>
                </button>
                <button type="button" className="icon-selector p-3 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                  </div>
                </button>
                <button type="button" className="icon-selector p-3 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-red-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c25 12.3 41.7 37.1 43.5 64.1l27.3 352c2.2 28.2-20.2 52.6-48.5 54.8l-379.2 29.7c-28.3 2.2-50.7-26.6-48.5-54.8l27.3-352c1.9-27 18.5-51.8 43.5-64.1L242.6 2.9C246.8 1 251.4 0 256 0zm0 64L79.4 140.5c-2.6 1.2-4.3 3.8-4.3 6.5l27.3 352c.2 2.5 2.3 4.5 4.8 4.7l379.2 29.7c2.5 .2 4.6-2.2 4.7-4.7l27.3-352c0-2.7-1.7-5.3-4.3-6.5L256 64z" /></svg>
                  </div>
                </button>
                <button type="button" className="icon-selector p-3 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg mx-auto flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H416c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Starter Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="e.g., Help me build a 72-hour emergency kit"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">This appears as the button text (keep it under 12 words)</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
              <input
                type="text"
                placeholder="e.g., Get started with personalized recommendations"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">A brief subtitle to provide more context</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Prompt <span className="text-red-500">*</span></label>
              <textarea
                rows={4}
                placeholder="e.g., Help me create a personalized 72-hour emergency kit based on my household and location."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">The actual message that will be sent to the AI mentor when clicked</p>
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3">
            <button type="button" id="cancel-modal-btn" className="px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-200 rounded-lg transition-colors duration-200">
              Cancel
            </button>
            <button type="button" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Add Starter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
