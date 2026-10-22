import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackDownload } from '@/lib/downloadTracker';
import { DOWNLOAD_URL, APP_VERSION } from '@/lib/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/8 bg-cream/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald">
            <span className="font-serif text-lg font-bold text-cream">Q</span>
          </div>
          <span className="font-serif text-lg font-bold text-ink">Qiraat-Al-Qur-an</span>
        </div>

        {/* Nav links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted transition-colors hover:text-emerald-dark">
            Features
          </a>
          <a href="#gallery" className="text-sm font-medium text-muted transition-colors hover:text-emerald-dark">
            Gallery
          </a>
          <a href="#contact" className="text-sm font-medium text-muted transition-colors hover:text-emerald-dark">
            Contact
          </a>
        </div>

        {/* Download button */}
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackDownload(APP_VERSION)}
          className="flex items-center gap-2 rounded-lg bg-emerald px-4 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-emerald-dark active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download</span>
          <span className="sm:hidden">Get</span>
        </a>
      </div>
    </motion.nav>
  );
}
