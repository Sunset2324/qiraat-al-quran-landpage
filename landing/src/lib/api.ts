// Backend Qiraat (Express). Atur VITE_API_URL saat build, mis. https://api.domainanda.com
const BASE = ((import.meta.env.VITE_API_URL as string | undefined) ?? 'https://backend-qiraat.vercel.app').replace(/\/$/, '');

export async function postJson(path: string, body: unknown): Promise<void> {
  const res = await fetch(`${BASE}/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    let msg = 'Something went wrong. Please try again.';
    try {
      const j = await res.json();
      if (j?.message) msg = j.message;
    } catch {
      /* abaikan */
    }
    throw new Error(msg);
  }
}
