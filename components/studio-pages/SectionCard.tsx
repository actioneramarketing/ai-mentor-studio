"use client"

import type { StudioBuilderSection } from "@/lib/studio-pages/types"
import { SECTION_TYPE_LABELS } from "@/lib/studio-pages/types"

type SectionCardProps = {
  section: StudioBuilderSection
  onEdit: () => void
  onDelete: () => void
}

export function SectionCard({ section, onEdit, onDelete }: SectionCardProps) {
  const label = SECTION_TYPE_LABELS[section.type]

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <button
        type="button"
        className="cursor-grab text-gray-400 hover:text-gray-600 active:cursor-grabbing"
        aria-label="Reorder section"
        title="Drag to reorder (UI only)"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M10 4h4v4h-4V4zm0 6h4v4h-4v-4zm0 6h4v4h-4v-4z" />
        </svg>
      </button>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">Drag handle is visual only for now.</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
