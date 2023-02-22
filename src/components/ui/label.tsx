import React from "react";
import { calculateClassName } from "./titleBar";

type Ref = HTMLLabelElement;

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  optional?: boolean;
  children: React.ReactNode;
  spacing?: "tight" | "normal";
  font?: "normal" | "semibold";
}

export const Label = React.forwardRef<Ref, LabelProps>(function Label(
  {
    children,
    spacing,
    optional,
    font = "semibold",
    className,
    ...props
  }: LabelProps,
  ref
) {
  const base = `block text-sm text-gray-900`;

  const spacingStyle: { [key: string]: string } = {
    tight: `mb-0`,
    normal: `mb-2`,
  };

  const fontStyle: { [key: string]: string } = {
    normal: `font-normal`,
    semibold: `font-semibold`,
  };

  return (
    <label
      ref={ref}
      className={calculateClassName([
        base,
        spacingStyle,
        fontStyle[font],
        className,
      ])}
      {...props}
    >
      {children}
      {optional && (
        <span className="ml-1 text-xxs text-gray-400 leading-none">
          OPTIONAL
        </span>
      )}
    </label>
  );
});

Label.defaultProps = {
  spacing: "normal",
};
