"use client";

import { FadeIn, TypingText, ZoomIn } from "@/components/AnimationPlaceholder";
import { Modal } from "@/components/Modal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState<Boolean>(false);

  return (
    <main className="">
      <FadeIn input={{ travelLength: 20, delayChildren: 0.5 }}>
        <p className="text-center mt-20 text-[3rem]">
          Hello <TypingText text="Visitor" />
        </p>
      </FadeIn>
      <ZoomIn>
        <button
          className="bg-yellow-300 block mt-10 mx-auto text-black p-3 rounded-lg "
          onClick={() => (modal ? setModal(false) : setModal(true))}
        >
          Launch Modal
        </button>
      </ZoomIn>
      <AnimatePresence initial={false} mode="wait">
        {modal && <Modal handleClose={() => setModal(false)} />}
      </AnimatePresence>
    </main>
  );
}
