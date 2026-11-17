"use client";
import { useState } from "react";
import { saveProject, getProjects } from "../../lib/supabase";

export default function TestSupabase() {
  const [mensaje, setMensaje] = useState("Pulsa el botón para probar");

  async function probar() {
    setMensaje("Guardando...");
    const guardado = await saveProject("Mi primera prueba", "Mateo abre un portal en la cocina");
    console.log(guardado);
    const todos = await getProjects();
    setMensaje(`¡Funciona! Tienes ${todos.length} proyectos guardados en Supabase.`);
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Prueba Supabase</h1>
      <p>{mensaje}</p>
      <button onClick={probar} style={{ padding: "12px 20px", fontSize: 16, cursor: "pointer" }}>
        Probar guardar
      </button>
    </div>
  );
}
