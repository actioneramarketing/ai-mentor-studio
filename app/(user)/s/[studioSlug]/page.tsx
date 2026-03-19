export default async function StudioPage({
  params,
}: {
  params: Promise<{ studioSlug: string }>;
}) {
  const { studioSlug } = await params;
  return (
    <div style={{ padding: 24 }}>
      <h1>Studio — {studioSlug}</h1>
      <p>List of mentors will appear here.</p>
    </div>
  );
}
