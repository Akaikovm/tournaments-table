import React from "react";
import { Container } from "./container";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function calculateClassName(
  ...className: (string | any[] | undefined)[]
) {
  return twMerge(classNames(className));
}

export const TitleBar = ({
  title,
  subtitle,
  action,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={calculateClassName(
        "relative mt-6 sm:mt-8 mb-6 sm:mb-8",
        className
      )}
    >
      <Container size="large">
        <div className="relative overflow-hidden rounded-3xl glass-strong px-5 sm:px-8 py-6 sm:py-8 gradient-border animate-fade-in-up">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-amber-500/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl"
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-gradient animate-pulse-glow" />
                <span className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">
                  PGG Series
                </span>
              </div>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-display">
                <span className="gradient-text">{title}</span>
              </h1>
              {subtitle ? (
                <p className="mt-2 text-sm sm:text-base text-white/60 max-w-2xl">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {action ? (
              <div className="flex items-center gap-2 shrink-0">{action}</div>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
};
