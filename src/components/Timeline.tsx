import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { timeline } = site;
  const [eyeNum, eyeText] = timeline.eyebrow.split(" — ");

  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="num">{eyeNum}</span>
            {eyeText}
          </p>
        </Reveal>

        <ol className="timeline__list" aria-label="Biography in chapters">
          {timeline.items.map((item, i) => (
            <Reveal
              key={item.n}
              delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}
            >
              <li className="timeline__item">
                <div className="timeline__rail" aria-hidden="true">
                  <span className="timeline__dot" />
                  <span className="timeline__line" />
                </div>
                <div className="timeline__chapter">
                  <span className="timeline__chapter__num">Chapter {item.n}</span>
                  <span className="timeline__chapter__year">{item.year}</span>
                </div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__body">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
