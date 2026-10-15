import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { trackDownload } from '@/lib/downloadTracker';

export default function DownloadCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald to-emerald-dark px-8 py-14 text-center shadow-2xl shadow-emerald/20 md:px-16 md:py-20"
        >
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-white/5" />
            <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-white/3 blur-xl" />
          </div>

          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
              Begin Your Quranic Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/80">
              Download Qiraat-Al-Qur-an now and carry a beautiful, interactive mushaf wherever you go.
            </p>

            <a
              href="/qiraat-al-quran-v1.0.0.apk"
              download
              onClick={() => trackDownload('v1.0.0')}
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-cream px-8 py-4 text-base font-semibold text-emerald-dark shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl active:scale-[0.98]"
            >
              <Download className="h-5 w-5" />
              Download APK v1.0.0
            </a>

            <p className="mt-4 text-sm text-cream/60">
              Free download · Android 5.0+ · 24 MB
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
