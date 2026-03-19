"use client"

export default function NewMentorStep7Page() {
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
              <p className="text-xs text-gray-700 leading-relaxed">Review everything before publishing. You can always edit your mentor after it&apos;s live.</p>
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
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Preview &amp; Publish</h1>
                <p className="text-base lg:text-lg text-gray-600">Review your mentor and publish it when you&apos;re ready</p>
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
                    <div className="w-8 lg:w-12 h-0.5 bg-green-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Mentor Steps</span>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap lg:hidden">Steps</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-green-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Call To Action</span>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap lg:hidden">CTA</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-green-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Access &amp; Visibility</span>
                      <span className="font-medium text-gray-600 text-sm lg:text-base whitespace-nowrap lg:hidden">Access</span>
                    </div>
                    <div className="w-8 lg:w-12 h-0.5 bg-blue-500" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">7</div>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap hidden lg:inline">Preview &amp; Publish</span>
                      <span className="font-semibold text-gray-900 text-sm lg:text-base whitespace-nowrap lg:hidden">Publish</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="review-panel" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Review Your Mentor</h2>
                      <p className="text-sm text-gray-600">Everything looks good? Publish when ready.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Mentor Overview</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Mentor Name</p>
                            <p className="text-sm font-semibold text-gray-900">72-Hour Emergency Kit Builder</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Description</p>
                            <p className="text-sm text-gray-700">Build a personalized emergency preparedness plan for your household in 72 hours. Get step-by-step guidance on supplies, evacuation routes, and communication plans.</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Category</p>
                            <span className="inline-block px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">Emergency Preparedness</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Experience Summary</h3>
                        <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                          <li>Assess Your Household</li>
                          <li>Identify Essential Supplies</li>
                          <li>Plan Your Budget</li>
                          <li>Create Communication Plan</li>
                          <li>Review &amp; Complete</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Access Summary</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Free (Public Access)</span>
                          <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Public (Discoverable)</span>
                          <span className="px-2.5 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">Lead Capture: Off</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">CTA Summary</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Title</p>
                            <p className="text-sm font-medium text-gray-900">Get Your Emergency Plan</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Button Text</p>
                            <p className="text-sm font-medium text-gray-900">Download Now</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Link</p>
                            <p className="text-xs text-blue-600 font-medium truncate">https://example.com/download</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Edit</h3>
                        <div className="flex flex-wrap gap-3">
                          <a href="../step-1" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
                            Edit Basics (Step 1)
                          </a>
                          <a href="../step-4" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
                            Edit Steps (Step 4)
                          </a>
                          <a href="../step-6" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
                            Edit Access (Step 6)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <div id="live-preview" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-sm font-bold text-gray-900">Live Preview</h3>
                        <span className="text-xs text-gray-500">User view</span>
                      </div>

                      <div className="bg-gray-50 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                          <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
                            <h4 className="text-white font-bold text-sm">72-Hour Emergency Kit Builder</h4>
                            <p className="text-blue-100 text-xs mt-0.5">Your AI guide</p>
                          </div>

                          <div className="p-4 space-y-4 min-h-[200px]">
                            <div className="flex justify-start">
                              <div className="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%]">
                                <p className="text-xs text-gray-500 mb-1">Step 1 — Assess Your Household</p>
                                <p className="text-sm text-gray-800">How many people are in your household? Include adults and children.</p>
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <div className="bg-blue-100 rounded-lg rounded-tr-none px-4 py-2.5 max-w-[85%]">
                                <p className="text-sm text-gray-800">2 adults, 2 children</p>
                              </div>
                            </div>

                            <div className="border-t border-gray-200 pt-3">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  placeholder="Type your response..."
                                  readOnly
                                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                />
                                <button type="button" className="px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg">
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                            <p className="text-xs text-gray-700 leading-relaxed">This preview shows how users will experience your mentor. No functionality in this demo.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="wizard-navigation" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 mt-6 lg:mt-8 sticky bottom-0">
                <div className="flex items-center justify-between">
                  <a href="../step-6" className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    <span className="hidden sm:inline">Back</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <button type="button" className="px-4 lg:px-6 py-2.5 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300">
                      Save as Draft
                    </button>
                    <button type="button" className="px-6 lg:px-8 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      <span>Create Mentor</span>
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
