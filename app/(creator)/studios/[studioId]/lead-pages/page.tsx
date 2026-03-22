import Link from "next/link"

export default async function LeadPagesPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = await params

  const cards = [
    {
      id: "dropdown-1",
      title: "72-Hour Emergency Kit Guide",
      status: "Published",
      statusClass: "bg-green-100 text-green-700",
      statusIcon: "check",
      barClass: "from-green-500 to-emerald-500",
      description: "Build Your 72-Hour Emergency Kit in 10 Minutes",
      url: "yourdomain.com/emergency-kit-guide",
      leads: "342",
      conversion: "38%",
      conversionClass: "text-green-600",
      updated: "2 days ago",
    },
    {
      id: "dropdown-2",
      title: "Family Safety Planning Session",
      status: "Published",
      statusClass: "bg-green-100 text-green-700",
      statusIcon: "check",
      barClass: "from-green-500 to-emerald-500",
      description: "Create a comprehensive safety plan for your entire family in under 15 minutes",
      url: "yourdomain.com/family-safety-plan",
      leads: "218",
      conversion: "42%",
      conversionClass: "text-green-600",
      updated: "5 days ago",
    },
    {
      id: "dropdown-3",
      title: "Budget Preparedness Guide",
      status: "Draft",
      statusClass: "bg-gray-100 text-gray-700",
      statusIcon: "dot",
      barClass: "from-gray-400 to-gray-500",
      description: "Get prepared without breaking the bank - smart preparedness on any budget",
      url: "yourdomain.com/budget-prep-guide",
      leads: "0",
      conversion: "-",
      conversionClass: "text-gray-400",
      updated: "1 hour ago",
    },
    {
      id: "dropdown-4",
      title: "Wildfire Evacuation Planner",
      status: "Published",
      statusClass: "bg-green-100 text-green-700",
      statusIcon: "check",
      barClass: "from-green-500 to-emerald-500",
      description: "Create your personalized wildfire evacuation plan with location-specific guidance",
      url: "yourdomain.com/wildfire-evacuation",
      leads: "156",
      conversion: "29%",
      conversionClass: "text-green-600",
      updated: "1 week ago",
    },
    {
      id: "dropdown-5",
      title: "First Aid Training Guide",
      status: "Published",
      statusClass: "bg-green-100 text-green-700",
      statusIcon: "check",
      barClass: "from-green-500 to-emerald-500",
      description: "Learn essential first aid skills with interactive AI-guided training scenarios",
      url: "yourdomain.com/first-aid-training",
      leads: "489",
      conversion: "45%",
      conversionClass: "text-green-600",
      updated: "3 days ago",
    },
    {
      id: "dropdown-6",
      title: "Winter Storm Readiness",
      status: "Draft",
      statusClass: "bg-gray-100 text-gray-700",
      statusIcon: "dot",
      barClass: "from-gray-400 to-gray-500",
      description: "Prepare your home and family for severe winter weather conditions",
      url: "yourdomain.com/winter-storm-prep",
      leads: "0",
      conversion: "-",
      conversionClass: "text-gray-400",
      updated: "3 hours ago",
    },
  ]

  return (
    <div className="bg-gray-50 font-sans min-h-0">
      <main className="flex-1 overflow-y-auto">

          <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-[1800px] mx-auto">
            <div id="page-header" className="mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Lead Pages</h1>
                  <p className="mt-1 text-sm lg:text-base text-gray-600">
                    Create and manage lead capture pages that grant access to your AI mentors.
                  </p>
                </div>
                <Link
                  href={`/studios/${studioId}/lead-pages/create`}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                  <span>Create Lead Page</span>
                </Link>
              </div>
            </div>

            <div id="search-filters" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-5 mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search lead pages..."
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 bg-white text-sm font-medium text-gray-700">
                    <option>All Pages</option>
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 bg-white text-sm font-medium text-gray-700">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Most Leads</option>
                    <option>Highest Conversion</option>
                  </select>
                </div>
              </div>
            </div>

            <div id="lead-pages-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="lead-page-card group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${card.barClass}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">{card.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-1 ${card.statusClass} text-xs font-semibold rounded-full`}>
                          {card.statusIcon === "check" ? (
                            <svg className="w-2.5 h-2.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          ) : (
                            <svg className="w-2.5 h-2.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          )}
                          {card.status}
                        </span>
                      </div>
                      <div className="relative">
                        <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                        </button>
                        <div id={card.id} className="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                          <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                            <span>Edit</span>
                          </a>
                          <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                            <span>Preview</span>
                          </a>
                          <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                            </svg>
                            <span>Duplicate</span>
                          </a>
                          <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                            <span>View Submissions</span>
                          </a>
                          <div className="border-t border-gray-200" />
                          <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 text-sm text-red-600 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{card.description}</p>

                    <div className="flex items-center space-x-2 mb-5 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                      </svg>
                      <span className="text-xs text-gray-600 font-mono truncate">{card.url}</span>
                      <button type="button" className="ml-auto p-1.5 hover:bg-gray-200 rounded transition-colors duration-200">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900 mb-1">{card.leads}</div>
                        <div className="text-xs text-gray-500">Leads</div>
                      </div>
                      <div className="text-center border-l border-r border-gray-200">
                        <div className={`text-xl font-bold mb-1 ${card.conversionClass}`}>{card.conversion}</div>
                        <div className="text-xs text-gray-500">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-900 mb-1">{card.updated}</div>
                        <div className="text-xs text-gray-500">Updated</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex gap-2">
                      <button type="button" className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                        <span>Preview</span>
                      </button>
                      <button type="button" className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200 text-sm flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>

                  <div className="hidden group-hover:block absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            <div id="performance-overview" className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Performance Overview</h2>
                  <p className="text-sm text-gray-600">Total performance across all lead pages</p>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none bg-white text-sm font-medium text-gray-700">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>All Time</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">1,205</div>
                  <div className="text-sm text-gray-600">Total Leads</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">+5%</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">37%</div>
                  <div className="text-sm text-gray-600">Avg Conversion</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M4.5 18.75c0-1.09.68-2.03 1.64-2.42.48-.19.82-.67.82-1.2V4.5c0-.83-.67-1.5-1.5-1.5S3 3.67 3 4.5v10.83c0 .53.34 1.01.82 1.2.96.39 1.64 1.33 1.64 2.42zM9 3v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V3c0-.83-.67-1.5-1.5-1.5S9 2.17 9 3zm6.5 6.5V3c0-.83-.67-1.5-1.5-1.5S12.5 2.17 12.5 3v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5zm4.5 9.25c0 1.09-.68 2.03-1.64 2.42-.48.19-.82.67-.82 1.2V19.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-10.83c0-.53-.34-1.01-.82-1.2-.96-.39-1.64-1.33-1.64-2.42z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">4 / 6</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
                  <div className="text-sm text-gray-600">Active Pages</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">+18%</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">3,247</div>
                  <div className="text-sm text-gray-600">Page Views</div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}
