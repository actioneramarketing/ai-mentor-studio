"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { use, useEffect, useRef, useState } from "react"

import { SectionCard } from "@/components/studio-pages/SectionCard"
import { SectionEditorModal } from "@/components/studio-pages/SectionEditorModal"
import { createEmptySection } from "@/lib/studio-pages/sections-factory"
import {
  loadPages,
  loadSections,
  saveSections,
  updatePageFields,
} from "@/lib/studio-pages/storage"
import type {
  StudioBuilderSection,
  StudioSectionType,
} from "@/lib/studio-pages/types"
import { SECTION_TYPE_LABELS } from "@/lib/studio-pages/types"

const ADD_OPTIONS: { type: StudioSectionType; label: string }[] = [
  { type: "hero", label: SECTION_TYPE_LABELS.hero },
  { type: "mentors", label: SECTION_TYPE_LABELS.mentors },
  { type: "plans", label: SECTION_TYPE_LABELS.plans },
  { type: "features", label: SECTION_TYPE_LABELS.features },
  { type: "cta", label: SECTION_TYPE_LABELS.cta },
  { type: "generic", label: SECTION_TYPE_LABELS.generic },
]

function PreviewBody({ sections }: { sections: StudioBuilderSection[] }) {
  return (
    <div className="space-y-4">
      {sections.length === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-600">
          No sections yet. Add a section in the builder.
        </p>
      ) : (
        sections.map((s) => <PreviewSection key={s.id} section={s} />)
      )}
    </div>
  )
}

function PreviewSection({ section }: { section: StudioBuilderSection }) {
  if (section.type === "hero") {
    return (
      <section className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-sm">
        <h2 className="text-2xl font-bold">
          {section.headline || "Headline goes here"}
        </h2>
        <p className="mt-2 text-sm text-blue-100">
          {section.subheadline || "Supporting subheadline for your studio page."}
        </p>
        <button
          type="button"
          className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700"
        >
          {section.buttonText || "Call to action"}
        </button>
      </section>
    )
  }

  if (section.type === "generic") {
    return (
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          {section.title || "Section title"}
        </h3>
        <p className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
          {section.content || "Add body copy for this section."}
        </p>
      </section>
    )
  }

  const label = SECTION_TYPE_LABELS[section.type]
  return (
    <section className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700 shadow-sm">
      <p className="font-semibold text-gray-900">{label}</p>
      <p className="mt-1 text-gray-600">
        Placeholder preview for this block type.
      </p>
    </section>
  )
}

function PreviewModal({
  open,
  pageName,
  sections,
  onClose,
}: {
  open: boolean
  pageName: string
  sections: StudioBuilderSection[]
  onClose: () => void
}) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="preview-title"
              className="text-lg font-semibold text-gray-900"
            >
              Preview: {pageName || "Untitled"}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Stacked layout with basic styling only.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close preview"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div className="mt-6">
          <PreviewBody sections={sections} />
        </div>
      </div>
    </div>
  )
}

export default function StudioPageBuilderPage({
  params,
}: {
  params: Promise<{ studioId: string; pageId: string }>
}) {
  const { studioId, pageId } = use(params)
  const router = useRouter()
  const [pageName, setPageName] = useState("")
  const [sections, setSections] = useState<StudioBuilderSection[]>([])
  const [ready, setReady] = useState(false)
  const [editorSection, setEditorSection] = useState<StudioBuilderSection | null>(
    null,
  )
  const [previewOpen, setPreviewOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const addMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    queueMicrotask(() => {
      const pages = loadPages(studioId)
      const page = pages.find((p) => p.id === pageId)
      if (!page) {
        router.replace(`/studios/${studioId}/settings`)
        return
      }
      setPageName(page.name)
      setSections(loadSections(studioId, pageId))
      setReady(true)
    })
  }, [studioId, pageId, router])

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!addMenuRef.current?.contains(e.target as Node)) {
        setAddOpen(false)
      }
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [])

  function persistSections(next: StudioBuilderSection[]) {
    setSections(next)
    saveSections(studioId, pageId, next)
  }

  function handleSavePage() {
    updatePageFields(studioId, pageId, {
      name: pageName.trim() || "Untitled Page",
      updatedAt: new Date().toISOString(),
    })
    saveSections(studioId, pageId, sections)
  }

  function addSection(type: StudioSectionType) {
    const created = createEmptySection(type)
    const next = [...sections, created]
    persistSections(next)
    setAddOpen(false)
  }

  function removeSection(id: string) {
    persistSections(sections.filter((s) => s.id !== id))
  }

  function saveEditedSection(updated: StudioBuilderSection) {
    persistSections(sections.map((s) => (s.id === updated.id ? updated : s)))
    setEditorSection(null)
  }

  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center bg-gray-50 text-sm text-gray-600">
        Loading builder…
      </div>
    )
  }

  return (
    <div className="min-h-0 bg-gray-50 font-sans">
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <label htmlFor="builder-page-name" className="sr-only">
              Page name
            </label>
            <input
              id="builder-page-name"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
              className="w-full max-w-xl truncate rounded-xl border border-gray-200 px-4 py-2.5 text-lg font-semibold text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
            <Link
              href={`/studios/${studioId}/settings`}
              className="mt-2 inline-block text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              ← Studio Settings
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={handleSavePage}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
            >
              Preview
            </button>
            <div className="relative" ref={addMenuRef}>
              <button
                type="button"
                onClick={() => setAddOpen((o) => !o)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Add Section
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {addOpen ? (
                <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
                  {ADD_OPTIONS.map((opt) => (
                    <button
                      key={opt.type}
                      type="button"
                      onClick={() => addSection(opt.type)}
                      className="block w-full px-4 py-2.5 text-left text-sm text-gray-800 hover:bg-gray-50"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl p-6">
        <div className="space-y-3">
          {sections.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
              <p className="text-sm font-medium text-gray-900">
                No sections yet
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Use Add Section to build your studio page.
              </p>
            </div>
          ) : (
            sections.map((section) => (
              <SectionCard
                key={section.id}
                section={section}
                onEdit={() => setEditorSection(section)}
                onDelete={() => removeSection(section.id)}
              />
            ))
          )}
        </div>
      </main>

      {editorSection ? (
        <SectionEditorModal
          key={editorSection.id}
          section={editorSection}
          onClose={() => setEditorSection(null)}
          onSave={saveEditedSection}
        />
      ) : null}

      <PreviewModal
        open={previewOpen}
        pageName={pageName}
        sections={sections}
        onClose={() => setPreviewOpen(false)}
      />
    </div>
  )
}
