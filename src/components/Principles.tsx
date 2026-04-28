import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function Principles() {
  const { principles } = site;
  const [eyeNum, eyeText] = principles.eyebrow.split(" — ");

  return (
    <section id="principles" className="section">
      <div className="container">
        <Reveal>
          <div className="section__header">
            <p className="eyebrow">
              <span className="num">{eyeNum}</span>
              {eyeText}
            </p>
            <h2 className="section__title">
              How the <em>work</em> gets done.
            </h2>
          </div>
        </Reveal>

        <div className="principles__list">
          {principles.items.map((p, i) => (
            <Reveal key={p.n} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <article className="principle">
                <span className="principle__num">{p.n}</span>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
