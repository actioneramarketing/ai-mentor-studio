"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewStudioFormActions() {
  const router = useRouter();

  return (
    <div id="action-buttons" className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
      <Link href="/studios" className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 order-2 sm:order-1 text-center">
        Cancel
      </Link>
      <button
        type="button"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 order-1 sm:order-2 flex-1 sm:flex-initial"
        onClick={() => {
          const studioId =
            typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
              ? crypto.randomUUID()
              : Date.now().toString();
          router.push(`/studios/${studioId}/settings`);
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <span>Create Studio</span>
      </button>
    </div>
  );
}
