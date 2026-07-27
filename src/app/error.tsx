"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main-content" className="error-page">
      <div className="container">
        <p className="eyebrow">Algo no ha salido como esperábamos</p>
        <h1>Podemos intentarlo de nuevo.</h1>
        <p>El contenido no se ha podido cargar en este momento.</p>
        <button className="button button-dark" type="button" onClick={reset}>Reintentar</button>
      </div>
    </main>
  );
}
