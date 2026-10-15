/*
# Create download_logs and feedback tables

## Purpose
Support two features for the Qiraat-Al-Qur-an landing page:
1. Download tracking — log every APK download with metadata (device type, timestamp).
2. Contact/feedback form — store visitor messages for review.

## New Tables

### download_logs
- `id` (uuid, primary key)
- `device_type` (text) — e.g. "Android", "iOS", "Desktop", auto-detected from user-agent
- `user_agent` (text) — raw user-agent string for debugging
- `ip_hash` (text) — SHA-256 hash of the visitor's IP for dedup/analytics (never the raw IP)
- `version` (text) — the APK version downloaded, e.g. "v1.0.0"
- `created_at` (timestamptz) — when the download was initiated

### feedback
- `id` (uuid, primary key)
- `name` (text) — visitor's name
- `email` (text) — visitor's email for replies
- `message` (text) — the feedback or contact message
- `created_at` (timestamptz) — when the message was submitted

## Security
- Both tables enable Row Level Security.
- This is a single-tenant app with no sign-in, so policies allow anon + authenticated to INSERT only.
- No SELECT/UPDATE/DELETE policies — visitors cannot read other people's data, modify, or delete rows.
- Only the service role (server-side) can read/manage the stored data.

## Important Notes
1. Visitors can submit downloads and feedback but cannot read or modify any stored data.
2. The site owner accesses data through the Supabase dashboard or service-role queries.
3. ip_hash stores a one-way hash so downloads can be roughly deduplicated without storing PII.
*/

CREATE TABLE IF NOT EXISTS download_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  device_type text,
  user_agent text,
  ip_hash text,
  version text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE download_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_download_logs" ON download_logs;
CREATE POLICY "anon_insert_download_logs"
ON download_logs FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_feedback" ON feedback;
CREATE POLICY "anon_insert_feedback"
ON feedback FOR INSERT
TO anon, authenticated WITH CHECK (true);