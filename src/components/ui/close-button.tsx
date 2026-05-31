interface CloseButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

export function CloseButton(props: CloseButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60"
      onClick={props.onClick}
      data-testid={props.testId}
      aria-label="Close"
    >
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
