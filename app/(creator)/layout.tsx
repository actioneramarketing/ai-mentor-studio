import { CreatorShell } from "./_components/CreatorShell";

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreatorShell>{children}</CreatorShell>;
}
