import { motion } from 'framer-motion';
import { Download, ChevronDown, BookOpen } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import { trackDownload } from '@/lib/downloadTracker';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-emerald/5 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] h-80 w-80 rounded-full bg-emerald/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald" />
              <span className="text-sm font-medium text-emerald-dark">Now Available · Android APK</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Qiraat-Al-Qur-an
              <span className="mt-2 block text-2xl font-medium text-emerald sm:text-3xl lg:text-4xl">
                An Interactive Quranic Learning Mushaf
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              Experience the Quran with recitations from dozens of world-renowned qaris,
              an automatic &lsquo;follow-along&rsquo; reading feature, and dynamic prayer schedules.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="/qiraat-al-quran-v1.0.0.apk"
                download
                onClick={() => trackDownload('v1.0.0')}
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald px-7 py-4 text-base font-semibold text-cream shadow-lg shadow-emerald/20 transition-all duration-300 hover:bg-emerald-dark hover:shadow-xl hover:shadow-emerald-dark/25 active:scale-[0.98] sm:w-auto"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download APK v1.0.0
              </a>
              <a
                href="#features"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald/30 bg-transparent px-7 py-4 text-base font-semibold text-emerald-dark transition-all duration-300 hover:border-emerald hover:bg-emerald/5 active:scale-[0.98] sm:w-auto"
              >
                View All Features
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald" />
                <span className="text-sm text-muted">114 Surahs</span>
              </div>
              <div className="h-4 w-px bg-ink/10" />
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald/10">
                  <span className="text-[10px] font-bold text-emerald">30+</span>
                </div>
                <span className="text-sm text-muted">World-Class Qaris</span>
              </div>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald/10 to-transparent" />
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent" />
    </section>
  );
}
