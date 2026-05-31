import React from "react";
import ReactSelect, { Theme, Props as SelectProps } from "react-select";
import { calculateClassName } from "../titleBar";

interface Props extends SelectProps {
  spacing?: "tight" | "small" | "normal";
  maxWidth?: "small" | "large" | "full";
  readOnly?: boolean;
  error: any;
  disabled: any;
}

const Error = ({ error }: { error: { [key: string]: string } }) => (
  <p className="absolute text-xs text-rose-300 mt-1">
    {error.message?.length ? error.message : "Please fill out this field."}
  </p>
);

const customTheme = (defaultTheme: Theme) => ({
  ...defaultTheme,
  borderRadius: 12,
  colors: {
    ...defaultTheme.colors,
    primary: "#F59E0B",
    primary75: "#D97706",
    primary50: "rgba(245,158,11,0.4)",
    primary25: "rgba(245,158,11,0.18)",
    neutral0: "rgba(20,22,30,0.98)",
    neutral5: "rgba(255,255,255,0.05)",
    neutral10: "rgba(255,255,255,0.08)",
    neutral20: "rgba(255,255,255,0.12)",
    neutral30: "rgba(255,255,255,0.18)",
    neutral40: "rgba(255,255,255,0.40)",
    neutral50: "rgba(255,255,255,0.55)",
    neutral60: "rgba(255,255,255,0.65)",
    neutral70: "rgba(255,255,255,0.75)",
    neutral80: "rgba(255,255,255,0.92)",
    neutral90: "rgba(255,255,255,0.96)",
    danger: "#F43F5E",
    dangerLight: "rgba(244,63,94,0.2)",
  },
});

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: state.isFocused
      ? "rgba(245,158,11,0.7)"
      : "rgba(255,255,255,0.10)",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(245,158,11,0.30)"
      : "none",
    minHeight: 42,
    borderRadius: 12,
    "&:hover": {
      borderColor: "rgba(255,255,255,0.20)",
    },
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: "rgba(20,22,30,0.98)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 12,
    overflow: "hidden",
    zIndex: 60,
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 6,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "rgba(245,158,11,0.35)"
      : state.isFocused
      ? "rgba(245,158,11,0.18)"
      : "transparent",
    color: "rgba(255,255,255,0.95)",
    borderRadius: 8,
    cursor: "pointer",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "rgba(255,255,255,0.95)",
  }),
  input: (base: any) => ({
    ...base,
    color: "rgba(255,255,255,0.95)",
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "rgba(255,255,255,0.40)",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "rgba(255,255,255,0.55)",
    "&:hover": { color: "rgba(255,255,255,0.85)" },
  }),
  clearIndicator: (base: any) => ({
    ...base,
    color: "rgba(255,255,255,0.55)",
    "&:hover": { color: "rgba(255,255,255,0.85)" },
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
};

const maxWidthToClass: Record<string, string> = {
  small: "max-w-sm",
  large: "max-w-lg",
  full: "w-full",
};

type SelectRef = ReactSelect;

export const Select = React.forwardRef<SelectRef, Props>(function Select(
  {
    error,
    className,
    spacing,
    maxWidth = "full",
    disabled,
    readOnly,
    ...props
  }: Props,
  ref
) {
  const spacingStyle = {
    tight: "mb-0",
    small: "mb-2",
    normal: "mb-4",
  };

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
        "relative",
        spacingStyle[spacing ?? "small"],
        className,
      ])}
    >
      <ReactSelect
        {...props}
        theme={customTheme}
        styles={customStyles}
        className={maxWidthCss}
        isDisabled={disabled}
        {...readOnlyProps}
        menuPortalTarget={
          typeof document !== "undefined" ? document.body : undefined
        }
      />
      {error && <Error error={error} />}
    </div>
  );
});

Select.defaultProps = {
  spacing: "normal",
};
