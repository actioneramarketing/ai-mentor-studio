import type { StudioBuilderSection, StudioSectionType } from "./types"

export function createEmptySection(type: StudioSectionType): StudioBuilderSection {
  const id = crypto.randomUUID()
  switch (type) {
    case "hero":
      return {
        id,
        type: "hero",
        headline: "",
        subheadline: "",
        buttonText: "Get started",
      }
    case "generic":
      return { id, type: "generic", title: "", content: "" }
    case "mentors":
      return { id, type: "mentors" }
    case "plans":
      return { id, type: "plans" }
    case "features":
      return { id, type: "features" }
    case "cta":
      return { id, type: "cta" }
  }
}
