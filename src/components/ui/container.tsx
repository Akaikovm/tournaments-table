import React from "react";
import { calculateClassName } from "./titleBar";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  size: "small" | "some" | "large";
  children: React.ReactNode;
}

type DivRef = HTMLDivElement;

export const Container = React.forwardRef<DivRef, ContainerProps>(
  function Container({ className, ...props }: ContainerProps, ref) {
    const styles = {
      small: `max-w-sm px-4 mx-auto sm:max-w-lg sm:px-6 md:max-w-xl lg:max-w-2xl`,
      some: `max-w-xl px-4 mx-auto sm:px-6 lg:max-w-3xl`,
      large: `max-w-7xl px-4 mx-auto sm:px-6 lg:px-8`,
    };

    return (
      <div
        ref={ref}
        className={calculateClassName(styles[props.size], className)}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
