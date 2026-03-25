"use client"

export type AISetupProvider = "openai" | "anthropic"

type AISetupInstructionsModalProps = {
  provider: AISetupProvider
  open: boolean
  onClose: () => void
}

export function AISetupInstructionsModal({
  provider,
  open,
  onClose,
}: AISetupInstructionsModalProps) {
  if (!open) return null

  const title =
    provider === "openai"
      ? "Setup Instructions – OpenAI"
      : "Setup Instructions – Anthropic"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-setup-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="ai-setup-title"
            className="text-lg font-semibold text-gray-900"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <h3 className="text-sm font-semibold text-gray-900">
              Step-by-step setup
            </h3>
            {provider === "openai" ? (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-600">
                <li>
                  Go to{" "}
                  <a
                    href="https://platform.openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    https://platform.openai.com
                  </a>
                </li>
                <li>Sign up or log in</li>
                <li>Navigate to API Keys</li>
                <li>Click &quot;Create new secret key&quot;</li>
                <li>Copy and paste your key here</li>
              </ol>
            ) : (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-600">
                <li>
                  Go to{" "}
                  <a
                    href="https://console.anthropic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    https://console.anthropic.com
                  </a>
                </li>
                <li>Sign up or log in</li>
                <li>Navigate to API Keys</li>
                <li>Generate a new key</li>
                <li>Copy and paste your key here</li>
              </ol>
            )}
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">Billing Note</h3>
            <p className="mt-2 text-sm text-gray-600">
              Usage is billed directly through your OpenAI or Anthropic account.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">
              Video Walkthrough
            </h3>
            <div className="mt-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
              Demo video coming soon
            </div>
          </section>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
