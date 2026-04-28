import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function About() {
  const { about } = site;
  const [eyeNum, eyeText] = about.eyebrow.split(" — ");
  const [firstChar, ...rest] = about.lead;

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="eyebrow about__eyebrow">
            <span className="num">{eyeNum}</span>
            {eyeText}
          </p>
        </Reveal>

        <div className="about__head">
          <Reveal delay={1}>
            <h2 className="about__title">
              <span className="about__kicker">{about.kicker}</span>
              <em className="about__title__name">{about.title}</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="about__deck">{about.deck}</p>
          </Reveal>
        </div>

        <div className="about__body">
          <Reveal delay={1}>
            <figure className="about__portrait">
              <img src="/portrait.svg" alt="Stylized portrait of Mister Greasley" />
              <figcaption>
                <span className="about__portrait__line" aria-hidden="true" />
                Photographed in absentia · New England, MMXXVI
              </figcaption>
              <dl className="about__captions">
                {about.captions.map((c) => (
                  <div className="about__caption" key={c.k}>
                    <dt>{c.k}</dt>
                    <dd>{c.v}</dd>
                  </div>
                ))}
              </dl>
            </figure>
          </Reveal>

          <Reveal delay={2}>
            <div className="about__copy">
              <p className="about__lead">
                <span className="about__dropcap">{firstChar}</span>
                {rest.join("")}
              </p>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
