export interface StudioPageRecord {
  id: string
  name: string
  slug: string
  primary: boolean
  updatedAt: string
}

export type StudioSectionType =
  | "hero"
  | "mentors"
  | "plans"
  | "features"
  | "cta"
  | "generic"

export type StudioBuilderSection =
  | {
      id: string
      type: "hero"
      headline: string
      subheadline: string
      buttonText: string
    }
  | {
      id: string
      type: "generic"
      title: string
      content: string
    }
  | {
      id: string
      type: "mentors" | "plans" | "features" | "cta"
    }

export const SECTION_TYPE_LABELS: Record<StudioSectionType, string> = {
  hero: "Hero Section",
  mentors: "Mentors Section",
  plans: "Plans Section",
  features: "Features Section",
  cta: "CTA Section",
  generic: "Generic Section",
}
