"use client";

/**
 * Client-only bridge between the Capability Intake control and the Demo Request
 * section. Per landing-claims-policy.md §4 this is capture-only: it holds the
 * user's typed/selected intent in React state and scrolls to the demo section.
 * It performs NO network calls and implies NO processing of the input.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type IntakeContextValue = {
  /** The intent captured from the intake control, surfaced in the demo section. */
  intent: string;
  /** Update the intent without navigating (live typing in either field). */
  setIntent: (value: string) => void;
  /** Capture intent and scroll to the demo request section. */
  submitIntent: (value: string) => void;
};

const IntakeContext = createContext<IntakeContextValue | null>(null);

export function IntakeProvider({ children }: { children: ReactNode }) {
  const [intent, setIntent] = useState("");

  const submitIntent = useCallback((value: string) => {
    setIntent(value);
    if (typeof document !== "undefined") {
      const target = document.getElementById("demo");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const value = useMemo(
    () => ({ intent, setIntent, submitIntent }),
    [intent, submitIntent],
  );

  return (
    <IntakeContext.Provider value={value}>{children}</IntakeContext.Provider>
  );
}

export function useIntake(): IntakeContextValue {
  const ctx = useContext(IntakeContext);
  if (!ctx) {
    throw new Error("useIntake must be used within an IntakeProvider");
  }
  return ctx;
}
