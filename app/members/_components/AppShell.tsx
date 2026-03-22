"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

export type UserProfile = {
  name: string;
  email?: string;
  avatarUrl?: string;
  accountLabel?: string;
};

function NavGlyph({ icon }: { icon?: string }) {
  if (!icon) {
    return (
      <span className="w-5 h-5 rounded bg-gray-200 flex-shrink-0" aria-hidden />
    );
  }
  switch (icon) {
    case "fa-chart-line":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
          <path d="M64 64c0-17.7 14.3-32 32-32s32 14.3 32 32V400H448c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64zm384 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V192c0-17.7 14.3-32 32-32H448z" />
        </svg>
      );
    case "fa-layer-group":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
          <path d="M212.5 71.7c9.4-5.4 20.9-5.4 30.3 0l192 110.4c15.1 8.7 15.1 30.5 0 39.2l-192 110.4c-9.4 5.4-20.9 5.4-30.3 0L20.5 231.3c-15.1-8.7-15.1-30.5 0-39.2l192-110.4zm-30.3 197.6c9.4 5.4 20.9 5.4 30.3 0l192-110.4c15.1-8.7 15.1-30.5 0-39.2L212.5 29.3c-9.4-5.4-20.9-5.4-30.3 0L20.5 139.7c-15.1 8.7-15.1 30.5 0 39.2l162.2 93.4zm0 88c9.4 5.4 20.9 5.4 30.3 0l192-110.4c15.1-8.7 15.1-30.5 0-39.2L212.5 117.3c-9.4-5.4-20.9-5.4-30.3 0L20.5 227.7c-15.1 8.7-15.1 30.5 0 39.2l162.2 93.4z" />
        </svg>
      );
    case "fa-plus":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H224V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      );
    case "fa-home":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 576 512" aria-hidden>
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-22.1 0-40-17.9-40-40V360c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v112c0 22.1-17.9 40-40 40H160 128.1c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
      );
    case "fa-robot":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 640 512" aria-hidden>
          <path d="M9.4 86.6C3.4 92.6 0 100.8 0 109.4V217c0 13.3 10.7 24 24 24h72V96c0-9.4-3.4-17.6-9.4-23.4L153.4 9.4C147.4 3.4 139.2 0 130.6 0H24C10.7 0 0 10.7 0 24s10.7 24 24 24h81.1L9.4 86.6zM613.8 505.4c4.7-4.5 7.2-10.8 7.2-17.2V384c0-13.3-10.7-24-24-24h-48V192c0-17.7-14.3-32-32-32H416V64c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v96H96c-17.7 0-32 14.3-32 32V360H48c-13.3 0-24 10.7-24 24v104.2c0 6.4 2.5 12.6 7.2 17.2l112 104c5.9 5.5 13.8 8.5 22 8.5H489.8c8.2 0 16.1-3 22-8.5l112-104zM400 256H240v-8c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v8zm-176 32h128c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
        </svg>
      );
    case "fa-file":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 384 512" aria-hidden>
          <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm64 0v64h64V64H64zm128 0V128h64V64H192z" />
        </svg>
      );
    case "fa-credit-card":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 576 512" aria-hidden>
          <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V384c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V224H528zM64 48C28.7 48 0 76.7 0 112V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V112c0-35.3-28.7-64-64-64H64z" />
        </svg>
      );
    case "fa-gear":
      return (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 6.8-15.7 7.1-21.8 .4l-48.2-47.6c-4.1-4-7.2-9.2-9-14.8c-6.8 2.5-13.6 4.4-20.5 5.8c-1.2 8.5-3 16.9-5.4 25.2l-8.7 30.3c-2 6.9-8.3 11.8-15.4 11.8H208c-7.1 0-13.4-4.9-15.4-11.8l-8.7-30.3c-2.4-8.3-4.2-16.7-5.4-25.2c-6.9-1.4-13.7-3.3-20.5-5.8c-1.8 5.6-4.9 10.8-9 14.8l-48.2 47.6c-6.1 6.7-15.9 6.4-21.8-.4c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-6.8 15.7-7.1 21.8-.4l48.2 47.6c4.1 4 7.2 9.2 9 14.8c6.8-2.5 13.6-4.4 20.5-5.8c1.2-8.5 3-16.9 5.4-25.2l8.7-30.3C142.3 90.9 148.6 86 155.7 86H208c7.1 0 13.4 4.9 15.4 11.8l8.7 30.3c2.4 8.3 4.2 16.7 5.4 25.2c6.9 1.4 13.7 3.3 20.5 5.8c1.8-5.6 4.9-10.8 9-14.8l48.2-47.6c6.1-6.7 15.9-6.4 21.8 .4c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
        </svg>
      );
    default:
      return (
        <span className="w-5 h-5 rounded bg-gray-200 flex-shrink-0" aria-hidden />
      );
  }
}

