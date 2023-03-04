import { motion } from "framer-motion";

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-[#000000c2] flex items-center justify-center overflow-hidden"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
