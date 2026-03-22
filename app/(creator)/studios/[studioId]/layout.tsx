import { AppShell } from "@/app/members/_components/AppShell";
import { STUDIO_NAV } from "@/components/layout/nav-config";

const userProfile = {
  name: "Sarah Johnson",
  email: "creator@example.com",
  avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  accountLabel: "Creator Account",
};

export default async function StudioLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ studioId: string }>;
}) {
  const { studioId } = await params;
  return (
    <AppShell userProfile={userProfile} nav={STUDIO_NAV(studioId)}>
      {children}
    </AppShell>
  );
}