function resolveActiveHref(pathname: string, items: NavItem[]): string | null {
  const matches = items.filter(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
  if (matches.length === 0) return null;
  return matches.reduce((a, b) => (a.href.length >= b.href.length ? a : b)).href;
}

function isStudioScopedRoute(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  return parts[0] === "studios" && parts.length >= 2 && parts[1] !== "new";
}

function BackToStudiosIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="currentColor" viewBox="0 0 448 512" aria-hidden>
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );
}

const MOCK_STUDIOS = [
  { id: "1", name: "Prepared Life" },
  { id: "2", name: "Live Your List" },
  { id: "3", name: "Prepared Business" },
] as const;

function useIsLg() {
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isLg;
}

export function AppShell({
  children,
  userProfile,
  nav,
}: {
  children: ReactNode;
  userProfile: UserProfile;
  nav: NavItem[];
}) {
  const pathname = usePathname() ?? "";
  const activeHref = useMemo(
    () => resolveActiveHref(pathname, nav),
    [pathname, nav],
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [studioSwitcherOpen, setStudioSwitcherOpen] = useState(false);
  const studioRef = useRef<HTMLDivElement>(null);

  const closeMobileSidebar = useCallback(() => setSidebarOpen(false), []);

  const toggleSidebar = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
      setSidebarCollapsed((c) => !c);
    } else {
      setSidebarOpen((o) => !o);
    }
  }, []);

  const isLg = useIsLg();
  const navPanelExpanded = isLg ? !sidebarCollapsed : sidebarOpen;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    closeMobileSidebar();
    setStudioSwitcherOpen(false);
  }, [pathname, closeMobileSidebar]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!studioRef.current) return;
      if (!studioRef.current.contains(e.target as Node)) {
        setStudioSwitcherOpen(false);
      }
    };

    if (studioSwitcherOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [studioSwitcherOpen]);

  const sidebarWidthClass = sidebarCollapsed ? "lg:w-20" : "lg:w-72";

  const isStudioRoute = pathname.startsWith("/studios/") && pathname.split("/").length > 2;
  const studioId = isStudioRoute ? pathname.split("/")[2] ?? null : null;
  const currentStudio = MOCK_STUDIOS.find((s) => s.id === studioId) ?? null;
  const isStudioScopedNav = isStudioScopedRoute(pathname);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-center">
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <button
                  type="button"
                  className="flex-shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label={navPanelExpanded ? "Collapse navigation menu" : "Expand navigation menu"}
                  aria-expanded={navPanelExpanded}
                  aria-controls="app-shell-sidebar"
                  onClick={toggleSidebar}
                >
                  {/* fa-solid fa-bars — SVG used (Font Awesome is not bundled in this app). */}
                  <i className="fa-solid fa-bars inline-flex items-center justify-center text-lg" aria-hidden>
                    <svg className="h-[1em] w-[1em]" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </i>
                </button>

                <Link href="/dashboard" className="flex flex-shrink-0 items-center">
                  <Image
                    src="/logo.png"
                    alt="AI Mentor Studio"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </Link>

                {!isStudioRoute ? (
                  <span className="min-w-0 truncate text-lg font-semibold text-gray-900 sm:max-w-none">
                    AI Mentor Studio
                  </span>
                ) : null}

                {isStudioRoute && currentStudio ? (
                  <div ref={studioRef} className="relative min-w-0">
                    <button
                      type="button"
                      className="flex max-w-full min-w-0 items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100"
                      aria-expanded={studioSwitcherOpen}
                      aria-haspopup="menu"
                      onClick={() => setStudioSwitcherOpen((v) => !v)}
                    >
                      <span className="min-w-0 truncate font-semibold text-gray-900">{currentStudio.name}</span>
                      <i className="fa-solid fa-chevron-down inline-flex flex-shrink-0 items-center justify-center text-sm text-gray-500" aria-hidden>
                        <svg className="h-[1em] w-[1em]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </i>
                    </button>

                    {studioSwitcherOpen ? (
                      <div
                        className="absolute left-0 z-[55] mt-2 w-56 max-w-[min(14rem,calc(100vw-2rem))] rounded-xl border border-gray-200 bg-white shadow-lg"
                        role="menu"
                      >
                        <div className="py-2">
                          {MOCK_STUDIOS.map((studio) => (
                            <Link
                              key={studio.id}
                              href={`/studios/${studio.id}`}
                              className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                                studio.id === studioId
                                  ? "font-semibold text-[var(--brand-accent)]"
                                  : "text-gray-700"
                              }`}
                              role="menuitem"
                              onClick={() => setStudioSwitcherOpen(false)}
                            >
                              {studio.name}
                            </Link>
                          ))}
                        </div>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/studios/new"
                            className="block px-4 py-2 text-sm text-[var(--brand-accent)] hover:bg-gray-50"
                            role="menuitem"
                            onClick={() => setStudioSwitcherOpen(false)}
                          >
                            + Create Studio
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <button
                type="button"
                className="relative p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                aria-label="Notifications"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.93 8.43 14.07 8 16 8c.7 0 1.37.1 2 .27V12c0 2.21-1.79 4-4 4s-4-1.79-4-4H4c0 4.41 3.59 8 8 8z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  className="flex items-center space-x-2 sm:space-x-3 hover:bg-gray-50 rounded-xl px-2 sm:px-3 py-2 transition-colors duration-200"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                  onClick={() => setUserMenuOpen((o) => !o)}
                >
                  <img
                    src={userProfile.avatarUrl}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900">{userProfile.name}</p>
                    <p className="text-xs text-gray-500">
                      {userProfile.accountLabel ?? userProfile.email ?? ""}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>
                {userMenuOpen ? (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-[60]"
                    role="menu"
                  >
                    <button
                      type="button"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="text-sm text-gray-900">Profile Settings</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                      </svg>
                      <span className="text-sm text-gray-900">Billing & Plans</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.12-2.75l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                      </svg>
                      <span className="text-sm text-gray-900">Help Center</span>
                    </button>
                    <div className="border-t border-gray-200 my-2" />
                    <button
                      type="button"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-red-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                      </svg>
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row relative">
        {sidebarOpen ? (
          <button
            type="button"
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            aria-label="Close navigation menu"
            onClick={closeMobileSidebar}
          />
        ) : null}

        <aside
          id="app-shell-sidebar"
          className={`
            fixed left-0 lg:sticky top-[73px] z-40 h-[calc(100vh-73px)] bg-white border-r border-gray-200 flex flex-col
            transition-[transform,width] duration-300 ease-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            ${sidebarWidthClass}
            w-72 max-w-[85vw] lg:max-w-none
          `}
        >
          {!sidebarCollapsed ? (
            <div className="hidden border-b border-gray-100 px-3 py-2 lg:flex">
              <span className="truncate px-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Navigation
              </span>
            </div>
          ) : null}

          <nav className="flex-1 overflow-y-auto p-4">
            {isStudioScopedNav ? (
              <Link
                href="/studios"
                title={sidebarCollapsed ? "Back to Studios" : undefined}
                className={`
                  mb-4 flex items-center rounded-lg py-2 text-sm font-medium text-gray-600 transition
                  hover:bg-blue-50 hover:text-blue-600
                  px-4
                  ${sidebarCollapsed ? "lg:justify-center lg:px-2" : ""}
                `}
                onClick={closeMobileSidebar}
              >
                <BackToStudiosIcon
                  className={`h-4 w-4 flex-shrink-0 ${sidebarCollapsed ? "lg:mr-0" : "mr-2"}`}
                />
                <span className={sidebarCollapsed ? "lg:sr-only" : ""}>Back to Studios</span>
              </Link>
            ) : null}

            <div className="space-y-2">
              {nav.map((item) => {
                const active = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 rounded-xl py-3 transition-all duration-200
                      ${sidebarCollapsed ? "px-4 lg:px-2" : "px-4"}
                      ${active ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"}
                      ${sidebarCollapsed ? "lg:justify-center" : ""}
                    `}
                    title={sidebarCollapsed ? item.label : undefined}
                    onClick={closeMobileSidebar}
                  >
                    <NavGlyph icon={item.icon} />
                    <span className={`text-sm ${sidebarCollapsed ? "lg:hidden" : ""}`}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {!sidebarCollapsed ? (
              <div className="mt-8 hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-4 lg:block">
                <div className="flex items-start space-x-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 384 512" aria-hidden>
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4C389.7 222.5 432 137.7 432 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 35.3 28.7 64 64 64c0 0 0 0 0 0c0 0 0 0 0 0l-32 32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 0 0 0 0 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3-28.7 64-64 64l0 0-32-32 0 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 0 0 0 0 0c0 0 0 0 0 0l32 32c0 0 0 0 0 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Quick Tip</h4>
                    <p className="text-xs leading-relaxed text-gray-600">
                      Use the sidebar to move between key areas of your studio.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </nav>
        </aside>

        <div className="flex-1 min-w-0 lg:min-h-[calc(100vh-73px)]">{children}</div>
      </div>
    </div>
  );
}
