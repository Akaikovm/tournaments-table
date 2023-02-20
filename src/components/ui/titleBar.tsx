import React from "react";
import { Container } from "./container";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function calculateClassName(...className: (any)[]) {
  return twMerge(classNames(className));
}

export const TitleBar = ({
  title,
  action,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={calculateClassName("py-8 shadow bg-red-700", className)}>
      <Container size="large">
        <div className="flex items-center justify-between">
          <div className="text-3xl leading-tight font-bold">{title}</div>
          <div>{action}</div>
        </div>
      </Container>
    </div>
  );
};
