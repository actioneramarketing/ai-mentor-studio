import type { StudioBuilderSection, StudioPageRecord } from "./types"

const pagesKey = (studioId: string) => `ams:studio-pages:${studioId}`

const sectionsKey = (studioId: string, pageId: string) =>
  `ams:studio-page-sections:${studioId}:${pageId}`

export function loadPages(studioId: string): StudioPageRecord[] {
  if (typeof window === "undefined") return []
  try {
    const raw = sessionStorage.getItem(pagesKey(studioId))
    if (!raw) return []
    return JSON.parse(raw) as StudioPageRecord[]
  } catch {
    return []
  }
}

export function savePages(studioId: string, pages: StudioPageRecord[]) {
  if (typeof window === "undefined") return
  sessionStorage.setItem(pagesKey(studioId), JSON.stringify(pages))
}

export function loadSections(
  studioId: string,
  pageId: string,
): StudioBuilderSection[] {
  if (typeof window === "undefined") return []
  try {
    const raw = sessionStorage.getItem(sectionsKey(studioId, pageId))
    if (!raw) return []
    return JSON.parse(raw) as StudioBuilderSection[]
  } catch {
    return []
  }
}

export function saveSections(
  studioId: string,
  pageId: string,
  sections: StudioBuilderSection[],
) {
  if (typeof window === "undefined") return
  sessionStorage.setItem(
    sectionsKey(studioId, pageId),
    JSON.stringify(sections),
  )
}

export function normalizeSlug(input: string): string {
  const t = input.trim()
  if (!t) return "/"
  const withSlash = t.startsWith("/") ? t : `/${t}`
  return withSlash.replace(/\/{2,}/g, "/") || "/"
}

function cloneSections(sections: StudioBuilderSection[]): StudioBuilderSection[] {
  return JSON.parse(JSON.stringify(sections)) as StudioBuilderSection[]
}

export function appendPage(studioId: string, page: StudioPageRecord) {
  const existing = loadPages(studioId)
  const base = page.primary
    ? existing.map((p) => ({ ...p, primary: false }))
    : existing
  const next = [...base, page]
  savePages(studioId, next)
  saveSections(studioId, page.id, [])
}

export function updatePageFields(
  studioId: string,
  pageId: string,
  updates: Partial<
    Pick<StudioPageRecord, "name" | "slug" | "primary" | "updatedAt">
  >,
) {
  const pages = loadPages(studioId)
  const idx = pages.findIndex((p) => p.id === pageId)
  if (idx < 0) return

  if (updates.primary === true) {
    const next = pages.map((p) =>
      p.id === pageId
        ? { ...p, ...updates, primary: true }
        : { ...p, primary: false },
    )
    savePages(studioId, next)
    return
  }

  const next = pages.map((p) =>
    p.id === pageId ? { ...p, ...updates } : p,
  )
  savePages(studioId, next)
}

export function deletePage(studioId: string, pageId: string) {
  const pages = loadPages(studioId).filter((p) => p.id !== pageId)
  savePages(studioId, pages)
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(sectionsKey(studioId, pageId))
  }
}

export function duplicatePage(studioId: string, pageId: string) {
  const pages = loadPages(studioId)
  const source = pages.find((p) => p.id === pageId)
  if (!source) return
  const newId = crypto.randomUUID()
  const baseSlug =
    source.slug === "/"
      ? `/p-${newId.slice(0, 8)}`
      : `${source.slug.replace(/\/$/, "")}-copy`
  const copy: StudioPageRecord = {
    ...source,
    id: newId,
    name: `${source.name} (Copy)`,
    slug: baseSlug,
    primary: false,
    updatedAt: new Date().toISOString(),
  }
  savePages(studioId, [...pages, copy])
  const sections = loadSections(studioId, pageId)
  saveSections(studioId, newId, cloneSections(sections))
}
