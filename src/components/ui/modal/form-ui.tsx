import React, { ComponentPropsWithoutRef, useState } from "react";
import { Ring, Elipsis } from "./spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  size: "small" | "some" | "large";
  children: React.ReactNode;
}

type DivRef = HTMLDivElement;

export const Container = React.forwardRef<DivRef, ContainerProps>(function Container(
  { className, ...props }: ContainerProps,
  ref
) {
  const styles = {
    small: `max-w-sm px-4 mx-auto sm:max-w-lg sm:px-6 md:max-w-xl lg:max-w-2xl`,
    some: `max-w-xl px-4 mx-auto sm:px-6 lg:max-w-3xl`,
    large: `max-w-7xl px-4 mx-auto sm:px-6 lg:px-8`,
  };

  return (
    <div ref={ref} className={calculateClassName(styles[props.size], className)} {...props}>
      {props.children}
    </div>
  );
});

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

export const FormGroup = React.forwardRef<DivRef, FormGroupProps>(function FormGroup(
  { type = "normal", className, ...props }: FormGroupProps,
  ref
) {
  const styles = {
    normal: `flex flex-col`,
    inline: `flex flex-row gap-3`,
  };

  return (
    <div ref={ref} className={calculateClassName(styles[type], className)} {...props}>
      {props.children}
    </div>
  );
});

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
  const onComplete: () => void = () => setIsLoading(false);
  const onFormSubmit: () => void = () => setIsLoading(true);

  return (
    <div className={calculateClassName("relative w-full", className)}>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/70 backdrop-blur-sm">
          <Loader type="ring" />
        </div>
      )}
      {children({ onFormSubmit, onComplete })}
    </div>
  );
}

export function LoadingText() {
  return (
    <div className="inline-flex items-center gap-2 text-white/70 text-sm">
      <FontAwesomeIcon className="text-brand-300" icon={faCircleNotch} spin />
      <span>Cargando...</span>
    </div>
  );
}

export function LoadingError() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-rose-200 text-sm">
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <span>Hubo un error cargando este contenido</span>
    </div>
  );
}

export function calculateClassName(
  ...className: (string | (string | undefined)[] | undefined)[]
) {
  return twMerge(classNames(className));
}
