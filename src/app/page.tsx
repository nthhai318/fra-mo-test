import { FadeIn, TypingText, ZoomIn } from "@/components/AnimationPlaceholder";
import ModalButton from "@/components/ModalButton";

export default function Home() {
  return (
    <main className="">
      <FadeIn input={{ travelLength: 20, delayChildren: 0.5 }}>
        <p className="text-center mt-20 text-[3rem]">Hello</p>
        <TypingText text="Visitor" textStyle="text-center text-[3rem]" />
      </FadeIn>
      <ZoomIn>
        <ModalButton></ModalButton>
      </ZoomIn>
    </main>
  );
}
