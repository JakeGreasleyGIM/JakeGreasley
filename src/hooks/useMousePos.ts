import { useEffect, useState } from "react";

export interface MousePos {
  x: number;
  y: number;
  active: boolean;
}

export function useMousePos(): MousePos {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY, active: true });
    const onLeave = () => setPos((p) => ({ ...p, active: false }));
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return pos;
}
