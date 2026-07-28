"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  formType?: "general" | "artist" | "wedding" | "corporate" | "technical";
  compact?: boolean;
  locale?: "es" | "ca";
};

export function InquiryForm({ formType = "general", compact = false, locale = "es" }: InquiryFormProps) {
  const ca = locale === "ca";
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
          <span>{ca ? "Nom *" : "Nombre *"}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{ca ? "Correu electrònic *" : "Correo electrónico *"}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{ca ? "Telèfon" : "Teléfono"}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{ca ? "Empresa o espai" : "Empresa o espacio"}</span>
          <input name="company" autoComplete="organization" />
        </label>
        {!compact ? (
          <>
            <label>
              <span>{ca ? "Què necessites?" : "¿Qué necesitas?"}</span>
              <select name="service" defaultValue={formType}>
                <option value="general">{ca ? "Orientació general" : "Orientación general"}</option>
                <option value="artist">{ca ? "Artistes i booking" : "Artistas y booking"}</option>
                <option value="technical">{ca ? "So i il·luminació" : "Sonido e iluminación"}</option>
                <option value="wedding">{ca ? "Casament a Menorca" : "Boda en Menorca"}</option>
              </select>
            </label>
            <label>
              <span>{ca ? "Data aproximada" : "Fecha aproximada"}</span>
              <input name="date" type="date" />
            </label>
            <label>
              <span>{ca ? "Municipi" : "Municipio"}</span>
              <input name="locality" />
            </label>
            <label>
              <span>{ca ? "Tipus d’esdeveniment" : "Tipo de evento"}</span>
              <select name="eventType" defaultValue="">
                <option value="" disabled>{ca ? "Selecciona una opció" : "Selecciona una opción"}</option>
                <option>{ca ? "Casament o celebració" : "Boda o celebración"}</option>
                <option>{ca ? "Esdeveniment corporatiu" : "Evento corporativo"}</option>
                <option>{ca ? "Concert o esdeveniment públic" : "Concierto o evento público"}</option>
                <option>{ca ? "Necessitat tècnica" : "Necesidad técnica"}</option>
                <option>{ca ? "Un altre" : "Otro"}</option>
              </select>
            </label>
            <label>
              <span>{ca ? "Nombre d’assistents" : "Número de asistentes"}</span>
              <input name="attendees" inputMode="numeric" />
            </label>
          </>
        ) : null}
        <label className="form-full">
          <span>{ca ? "Què tens en ment? *" : "¿Qué tienes en mente? *"}</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <label className="checkbox-field">
        <input name="privacy" type="checkbox" required />
        <span>{ca ? "He llegit i accept la " : "He leído y acepto la "}<a href="/privacidad">{ca ? "política de privacitat" : "política de privacidad"}</a>.</span>
      </label>
      <button className="button button-accent" type="submit" disabled={status === "sending"}>
        {status === "sending" ? (ca ? "Enviant…" : "Enviando…") : (ca ? "Enviar consulta" : "Enviar consulta")}
      </button>
      {status === "error" ? (
        <p className="form-notice" role="alert">
          {ca ? "L’enviament automàtic encara no està configurat. Pots contactar per correu o WhatsApp." : "El envío automático todavía no está configurado. Puedes contactar por correo o WhatsApp."}
        </p>
      ) : null}
    </form>
  );
}
