import { postJson } from '@/lib/api';

function detectDeviceType(): string {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
  if (/Mobile/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

export async function trackDownload(version: string): Promise<void> {
  try {
    // Pencatatan tidak boleh menghalangi unduhan; kegagalan diabaikan.
    await postJson('/site/download', { deviceType: detectDeviceType(), version });
  } catch (err) {
    console.error('Download tracking error:', err);
  }
}
