/**
 *  a toast notification component
 */
import { AnimatePresence, motion as Motion } from "framer-motion";
import notificationStore from "../store/notifyStore";
import { useEffect } from "react";

const NOTIFICATION_SOUND = "/src/assets/notification.wav";

const Notify = () => {
  const { notify } = notificationStore(); // import notification from the notification store

  useEffect(() => {
    if (notify) {
      const audio = new Audio(NOTIFICATION_SOUND);
      audio.play().catch((e) => {
        console.warn("Failed to play sound:", e);
      });
    }
  }, [notify]);

  return (
    <AnimatePresence>
      {notify && (
        <Motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            y: 100,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          className={`fixed bottom-5 right-5 z-50 rounded-xl py-3 px-4 shadow-md ${
            notify.type === "success"
              ? "bg-green-100 border border-green-500 text-green-700"
              : "bg-red-100 border border-red-500 text-red-700"
          }`}
        >
          <span> {notify.message} </span>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notify;
