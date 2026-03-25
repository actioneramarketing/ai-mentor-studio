"use client"

import { useRouter } from "next/navigation"

import type { StudioPageRecord } from "@/lib/studio-pages/types"

type PageListProps = {
  studioId: string
  pages: StudioPageRecord[]
  onDuplicate: (pageId: string) => void
  onDelete: (pageId: string) => void
}

function formatUpdated(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return "—"
  }
}

export function PageList({
  studioId,
  pages,
  onDuplicate,
  onDelete,
}: PageListProps) {
  const router = useRouter()

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-6 py-3">Page Name</th>
              <th className="px-6 py-3">Slug</th>
              <th className="px-6 py-3">Primary</th>
              <th className="px-6 py-3">Last Updated</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pages.map((page) => (
              <tr key={page.id} className="hover:bg-gray-50/80">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {page.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{page.slug}</td>
                <td className="px-6 py-4">
                  {page.primary ? (
                    <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                      Primary
                    </span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {formatUpdated(page.updatedAt)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        router.push(
                          `/studios/${studioId}/pages/${page.id}/builder`,
                        )
                      }
                      className="rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDuplicate(page.id)}
                      className="rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      Duplicate
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(page.id)}
                      className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
