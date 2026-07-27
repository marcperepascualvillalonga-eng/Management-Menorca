import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="error-page">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>Esta página no está en el escenario.</h1>
        <p>Puede que el contenido todavía no esté publicado o que la dirección haya cambiado.</p>
        <Link className="button button-dark" href="/">Volver al inicio</Link>
      </div>
    </main>
  );
}
