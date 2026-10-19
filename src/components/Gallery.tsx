import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Phone from './mock/Phone';
import {
  DashboardScreen, SurahScreen, QiraatScreen, ThibbunScreen,
  PrayerScreen, DhikrScreen, QiblaScreen, HistoryScreen,
} from './mock/screens';

const screenshots: { label: string; sublabel: string; alt: string; screen: ReactNode }[] = [
  {
    label: 'Dashboard',
    sublabel: 'Next prayer at a glance, with shortcuts to every feature',
    alt: 'Dashboard screen',
    screen: <DashboardScreen />,
  },
  {
    label: 'Follow Along',
    sublabel: 'Verse-by-verse audio with the active verse highlighted',
    alt: 'Surah screen with Follow Along playing',
    screen: <SurahScreen />,
  },
  {
    label: 'Mushaf Selection',
    sublabel: 'Choose the qiraat and riwayah you read',
    alt: 'Mushaf selection screen',
    screen: <QiraatScreen />,
  },
  {
    label: 'Prophetic Medicine',
    sublabel: 'Qur’anic verses on health, organized by theme',
    alt: 'Prophetic medicine theme list',
    screen: <ThibbunScreen />,
  },
  {
    label: 'Prayer Times & Qibla',
    sublabel: 'Live countdown with a real-time Qibla compass right in the card',
    alt: 'Prayer times screen with Qibla compass',
    screen: <PrayerScreen />,
  },
  {
    label: 'Dhikr Counter',
    sublabel: 'Count to 3 or 33 with a short tap delay, so nothing is counted twice',
    alt: 'Dhikr detail with a 33 counter',
    screen: <DhikrScreen />,
  },
  {
    label: 'Qibla Direction',
    sublabel: 'Full-size compass with bearing, distance to the Ka’bah and sensor accuracy',
    alt: 'Qibla detail screen',
    screen: <QiblaScreen />,
  },
  {
    label: 'Reading History',
    sublabel: 'Pick up right where you stopped, on the exact verse',
    alt: 'Reading history screen',
    screen: <HistoryScreen />,
  },
];

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-transparent via-emerald/3 to-transparent px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald">Visual Gallery</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">See It In Action</h2>
          <p className="mt-4 text-lg text-muted">A look at the screens you will use every day.</p>
        </motion.div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {screenshots.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Phone label={s.alt}>{s.screen}</Phone>
              <div className="mt-5 text-center">
                <h3 className="font-serif text-lg font-bold text-ink">{s.label}</h3>
                <p className="mx-auto mt-1 max-w-[260px] text-sm text-muted">{s.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
