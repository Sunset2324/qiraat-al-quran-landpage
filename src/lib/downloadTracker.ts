import { supabase } from '@/lib/supabase';

function detectDeviceType(): string {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
  if (/Mobile/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function hashIp(ip: string): string {
  // Simple hash for dedup — not cryptographic, but sufficient for rough analytics
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(36);
}

export async function trackDownload(version: string): Promise<void> {
  try {
    const { error } = await supabase.from('download_logs').insert({
      device_type: detectDeviceType(),
      user_agent: navigator.userAgent,
      ip_hash: hashIp(navigator.userAgent.slice(0, 50)),
      version,
    });
    if (error) {
      console.error('Failed to log download:', error.message);
    }
  } catch (err) {
    console.error('Download tracking error:', err);
  }
}
