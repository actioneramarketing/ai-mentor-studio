"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import {
  deletePage,
  duplicatePage,
  loadPages,
} from "@/lib/studio-pages/storage"
import type { StudioPageRecord } from "@/lib/studio-pages/types"

import { EmptyState } from "./EmptyState"
import { PageList } from "./PageList"

type StudioPagesTabProps = {
  studioId: string
}

export function StudioPagesTab({ studioId }: StudioPagesTabProps) {
  const [pages, setPages] = useState<StudioPageRecord[]>([])

  function refresh() {
    setPages(loadPages(studioId))
  }

  useEffect(() => {
    queueMicrotask(() => {
      setPages(loadPages(studioId))
    })
  }, [studioId])

  function handleDuplicate(pageId: string) {
    duplicatePage(studioId, pageId)
    refresh()
  }

  function handleDelete(pageId: string) {
    if (!window.confirm("Delete this studio page? This cannot be undone."))
      return
    deletePage(studioId, pageId)
    refresh()
  }

  return (
    <div id="studio-pages-tab" className="tab-content space-y-6 p-6">
      {pages.length === 0 ? (
        <EmptyState studioId={studioId} />
      ) : (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Studio Pages
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Manage and build pages for your studio
              </p>
            </div>
            <div className="flex justify-end sm:shrink-0">
              <Link
                href={`/studios/${studioId}/pages/new`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                New Page
              </Link>
            </div>
          </div>
          <PageList
            studioId={studioId}
            pages={pages}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  )
}
