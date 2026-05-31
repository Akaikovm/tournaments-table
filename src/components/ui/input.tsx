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
  <p className="mt-1.5 text-xs text-rose-300">
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
  const errorStyle =
    "border-rose-400/60 focus:border-rose-400 focus:ring-rose-400/40";
  const text =
    "w-full px-3.5 py-2.5 text-sm text-white placeholder-white/40 bg-white/5 border border-white/10 rounded-xl appearance-none transition-all duration-200 focus:outline-none focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/[0.07] hover:border-white/20";
  const styles: any = {
    text: text,
    tel: text,
    address: text,
    email: text,
    number: text,
    password: text,
    date: text,
    checkbox:
      "form-checkbox h-4 w-4 text-amber-500 bg-white/5 border-white/20 rounded focus:ring-amber-400/40",
    radio:
      "form-radio h-4 w-4 text-amber-500 bg-white/5 border-white/20 focus:ring-amber-400/40",
  };

  const spacingStyle = {
    tight: "mb-0",
    small: "mb-2",
    normal: "mb-4",
  };

  const finalType = props.type ?? "text";

  const finalClassName = calculateClassName(
    styles[finalType],
    error ? errorStyle : "",
    props.disabled ? "cursor-not-allowed opacity-60" : "",
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
