import { site } from "../data/site";
import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

interface CellProps {
  index: number;
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  active: boolean;
}

function Cell({ index, prefix, value, suffix, label, active }: CellProps) {
  const n = useCounter(value, { active, duration: 1600 + index * 200 });
  const display = value >= 100 ? formatBig(n) : String(n);
  return (
    <div className="stats__cell">
      <span className="stats__cell__index">0{index + 1}</span>
      <div className="stats__num">
        {prefix && <span className="prefix">{prefix}</span>}
        <span>{display}</span>
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      <div className="stats__label">{label}</div>
    </div>
  );
}

function formatBig(n: number): string {
  if (n < 1000) return String(n);
  return n.toLocaleString("en-US");
}

export function Stats() {
  const { stats } = site;
  const [ref, inView] = useInView<HTMLElement>({ margin: 120 });
  const [eyeNum, eyeText] = stats.eyebrow.split(" — ");

  return (
    <section ref={ref} className="section stats">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: 48 }}>
          <span className="num">{eyeNum}</span>
          {eyeText}
        </p>
      </div>
      <div className="stats__grid">
        {stats.items.map((item, i) => (
          <Cell key={i} index={i} active={inView} {...item} />
        ))}
      </div>
    </section>
  );
}
