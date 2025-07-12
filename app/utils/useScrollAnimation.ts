import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export default function useScrollAnimation(
  start: number = 150,
  end: number = -150
): {
  currentRef: React.RefObject<HTMLDivElement | null>;
  translateY: MotionValue<number>;
} {
  const currentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: currentRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [start, end]);

  return { currentRef, translateY };
}
