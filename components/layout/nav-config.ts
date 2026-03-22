export const GLOBAL_NAV = [
  { label: "Dashboard", href: "/dashboard", icon: "fa-chart-line" },
  { label: "Studios", href: "/studios", icon: "fa-layer-group" },
  { label: "Create Studio", href: "/studios/new", icon: "fa-plus" },
];

export const STUDIO_NAV = (studioId: string) => [
  { label: "Overview", href: `/studios/${studioId}`, icon: "fa-home" },
  { label: "Mentors", href: `/studios/${studioId}/mentors`, icon: "fa-robot" },
  { label: "Lead Pages", href: `/studios/${studioId}/lead-pages`, icon: "fa-file" },
  { label: "Plans", href: `/studios/${studioId}/plans`, icon: "fa-credit-card" },
  { label: "Settings", href: `/studios/${studioId}/settings`, icon: "fa-gear" },
];
