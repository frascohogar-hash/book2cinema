// Este archivo conecta Book2Cinema con Supabase
// Usa las llaves que ya guardaste en Vercel

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Guardar un proyecto en la tabla "projects"
export async function saveProject(title, story) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/projects`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify({
      title: title,
      story_text: story,
    }),
  });
  return await res.json();
}

// Ver todos los proyectos guardados
export async function getProjects() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
    },
  });
  return await res.json();
}
