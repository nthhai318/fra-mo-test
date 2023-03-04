import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

export const Modal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        drag
        className="w-[700px] min-w-[50%] max-w-[90%] m-auto p-4 rounded-xl flex flex-col items-center justify-center bg-orange-500 gap-4"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        }}
        exit={{ y: "100vh", opacity: 0 }}
      >
        <p>This is a Popup Modal</p>
        <button
          onClick={handleClose}
          className="px-3 py-1 rounded-xl bg-red-700"
        >
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};
