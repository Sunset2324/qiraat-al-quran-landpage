import { motion } from 'framer-motion';
import { Headphones, BookOpen, Clock } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Dozens of World-Class Qaris',
    description: 'Choose from the Quranpedia catalog of reciters, featuring verse-by-verse audio synchronization.',
  },
  {
    icon: BookOpen,
    title: 'Follow Along Automatically',
    description: 'Verses are highlighted with real-time auto-scrolling as the murottal (recitation) plays.',
  },
  {
    icon: Clock,
    title: 'Dynamic Prayer Schedule',
    description: 'Accurate adhan (call to prayer) notifications based on your location, with a global API fallback.',
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
        <div className="mt-14 grid gap-8 md:grid-cols-3">
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
