import React from "react";
import ReactSelect, { Theme, Props as SelectProps } from "react-select";
import { calculateClassName } from "../titleBar";

interface Props extends SelectProps {
  spacing?: "tight" | "small" | "normal";
  maxWidth?: "small" | "large";
  readOnly?: boolean;
  error: any;
  disabled: any;
}

const Error = ({ error }: { error: { [key: string]: string } }) => (
  <p className="absolute text-red-500 text-xs italic">
    {error.message.length ? error.message : "Please fill out this field."}
  </p>
);

const customTheme = (defaultTheme: Theme) => {
  defaultTheme.colors.primary = "#4c51bf";
  defaultTheme.colors.primary75 = "#4c51bf";
  defaultTheme.colors.primary50 = "#667eea";
  defaultTheme.colors.primary25 = "#c3dafe";
  return defaultTheme;
};

const maxWidthToClass = {
  small: `max-w-sm`,
  large: `max-w-lg`,
};

type SelectRef = ReactSelect;

export const Select = React.forwardRef<SelectRef, Props>(function Select(
  {
    error,
    className,
    spacing,
    maxWidth = "small",
    disabled,
    readOnly,
    ...props
  }: Props,
  ref
) {
  const spacingStyle = {
    tight: `mb-0`,
    small: `mb-2`,
    normal: `mb-5`,
  };
  const errorStyle = `border rounded border-red-500 focus:border-red-500 focus:bg-white`;

  const maxWidthCss = maxWidthToClass[maxWidth];

  const readOnlyProps =
    readOnly === true
      ? {
          isClearable: false,
          isSearchable: false,
          openMenuOnClick: false,
          openMenuOnFocus: false,
          menuIsOpen: false,
        }
      : null;

  return (
    <div
      className={calculateClassName([
        `relative`,
        error ? errorStyle : "",
        spacingStyle["small"],
        className,
      ])}
    >
      <ReactSelect
        {...props}
        theme={customTheme}
        className={maxWidthCss}
        isDisabled={disabled}
        {...readOnlyProps}
      ></ReactSelect>
      {error && <Error error={error} />}
    </div>
  );
});

Select.defaultProps = {
  spacing: "normal",
};
