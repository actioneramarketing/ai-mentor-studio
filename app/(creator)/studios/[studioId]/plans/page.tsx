import Link from "next/link"

export default async function StudioPlansPage({
  params,
}: {
  params: Promise<{ studioId: string }>
}) {
  const { studioId } = await params
  return (
    <div className="bg-gray-50 font-sans min-h-0 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Plans</h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              Manage pricing plans for this studio.
            </p>
          </div>
          <Link
            href={`/studios/${studioId}/plans/new`}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 text-center"
          >
            New plan
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center text-gray-600">
          No plans listed yet. Create your first plan to get started.
        </div>
      </div>
    </div>
  )
}
