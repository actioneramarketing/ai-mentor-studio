"use client";

import { useParams, useRouter } from "next/navigation";

const STEPS = [1, 2, 3, 4, 5, 6, 7] as const;

const STEP_LABELS: Record<(typeof STEPS)[number], string> = {
  1: "Details",
  2: "Instructions",
  3: "Starters",
  4: "Flow",
  5: "CTA",
  6: "Access",
  7: "Review",
};

/** Vertical offset to circle center: min-h label + gap-1 + half of h-7 (1.75rem) circle */
const LINE_TOP = "calc(2.75rem + 0.25rem + 0.875rem)";

type MentorWizardProgressProps = {
  currentStep: (typeof STEPS)[number];
};

function stepHref(studioId: string, step: (typeof STEPS)[number]) {
  if (step === 1) return `/studios/${studioId}/mentors/new`;
  return `/studios/${studioId}/mentors/new/step-${step}`;
}

export function MentorWizardProgress({ currentStep }: MentorWizardProgressProps) {
  const router = useRouter();
  const params = useParams();
  const raw = params?.studioId;
  const studioId = Array.isArray(raw) ? raw[0] : raw ?? "";

  return (
    <div id="wizard-progress" className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6 mb-6 lg:mb-8">
      <div className="relative w-full min-w-0" aria-label="Mentor creation steps">
        {/* Continuous track through all steps; sits on circle centers */}
        <div
          className="pointer-events-none absolute left-0 right-0 z-0 h-[2px] bg-gray-200"
          style={{ top: LINE_TOP }}
          aria-hidden
        />

        <div className="relative z-10 grid w-full grid-cols-7 gap-2 sm:gap-3">
          {STEPS.map((step) => {
            const isComplete = step < currentStep;
            const isActive = step === currentStep;

            return (
              <div key={step} className="flex min-w-0 justify-center">
                <button
                  type="button"
                  onClick={() => studioId && router.push(stepHref(studioId, step))}
                  disabled={!studioId}
                  className="flex cursor-pointer flex-col items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={`Go to ${STEP_LABELS[step]}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span className="line-clamp-2 flex min-h-[2.75rem] w-full items-end justify-center text-center text-[10px] leading-tight text-gray-500 sm:text-xs">
                    {STEP_LABELS[step]}
                  </span>
                  <span
                    className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isComplete
                        ? "bg-green-600 text-white"
                        : isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isComplete ? (
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    ) : (
                      step
                    )}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
