import { useRef } from "react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

interface VentureCardProps {
  index: string;
  name: string;
  category: string;
  status: string;
  blurb: string;
  accent: string;
  year: string;
}

function VentureCard(v: VentureCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--mx", `${mx}%`);
    node.style.setProperty("--my", `${my}%`);
  };

  return (
    <div
      ref={ref}
      className="venture"
      onMouseMove={onMove}
      style={{ ["--accent" as string]: v.accent }}
    >
      <div className="venture__top">
        <span className="venture__index">{v.index} · {v.year}</span>
        <span className="venture__status">{v.status}</span>
      </div>
      <h3 className="venture__name">{v.name}</h3>
      <div className="venture__category">{v.category}</div>
      <p className="venture__blurb">{v.blurb}</p>
      <span className="venture__cta">
        Learn more
        <span className="venture__cta__arrow" aria-hidden="true" />
      </span>
    </div>
  );
}

export function Ventures() {
  const { ventures } = site;
  const [eyeNum, eyeText] = ventures.eyebrow.split(" — ");

  return (
    <section id="ventures" className="section">
      <div className="container">
        <Reveal>
          <div className="section__header">
            <p className="eyebrow">
              <span className="num">{eyeNum}</span>
              {eyeText}
            </p>
            <h2 className="section__title">
              A portfolio of <em>obsession.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="ventures__grid">
            {ventures.items.map((v) => (
              <VentureCard key={v.index} {...v} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
