import { motion } from 'framer-motion';
import { Clock, BookOpen, Users, MapPin, Bell, Play } from 'lucide-react';

const screenshots = [
  {
    label: 'Dashboard Screen',
    sublabel: 'Prayer times & upcoming adhan',
    icon: Clock,
    accent: 'emerald' as const,
  },
  {
    label: 'Surah Detail Screen',
    sublabel: 'Arabic text & translation',
    icon: BookOpen,
    accent: 'emerald' as const,
  },
  {
    label: 'Qari Selection Screen',
    sublabel: 'List of reciters',
    icon: Users,
    accent: 'emerald' as const,
  },
];

function ScreenshotCard({
  screenshot,
  index,
}: {
  screenshot: (typeof screenshots)[number];
  index: number;
}) {
  const Icon = screenshot.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      {/* Phone-style screenshot frame */}
      <div className="relative overflow-hidden rounded-xl border-[6px] border-ink/90 bg-cream shadow-xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-emerald/10">
        <div className="relative h-[480px] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[10px] font-medium text-ink">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-emerald" />
              <span className="h-2 w-2 rounded-sm bg-ink/20" />
              <span className="h-2 w-3 rounded-sm bg-ink/20" />
            </div>
          </div>

          {/* Content varies per screenshot */}
          {index === 0 && <DashboardScreenshot />}
          {index === 1 && <SurahScreenshot />}
          {index === 2 && <QariScreenshot />}
        </div>
      </div>

      {/* Label */}
      <div className="mt-5 text-center">
        <h3 className="font-serif text-lg font-bold text-ink">{screenshot.label}</h3>
        <p className="mt-1 text-sm text-muted">{screenshot.sublabel}</p>
      </div>
    </motion.div>
  );
}

function DashboardScreenshot() {
  const prayers = [
    { name: 'Fajr', time: '5:12 AM', active: false },
    { name: 'Dhuhr', time: '12:15 PM', active: true },
    { name: 'Asr', time: '3:42 PM', active: false },
    { name: 'Maghrib', time: '6:28 PM', active: false },
    { name: 'Isha', time: '7:50 PM', active: false },
  ];

  return (
    <div className="px-4 pb-4">
      <div className="mb-4">
        <h4 className="font-serif text-base font-bold text-ink">Prayer Times</h4>
        <div className="mt-1 flex items-center gap-1 text-[10px] text-muted">
          <MapPin className="h-3 w-3" />
          <span>Jakarta, Indonesia</span>
        </div>
      </div>

      {/* Next prayer banner */}
      <div className="mb-4 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark p-4 text-cream">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Next Prayer</span>
        </div>
        <p className="mt-1 font-serif text-2xl font-bold">Dhuhr</p>
        <p className="text-xs text-cream/80">in 2 hours 15 minutes</p>
      </div>

      {/* Prayer list */}
      <div className="space-y-2">
        {prayers.map((prayer) => (
          <div
            key={prayer.name}
            className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-xs ${
              prayer.active
                ? 'bg-emerald/10 border border-emerald/20'
                : 'bg-white/40'
            }`}
          >
            <span className={`font-medium ${prayer.active ? 'text-emerald-dark' : 'text-ink'}`}>
              {prayer.name}
            </span>
            <span className={prayer.active ? 'text-emerald-dark font-semibold' : 'text-muted'}>
              {prayer.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SurahScreenshot() {
  return (
    <div className="px-4 pb-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-base font-bold text-ink">Al-Fatihah</h4>
          <p className="text-[10px] text-muted">The Opening · Meccan</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/10">
          <Play className="h-3.5 w-3.5 fill-emerald text-emerald" />
        </div>
      </div>

      {/* Verses */}
      <div className="space-y-2.5">
        <div className="rounded-lg bg-white/50 p-3">
          <p className="font-arabic text-right text-base leading-loose text-ink">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="mt-1.5 text-[9px] text-muted">
            In the name of Allah, the Most Gracious, the Most Merciful.
          </p>
        </div>
        <div className="rounded-lg bg-emerald/12 p-3 ring-1 ring-emerald/20">
          <p className="font-arabic text-right text-base leading-loose text-ink">
            ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
          </p>
          <p className="mt-1.5 text-[9px] text-muted">
            All praise is for Allah—Lord of all worlds.
          </p>
        </div>
        <div className="rounded-lg bg-white/50 p-3">
          <p className="font-arabic text-right text-base leading-loose text-ink">
            ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="mt-1.5 text-[9px] text-muted">
            The Most Gracious, the Most Merciful.
          </p>
        </div>
        <div className="rounded-lg bg-white/50 p-3">
          <p className="font-arabic text-right text-base leading-loose text-ink">
            مَٰلِكِ يَوْمِ ٱلدِّينِ
          </p>
          <p className="mt-1.5 text-[9px] text-muted">
            Master of the Day of Judgment.
          </p>
        </div>
      </div>
    </div>
  );
}

function QariScreenshot() {
  const qaris = [
    { name: 'Mishary Rashid Alafasy', country: 'Kuwait', active: true },
    { name: 'Abdul Basit Abdul Samad', country: 'Egypt', active: false },
    { name: 'Abdur Rahman as-Sudais', country: 'Saudi Arabia', active: false },
    { name: 'Saad Al-Ghamdi', country: 'Saudi Arabia', active: false },
    { name: 'Maher Al-Muaiqly', country: 'Saudi Arabia', active: false },
  ];

  return (
    <div className="px-4 pb-4">
      <h4 className="mb-1 font-serif text-base font-bold text-ink">Select Qari</h4>
      <p className="mb-3 text-[10px] text-muted">Choose your preferred reciter</p>

      <div className="space-y-2">
        {qaris.map((qari) => (
          <div
            key={qari.name}
            className={`flex items-center gap-3 rounded-lg p-2.5 ${
              qari.active ? 'bg-emerald/10 border border-emerald/20' : 'bg-white/40'
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                qari.active ? 'bg-emerald' : 'bg-emerald/10'
              }`}
            >
              <Users className={`h-4 w-4 ${qari.active ? 'text-cream' : 'text-emerald'}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-xs font-medium ${qari.active ? 'text-emerald-dark' : 'text-ink'}`}>
                {qari.name}
              </p>
              <p className="text-[9px] text-muted">{qari.country}</p>
            </div>
            {qari.active && (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald">
                <Play className="h-3 w-3 fill-cream text-cream" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-transparent via-emerald/3 to-transparent px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald">
            Visual Gallery
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-muted">
            A glimpse of the elegant, intuitive interface awaiting you.
          </p>
        </motion.div>

        {/* Screenshot grid */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard key={screenshot.label} screenshot={screenshot} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
