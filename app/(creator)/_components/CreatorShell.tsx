"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppShell } from "@/app/members/_components/AppShell";
import { GLOBAL_NAV } from "@/components/layout/nav-config";

const CREATOR_USER_PROFILE = {
  name: "Sarah Johnson",
  email: "creator@example.com",
  avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  accountLabel: "Creator Account",
};

function isStudioScopedPath(pathname: string | null): boolean {
  if (!pathname) return false;
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "studios") return false;
  if (parts.length < 2) return false;
  if (parts[1] === "new") return false;
  return true;
}

export function CreatorShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (isStudioScopedPath(pathname)) {
    return <>{children}</>;
  }
  return (
    <AppShell userProfile={CREATOR_USER_PROFILE} nav={GLOBAL_NAV}>
      {children}
    </AppShell>
  );
}
