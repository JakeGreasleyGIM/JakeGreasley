import { site } from "../data/site";
import { useInView } from "../hooks/useInView";

export function Manifesto() {
  const { manifesto } = site;
  const [ref, inView] = useInView<HTMLElement>({ margin: 200 });

  return (
    <section
      id="manifesto"
      ref={ref}
      className={`section manifesto${inView ? " is-visible" : ""}`}
    >
      <div className="container">
        <div className="manifesto__rule" aria-hidden="true" />
        <p className="eyebrow" style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="num">{manifesto.eyebrow.split(" — ")[0]}</span>
          {manifesto.eyebrow.split(" — ")[1]}
        </p>
        <h2 className="manifesto__body">
          {manifesto.body.map((line, i) => (
            <span
              key={i}
              className={i === 1 ? "accent" : undefined}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {line}
            </span>
          ))}
        </h2>
        <div className="manifesto__sig">{manifesto.signature}</div>
      </div>
    </section>
  );
}
