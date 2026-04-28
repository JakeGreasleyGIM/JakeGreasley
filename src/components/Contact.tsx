import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const { contact, email, social } = site;
  const [eyeNum, eyeText] = contact.eyebrow.split(" — ");

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 56 }}>
            <span className="num">{eyeNum}</span>
            {eyeText}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="contact__title">
            {contact.pretitle} <em>{contact.titleAccent}</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="contact__body">{contact.body}</p>
        </Reveal>

        <Reveal delay={3}>
          <a className="contact__cta" href={`mailto:${email}`}>
            {contact.cta}
            <span className="contact__cta__arrow" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={4}>
          <div className="contact__socials">
            <a href={`mailto:${email}`}>{email}</a>
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
