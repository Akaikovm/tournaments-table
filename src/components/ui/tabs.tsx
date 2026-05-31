import React from "react";

export interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SegmentedTabs = ({
  items,
  activeValue,
  onChange,
  className = "",
}: TabsProps) => {
  return (
    <>
      {/* Desktop / tablet pills */}
      <div className={`hidden md:flex ${className}`}>
        <div className="inline-flex w-full md:w-auto rounded-2xl glass p-1.5 overflow-x-auto">
          {items.map((item) => {
            const isActive = item.value === activeValue;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => onChange(item.value)}
                className={`relative whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-gradient-to-br from-amber-500/35 via-orange-500/25 to-rose-500/25 border border-white/15 shadow-[0_8px_24px_rgba(245,158,11,0.25)]"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile select */}
      <div className="md:hidden">
        <div className="relative">
          <select
            className="w-full appearance-none rounded-2xl glass px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-brand-400/70 focus:ring-2 focus:ring-brand-400/30"
            value={activeValue}
            onChange={(e) => onChange(e.target.value)}
          >
            {items.map((item) => (
              <option key={item.value} value={item.value} className="bg-ink-900 text-white">
                {item.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
            ▾
          </span>
        </div>
      </div>
    </>
  );
};
