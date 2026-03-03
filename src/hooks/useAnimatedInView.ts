import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { prefersReducedMotion } from "@/lib/animations";

interface UseAnimatedInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useAnimatedInView(options?: UseAnimatedInViewOptions) {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);
  const { ref, inView } = useInView({
    triggerOnce: options?.triggerOnce ?? true,
    threshold: options?.threshold ?? 0.15,
  });

  return {
    ref,
    inView: reducedMotion ? true : inView,
    reducedMotion,
  };
}
