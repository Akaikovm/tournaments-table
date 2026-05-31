/* eslint-disable */
import React, { useEffect } from "react";
import ReactDom from "react-dom";
import {
  ModalProvider,
  UseModalProps,
  useModalProvider,
} from "./modal-provider";

export * from "./use-disclosure";

export interface ModalProps extends UseModalProps {
  children: React.ReactNode;
  portal?: boolean;
  onClose?: () => void;
}

export const Modal = function (props: ModalProps) {
  const { children, portal = true, onClose, ...Props } = props;
  const context = useModalProvider(Props);

  useEffect(() => {
    if (!context.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [context.isOpen, onClose]);

  let modalContainer = document.getElementById("portal");
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.id = "portal";
    document.body.appendChild(modalContainer);
  }

  const Inner = (
    <ModalProvider value={context}>
      {context.isOpen && <TwModal onClose={onClose}>{children}</TwModal>}
    </ModalProvider>
  );

  if (portal && modalContainer) {
    return ReactDom.createPortal(Inner, modalContainer);
  }
  return Inner;
};

const TwModal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 animate-fade-in">
    <button
      type="button"
      tabIndex={-1}
      aria-label="Close modal"
      onClick={onClose}
      className="absolute inset-0 bg-ink-950/85 backdrop-blur-md cursor-default"
    />
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-ink-850 border border-white/10 shadow-modal gradient-border animate-fade-in-up"
    >
      <div className="relative px-5 sm:px-7 pt-6 pb-7">{children}</div>
    </div>
  </div>
);

type DivRef = HTMLDivElement;

export const ModalContent = React.forwardRef<
  DivRef,
  React.ComponentPropsWithoutRef<"div">
>(function ModalContent(props, ref) {
  return <div ref={ref} {...props}></div>;
});

export const ModalBody = React.forwardRef<
  DivRef,
  React.ComponentPropsWithoutRef<"div">
>(function ModalBody({ className = "", ...props }, ref) {
  return <div ref={ref} className={"mt-1 " + className} {...props}></div>;
});

export const ModalHeader = React.forwardRef<
  DivRef,
  React.ComponentPropsWithoutRef<"div">
>(function ModalHeader(props, ref) {
  return <div ref={ref} {...props}></div>;
});

export const ModalFooter = React.forwardRef<
  DivRef,
  React.ComponentPropsWithoutRef<"div">
>(function ModalFooter({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={"mt-6 pt-4 border-t border-white/10 " + className}
      {...props}
    ></div>
  );
});

interface CloseButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

export function CloseButton(props: CloseButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60"
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
