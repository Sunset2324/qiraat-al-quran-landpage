import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, Volume2, MapPin } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: '280px' }}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink" />

        {/* Screen */}
        <div className="relative h-[560px] overflow-hidden rounded-[2rem] bg-cream">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-medium text-ink">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-sm bg-emerald" />
              <span className="h-2.5 w-2.5 rounded-sm bg-ink/30" />
              <span className="h-2.5 w-4 rounded-sm bg-ink/30" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 pt-2 pb-3">
            <div>
              <h3 className="font-serif text-base font-bold text-ink">Al-Fatihah</h3>
              <p className="text-[10px] text-muted">The Opening · 7 Verses</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald/10">
              <Volume2 className="h-4 w-4 text-emerald" />
            </div>
          </div>

          {/* Arabic verse area */}
          <div className="mx-3 rounded-xl bg-white/60 p-4">
            <p className="font-arabic text-right text-lg leading-loose text-ink">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <p className="mt-2 text-[10px] text-muted">
              In the name of Allah, the Most Gracious, the Most Merciful.
            </p>
          </div>

          {/* Highlighted active verse */}
          <motion.div
            initial={{ backgroundColor: 'rgba(47, 122, 92, 0.08)' }}
            animate={{ backgroundColor: ['rgba(47, 122, 92, 0.08)', 'rgba(47, 122, 92, 0.18)', 'rgba(47, 122, 92, 0.08)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-3 mt-2 rounded-xl p-4"
          >
            <p className="font-arabic text-right text-lg leading-loose text-ink">
              ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
            </p>
            <p className="mt-2 text-[10px] text-muted">
              All praise is for Allah—Lord of all worlds.
            </p>
          </motion.div>

          {/* Prayer time widget */}
          <div className="mx-3 mt-3 rounded-xl border border-emerald/15 bg-emerald/5 p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald">
              <MapPin className="h-3 w-3" />
              <span>Next: Dhuhr — 12:15 PM</span>
            </div>
          </div>

          {/* Audio player bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-ink/5 bg-white/80 backdrop-blur-sm px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream">
                  <Play className="h-3.5 w-3.5 fill-emerald text-emerald" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream">
                  <Pause className="h-3.5 w-3.5 text-muted" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream">
                  <SkipForward className="h-3.5 w-3.5 text-muted" />
                </div>
              </div>
              <span className="text-[10px] text-muted">Mishary Rashid Alafasy</span>
            </div>
            {/* Progress bar */}
            <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-ink/10">
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: ['20%', '75%', '20%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full rounded-full bg-emerald"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute -right-8 -top-6 -z-10 h-32 w-32 rounded-full bg-emerald/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-6 -z-10 h-24 w-24 rounded-full bg-emerald/10 blur-2xl" />
    </div>
  );
}
