export default async function MentorPage({
  params,
}: {
  params: Promise<{ studioSlug: string; mentorSlug: string }>;
}) {
  const { studioSlug, mentorSlug } = await params;
  return (
    <div style={{ padding: 24 }}>
      <h1>Mentor — {mentorSlug}</h1>
      <p>AI mentor experience for {studioSlug}.</p>
    </div>
  );
}
