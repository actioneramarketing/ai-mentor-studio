"use client"

import { useState } from "react"

import {
  SECTION_TYPE_LABELS,
  type StudioBuilderSection,
} from "@/lib/studio-pages/types"

type SectionEditorModalProps = {
  section: StudioBuilderSection
  onClose: () => void
  onSave: (section: StudioBuilderSection) => void
}

export function SectionEditorModal({
  section,
  onClose,
  onSave,
}: SectionEditorModalProps) {
  const [headline, setHeadline] = useState(
    () => (section.type === "hero" ? section.headline : ""),
  )
  const [subheadline, setSubheadline] = useState(
    () => (section.type === "hero" ? section.subheadline : ""),
  )
  const [buttonText, setButtonText] = useState(
    () => (section.type === "hero" ? section.buttonText : ""),
  )
  const [title, setTitle] = useState(
    () => (section.type === "generic" ? section.title : ""),
  )
  const [content, setContent] = useState(
    () => (section.type === "generic" ? section.content : ""),
  )

  const active = section

  const label =
    SECTION_TYPE_LABELS[active.type as keyof typeof SECTION_TYPE_LABELS] ??
    active.type

  function handleSave() {
    if (active.type === "hero") {
      onSave({
        ...active,
        headline,
        subheadline,
        buttonText,
      })
    } else if (active.type === "generic") {
      onSave({
        ...active,
        title,
        content,
      })
    } else {
      onClose()
    }
  }

  const showFooter = active.type === "hero" || active.type === "generic"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="section-editor-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="section-editor-title"
              className="text-lg font-semibold text-gray-900"
            >
              Edit {label}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Changes apply to this page only until you add persistence.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {active.type === "hero" && (
            <>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-900">
                  Headline
                </label>
                <input
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-900">
                  Subheadline
                </label>
                <input
                  value={subheadline}
                  onChange={(e) => setSubheadline(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-900">
                  Button Text
                </label>
                <input
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {active.type === "generic" && (
            <>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-900">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-900">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {active.type !== "hero" && active.type !== "generic" && (
            <p className="text-sm text-gray-600">
              Visual options for this block can be expanded later. For now,
              use Preview to see how it appears on the page.
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          {showFooter && (
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Save Section
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
