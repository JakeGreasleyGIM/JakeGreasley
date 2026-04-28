import { Fragment } from "react";
import { site } from "../data/site";

export function Press() {
  const { press } = site;
  const [eyeNum, eyeText] = press.eyebrow.split(" — ");
  // Duplicate the items so the marquee can loop seamlessly with translateX(-50%).
  const loop = [...press.items, ...press.items];

  return (
    <section className="press">
      <p className="eyebrow press__eyebrow">
        <span className="num">{eyeNum}</span>
        {eyeText}
      </p>
      <div className="press__track">
        {loop.map((name, i) => (
          <Fragment key={i}>
            <span className="press__item">{name}</span>
            <span className="press__item press__item__sep" aria-hidden="true">
              ✦
            </span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
