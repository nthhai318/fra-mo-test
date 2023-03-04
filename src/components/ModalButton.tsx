"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Modal } from "./Modal";

export default function ModalButton() {
  const [modal, setModal] = useState<Boolean>(false);
  return (
    <>
      <button
        className="bg-yellow-300 block mt-10 mx-auto text-black p-3 rounded-lg "
        onClick={() => (modal ? setModal(false) : setModal(true))}
      >
        Launch Modal
      </button>
      <AnimatePresence initial={false} mode="wait">
        {modal && <Modal handleClose={() => setModal(false)} />}
      </AnimatePresence>
    </>
  );
}
