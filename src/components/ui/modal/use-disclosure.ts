/* eslint-disable  @typescript-eslint/no-explicit-any */
/*eslint-disable  @typescript-eslint/no-unused-expressions */
import * as React from "react";

export interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  id?: string;
}
export function useControllableProp<T>(prop: T | undefined, state: T) {
  const { current: isControlled } = React.useRef(prop !== undefined);
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value] as const;
}
export function useDisclosure(props: UseDisclosureProps = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
  } = props;

  const [isOpenState, setIsOpen] = React.useState(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);

  const onClose = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  const onOpen = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenProp?.();
  }, [isControlled, onOpenProp]);

  const onToggle = React.useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getDisclosureProps: (props: any = {}) => ({
      ...props,
      hidden: !isOpen,
    }),
  };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
