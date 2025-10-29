"use client";
import { createContext, useContext, useState, ReactNode } from "react";

enum PopUpType {
    success = "success", 
    error = "error",
    info = "info"
}
type PopupState = {
  message: string;
  type: PopUpType;
  visible: boolean;
};

type PopupContextType = {
  showPopup: ( message: string, type: PopUpType ) => void;
  hidePopup: () => void;
} & PopupState;

const PopupContext = createContext<PopupContextType | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<PopupState>({
    message: "" as string,
    type: PopUpType.info,
    visible: false,
  });

  function showPopup( message: string, type = PopUpType.info) {
    setPopup({ message, type, visible: true });
    setTimeout(() => setPopup((p) => ({ ...p, visible: false })), 3000);
  }
//   function showPopup({ message, type = "info" }: { message: string, type?: "success" | "error" | "info";}) {
//     setPopup({ message, type, visible: true });
//     setTimeout(() => setPopup((p) => ({ ...p, visible: false })), 3000);
//   }
  function hidePopup() {
    setPopup((p) => ({ ...p, visible: false }));
  }

  return (
    <PopupContext.Provider value={{ ...popup, showPopup, hidePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup must be used within PopupProvider");
  return ctx;
}
