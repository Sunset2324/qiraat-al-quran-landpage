# Migrasi hosting: landing page + backend Qiraat

## A. Landing page (repo qiraat-al-quran-landpage)
1. Timpa file dari folder `landing/` ke root repo.
2. HAPUS jejak Bolt/Supabase (file ini dihapus, jalankan di root repo):
   ```
   git rm -r .bolt supabase src/lib/supabase.ts
   npm install        # memperbarui lockfile (paket @supabase/supabase-js sudah dibuang)
   ```
3. Isi `.env` dari `.env.example` (`VITE_API_URL` = alamat backend baru), lalu `npm run build`.
4. Upload isi `dist/` ke hosting statis. Set `VITE_API_URL` juga di pengaturan build hosting.
5. Setelah domain jadi, ubah `og:image` dan `twitter:image` di `index.html` menjadi URL penuh,
   mis. `https://domainanda.com/og.png` (pratinjau link WhatsApp/Facebook butuh URL absolut).

Data lama di Supabase milik Bolt (tabel feedback & download_logs) tidak ikut pindah. Kalau perlu,
ekspor dulu dari dashboard Bolt/Supabase. Data baru tersimpan di backend (Upstash Redis).

## B. Backend (repo backend_Qiraat)
1. Timpa file dari folder `backend/` ke root repo.
2. Server sekarang bisa jalan di hosting biasa: `npm ci && npm run build && npm start`
   (otomatis listen di `PORT`; di Vercel tetap serverless). Atau pakai `Dockerfile`.
3. Isi environment variable di hosting baru (lihat `.env.example`):
   `ADMIN_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `CLOUDINARY_*`, `PORT`.
   Data iklan sudah ada di Upstash, jadi memakai URL/token yang sama berarti iklan ikut pindah.
4. Ubah `API_BASE_URL` di app (`src/config.ts`) ke domain backend baru, lalu rilis app baru.
   Selama transisi, biarkan backend Vercel lama tetap hidup supaya APK lama tidak rusak.
5. Endpoint baru: `POST /api/site/feedback`, `POST /api/site/download`;
   baca data (header `x-admin-key`): `GET /admin/api/site/feedback`, `GET /admin/api/site/downloads`.

## C. Urutan aman
backend baru hidup -> tes `/api/surah` dan `/api/ads` -> landing build dengan `VITE_API_URL` baru
-> arahkan domain -> terakhir ubah `API_BASE_URL` di app.
