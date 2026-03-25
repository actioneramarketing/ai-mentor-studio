"use client"

import Link from "next/link"

type EmptyStateProps = {
  studioId: string
}

export function EmptyState({ studioId }: EmptyStateProps) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/80 p-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <svg
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">
        Build Your First Studio Page
      </h2>
      <p className="mt-2 max-w-md text-sm text-gray-600">
        Create a page to promote your studio, showcase your mentors, and offer
        access through your plans.
      </p>
      <Link
        href={`/studios/${studioId}/pages/new`}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Build Studio Page
      </Link>
    </div>
  )
}
