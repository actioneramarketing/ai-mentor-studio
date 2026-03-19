import Link from "next/link"
import { redirect } from "next/navigation"
import { createSupabaseServer } from "@/lib/db"

async function createPlan(formData: FormData) {
  "use server"

  const name = formData.get("name") as string
  const price = formData.get("price") as string
  const description = (formData.get("description") as string) || ""
  const studioId = formData.get("studioId") as string

  const supabase = createSupabaseServer()
  const { error } = await supabase
    .from("plans")
    .insert({
      studio_id: studioId,
      name,
      price,
      description,
    })
    .select()
    .single()

  if (error) throw error
  redirect(`/studios/${studioId}/settings`)
}

export default async function CreatePlanPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = await params

  return (
    <div className="bg-gray-50 font-sans">
      <header id="header" className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">AI Coach Library</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Admin Dashboard</p>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
                <span className="text-gray-900 font-medium">Prepared Life</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
                <span className="text-gray-900 font-medium">Settings</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
                <span>Create Plan</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <button type="button" id="user-menu-button" className="flex items-center space-x-2 sm:space-x-3 hover:bg-gray-50 rounded-xl px-2 sm:px-3 py-2 transition-colors duration-200">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Admin" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200" />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">admin@example.com</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 text-sm hidden sm:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                <div id="user-menu" className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
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
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        <aside id="sidebar" className="w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 lg:min-h-[calc(100vh-73px)] lg:sticky lg:top-[73px]">
          <nav className="p-4">
            <div className="space-y-1">
              <Link href="/studios" id="nav-workspaces" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.37 5.73zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                </svg>
                <span className="text-sm sm:text-base">Workspaces</span>
              </Link>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M15.32 3.55c.42-.32 1.05-.24 1.39.19l.87 1.15-.01.01 5.25 7.1c.35.47.14 1.15-.4 1.15H15.5c-.28 0-.54-.12-.72-.33l-3.26-4.22-1.21 1.58.01.01-2.32 3.03c-.22.29-.6.48-1 .48H2.21c-.55 0-.84-.68-.5-1.14l4.26-5.67.01-.01 2.37-3.16c.2-.27.55-.43.9-.43h2.95c.31 0 .62.1.88.29l1.54 1.22z" />
                </svg>
                <span className="text-sm sm:text-base">Coach Designer</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span className="text-sm sm:text-base">Create a Coach</span>
              </a>

              <div className="border-t border-gray-200 my-4" />

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
                <span className="text-sm sm:text-base">Site Settings</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
                <span className="text-sm sm:text-base">Instructions</span>
              </a>

              <a href="#" className="flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <svg className="w-5 h-5 text-base sm:text-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.93 8.43 14.07 8 16 8c.7 0 1.37.1 2 .27V12c0 2.21-1.79 4-4 4s-4-1.79-4-4H4c0 4.41 3.59 8 8 8z" />
                </svg>
                <span className="text-sm sm:text-base">Support</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hidden lg:block">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Create different plans for various user segments to maximize your monetization strategy.</p>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div id="page-header" className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Link href={`/studios/${studioId}/settings`} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </Link>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create New Plan</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">Set up pricing and access controls for your workspace mentors.</p>
                </div>
              </div>
            </div>

            <form action={createPlan}>
              <input type="hidden" name="studioId" value={studioId} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div id="plan-basics-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M5 8h14v2H5V8zm0 4h14v2H5v-2zm0 4h14v2H5v-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Plan Basics</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label htmlFor="plan-name" className="block text-sm font-semibold text-gray-900 mb-2">Plan Name</label>
                        <input type="text" id="plan-name" name="name" placeholder="e.g., Pro, Premium, Enterprise" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                        <p className="text-xs text-gray-500 mt-2">Choose a clear, memorable name for your plan.</p>
                      </div>

                      <div>
                        <label htmlFor="plan-description" className="block text-sm font-semibold text-gray-900 mb-2">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <textarea id="plan-description" name="description" rows={3} placeholder="Describe what makes this plan valuable..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 resize-none" />
                        <p className="text-xs text-gray-500 mt-2">Help users understand what they get with this plan.</p>
                      </div>
                    </div>
                  </div>

                  <div id="pricing-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Pricing</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Pricing Model</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <label className="relative cursor-pointer">
                            <input type="radio" name="pricing-model" value="free" className="peer sr-only" id="pricing-free" />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.94 12 18 10.83 14.92 8H20v6z" />
                                  </svg>
                                </div>
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500" />
                              </div>
                              <h4 className="font-semibold text-gray-900 text-sm">Free</h4>
                            </div>
                          </label>

                          <label className="relative cursor-pointer">
                            <input type="radio" name="pricing-model" value="one-time" className="peer sr-only" id="pricing-onetime" />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                  </svg>
                                </div>
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500" />
                              </div>
                              <h4 className="font-semibold text-gray-900 text-sm">One-time</h4>
                            </div>
                          </label>

                          <label className="relative cursor-pointer">
                            <input type="radio" name="pricing-model" value="subscription" className="peer sr-only" id="pricing-subscription" defaultChecked />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                                  </svg>
                                </div>
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500" />
                              </div>
                              <h4 className="font-semibold text-gray-900 text-sm">Subscription</h4>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div id="pricing-details" className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="plan-price" className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                              <input type="number" id="plan-price" name="price" defaultValue="29" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Billing Interval</label>
                            <div className="flex items-center h-full">
                              <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-1 w-full">
                                <button type="button" id="billing-monthly" className="flex-1 px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-sm transition-all duration-200">
                                  Monthly
                                </button>
                                <button type="button" id="billing-yearly" className="flex-1 px-4 py-2 text-gray-600 font-semibold rounded-lg transition-all duration-200 hover:bg-white">
                                  Yearly
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                            <p className="text-xs text-gray-700 leading-relaxed">Annual plans typically offer 15-20% discount compared to monthly pricing to encourage longer commitments.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="access-rules-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Access Rules</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Mentor Access</label>
                        <div className="space-y-3">
                          <label className="relative cursor-pointer block">
                            <input type="radio" name="access-type" value="all" className="peer sr-only" id="access-all" defaultChecked />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">All Mentors</h4>
                                    <p className="text-xs text-gray-600">Full access to every mentor in the workspace</p>
                                  </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                              </div>
                            </div>
                          </label>

                          <label className="relative cursor-pointer block">
                            <input type="radio" name="access-type" value="selected" className="peer sr-only" id="access-selected" />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">Selected Mentors</h4>
                                    <p className="text-xs text-gray-600">Choose specific mentors for this plan</p>
                                  </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div id="mentor-selection" className="hidden">
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Select Mentors</label>
                        <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-xl p-3">
                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 14H4v-2h11v2zm0-4H4v-2h11v2zm0-4H4V6h11v2z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">72-Hour Kit Planner</p>
                                <p className="text-xs text-gray-600">Emergency preparedness</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>

                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">Home Safety Advisor</p>
                                <p className="text-xs text-gray-600">Safety assessment</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>

                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">Fire Safety Expert</p>
                                <p className="text-xs text-gray-600">Fire prevention &amp; response</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>

                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">First Aid Coach</p>
                                <p className="text-xs text-gray-600">Medical emergencies</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>

                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M18 8h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-4 12H4V4h8v4h4v12zm-2-2v-4h-2v4h2zm-4 0v-4H6v4h2z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">Food Storage Planner</p>
                                <p className="text-xs text-gray-600">Long-term food prep</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>

                          <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">Security Consultant</p>
                                <p className="text-xs text-gray-600">Home &amp; personal security</p>
                              </div>
                            </div>
                            <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="feature-controls-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Feature Controls</h3>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Limit sessions per month</p>
                            <p className="text-xs text-gray-600">Set a monthly session cap for this plan</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="toggle-sessions" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200" />
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5" />
                        </div>
                      </label>

                      <div id="session-limit-input" className="hidden ml-14 mb-4">
                        <label htmlFor="session-limit" className="block text-sm font-semibold text-gray-900 mb-2">Maximum sessions per month</label>
                        <input type="number" id="session-limit" value="50" className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                      </div>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Limit mentor access</p>
                            <p className="text-xs text-gray-600">Restrict number of mentors users can chat with</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="toggle-mentors" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200" />
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5" />
                        </div>
                      </label>

                      <div id="mentor-limit-input" className="hidden ml-14 mb-4">
                        <label htmlFor="mentor-limit" className="block text-sm font-semibold text-gray-900 mb-2">Maximum mentors accessible</label>
                        <input type="number" id="mentor-limit" value="3" className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                      </div>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Priority access</p>
                            <p className="text-xs text-gray-600">Faster response times and priority support</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="toggle-priority" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200" />
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5" />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div id="visibility-section" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Visibility &amp; CTA</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Plan Visibility</label>
                        <div className="space-y-3">
                          <label className="relative cursor-pointer block">
                            <input type="radio" name="visibility" value="public" className="peer sr-only" defaultChecked />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">Public Plan</h4>
                                    <p className="text-xs text-gray-600">Visible to all users on pricing page</p>
                                  </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                              </div>
                            </div>
                          </label>

                          <label className="relative cursor-pointer block">
                            <input type="radio" name="visibility" value="hidden" className="peer sr-only" />
                            <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200 hover:border-gray-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">Hidden Plan</h4>
                                    <p className="text-xs text-gray-600">Only accessible via direct link or invite</p>
                                  </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cta-text" className="block text-sm font-semibold text-gray-900 mb-2">Call-to-Action Button Text</label>
                        <input type="text" id="cta-text" defaultValue="Get Started" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900" />
                        <p className="text-xs text-gray-500 mt-2">Examples: &quot;Upgrade Now&quot;, &quot;Start Free Trial&quot;, &quot;Subscribe&quot;</p>
                      </div>
                    </div>
                  </div>

                  <div id="action-buttons" className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sticky bottom-4 bg-gray-50 py-4 rounded-xl">
                    <Link href={`/studios/${studioId}/settings`} className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 order-2 sm:order-1 text-center">
                      Cancel
                    </Link>
                    <button type="submit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 order-1 sm:order-2 flex-1 sm:flex-initial">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span>Create Plan</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div id="preview-panel" className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-center space-x-2 mb-6">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900">Live Preview</h3>
                      </div>

                      <div className="border-2 border-gray-200 rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          </div>
                          <h3 id="preview-plan-name" className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                          <p id="preview-plan-description" className="text-sm text-gray-600 mb-4">Enter a description to see it here</p>
                        </div>

                        <div className="text-center mb-6">
                          <div className="flex items-baseline justify-center space-x-1">
                            <span className="text-4xl font-bold text-gray-900">$<span id="preview-price">29</span></span>
                            <span className="text-gray-600 font-medium">/<span id="preview-interval">month</span></span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-3 text-sm">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <span className="text-gray-700" id="preview-access">Full access to all mentors</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Unlimited conversations</span>
                          </div>
                          <div id="preview-session-limit" className="hidden flex items-center space-x-3 text-sm">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Up to <span id="preview-sessions">50</span> sessions/month</span>
                          </div>
                          <div id="preview-mentor-limit" className="hidden flex items-center space-x-3 text-sm">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Access to <span id="preview-mentors">3</span> mentors</span>
                          </div>
                          <div id="preview-priority" className="hidden flex items-center space-x-3 text-sm">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Priority support</span>
                          </div>
                        </div>

                        <button type="button" id="preview-cta" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
                          Get Started
                        </button>
                      </div>

                      <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                          </svg>
                          <div>
                            <p className="text-xs font-semibold text-gray-900 mb-1">Preview Tips</p>
                            <p className="text-xs text-gray-600 leading-relaxed">Changes you make to the form will update this preview in real-time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
