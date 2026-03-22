"use client"

import Link from "next/link"
import { useState } from "react"

export default function StudioDetailPage() {
  const [activeTab, setActiveTab] = useState("mentors")

  return (
    <div className="bg-gray-50 font-sans">
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div id="workspace-context-header" className="mb-6">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-3">
              <Link href="/studios" className="hover:text-blue-600 transition-colors duration-200">Studios</Link>
              <svg className="w-3 h-3 text-xs" fill="currentColor" viewBox="0 0 320 512" aria-hidden><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
              <span className="text-gray-900 font-medium">Prepared Life</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 7.9-36.3 29.1-36.3 52.1V440c0 22.1 17.9 40 40 40H192V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V480h113.7c22.1 0 40-17.9 40-40V134.9c0-23-14.3-44.2-36.3-52.1L269.4 2.9z" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Prepared Life</h2>
                  <p className="text-sm sm:text-base text-gray-600">AI Coach Library</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="px-3 sm:px-5 py-2 sm:py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                  <span className="hidden sm:inline">Invite Team</span>
                </button>
                <button className="px-3 sm:px-5 py-2 sm:py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                  <span className="hidden sm:inline">Settings</span>
                </button>
              </div>
            </div>
          </div>

          <div id="top-level-tabs" className="mb-6 border-b border-gray-200">
            <div className="flex space-x-1 sm:space-x-2 overflow-x-auto">
              <button type="button" onClick={() => setActiveTab("mentors")} className={`tab-button px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap ${activeTab === "mentors" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-all duration-200"}`}>
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M320 0c17.7 0 32 14.3 32 32V64h92c6.4 0 12.5 2.5 17 7s7 10.6 7 17v24 64 24c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H428v64h52c13.3 0 24 10.7 24 24s-10.7 24-24 24H428v64h52c6.4 0 12.5 2.5 17 7s7 10.6 7 17v24 64 24c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H352v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H188c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V416 352 328c0-6.4 2.5-12.5 7-17s10.6-7 17-7h68V240H188c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V192 128 104c0-6.4 2.5-12.5 7-17s10.6-7 17-7h68V32c0-17.7 14.3-32 32-32zM176 88c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v24c0 4.4-3.6 8-8 8H184c-4.4 0-8-3.6-8-8V88zm-64 40V96h16v32H112zm-48 8H192v64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zM24 240H192v64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H192v64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H192v64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zM320 480c17.7 0 32-14.3 32-32V416h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H352v32c0 17.7-14.3 32-32 32zm160-96h16v32h-16V384zm48-176c0 13.3-10.7 24-24 24H448v64h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H448v64h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H448v24c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h80V288H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h96V176H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h96V88c0-4.4 3.6-8 8-8H456c4.4 0 8 3.6 8 8v96zm-72-64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" /></svg>
                Mentors
              </button>
              <button type="button" onClick={() => setActiveTab("access")} className={`tab-button px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap ${activeTab === "access" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-all duration-200"}`}>
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H80c-35.3 0-64 28.7-64 64v16 16 48 16 256 16 16 48 16c0 35.3 28.7 64 64 64H232V488c0 13.3 10.7 24 24 24s24-10.7 24-24V448h80c35.3 0 64-28.7 64-64V384 288 272 224 208 192 208 128 64 64 64H264V24zM96 192H208v96H96V192zm224 0H480v96H320V192zM96 320H208v96H96V320zm224 0H480v96H320V320z" /></svg>
                Access
              </button>
              <button type="button" onClick={() => setActiveTab("leads")} className={`tab-button px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap ${activeTab === "leads" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-all duration-200"}`}>
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                Leads
              </button>
            </div>
          </div>

          {activeTab === "mentors" && (
          <div id="mentors-tab-content" className="tab-content">
            <div id="action-bar" className="mb-6 sm:mb-8 bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 max-w-full sm:max-w-md">
                  <div className="relative">
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    <input type="text" placeholder="Search coaches..." className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 text-sm sm:text-base" />
                  </div>
                </div>
                <button id="create-coach-btn" className="px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                  <span>Create New Coach</span>
                </button>
              </div>
            </div>

            <div id="filter-tabs" className="mb-6">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <button type="button" className="px-4 sm:px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">All</button>
                <button type="button" className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Draft</button>
                <button type="button" className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Active</button>
                <button type="button" className="px-4 sm:px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Archived</button>
              </div>
            </div>

            <div id="coaches-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Coach Card 1 */}
              <div id="coach-card-1" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">72-Hour Kit Planner</h3>
                        <span className="text-xs text-gray-500 font-medium">Planner</span>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Helps users build personalized 72-hour emergency kits based on household size, location, and specific needs.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                      <span>Edited 2d ago</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" /></svg>
                      <span>v2.1</span>
                    </div>
                  </div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C87.6 186.8 64 245.9 64 304v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-36.5 18.7-70.6 49.6-92.5 42.2-29.7 95.5-45.5 142.4-45.5s100.2 15.8 142.4 45.5c30.9 21.9 49.6 56 49.6 92.5v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-58.1-23.6-117.2-64.1-156.3C406.8 109.6 353.2 80 288 80z" /></svg>
                      <span>Preview</span>
                    </button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H208zM48 464H208V272H48V464zm240 0V272H272V464H288 464z" /></svg>
                      <span>Duplicate</span>
                    </button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Coach Card 2 */}
              <div id="coach-card-2" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.1 57.5-30c15.2-8.9 25.2-16.1 29.1-19.4c3.2-2.6 7.1-5.9 11.1-9.5c4-3.6 8-7.4 11.9-11.4c3.9-4 7.7-8.1 11.2-12.1c3.5-4 6.9-8 10-12c3.1-4 6-8 8.7-12c2.7-4 5.2-7.9 7.5-11.8c2.3-3.8 4.4-7.5 6.3-11c1.9-3.5 3.6-6.8 5.1-9.9c1.5-3.1 2.8-6 3.9-8.6c1.1-2.6 2.1-5 2.8-7.1c.8-2.1 1.3-4 1.6-5.6c.3-1.6 .5-3 .5-4.1c0-5.2-.7-9.5-2.1-12.9c-1.4-3.4-3.3-6.1-5.8-8.1c-2.5-2-5.4-3.4-8.8-4.3c-3.4-.9-7.2-1.4-11.3-1.4s-8 .5-11.4 1.4c-3.4 .9-6.3 2.3-8.8 4.3c-2.5 2-4.4 4.7-5.8 8.1c-1.4 3.4-2.1 7.7-2.1 12.9z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Emergency Chat Guide</h3>
                        <span className="text-xs text-gray-500 font-medium">Chat Coach</span>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Real-time conversational guidance for emergency preparedness questions and immediate action steps.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg><span>Edited 1d ago</span></div>
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272z" /></svg><span>v1.8</span></div>
                  </div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C87.6 186.8 64 245.9 64 304v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-36.5 18.7-70.6 49.6-92.5 42.2-29.7 95.5-45.5 142.4-45.5s100.2 15.8 142.4 45.5c30.9 21.9 49.6 56 49.6 92.5v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-58.1-23.6-117.2-64.1-156.3C406.8 109.6 353.2 80 288 80z" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H208z" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7z" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 3 */}
              <div id="coach-card-3" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Fire Evacuation Simulator</h3>
                        <span className="text-xs text-gray-500 font-medium">Scenario Simulator</span>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Interactive scenario-based training for fire evacuation planning and emergency response procedures.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg><span>Edited 3d ago</span></div>
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80z" /></svg><span>v1.5</span></div>
                  </div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C87.6 186.8 64 245.9 64 304v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-36.5 18.7-70.6 49.6-92.5 42.2-29.7 95.5-45.5 142.4-45.5s100.2 15.8 142.4 45.5c30.9 21.9 49.6 56 49.6 92.5v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-58.1-23.6-117.2-64.1-156.3C406.8 109.6 353.2 80 288 80z" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H208z" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7z" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 4 - Draft */}
              <div id="coach-card-4" className="bg-white rounded-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-75">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M228.3 469.1L47.6 300.4c-4.2-3.2-4.2-9.5 0-12.7l180.7-168.6c4.2-3.2 10.6-1.6 13.5 2.8l43.2 76.3c2.9 4.4 2.9 10.2 0 14.6l-43.2 76.3c-2.9 4.4-9.3 6.1-13.5 2.8z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">First Aid Assistant</h3>
                        <span className="text-xs text-gray-500 font-medium">Chat Coach</span>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Draft</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Step-by-step first aid guidance and medical emergency response instructions for common situations.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg><span>Edited 5d ago</span></div>
                    <div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80z" /></svg><span>v0.3</span></div>
                  </div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C87.6 186.8 64 245.9 64 304v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-36.5 18.7-70.6 49.6-92.5 42.2-29.7 95.5-45.5 142.4-45.5s100.2 15.8 142.4 45.5c30.9 21.9 49.6 56 49.6 92.5v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-58.1-23.6-117.2-64.1-156.3C406.8 109.6 353.2 80 288 80z" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H208z" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7z" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 5 - Water Storage Planner */}
              <div id="coach-card-5" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M151.6 42.4C145.5 35.8 137 32 128 32H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64c9 0 17.5-3.8 23.6-10.4z" /></svg></div>
                      <div><h3 className="text-base sm:text-lg font-bold text-gray-900">Water Storage Planner</h3><span className="text-xs text-gray-500 font-medium">Planner</span></div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Calculate water storage needs and create customized water emergency preparedness plans for households.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500"><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0z" /></svg><span>Edited 4d ago</span></div><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80" /></svg><span>v1.2</span></div></div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 6 - Power Outage Simulator */}
              <div id="coach-card-6" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-sm"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.5-8-39.9-1.8l-48 24C240.4 47.9 233 64 233 82V192 64 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V192 82c0 18-7.4 34.1-20 45.9l-48 24c-11.5 6.2-22 15.9-28.6 27.9s-8.6 25.8-5.2 39.5z" /></svg></div>
                      <div><h3 className="text-base sm:text-lg font-bold text-gray-900">Power Outage Simulator</h3><span className="text-xs text-gray-500 font-medium">Scenario Simulator</span></div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Interactive training for managing extended power outages and maintaining safety during electrical emergencies.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500"><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0z" /></svg><span>Edited 1w ago</span></div><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80" /></svg><span>v2.0</span></div></div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 7 - Home Safety Checklist - Draft */}
              <div id="coach-card-7" className="bg-white rounded-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-75">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M303.8 216.2c-12.4 6-26.5 9.4-39.8 9.4s-27.4-3.4-39.8-9.4c-12.5-6-23.5-14.5-33.4-24.3C221.5 181.9 208 159.8 208 136c0-35.3 28.7-64 64-64s64 28.7 64 64c0 23.8-13.5 45.9-23.4 56.1-9.9 9.8-20.9 18.3-33.4 24.3z" /></svg></div>
                      <div><h3 className="text-base sm:text-lg font-bold text-gray-900">Home Safety Checklist</h3><span className="text-xs text-gray-500 font-medium">Planner</span></div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Draft</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Comprehensive home safety assessment tool with room-by-room preparedness recommendations.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500"><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0z" /></svg><span>Edited 1w ago</span></div><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80" /></svg><span>v0.5</span></div></div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 8 - Weather Emergency Guide */}
              <div id="coach-card-8" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-sm"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 0c-69.6 0-126 56.4-126 126 0 56.3 37.1 104 88.5 119.9-21.9 17.4-35.5 44.3-35.5 74.1 0 51.9 42.1 94 94 94s94-42.1 94-94c0-29.8-13.6-56.7-35.5-74.1C424.9 230 462 182.3 462 126 462 56.4 405.6 0 288 0z" /></svg></div>
                      <div><h3 className="text-base sm:text-lg font-bold text-gray-900">Weather Emergency Guide</h3><span className="text-xs text-gray-500 font-medium">Chat Coach</span></div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Real-time guidance for severe weather preparation and response across different climate conditions.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500"><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0z" /></svg><span>Edited 6d ago</span></div><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80" /></svg><span>v1.9</span></div></div>
                  <button type="button" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm sm:text-base">Edit Coach</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M288 80" /></svg><span>Preview</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M208 0" /></svg><span>Duplicate</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

              {/* Coach Card 9 - Legacy Kit Builder - Archived */}
              <div id="coach-card-9" className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden group hover:shadow-lg opacity-50">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-sm"><svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" /></svg></div>
                      <div><h3 className="text-base sm:text-lg font-bold text-gray-900">Legacy Kit Builder</h3><span className="text-xs text-gray-500 font-medium">Planner</span></div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Archived</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Deprecated version of emergency kit planning tool. Replaced by 72-Hour Kit Planner.</p>
                  <div className="flex items-center space-x-4 mb-6 text-xs text-gray-500"><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0z" /></svg><span>Edited 3w ago</span></div><div className="flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M160 80" /></svg><span>v1.0</span></div></div>
                  <button type="button" disabled className="w-full px-4 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl cursor-not-allowed mb-3 text-sm sm:text-base">Archived</button>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M48 248v24c0 6.6 5.4 12 12 12h60.6l-35.3 43.5c-4.7 5.8-4.2 14.2 1.2 19.4z" /></svg><span>Restore</span></button>
                    <button type="button" className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M135.2 17.7" /></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>

            </div>

            <div id="stats-section" className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Total Coaches</span>
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M320 0c17.7 0 32 14.3 32 32V64h92c6.4 0 12.5 2.5 17 7s7 10.6 7 17v24 64 24c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H428v64h52c13.3 0 24 10.7 24 24s-10.7 24-24 24H428v64h52c6.4 0 12.5 2.5 17 7s7 10.6 7 17v24 64 24c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H352v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H188c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V416 352 328c0-6.4 2.5-12.5 7-17s10.6-7 17-7h68V240H188c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V192 128 104c0-6.4 2.5-12.5 7-17s10.6-7 17-7h68V32c0-17.7 14.3-32 32-32z" /></svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">9</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Active</span>
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">6</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">In Draft</span>
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M410.3 231l11.3-11.3-22.6-22.6-11.3 11.3-33.9 33.8-22.6-22.6L344 182.6l-22.6 22.6L301.4 256 278.6 233.4 256 211l22.6-22.6 22.6-22.6-22.6-22.6L256 120.4l22.6-22.6 33.9-33.9 11.3-11.3-22.6-22.6-11.3 11.3-33.9 33.8-22.6 22.6L233.4 256l-22.6 22.6L211 301.4 233.4 324 256 346.6l22.6-22.6 22.6-22.6 22.6 22.6 22.6 22.6-22.6 22.6-22.6 22.6L324 478.6l22.6 22.6 11.3 11.3 22.6-22.6-11.3-11.3-33.9-33.9-22.6-22.6 22.6-22.6L478.6 324l22.6-22.6 11.3-11.3-22.6-22.6-11.3 11.3-33.9 33.9-22.6 22.6L434.6 256l22.6-22.6 33.9-33.9z" /></svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Archived</span>
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm400-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM48 240a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" /></svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>
          )}

          {activeTab === "access" && (
          <div id="access-tab-content" className="tab-content">
            <div className="mb-6 sm:mb-8 bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
                <div><h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Users with Access</h3><p className="text-sm text-gray-600">Manage who can access mentors in this workspace</p></div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button type="button" className="px-4 py-2.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128z" /></svg><span>Add User</span></button>
                  <button type="button" className="px-4 py-2.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64z" /></svg><span>Invite User</span></button>
                  <button type="button" className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M579.8 267.7c-18.1-5.1-37.9-.8-51.2 11.2L512 284.5 512 64c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64V284.5" /></svg><span>Generate Link</span></button>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  <button type="button" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg text-sm whitespace-nowrap">All Sources</button>
                  <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg text-sm whitespace-nowrap">Lead Page</button>
                  <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg text-sm whitespace-nowrap">Invite</button>
                  <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg text-sm whitespace-nowrap">Manual</button>
                  <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg text-sm whitespace-nowrap">Plan</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">User</th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Access Type</th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Source</th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden sm:table-cell">Mentors</th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-right py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><div className="flex items-center space-x-3"><img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" /><div><p className="text-sm font-semibold text-gray-900">Sarah Johnson</p><p className="text-xs text-gray-500">sarah.j@email.com</p></div></div></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Pro</span></td><td className="py-4 px-4"><span className="text-xs sm:text-sm text-gray-700">Lead Page</span></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">All (9)</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium mr-2 sm:mr-3">View</button><button type="button" className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><div className="flex items-center space-x-3"><img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" /><div><p className="text-sm font-semibold text-gray-900">Michael Chen</p><p className="text-xs text-gray-500">m.chen@email.com</p></div></div></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Free</span></td><td className="py-4 px-4"><span className="text-xs sm:text-sm text-gray-700">Invite</span></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">3 mentors</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium mr-2 sm:mr-3">View</button><button type="button" className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><div className="flex items-center space-x-3"><img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" /><div><p className="text-sm font-semibold text-gray-900">Emma Davis</p><p className="text-xs text-gray-500">emma.d@email.com</p></div></div></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Custom</span></td><td className="py-4 px-4"><span className="text-xs sm:text-sm text-gray-700">Manual</span></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">5 mentors</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium mr-2 sm:mr-3">View</button><button type="button" className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><div className="flex items-center space-x-3"><img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" /><div><p className="text-sm font-semibold text-gray-900">James Wilson</p><p className="text-xs text-gray-500">j.wilson@email.com</p></div></div></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Pro</span></td><td className="py-4 px-4"><span className="text-xs sm:text-sm text-gray-700">Plan</span></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">All (9)</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Revoked</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium mr-2 sm:mr-3">View</button><button type="button" className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="access-empty-state" className="hidden bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 sm:p-16 text-center">
              <div className="max-w-lg mx-auto"><div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6"><svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" fill="currentColor" viewBox="0 0 576 512" aria-hidden><path d="M312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H80c-35.3 0-64 28.7-64 64v16 16 48 16 256 16 16 48 16c0 35.3 28.7 64 64 64H232V488c0 13.3 10.7 24 24 24s24-10.7 24-24V448h80c35.3 0 64-28.7 64-64V384 288 272 224 208 192 208 128 64 64 64H264V24z" /></svg></div><h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">No Users Yet</h3><p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">Start by inviting users or creating a lead capture page to grow your audience.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><button type="button" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64z" /></svg><span>Invite Users</span></button><button type="button" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl inline-flex items-center space-x-2 w-full sm:w-auto justify-center"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" /></svg><span>Create Lead Page</span></button></div>            </div>
          </div>
          </div>
          )}

          {activeTab === "leads" && (
          <div id="leads-tab-content" className="tab-content">
            <div className="mb-6 sm:mb-8 bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
                <div><h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Captured Leads</h3><p className="text-sm text-gray-600">View and manage all leads from your lead capture pages</p></div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button type="button" className="px-4 py-2.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl inline-flex items-center space-x-2 text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32z" /></svg><span>Export</span></button>
                  <button type="button" className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl inline-flex items-center space-x-2 text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg><span className="hidden sm:inline">Create Lead Page</span><span className="sm:hidden">New</span></button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full"><thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Name</th><th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Email</th><th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden sm:table-cell">Source Page</th><th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Date Captured</th><th className="text-left py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Status</th><th className="text-right py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700">Actions</th></tr></thead><tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><p className="text-sm font-semibold text-gray-900">Alex Martinez</p></td><td className="py-4 px-4"><p className="text-xs sm:text-sm text-gray-700">alex.m@email.com</p></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">Emergency Kit Guide</span></td><td className="py-4 px-4 hidden lg:table-cell"><span className="text-xs sm:text-sm text-gray-500">Jan 15, 2025</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">New</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><p className="text-sm font-semibold text-gray-900">Lisa Anderson</p></td><td className="py-4 px-4"><p className="text-xs sm:text-sm text-gray-700">lisa.a@email.com</p></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">Home Safety Checklist</span></td><td className="py-4 px-4 hidden lg:table-cell"><span className="text-xs sm:text-sm text-gray-500">Jan 14, 2025</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Contacted</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><p className="text-sm font-semibold text-gray-900">David Kim</p></td><td className="py-4 px-4"><p className="text-xs sm:text-sm text-gray-700">d.kim@email.com</p></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">Emergency Kit Guide</span></td><td className="py-4 px-4 hidden lg:table-cell"><span className="text-xs sm:text-sm text-gray-500">Jan 13, 2025</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Converted</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button></td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50"><td className="py-4 px-4"><p className="text-sm font-semibold text-gray-900">Rachel Foster</p></td><td className="py-4 px-4"><p className="text-xs sm:text-sm text-gray-700">rachel.f@email.com</p></td><td className="py-4 px-4 hidden sm:table-cell"><span className="text-xs sm:text-sm text-gray-700">Weather Prep Guide</span></td><td className="py-4 px-4 hidden lg:table-cell"><span className="text-xs sm:text-sm text-gray-500">Jan 12, 2025</span></td><td className="py-4 px-4"><span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">New</span></td><td className="py-4 px-4 text-right"><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button></td></tr>
                  </tbody></table>
              </div>
            </div>
            <div id="leads-empty-state" className="hidden bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 sm:p-16 text-center">
              <div className="max-w-lg mx-auto"><div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6"><svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" fill="currentColor" viewBox="0 0 640 512" aria-hidden><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg></div><h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">No Leads Yet</h3><p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">Create your first lead capture page to start collecting interested users for your AI coaches.</p><button type="button" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg inline-flex items-center space-x-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg><span>Create Lead Page</span></button>            </div>
          </div>
          </div>
          )}
        </main>

      {/* User Access Detail Drawer - hidden */}
      <div id="user-access-drawer" className="fixed inset-0 z-[60] hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" id="drawer-overlay" />
        <div className="absolute right-0 top-0 h-full w-full sm:w-[480px] lg:w-[560px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300" id="drawer-content">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img id="drawer-user-avatar" src="" alt="" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                <div>
                  <h3 id="drawer-user-name" className="text-lg font-bold text-gray-900" />
                  <p id="drawer-user-email" className="text-sm text-gray-600" />
                </div>
              </div>
              <button type="button" id="close-drawer-btn" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Access Overview</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Access Type</span><span id="drawer-access-type" className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full" /></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Source</span><span id="drawer-source" className="text-sm font-medium text-gray-900" /></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Date Granted</span><span id="drawer-date-granted" className="text-sm font-medium text-gray-900" /></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Status</span><span id="drawer-status" className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full" /></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4"><h4 className="text-sm font-semibold text-gray-900">Mentor Access</h4><button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center space-x-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg><span>Add</span></button></div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300"><div className="flex items-center space-x-3"><div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5z" /></svg></div><span className="text-sm font-medium text-gray-900">72-Hour Kit Planner</span></div><button type="button" className="text-gray-400 hover:text-red-600"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button></div>
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300"><div className="flex items-center space-x-3"><div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9z" /></svg></div><span className="text-sm font-medium text-gray-900">Emergency Chat Guide</span></div><button type="button" className="text-gray-400 hover:text-red-600"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button></div>
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300"><div className="flex items-center space-x-3"><div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 448 512" aria-hidden><path d="M159.3 5.4C172.1-1.8 187.9-1.8 200.7 5.4l192 112C405.4 127.1 416 149.6 416 176v160c0 26.4-10.6 48.9-23.3 58.6l-192 112c-12.7 7.2-28.5 7.2-41.3 0l-192-112C10.6 384.9 0 362.4 0 336V176c0-26.4 10.6-48.9 23.3-58.6l192-112z" /></svg></div><span className="text-sm font-medium text-gray-900">Fire Evacuation Simulator</span></div><button type="button" className="text-gray-400 hover:text-red-600"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button></div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Access Scope</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none" defaultValue="Full Studio Access"><option>Single Mentor</option><option>Multiple Mentors</option><option>Full Studio Access</option></select>
                </div>
              </div>
              <div id="source-details-section"><h4 className="text-sm font-semibold text-gray-900 mb-4">Source Details</h4><div id="source-details-content" className="bg-gray-50 rounded-xl p-4 space-y-3" /></div>
              <div><h4 className="text-sm font-semibold text-gray-900 mb-4">Activity Snapshot</h4><div className="grid grid-cols-3 gap-3"><div className="bg-white border border-gray-200 rounded-lg p-3 text-center"><p className="text-xs text-gray-600 mb-1">Last Active</p><p id="drawer-last-active" className="text-sm font-bold text-gray-900" /></div><div className="bg-white border border-gray-200 rounded-lg p-3 text-center"><p className="text-xs text-gray-600 mb-1">Conversations</p><p id="drawer-conversations" className="text-sm font-bold text-gray-900" /></div><div className="bg-white border border-gray-200 rounded-lg p-3 text-center"><p className="text-xs text-gray-600 mb-1">Mentors Used</p><p id="drawer-mentors-used" className="text-sm font-bold text-gray-900" /></div></div></div>
            </div>
            <div className="border-t border-gray-200 p-6 space-y-3">
              <button type="button" id="drawer-resend-invite-btn" className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 hidden"><svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64z" /></svg>Resend Invite</button>
              <button type="button" className="w-full px-4 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200"><svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>Upgrade Access</button>
              <button type="button" className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200"><svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3L406.3 320c22.1-31.2 35.8-69.6 35.8-112c0-106-86-192-192-192c-42.4 0-80.8 13.7-112 35.8L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>Revoke Access</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invite User Modal - hidden */}
      <div id="invite-user-modal" className="fixed inset-0 z-[70] hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" id="invite-modal-overlay" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden transform scale-95 opacity-0 transition-all duration-300" id="invite-modal-content">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Invite User to This AI Studio</h3>
              <button type="button" id="close-invite-modal-btn" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"><svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 384 512" aria-hidden><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
            </div>
            <div className="overflow-y-auto p-6 space-y-6" style={{ maxHeight: "calc(90vh - 180px)" }}>
              <div><label className="block text-sm font-semibold text-gray-900 mb-2">Email Address(es) <span className="text-red-500">*</span></label><textarea id="invite-emails-input" rows={3} placeholder="Enter email addresses (comma-separated for multiple users)&#10;e.g., user1@email.com, user2@email.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 text-sm resize-none" /><p className="text-xs text-gray-500 mt-2">Separate multiple email addresses with commas</p></div>
              <div><label className="block text-sm font-semibold text-gray-900 mb-3">Access Type <span className="text-red-500">*</span></label><div className="grid grid-cols-1 sm:grid-cols-3 gap-3"><label className="relative"><input type="radio" name="access-type" value="free" className="peer sr-only" defaultChecked /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-300"><div className="flex items-center justify-between mb-2"><span className="text-sm font-semibold text-gray-900">Free</span><svg className="w-5 h-5 text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></div><p className="text-xs text-gray-600">Basic access to selected mentors</p></div></label><label className="relative"><input type="radio" name="access-type" value="pro" className="peer sr-only" /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-purple-600 peer-checked:bg-purple-50 hover:border-gray-300"><div className="flex items-center justify-between mb-2"><span className="text-sm font-semibold text-gray-900">Pro</span><svg className="w-5 h-5 text-purple-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></div><p className="text-xs text-gray-600">Full access to all mentors</p></div></label><label className="relative"><input type="radio" name="access-type" value="custom" className="peer sr-only" /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:border-gray-300"><div className="flex items-center justify-between mb-2"><span className="text-sm font-semibold text-gray-900">Custom</span><svg className="w-5 h-5 text-amber-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></div><p className="text-xs text-gray-600">Custom mentor selection</p></div></label></div></div>
              <div id="access-scope-section"><label className="block text-sm font-semibold text-gray-900 mb-3">Access Scope <span className="text-red-500">*</span></label><div className="space-y-3"><label className="block"><input type="radio" name="access-scope" value="single" className="peer sr-only" defaultChecked /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-50"><div className="flex items-center justify-between mb-3"><div className="flex items-center space-x-2"><svg className="w-5 h-5 text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg><span className="text-sm font-semibold text-gray-900">Single Mentor</span></div></div><select id="single-mentor-select" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none hidden peer-checked:block"><option value="">Select a mentor...</option><option value="72-hour-kit">72-Hour Kit Planner</option><option value="emergency-chat">Emergency Chat Guide</option><option value="fire-evacuation">Fire Evacuation Simulator</option><option value="first-aid">First Aid Assistant</option><option value="water-storage">Water Storage Planner</option><option value="power-outage">Power Outage Simulator</option><option value="home-safety">Home Safety Checklist</option><option value="weather-emergency">Weather Emergency Guide</option></select></div></label><label className="block"><input type="radio" name="access-scope" value="multiple" className="peer sr-only" /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-50"><div className="flex items-center justify-between mb-3"><div className="flex items-center space-x-2"><svg className="w-5 h-5 text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg><span className="text-sm font-semibold text-gray-900">Multiple Mentors</span></div></div><div id="multiple-mentors-list" className="space-y-2 hidden peer-checked:block" /></div></label><label className="block"><input type="radio" name="access-scope" value="full" className="peer sr-only" /><div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-50"><div className="flex items-center space-x-2"><svg className="w-5 h-5 text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg><span className="text-sm font-semibold text-gray-900">Full Studio Access</span></div><p className="text-xs text-gray-600 mt-2 ml-6">Access to all current and future mentors</p></div></label></div></div>
              <div><label className="block text-sm font-semibold text-gray-900 mb-2">Personal Message <span className="text-gray-500 font-normal">(Optional)</span></label><textarea id="invite-message-input" rows={4} placeholder="You've been invited to access your AI mentor. Get personalized guidance and support tailored to your needs. Click the link below to get started!" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 text-sm resize-none" /><p className="text-xs text-gray-500 mt-2">This message will be included in the invitation email</p></div>
            </div>
            <div className="border-t border-gray-200 p-6 bg-gray-50"><div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3"><button type="button" id="cancel-invite-btn" className="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all duration-200">Cancel</button><button type="button" id="send-invite-btn" className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l200.1-840C434.9 17.1 419.4 0 399.7 0H112.3c-19.7 0-35.1 17.1-31.8 36.7l64 256z" /></svg><span>Send Invite</span></button></div></div>
          </div>
        </div>
      </div>

      {/* Success Toast - hidden */}
      <div id="success-toast" className="fixed top-6 right-6 z-[80] hidden">
        <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 transform translate-x-full transition-transform duration-300" id="success-toast-content">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" aria-hidden><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></div>
          <div><p className="font-semibold">Invitation Sent!</p><p className="text-sm text-green-100">User has been added to the access list</p></div>
        </div>
      </div>
    </div>
  )
}
