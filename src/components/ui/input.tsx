import React from "react";
import { calculateClassName } from "./modal/form-ui";

type Ref = HTMLInputElement;

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  // eslint-disable-next-line
  error?: InputError;
  spacing?: "tight" | "small" | "normal";
  autoFocus?: boolean;
}

interface InputError {
  message?: string;
  type?: string;
  [key: string]: any;
}

const Error = ({ error }: { error: InputError }) => (
  <p className="text-red-500 text-xs italic">
    {error?.message?.length
      ? error.message
      : error.type === "phoneValidator"
      ? "Please enter a valid phone number."
      : error.type === "zipcodeValidator"
      ? "Please enter a valid ZIP code."
      : "Please fill out this field."}
  </p>
);

export const Input = React.forwardRef<Ref, InputProps>(function Input(
  { error, spacing, className, ...props }: InputProps,
  ref
) {
  const errorStyle = `border-red-500 focus:border-red-500 focus:bg-white`;
  const text = `px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-black`;
  const styles: any = {
    text: text,
    tel: text,
    address: text,
    email: text,
    number: text,
    checkbox: `form-checkbox text-black border-gray-300 rounded`,
    radio: `form-radio text-black border-gray-300`,
  };

  const spacingStyle = {
    tight: `mb-0`,
    small: `mb-2`,
    normal: `mb-5`,
  };

  const finalType = props.type ?? "text";

  const finalClassName = calculateClassName(
    styles[finalType],
    error ? errorStyle : "",
    props.disabled ? "cursor-not-allowed" : "",
    className
  );

  return (
    <div
      className={calculateClassName(
        "relative",
        spacingStyle[spacing ?? "normal"]
      )}
    >
      <input ref={ref} className={finalClassName} {...props} />

      {error && <Error error={error} />}
    </div>
  );
});
