import { useEffect, useState } from "react";
import { site } from "../data/site";

const TYPE_MS = 60;
const DELETE_MS = 32;
const HOLD_MS = 1400;

export function Hero() {
  const { hero } = site;
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"type" | "hold" | "delete">("type");

  useEffect(() => {
    const target = hero.roles[roleIdx];
    let id: number;

    if (mode === "type") {
      if (text.length < target.length) {
        id = window.setTimeout(
          () => setText(target.slice(0, text.length + 1)),
          TYPE_MS,
        );
      } else {
        id = window.setTimeout(() => setMode("hold"), HOLD_MS);
      }
    } else if (mode === "hold") {
      id = window.setTimeout(() => setMode("delete"), 0);
    } else {
      if (text.length > 0) {
        id = window.setTimeout(
          () => setText(text.slice(0, -1)),
          DELETE_MS,
        );
      } else {
        id = window.setTimeout(() => {
          setRoleIdx((i) => (i + 1) % hero.roles.length);
          setMode("type");
        }, 220);
      }
    }
    return () => window.clearTimeout(id);
  }, [text, mode, roleIdx, hero.roles]);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__top">
          <span>{hero.eyebrow}</span>
          <div className="hero__top__right">
            <span>Status: Building</span>
            <span>{today}</span>
          </div>
        </div>

        <h1 className="hero__name">
          <span className="first">{hero.firstName}</span>{" "}
          <span className="last">{hero.lastName}</span>
        </h1>

        <div className="hero__sub">
          <div className="hero__roles">
            <span>I am a</span>
            <span className="hero__roles__current">
              <span className="hero__roles__text">{text}</span>
              <span className="hero__roles__caret" aria-hidden="true" />
            </span>
          </div>
          <p className="hero__tagline">{hero.tagline}</p>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll__line" />
        <span>Scroll</span>
      </div>
      <div className="hero__monogram" aria-hidden="true">
        <div>JG · {site.domain}</div>
        <div style={{ marginTop: 6, color: "var(--ink-faint)" }}>
          MA · RI · NH
        </div>
      </div>
    </section>
  );
}
