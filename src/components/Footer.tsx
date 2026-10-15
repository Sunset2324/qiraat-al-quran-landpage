import { Instagram, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-cream px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald">
              <span className="font-serif text-lg font-bold text-cream">Q</span>
            </div>
            <span className="font-serif text-lg font-bold text-ink">Qiraat-Al-Qur-an</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-muted transition-all duration-300 hover:border-emerald hover:bg-emerald/5 hover:text-emerald"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-muted transition-all duration-300 hover:border-emerald hover:bg-emerald/5 hover:text-emerald"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-sm text-muted">
            <span>Copyright &copy; 2026 Qiraat-Al-Qur-an. Created with</span>
            <Heart className="h-4 w-4 fill-emerald text-emerald" />
            <span>for the Muslim community.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
