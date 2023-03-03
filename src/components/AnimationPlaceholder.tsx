"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";
import {
  type variantInput,
  fadeIn,
  typingTextContainer,
  typingText,
  zoomIn,
} from "../utils/motion";

type Props = {
  input?: variantInput;
  children: ReactNode;
};

type textProps = {
  text: string;
  textStyle?: string;
};

export function TypingText(props: textProps) {
  const text = props.text ?? "You're missing something";
  const textStyle = props.textStyle ?? undefined;
  return (
    <motion.p variants={typingTextContainer} className={textStyle}>
      {Array.from(text).map((char, index) => (
        <motion.span variants={typingText} key={index}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function FadeIn(props: Props) {
  const direction = props.input?.direction ?? "up";
  const animationType = props.input?.type ?? "tween";
  const delay = props.input?.delay ?? 0;
  const duration = props.input?.duration ?? 0.5;
  const travelLength = props.input?.travelLength ?? 100;
  const delaychildren = props.input?.delayChildren ?? 0;

  return (
    <motion.div
      variants={fadeIn(
        direction,
        animationType,
        delay,
        duration,
        travelLength,
        delaychildren
      )}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: true, amount: 0.25 }}
    >
      {props.children}
    </motion.div>
  );
}

export function ZoomIn(props: Props) {
  const direction = props.input?.direction ?? "up";
  const animationType = props.input?.type ?? "tween";
  const delay = props.input?.delay ?? 0;
  const duration = props.input?.duration ?? 0.5;
  const delaychildren = props.input?.delayChildren ?? 0;

  return (
    <motion.div
      variants={zoomIn(
        direction,
        animationType,
        delay,
        duration,
        delaychildren
      )}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: true, amount: 0.25 }}
    >
      {props.children}
    </motion.div>
  );
}

export function PresenceAnimated({ children }: { children: ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
