import { useEffect, useRef, useState } from "react";

interface Options {
  /** Distance from the bottom of the viewport (in px) before the element triggers. */
  margin?: number;
  /** When true (default), latches to true once and never resets. */
  once?: boolean;
}

export function useInView<T extends Element>(opts: Options = {}) {
  const { margin = 80, once = true } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let visible = false;
    let observer: IntersectionObserver | null = null;

    const trigger = () => {
      if (visible) return;
      visible = true;
      setInView(true);
      if (once) detach();
    };
    const reverse = () => {
      if (!visible) return;
      visible = false;
      setInView(false);
    };
    const detach = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const checkRect = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight - margin && rect.bottom > 0;
    };

    const onScroll = () => {
      if (checkRect()) trigger();
      else reverse();
    };

    // Synchronous mount check — handles content already in viewport.
    if (checkRect()) {
      trigger();
      if (once) return detach;
    }

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) trigger();
          else if (!once) reverse();
        },
        { rootMargin: `0px 0px ${-margin}px 0px`, threshold: 0 },
      );
      observer.observe(node);
    }

    // Belt-and-suspenders: also listen to scroll/resize so we still react in
    // environments where IO is unreliable.
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return detach;
  }, [margin, once]);

  return [ref, inView] as const;
}
