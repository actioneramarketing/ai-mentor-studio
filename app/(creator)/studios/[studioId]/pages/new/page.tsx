"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { use, useState } from "react"

import { appendPage, normalizeSlug } from "@/lib/studio-pages/storage"
import type { StudioPageRecord } from "@/lib/studio-pages/types"

export default function NewStudioPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = use(params)
  const router = useRouter()
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("/")
  const [primary, setPrimary] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const id = crypto.randomUUID()
    const page: StudioPageRecord = {
      id,
      name: name.trim() || "Untitled Page",
      slug: normalizeSlug(slug),
      primary,
      updatedAt: new Date().toISOString(),
    }
    appendPage(studioId, page)
    router.push(`/studios/${studioId}/pages/${id}/builder`)
  }

  return (
    <div className="min-h-0 bg-gray-50 font-sans">
      <main className="mx-auto max-w-2xl p-6">
        <div className="mb-8">
          <Link
            href={`/studios/${studioId}/settings`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Studio Settings
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Create Studio Page
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Name your page and set its URL. You can build sections next.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="page-name"
                className="mb-1 block text-sm font-semibold text-gray-900"
              >
                Page Name
              </label>
              <input
                id="page-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Main landing page"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="page-slug"
                className="mb-1 block text-sm font-semibold text-gray-900"
              >
                Slug
              </label>
              <input
                id="page-slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="/ or /join"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Paths like <span className="font-medium">/</span> or{" "}
                <span className="font-medium">/join</span>. A leading slash is
                added if you omit it.
              </p>
            </div>

            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Set as Primary Page
                </p>
                <p className="text-xs text-gray-600">
                  The primary page is highlighted in Studio Settings.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={primary}
                onClick={() => setPrimary((p) => !p)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  primary ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                    primary ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </label>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Create Page
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
