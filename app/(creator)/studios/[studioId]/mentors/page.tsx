import Link from "next/link"

export default async function StudioMentorsPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = await params
  return (
    <div className="bg-gray-50 font-sans min-h-0 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Mentors</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Create and manage AI mentors for this studio.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
          <p className="text-gray-600 mb-6">Start by creating a new mentor or open the studio overview.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/studios/${studioId}/mentors/new`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
            >
              Create mentor
            </Link>
            <Link
              href={`/studios/${studioId}`}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold rounded-xl transition-all duration-200"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
