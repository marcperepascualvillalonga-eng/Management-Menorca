"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  formType?: "general" | "artist" | "wedding" | "corporate" | "technical";
  compact?: boolean;
};

export function InquiryForm({ formType = "general", compact = false }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const response = await fetch("/api/inquiry", {
      method: "POST",
      body: new FormData(form),
    });
    setStatus(response.ok ? "idle" : "error");
  }

  return (
    <form className={`inquiry-form ${compact ? "is-compact" : ""}`} onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value={formType} />
      <div className="honeypot" aria-hidden="true">
        <label>Deja este campo vacío<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <label>
          <span>Nombre *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Correo electrónico *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Empresa o espacio</span>
          <input name="company" autoComplete="organization" />
        </label>
        {!compact ? (
          <>
            <label>
              <span>¿Qué necesitas?</span>
              <select name="service" defaultValue={formType}>
                <option value="general">Orientación general</option>
                <option value="artist">Artistas y booking</option>
                <option value="technical">Sonido e iluminación</option>
                <option value="wedding">Boda en Menorca</option>
              </select>
            </label>
            <label>
              <span>Fecha aproximada</span>
              <input name="date" type="date" />
            </label>
            <label>
              <span>Municipio</span>
              <input name="locality" />
            </label>
            <label>
              <span>Tipo de evento</span>
              <select name="eventType" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Boda o celebración</option>
                <option>Evento corporativo</option>
                <option>Concierto o evento público</option>
                <option>Necesidad técnica</option>
                <option>Otro</option>
              </select>
            </label>
            <label>
              <span>Número de asistentes</span>
              <input name="attendees" inputMode="numeric" />
            </label>
          </>
        ) : null}
        <label className="form-full">
          <span>¿Qué tienes en mente? *</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <label className="checkbox-field">
        <input name="privacy" type="checkbox" required />
        <span>He leído y acepto la <a href="/privacidad">política de privacidad</a>.</span>
      </label>
      <button className="button button-accent" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
      {status === "error" ? (
        <p className="form-notice" role="alert">
          El envío automático todavía no está configurado. Puedes contactar por correo o WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
