import React, { ComponentPropsWithoutRef, useState } from "react";
import { Ring, Elipsis } from "./spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type DivRef = HTMLDivElement;

export function Spacer({
  size = "md",
  className,
}: {
  size: "md" | "lg" | "xl";
  className?: string;
}) {
  const styles = {
    md: `mt-8`,
    lg: `mt-8 md:mt-10 xl:mt-16`,
    xl: `mt-8 md:mt-16 xl:mt-24`,
  };
  return <div className={calculateClassName(styles[size], className)}></div>;
}

interface FormInLineProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const FormInline = ({ className, ...props }: FormInLineProps) => (
  <div className={calculateClassName(["flex", className])} {...props} />
);

export function Loader({ type = "ring" }: { type: "ring" | "elipsis" }) {
  const types = {
    ring: Ring,
    elipsis: Elipsis,
  };
  const Spinner = types[type];
  return <Spinner />;
}

interface FormGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  type?: "normal" | "inline";
}

export const FormGroup = React.forwardRef<DivRef, FormGroupProps>(
  function FormGroup(
    { type = "normal", className, ...props }: FormGroupProps,
    ref
  ) {
    const styles = {
      normal: `flex flex-col`,
      inline: `flex flex-row`,
    };

    return (
      <div
        ref={ref}
        className={calculateClassName(styles[type], className)}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
interface InjectedLoaderOverlayProps {
  onComplete(): void;
  onFormSubmit(): void;
  className?: string;
}

export function LoaderOverlay({
  children,
  className,
}: {
  children(props: InjectedLoaderOverlayProps): JSX.Element;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const onComplete: () => void = () => {
    setIsLoading(false);
  };
  const onFormSubmit: () => void = () => {
    setIsLoading(true);
  };
  return (
    <div className={calculateClassName("relative w-full", className)}>
      {isLoading && (
        <div className="fixed z-10 inset-0 bg-gray-500 opacity-75">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Loader type="ring" />
          </div>
        </div>
      )}
      {children({ onFormSubmit, onComplete })}
    </div>
  );
}

export function LoadingText() {
  return (
    <div className="text-gray-500">
      <FontAwesomeIcon className="mr-1" icon={faCircleNotch} spin /> Loading
    </div>
  );
}

export function LoadingError() {
  return (
    <div className="bg-gray-200 text-gray-500 p-4 text-base">
      There was an error loading this content
    </div>
  );
}

export function calculateClassName(
  ...className: (string | (string | undefined)[] | undefined)[]
) {
  return twMerge(classNames(className));
}
