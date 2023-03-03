import { type Variants} from "framer-motion";

type Direction = "left" | "right" | "up" | "down"
type VariantType = "tween" | "spring" | "keyframes" | "inertia" | "just" | "false"

export type variantInput = {
  direction?: Direction, 
  type?: VariantType, 
  delay?:number , 
  duration?:number,
  travelLength?:number,
  delayChildren?:number,
}

export const fadeIn  = (direction: Direction, type: VariantType, delay:number , duration:number, travelLength: number, delayChildren: number):Variants => ({
  hidden: {
    x: direction === "left" ? -travelLength : direction === "right" ? travelLength : 0,
    y: direction === "up" ? travelLength : direction === "down" ? -travelLength : 0,
    opacity: 0,
    transition: {
      type: type,
      duration: duration/2,
      ease: "easeOut",
    }
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeInOut",
      delayChildren: delayChildren,
    }
  }
})

export const staggerContainer:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const typingTextContainer:Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    }
  },
}

export const typingText:Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type:"tween",
      ease: "easeIn",
      duration: 0.03,
    }
  }
}

export const zoomIn = (direction: Direction, type: VariantType, delay:number , duration:number, delayChildren: number):Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
      delayChildren: delayChildren,
    },
  },
});