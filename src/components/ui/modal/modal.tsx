/* eslint-disable */
import React from "react";
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
}
export const Modal = function (props: ModalProps) {
  const { children, portal, ...Props } = props;
  const context = useModalProvider(Props);

  let modalContainer = document.getElementById("portal");
  if (!modalContainer) {
    //append to body if not found
    modalContainer = document.createElement("div");
    modalContainer.id = "portal";
    document.body.appendChild(modalContainer);
  }
  if (portal && modalContainer) {
    return ReactDom.createPortal(
      <ModalProvider value={context}>
        {context.isOpen && <TwModal>{children}</TwModal>}
      </ModalProvider>,
      modalContainer
    );
  } else {
    return (
      <ModalProvider value={context}>
        {context.isOpen && <TwModal>{children}</TwModal>}
      </ModalProvider>
    );
  }
};

const TwModal = ({ children }: { children: React.ReactNode }) => (
  <div className="fixed inset-0 z-10 overflow-y-auto text-sm">
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity -z-1">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      &#8203;
      <div
        className="
          inline-block
          px-4
          pt-5
          pb-4
          text-left
          align-bottom
          bg-white
          rounded-lg
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-md
          sm:w-full
          sm:p-6
          relative
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {children}
      </div>
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
>(function ModalBody(props, ref) {
  return <div ref={ref} {...props}></div>;
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
>(function ModalFooter(props, ref) {
  return <div ref={ref} {...props}></div>;
});

interface CloseButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

export function CloseButton(props: CloseButtonProps) {
  return (
    <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={props.onClick}
        data-testId={props.testId}
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-6 w-6"
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
    </div>
  );
}
