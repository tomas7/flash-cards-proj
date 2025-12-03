"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "../context/PopupContext";

export default function Popup() {
  const { message, type, visible, hidePopup } = usePopup();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={hidePopup}
          className={`fixed bottom-6 right-6 rounded-xl px-4 py-3 shadow-lg text-white cursor-pointer ${
            type === "success"
              ? "bg-green-600"
              : type === "error"
              ? "bg-red-600"
              : "bg-blue-600"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
