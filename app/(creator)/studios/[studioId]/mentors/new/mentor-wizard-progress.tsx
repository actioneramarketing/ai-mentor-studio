"use client";

const STEPS = [1, 2, 3, 4, 5, 6, 7] as const;

type MentorWizardProgressProps = {
  currentStep: (typeof STEPS)[number];
};

export function MentorWizardProgress({ currentStep }: MentorWizardProgressProps) {
  return (
    <div id="wizard-progress" className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6 mb-6 lg:mb-8">
      <div className="flex w-full min-w-0 items-center gap-1 sm:gap-2" aria-label="Mentor creation steps">
        {STEPS.map((step, index) => {
          const isComplete = step < currentStep;
          const isActive = step === currentStep;
          const segmentBlue = currentStep >= step;

          return (
            <div key={step} className="flex min-w-0 flex-1 items-center">
              {index > 0 && (
                <div
                  className={`h-0.5 min-w-[2px] flex-1 rounded-full ${segmentBlue ? "bg-blue-500" : "bg-gray-200"}`}
                  aria-hidden
                />
              )}
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-8 sm:w-8 sm:text-sm ${
                  isComplete
                    ? "bg-green-600 text-white"
                    : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {isComplete ? (
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 512 512" aria-hidden>
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                ) : (
                  step
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
