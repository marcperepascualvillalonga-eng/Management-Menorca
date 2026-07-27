import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  if (formData.get("website")) {
    return NextResponse.json({ accepted: true });
  }

  const requiredFields = ["name", "email", "message", "privacy"];
  const missing = requiredFields.some((field) => !formData.get(field));
  if (missing) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      error:
        "El proveedor de correo aún no está configurado. Usa los canales de contacto alternativos.",
    },
    { status: 503 },
  );
}
