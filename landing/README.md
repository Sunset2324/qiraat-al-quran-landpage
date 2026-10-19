# Qiraat Al-Qur'an — Landing Page

Situs statis (Vite + React + Tailwind). Tidak ada server sendiri: form kontak dan pencatatan unduhan
memanggil backend Qiraat (`POST /api/site/feedback`, `POST /api/site/download`).

## Jalankan
```
npm install
cp .env.example .env     # isi VITE_API_URL
npm run dev
```

## Build & deploy (hosting mana pun)
```
npm run build            # hasil di dist/
```
Upload isi `dist/` ke hosting statis (Netlify, Cloudflare Pages, Vercel, GitHub Pages, cPanel, atau Nginx).
Set `VITE_API_URL` di pengaturan build hosting. Situs satu halaman, jadi tidak butuh aturan rewrite.

## Aset
`public/` berisi ikon fitur, `og.png` (gambar pratinjau tautan), dan berkas APK untuk unduhan langsung.
Setelah rilis di Play Store, ganti tombol unduh agar menuju halaman Play Store.
