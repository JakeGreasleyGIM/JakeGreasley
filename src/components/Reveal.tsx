import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export function Reveal({ children, delay, className = "" }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ margin: 80 });
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " is-visible" : ""} ${className}`.trim()}
      data-delay={delay}
    >
      {children}
    </div>
  );
}
