"use client"

export default function NewMentorPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="flex h-screen overflow-hidden">
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
              <p className="text-xs text-gray-700 leading-relaxed">Great mentors have clear outcomes and guide users step-by-step through focused sessions.</p>
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
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">1</div>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap">Basics</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">2</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap">Instructions</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">3</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Conversation Starters</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Starters</span>
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
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Access & Visibility</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Access</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">7</div>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Preview & Publish</span>
                      <span className="font-medium text-gray-500 text-sm lg:text-base whitespace-nowrap lg:hidden">Publish</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="basics-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Mentor Basics</h2>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="mentor-name" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Name</label>
                        <input
                          type="text"
                          id="mentor-name"
                          placeholder="e.g., Emergency Preparedness Coach"
                          defaultValue="Emergency Preparedness Coach"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                        <p className="text-xs text-gray-500 mt-2">This is what users will see when browsing coaches</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Mentor Icon</label>
                        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200 ring-4 ring-blue-500 ring-offset-2">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 7.9-36.3 29.1-36.3 52.1V440c0 22.1 17.9 40 40 40H192V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V480h113.7c22.1 0 40-17.9 40-40V134.9c0-23-14.3-44.2-36.3-52.1L269.4 2.9z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.5 2.1-16.3 2.1c-35.3 0-64-28.7-64-64V120c0-35.3 28.7-64 64-64c12.1 0 23.5 3.4 33.3 9.3C157.3 24.6 169.2 0 184 0zM328 0c32.8 0 59.2 26.3 59.2 58.8c0 20.3-10.1 38.2-25.5 49.1L384 242.8c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6c15.2 0 28.7 10.5 31.2 25.6l22.3 135.1c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6c15.2 0 28.7 10.5 31.2 25.6l22.3 135.1c1.7 19.4 1.7 42.9 0 66.4l-22.3 135.1c-2.5 15.1-16 25.6-31.2 25.6c-14.9 0-28.1-10.1-31.7-24.6l-22.5-90.1c-3.5-14.1-3.5-28.9 0-43l22.5-90.1c3.6-14.5 16.8-24.6 31.7-24.6z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M151.6 42.4C145.5 35.8 137 32 128 32H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64c9 0 17.5-3.8 23.6-10.4z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          </button>
                          <button type="button" className="icon-selector w-full aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M273.2 96.2c-20.2 4.4-36.6 20.6-42.6 41.2l-50.6 192c-4.5 17.1-22 29-39.6 29H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h92.4l50.6-192c4.5-17.1 22-29 39.6-29H528c17.7 0 32 14.3 32 32s-14.3 32-32 32H302.8l-24.3 92.2c-4.5 17.1-22 29-39.6 29H136.5l-24.3 92.2c-4.5 17.1-22 29-39.6 29H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h24.6l24.3-92.2c4.5-17.1 22-29 39.6-29h102.4l24.3-92.2c4.5-17.1 22-29 39.6-29H528c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mentor-description" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Description</label>
                        <textarea
                          id="mentor-description"
                          rows={4}
                          placeholder="Describe what this mentor helps users accomplish..."
                          defaultValue="Build a personalized 72-hour emergency kit based on your household, location, and needs. Get step-by-step guidance for preparedness planning."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">Keep it clear and outcome-focused (2-3 sentences)</p>
                      </div>

                      <div>
                        <label htmlFor="mentor-category" className="block text-sm font-semibold text-gray-900 mb-2">Mentor Category</label>
                        <select id="mentor-category" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>Preparedness</option>
                          <option>Business</option>
                          <option>Health</option>
                          <option>Skills & Training</option>
                          <option>Planning</option>
                          <option>Security</option>
                          <option>Finance</option>
                          <option>Personal Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Mentor Type</label>
                        <p className="text-sm text-gray-600 mb-3">Select the type of mentor experience you want to create.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button type="button" className="type-selector p-4 border-2 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-left" data-type="Chat Coach">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Chat Coach</h3>
                            </div>
                            <p className="text-sm text-gray-600">Free-form conversational mentor that answers questions.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Planner">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M384 0L224 96v224L384 416l160-96V96L384 0zM0 96v320c0 35.3 28.7 64 64 64h96V32H64C28.7 32 0 60.7 0 96z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Planner</h3>
                            </div>
                            <p className="text-sm text-gray-600">Guides users through building a structured plan.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Scenario Simulator">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.4-64.1 0-82.6z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Scenario Simulator</h3>
                            </div>
                            <p className="text-sm text-gray-600">Runs simulated situations for training and preparation.</p>
                          </button>
                          <button type="button" className="type-selector p-4 border-2 border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left" data-type="Checklist Builder">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                              </div>
                              <h3 className="font-semibold text-gray-900">Checklist Builder</h3>
                            </div>
                            <p className="text-sm text-gray-600">Guides users through completing a list of tasks.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="advanced-options" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Advanced Options</h3>
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" /></svg>
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="ai-model" className="block text-sm font-semibold text-gray-900 mb-2">AI Model</label>
                        <select id="ai-model" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>Use Workspace Default</option>
                          <option>GPT-4o</option>
                          <option>GPT-4o Mini</option>
                          <option>UX Pilot Sonnet</option>
                          <option>UX Pilot Haiku</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2">Override the workspace AI model for this mentor if needed.</p>
                      </div>

                      <div>
                        <label htmlFor="max-session-time" className="block text-sm font-semibold text-gray-900 mb-2">Maximum Session Time</label>
                        <select id="max-session-time" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200">
                          <option>No limit</option>
                          <option>15 minutes</option>
                          <option>30 minutes</option>
                          <option>45 minutes</option>
                          <option>60 minutes</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="max-messages" className="block text-sm font-semibold text-gray-900 mb-2">Maximum Messages Per Session</label>
                        <input
                          type="number"
                          id="max-messages"
                          placeholder="e.g., 50"
                          defaultValue="100"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Allow Session Resume</h4>
                          <p className="text-sm text-gray-600">Let users continue previous conversations</p>
                        </div>
                        <button type="button" className="w-14 h-8 bg-blue-600 rounded-full relative transition-colors duration-200">
                          <div className="w-6 h-6 bg-white rounded-full absolute right-1 top-1 shadow-sm" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="help-panel" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 lg:p-8">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M320 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V96zM96 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V96zM32 416H96V96H32c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32zM544 96H480V416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">What makes a great mentor?</h3>
                        <p className="text-sm text-gray-600">Follow these principles for the best user experience</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Define a clear outcome</h4>
                          <p className="text-sm text-gray-700">Users should know exactly what they&apos;ll achieve by the end</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Keep sessions focused</h4>
                          <p className="text-sm text-gray-700">Avoid trying to solve too many problems in one mentor</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">Guide users step-by-step</h4>
                          <p className="text-sm text-gray-700">Break complex tasks into manageable, sequential steps</p>
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
                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                          <div className="p-5">
                            <div className="flex items-start space-x-4 mb-4">
                              <div id="preview-icon" className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 id="preview-name" className="font-bold text-gray-900 mb-1 text-sm">Emergency Preparedness Coach</h3>
                                <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">Free</span>
                              </div>
                            </div>
                            <p id="preview-description" className="text-sm text-gray-600 mb-4 leading-relaxed">Build a personalized 72-hour emergency kit based on your household, location, and needs. Get step-by-step guidance for preparedness planning.</p>
                            <button type="button" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm">
                              Open Coach
                            </button>
                            <p id="preview-type" className="text-xs text-gray-500 mt-3 text-center">Chat Coach</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                          <p className="text-xs text-gray-700 leading-relaxed">This preview updates as you fill out the form. Changes are saved automatically.</p>
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
                    <button type="button" disabled className="px-4 lg:px-6 py-2.5 text-gray-500 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 hidden sm:block">
                      <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                      Back
                    </button>
                    <button type="button" className="px-6 lg:px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                      <span>Continue to Instructions</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
