"use client";

import { useEffect, useState } from "react";

function useColumnCount() {
  const [cols, setCols] = useState(12);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => setCols(mq.matches ? 4 : 12);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return cols;
}

/** Superposition de la grille — aide au développement uniquement, jamais dans le build de production. */
export function GridGuides() {
  const cols = useColumnCount();
  return (
    <div className="guides" aria-hidden="true">
      <div className="cols">
        {Array.from({ length: cols }, (_, i) => (
          <div className="col" key={i}>
            <span>{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="rows" />
      <div className="mline l" />
      <div className="mline r" />
    </div>
  );
}

/** Bouton + touche G pour afficher/masquer la grille — dev uniquement. */
export function DevGridToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("grid-on", on);
  }, [on]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toUpperCase();
      if (
        (e.key === "g" || e.key === "G") &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(tag)
      ) {
        setOn((v) => !v);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <button
      type="button"
      className="toggle"
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
    >
      <span className="dot" />
      <span className="lbl">
        {on ? "Masquer la grille" : "Afficher la grille"}
      </span>
    </button>
  );
}
