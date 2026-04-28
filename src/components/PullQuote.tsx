import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function PullQuote() {
  const { pullQuote } = site;
  return (
    <section className="pull">
      <div className="container">
        <Reveal>
          <span className="pull__mark" aria-hidden="true">
            ❦
          </span>
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="pull__body">
            <span className="pull__lq" aria-hidden="true">
              “
            </span>
            {pullQuote.body}
            <span className="pull__rq" aria-hidden="true">
              ”
            </span>
          </blockquote>
        </Reveal>
        <Reveal delay={2}>
          <cite className="pull__cite">
            <span className="pull__rule" aria-hidden="true" />
            {pullQuote.attribution}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
