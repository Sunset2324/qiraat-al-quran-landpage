import { motion } from 'framer-motion';
import {
  Headphones, BookOpen, Clock, Palette, HeartPulse, Languages, Compass, Hand, History, WifiOff, Newspaper, Moon,
} from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Follow Along, Verse by Verse',
    description:
      'Pick from many Quranpedia reciters. Each verse plays in turn and is highlighted as you listen, and it keeps playing in the background with a media notification.',
  },
  {
    icon: BookOpen,
    title: 'Qiraat & Mushaf Selection',
    description: 'Switch between mushafs and riwayat, then read and listen in the qiraat you study.',
  },
  {
    icon: Clock,
    title: 'Prayer Times for Your City',
    description: 'Choose your city once and the dashboard shows the next prayer with a live countdown, plus dhikr and du’a after prayer.',
  },
  {
    icon: Compass,
    title: 'Real-Time Qibla Compass',
    description:
      'A live compass sits right in the prayer-time card, with the bearing from the Aladhan API. Open it for the full view: degrees, distance to the Ka’bah and sensor accuracy.',
  },
  {
    icon: Hand,
    title: 'Dhikr, Du’a & Counter',
    description:
      'Morning, evening and after-prayer dhikr with the hadith source, plus a tap counter for 3 or 33 that ignores accidental double taps.',
  },
  {
    icon: History,
    title: 'Reading Progress & History',
    description: 'Your last surah and verse are saved, so you can continue exactly where you stopped.',
  },
  {
    icon: Newspaper,
    title: 'Health Journal',
    description: 'A curated space that pairs Prophetic Medicine verses with wellness products and links.',
  },
  {
    icon: Moon,
    title: 'Light & Dark Themes',
    description: 'Comfortable reading by day or night, with a layout that adapts from small phones to tablets.',
  },
  {
    icon: WifiOff,
    title: 'Works Offline',
    description: 'Surahs, prayer times, dhikr and Prophetic Medicine are cached or bundled, so reading does not depend on a connection.',
  },
  {
    icon: Palette,
    title: 'Tajweed Guide',
    description: 'Learn the rules with color-coded explanations, from madd and idgham to qalqalah.',
  },
  {
    icon: HeartPulse,
    title: 'Prophetic Medicine',
    description: 'Over 560 themes linking Qur’anic verses to health and well-being, with the verse text shown in place.',
  },
  {
    icon: Languages,
    title: 'Indonesian, English & Arabic',
    description: 'The whole interface follows your language, with right-to-left layout for Arabic and offline caching of what you have read.',
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 md:py-28">
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
            Key Features
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Why Choose Qiraat?
          </h2>
          <p className="mt-4 text-lg text-muted">
            A thoughtfully crafted Quranic experience designed for both learning and daily worship.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-2xl border border-ink/8 bg-white/50 p-8 transition-all duration-300 hover:border-emerald/20 hover:bg-white hover:shadow-xl hover:shadow-emerald/5"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 transition-colors duration-300 group-hover:bg-emerald group-hover:shadow-lg group-hover:shadow-emerald/20">
                  <Icon className="h-7 w-7 text-emerald transition-colors duration-300 group-hover:text-cream" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden rounded-tr-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-emerald/5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
