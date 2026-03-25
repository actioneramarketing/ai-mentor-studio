"use client"

import Link from "next/link"
import { Suspense, use, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import {
  AISetupInstructionsModal,
  type AISetupProvider,
} from "@/components/ai-config/AISetupInstructionsModal"
import { StudioPagesTab } from "@/components/studio-pages/StudioPagesTab"

const tabs = [
  { key: "general", label: "General" },
  { key: "access", label: "Access & Visibility" },
  { key: "ai", label: "AI Configuration" },
  { key: "plans", label: "Plans" },
  { key: "members", label: "Members" },
  { key: "studio-pages", label: "Studio Pages" },
  { key: "danger", label: "Danger Zone" },
] as const

type SettingsTabKey = (typeof tabs)[number]["key"]

const TAB_KEYS = new Set<string>(tabs.map((t) => t.key))

function TabIcon({ tabKey }: { tabKey: SettingsTabKey }) {
  switch (tabKey) {
    case "general":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
        </svg>
      )
    case "access":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      )
    case "ai":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    case "plans":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      )
    case "members":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      )
    case "studio-pages":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      )
    case "danger":
      return (
        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      )
  }
}

function StudioSettingsPageInner({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = use(params)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [aiSetupModal, setAiSetupModal] = useState<AISetupProvider | null>(
    null,
  )

  const activeTab = useMemo((): SettingsTabKey => {
    const tabParam = searchParams.get("tab")
    if (tabParam && TAB_KEYS.has(tabParam)) {
      return tabParam as SettingsTabKey
    }
    return "general"
  }, [searchParams])

  function navigateToTab(tabKey: SettingsTabKey) {
    if (tabKey === "general") {
      router.replace(`/studios/${studioId}/settings`)
      return
    }
    router.replace(`/studios/${studioId}/settings?tab=${tabKey}`)
  }

  return (
    <div className="bg-gray-50 font-sans min-h-0">
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
            <div id="page-header">
              <h1 className="text-2xl font-bold text-gray-900">Studio Settings</h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Manage your workspace configuration, access, and AI settings.
              </p>
            </div>

            <div id="tabs-navigation" className="border-b border-gray-200 overflow-x-auto">
              <div className="flex space-x-1 min-w-max">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => navigateToTab(key)}
                    className={`tab-button px-4 sm:px-6 py-3 text-sm font-semibold border-b-2 whitespace-nowrap ${activeTab === key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"}`}
                  >
                    <TabIcon tabKey={key} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
                {activeTab === "general" && (
                <div id="general-tab" className="tab-content">
                  <div id="workspace-basics-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm mb-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Studio Basics</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label htmlFor="workspace-name" className="block text-sm font-semibold text-gray-900 mb-2">Studio Name</label>
                        <input type="text" id="workspace-name" defaultValue="Prepared Life" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                      </div>

                      <div>
                        <label htmlFor="workspace-slug" className="block text-sm font-semibold text-gray-900 mb-2">Studio Slug</label>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500 text-sm">/w/</span>
                          <input type="text" id="workspace-slug" defaultValue="prepared-life" className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">This will be used in your workspace URL.</p>
                      </div>

                      <div>
                        <label htmlFor="workspace-description" className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                        <textarea id="workspace-description" rows={4} placeholder="Describe what this workspace is for..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 resize-none" defaultValue="Your trusted resource for emergency preparedness, survival skills, and practical readiness coaching." />
                        <p className="text-xs text-gray-500 mt-2">Help users understand the purpose of this workspace.</p>
                      </div>
                    </div>
                  </div>

                  <div id="branding-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Branding</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Logo</label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <button type="button" className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm mb-2">
                              <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 576 512" aria-hidden>
                                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.5-.1 3.8-.2c1.1 .1 2.2 .2 3.3 .2h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h56c10.4 0 20.7-4.2 28.2-11.6c7.3 7.4 17.5 11.6 28.2 11.6h16c22.1 0 40-17.9 40-40V285.9c0-1 0-1.9-.1-2.8v-69.6H543.8z" />
                              </svg>
                              Upload New Logo
                            </button>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG (max. 2MB)</p>
                          </div>
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
                </div>
                )}

                {activeTab === "access" && (
                <div id="access-tab" className="tab-content">
                  <div id="access-model-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Studio Access</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Control how users access your workspace and mentors.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="relative cursor-pointer">
                        <input type="radio" name="access" value="public" className="peer sr-only" defaultChecked />
                        <div className="p-5 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                              </svg>
                            </div>
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">Public</h4>
                          <p className="text-xs text-gray-600">Anyone can access</p>
                        </div>
                      </label>

                      <label className="relative cursor-pointer">
                        <input type="radio" name="access" value="private" className="peer sr-only" />
                        <div className="p-5 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                              </svg>
                            </div>
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">Private</h4>
                          <p className="text-xs text-gray-600">Invite only</p>
                        </div>
                      </label>

                      <label className="relative cursor-pointer">
                        <input type="radio" name="access" value="paid" className="peer sr-only" />
                        <div className="p-5 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                              </svg>
                            </div>
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">Paid</h4>
                          <p className="text-xs text-gray-600">Requires a plan</p>
                        </div>
                      </label>

                      <label className="relative cursor-pointer">
                        <input type="radio" name="access" value="lead-magnet" className="peer sr-only" />
                        <div className="p-5 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                              </svg>
                            </div>
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">Lead Magnet</h4>
                          <p className="text-xs text-gray-600">Users must opt in</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                )}

                {activeTab === "ai" && (
                <div id="ai-tab" className="tab-content">
                  <div className="w-full space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">AI Configuration</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Configure the AI provider that powers your mentors. Add a key for each provider you want to use—default models are chosen for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-lg bg-gray-900 flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M20 9V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c0 1.1.9 2 2 2v2h8v-2c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-2 0H6V7h12v2zm-4 6v-2h-4v2h4z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-gray-900">OpenAI (ChatGPT)</h4>
                              <p className="text-sm text-gray-600 mt-0.5">High-quality dialogue for mentor-style coaching.</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setAiSetupModal("openai")}
                            className="shrink-0 text-left text-sm font-semibold text-blue-600 hover:text-blue-700 sm:text-right"
                          >
                            View Setup Instructions
                          </button>
                        </div>

                        <div>
                          <label htmlFor="openai-api-key" className="block text-sm font-semibold text-gray-900 mb-2">API Key</label>
                          <div className="relative">
                            <input id="openai-api-key" type="password" defaultValue="sk-proj-xxxxxxxxxxxxxxxxxxxx" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" placeholder="sk-..." />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Toggle visibility">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">Your API key is encrypted and stored securely.</p>
                          <p className="text-sm text-gray-500 mt-2">Default model: GPT-4o (optimized for mentor conversations)</p>
                        </div>

                        <button type="button" className="mt-auto w-full px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M4 20h16v-8H4v8zm0-12h16V4H4v4z" />
                          </svg>
                          <span>Test Connection</span>
                        </button>
                      </div>

                      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-lg bg-orange-500 flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6l-2 2V4h16v10z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-gray-900">Anthropic (Claude)</h4>
                              <p className="text-sm text-gray-600 mt-0.5">Strong reasoning for thoughtful guidance and structured help.</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setAiSetupModal("anthropic")}
                            className="shrink-0 text-left text-sm font-semibold text-blue-600 hover:text-blue-700 sm:text-right"
                          >
                            View Setup Instructions
                          </button>
                        </div>

                        <div>
                          <label htmlFor="anthropic-api-key" className="block text-sm font-semibold text-gray-900 mb-2">API Key</label>
                          <div className="relative">
                            <input id="anthropic-api-key" type="password" defaultValue="sk-ant-api03-xxxxxxxxxxxx" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" placeholder="sk-ant-..." />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Toggle visibility">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">Your API key is encrypted and stored securely.</p>
                          <p className="text-sm text-gray-500 mt-2">Default model: Claude 3.5 Sonnet (optimized for reasoning and guidance)</p>
                        </div>

                        <button type="button" className="mt-auto w-full px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M4 20h16v-8H4v8zm0-12h16V4H4v4z" />
                          </svg>
                          <span>Test Connection</span>
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Your API keys power your mentors. Usage is billed directly by OpenAI or Anthropic based on your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {activeTab === "plans" && (
                <div id="plans-tab" className="tab-content">
                  <div id="plans-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Plans &amp; Access</h3>
                      </div>
                      <Link href={`/studios/${studioId}/plans/new`} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                        Add Plan
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Free Access</h4>
                            <p className="text-sm text-gray-600">Limited to 3 coaches</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <span>142 users</span>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Pro Plan</h4>
                            <p className="text-sm text-gray-600">$29/month - Unlimited coaches</p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Active</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <span>28 users</span>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Enterprise</h4>
                            <p className="text-sm text-gray-600">Custom pricing - White label</p>
                          </div>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Active</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <span>5 users</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button type="button" className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                        </svg>
                        <span>Manage Plans</span>
                      </button>
                    </div>
                  </div>
                </div>
                )}

                {activeTab === "members" && (
                <div id="members-tab" className="tab-content">
                  <div id="members-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Studio Members</h3>
                      </div>
                      <button type="button" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm">
                        <svg className="w-4 h-4 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-1V7H4v4H1v2h3v4h2v-4h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        Invite User
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                            <div>
                              <h4 className="font-semibold text-gray-900">John Anderson</h4>
                              <p className="text-sm text-gray-600">john@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Admin</span>
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Sarah Martinez</h4>
                              <p className="text-sm text-gray-600">sarah@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Pro</span>
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                              <p className="text-sm text-gray-600">michael@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Free</span>
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Emily Johnson</h4>
                              <p className="text-sm text-gray-600">emily@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Pro</span>
                            <button type="button" className="text-gray-400 hover:text-gray-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {activeTab === "studio-pages" && (
                  <StudioPagesTab studioId={studioId} />
                )}

                {activeTab === "danger" && (
                <div id="danger-tab" className="tab-content">
                  <div id="danger-zone-section" className="bg-white rounded-2xl border-2 border-red-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Danger Zone</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Irreversible actions that affect your entire workspace.</p>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <svg className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">Delete Studio</h4>
                          <p className="text-sm text-gray-700 mb-4">Once you delete a workspace, there is no going back. All mentors, configurations, and user data will be permanently deleted.</p>
                          <button type="button" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 inline-flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                            <span>Delete Studio</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                        </svg>
                        <p className="text-xs text-gray-700 leading-relaxed">Consider exporting your data or transferring ownership before deleting your workspace.</p>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {activeTab !== "studio-pages" ? (
                <div id="action-buttons" className="flex flex-col sm:flex-row sm:justify-end items-stretch sm:items-center gap-3 sm:gap-4 pt-4 sticky bottom-4 bg-gray-50 py-4 rounded-xl">
                  <button type="button" className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 order-2 sm:order-1">
                    Cancel
                  </button>
                  <button type="button" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 order-1 sm:order-2 flex-1 sm:flex-initial">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Save Changes</span>
                  </button>
                </div>
                ) : null}
            </div>
          </div>
      </main>
      {aiSetupModal !== null ? (
        <AISetupInstructionsModal
          provider={aiSetupModal}
          open
          onClose={() => setAiSetupModal(null)}
        />
      ) : null}
    </div>
  )
}

export default function StudioSettingsPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-50 font-sans min-h-0 p-6 text-sm text-gray-600">
          Loading settings…
        </div>
      }
    >
      <StudioSettingsPageInner params={params} />
    </Suspense>
  )
}
