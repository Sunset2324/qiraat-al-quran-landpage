import type { ReactNode } from 'react';

/** Bingkai ponsel + status bar. Isi layar dibuat meniru tampilan app (palet light). */
export default function Phone({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mx-auto w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl"
    >
      <div className="absolute left-1/2 top-0 z-30 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" />
      <div className="relative h-[560px] overflow-hidden rounded-[2rem] bg-paper text-emerald-950">
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`relative z-20 flex items-center justify-between px-5 pt-2.5 pb-1 text-[10px] font-medium ${
        dark ? 'text-white' : 'text-ink'
      }`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="h-2.5 w-2.5 rounded-sm bg-current opacity-80" />
        <span className="h-2.5 w-2.5 rounded-sm bg-current opacity-40" />
        <span className="h-2.5 w-4 rounded-sm bg-current opacity-40" />
      </div>
    </div>
  );
}
