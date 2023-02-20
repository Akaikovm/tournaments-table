import { createContext } from "react";

const ModalContext = createContext<{ isOpen: boolean } | undefined>(undefined);
const ModalProvider = ModalContext.Provider;

export { ModalProvider };

export interface UseModalProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
}

export function useModalProvider(props: UseModalProps) {
  const { isOpen } = props;
  return {
    isOpen,
  };
}
