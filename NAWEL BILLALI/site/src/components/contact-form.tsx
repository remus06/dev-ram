"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
      societe: data.get("societe"), // champ piège
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="body" style={{ marginTop: 24 }}>
        Message envoyé. Réponse sous 48 h ouvrées.
      </p>
    );
  }

  return (
    <form
      style={{ display: "grid", gap: 16, marginTop: 24 }}
      aria-label="Formulaire de contact"
      onSubmit={handleSubmit}
    >
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <label htmlFor="societe">Société</label>
        <input id="societe" name="societe" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <label htmlFor="n">Nom et prénom *</label>
          <input id="n" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="t">Téléphone</label>
          <input id="t" name="phone" type="tel" />
        </div>
      </div>
      <div>
        <label htmlFor="e">E-mail *</label>
        <input id="e" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="s">Sujet</label>
        <select id="s" name="subject" defaultValue="Prendre rendez-vous">
          <option>Prendre rendez-vous</option>
          <option>Question sur une méthode</option>
          <option>Tarifs et mutuelle</option>
          <option>Séance en visio</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="m">Message *</label>
        <textarea id="m" name="message" required minLength={10} />
      </div>
      <label className="check">
        <input type="checkbox" required />
        <span>
          J&apos;accepte que mes informations soient utilisées pour répondre
          à ma demande. Elles ne sont ni cédées ni utilisées à d&apos;autres
          fins.
        </span>
      </label>
      <div>
        <button className="btn btn-p" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
        </button>
      </div>
      {status === "error" && (
        <p className="small" style={{ color: "var(--accent)" }}>
          L&apos;envoi a échoué. Merci de réessayer ou d&apos;appeler le
          cabinet directement.
        </p>
      )}
      <p className="small">* Champs obligatoires.</p>
    </form>
  );
}
