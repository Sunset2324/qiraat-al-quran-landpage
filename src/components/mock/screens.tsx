import { useEffect, useState } from 'react';
import {
  MapPin, CloudSun, FileText, Home, BookOpen, History, Settings, ArrowLeft, Info,
  Search, Play, Pause, Heart, Activity, Sparkles, Moon, ChevronDown, Clock, RotateCcw, Navigation, ChevronRight, Trash2,
} from 'lucide-react';
import { StatusBar } from './Phone';
import Compass from './Compass';

const MUTED = 'text-[#6B6558]';
const BORDER = 'border-sand';

/* ---------- Dashboard ---------- */
const FEATURES = [
  { label: 'Qiraat', icon: '/qiraat.png' },
  { label: "Dhikr & Du'a", icon: '/dzikir.png' },
  { label: 'Prayer Times', icon: '/jadwal.png' },
  { label: 'Tajweed', icon: '/tajweed.png' },
  { label: 'Prophetic Medicine', icon: '/thibbun.png' },
];

function TabBar({ active }: { active: 0 | 1 | 2 | 3 }) {
  const tabs = [
    { Icon: Home, label: 'Home' },
    { Icon: BookOpen, label: 'Mushaf' },
    { Icon: History, label: 'History' },
    { Icon: Settings, label: 'Settings' },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex h-14 items-center justify-around border-t border-sand bg-card">
      {tabs.map(({ Icon, label }, i) => (
        <div key={label} className="flex flex-col items-center gap-0.5">
          <Icon className={`h-5 w-5 ${i === active ? 'text-emerald-700' : 'text-[#9a9486]'}`} />
          <span className={`text-[9px] ${i === active ? 'font-semibold text-emerald-700' : 'text-[#9a9486]'}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function DashboardScreen() {
  // Hitung mundur berjalan supaya terasa hidup (hanya tampilan).
  const [sec, setSec] = useState(2 * 3600 + 41 * 60 + 10);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, '0');
  const left = `in ${p(Math.floor(sec / 3600))}:${p(Math.floor((sec % 3600) / 60))}:${p(sec % 60)}`;

  return (
    <>
      <div className="relative overflow-hidden rounded-b-[28px] bg-emerald-800 pb-16 text-white">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-700 opacity-50" />
        <StatusBar dark />
        <div className="relative px-4 pt-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-100">
                <MapPin className="h-3 w-3" /> Jakarta Selatan
              </div>
              <p className="mt-0.5 text-3xl font-bold tracking-tight">12:19</p>
              <p className="mt-0.5 text-[10px] text-emerald-100">6 Jumada I 1448 AH</p>
            </div>
            <div className="rounded-xl bg-emerald-700/50 p-2">
              <CloudSun className="h-5 w-5 text-amber-400" />
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-emerald-600/50 bg-emerald-700/40 p-3">
            <p className="text-[10px] font-medium text-emerald-100">Next Prayer</p>
            <div className="mt-0.5 flex items-end justify-between">
              <div>
                <p className="text-sm font-bold">Asr</p>
                <p className="text-[10px] tabular-nums text-emerald-100">{left}</p>
              </div>
              <p className="text-xl font-bold">15:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-10 px-4">
        <div className="flex items-center justify-center gap-2 rounded-2xl border border-sand bg-card py-3.5 shadow-sm">
          <FileText className="h-5 w-5 text-emerald-700" />
          <span className="text-[13px] font-bold text-[#7a6132]">Health Journal</span>
        </div>
        <p className="mb-2 mt-4 text-[13px] font-bold">Explore Features</p>
        <div className="grid grid-cols-2 gap-2">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex flex-col items-center rounded-xl border border-sand bg-card px-2 py-2.5 shadow-sm">
              <div className="mb-1.5 rounded-full bg-emerald-500/20 p-2">
                <img src={f.icon} alt="" className="h-5 w-5 object-contain" />
              </div>
              <span className="text-center text-[10px] font-bold leading-tight">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={0} />
    </>
  );
}

/* ---------- Surah + Follow Along ---------- */
function Ayah({ ar, tr, latin, active }: { ar: string; tr: string; latin?: string; active?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${active ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600/30' : `${BORDER} bg-card`}`}>
      <p className="font-arabic text-right text-lg leading-[2.1] text-emerald-950" dir="rtl">{ar}</p>
      {latin && <p className="mt-1 text-[9px] italic leading-4 text-emerald-700">{latin}</p>}
      <p className={`mt-1 text-[9px] leading-4 ${MUTED}`}>{tr}</p>
    </div>
  );
}

export function SurahScreen() {
  return (
    <>
      <StatusBar />
      <div className={`flex items-center justify-between border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <div className="text-center">
          <p className="text-[8px] font-bold tracking-[2px] text-emerald-800/70">QUR&apos;AN STUDY</p>
          <p className="text-[11px] font-bold">Study Mushaf</p>
        </div>
        <div className="w-4" />
      </div>
      <div className="space-y-2.5 px-3 pt-3">
        <div className={`rounded-xl border ${BORDER} bg-card p-2.5`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold">Choose Reciter</span>
            <span className="flex max-w-[130px] items-center gap-1 rounded-full bg-[#f5f0e1] px-2.5 py-1 text-[9px] font-medium text-emerald-800">
              <span className="truncate">Mishary Alafasy</span>
              <ChevronDown className="h-3 w-3 shrink-0" />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] font-bold tracking-[2px] text-emerald-800/70">SURAH 1</p>
            <p className="text-lg font-bold leading-tight">Al-Fatihah</p>
            <p className={`text-[10px] ${MUTED}`}>The Opening • 7 verses</p>
          </div>
          <span className="rounded-full bg-emerald-700 px-3 py-1.5 text-[9px] font-bold text-white">Follow Along</span>
        </div>
        <Ayah
          ar="بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
          latin="Bismillāhir-raḥmānir-raḥīm"
          tr="In the name of Allah, the Most Gracious, the Most Merciful."
        />
        <Ayah
          active
          ar="ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ"
          latin="Al-ḥamdu lillāhi rabbil-ʿālamīn"
          tr="All praise is for Allah, Lord of all worlds."
        />
        <Ayah ar="ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" tr="The Most Gracious, the Most Merciful." />
      </div>
      <div className={`absolute inset-x-0 bottom-0 z-20 border-t ${BORDER} bg-card px-3 py-2.5`}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700">
            <Pause className="h-3.5 w-3.5 fill-white text-white" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-bold">Follow Along • Verse 2</p>
            <p className={`truncate text-[9px] ${MUTED}`}>Mishary Alafasy</p>
          </div>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-emerald-950/10">
          <div className="h-full w-2/5 rounded-full bg-emerald-600" />
        </div>
      </div>
    </>
  );
}

/* ---------- Pilihan Mushaf (Qiraat) ---------- */
export function QiraatScreen() {
  const items = [
    { name: "Hafs 'an 'Asim", ar: 'حفص عن عاصم', desc: 'The most widely read riwayah worldwide.', on: true, popular: true },
    { name: "Warsh 'an Nafi'", ar: 'ورش عن نافع', desc: 'Common across North and West Africa.' },
    { name: "Qalun 'an Nafi'", ar: 'قالون عن نافع', desc: 'Read in parts of Libya and Tunisia.' },
    { name: "Ad-Duri 'an Abu 'Amr", ar: 'الدوري', desc: 'Recitation of Abu Amr al-Basri.' },
  ];
  return (
    <>
      <StatusBar />
      <div className={`flex items-center justify-between border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <div className="text-center">
          <p className="text-[8px] font-bold tracking-[2px] text-emerald-800/70">QUR&apos;AN SCIENCES</p>
          <p className="text-[11px] font-bold">Mushaf Selection</p>
        </div>
        <div className="w-4" />
      </div>
      <div className="px-3 pt-3">
        <div className={`rounded-xl border ${BORDER} bg-card p-3`}>
          <div className="mb-1 flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-emerald-700" />
            <span className="text-[11px] font-bold">About Mushaf</span>
          </div>
          <p className={`text-[9px] leading-4 ${MUTED}`}>
            Each mushaf follows a different qiraat. Pick one and the text and reciters follow it.
          </p>
        </div>
        <p className="mb-2 mt-4 text-[13px] font-bold">Available Mushafs</p>
        <div className="space-y-2">
          {items.map((m) => (
            <div
              key={m.name}
              className={`rounded-xl border-2 p-3 ${m.on ? 'border-emerald-600 bg-emerald-50' : `${BORDER} bg-card`}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate text-[11px] font-bold">{m.name}</span>
                </div>
                <span className="font-arabic shrink-0 text-sm" dir="rtl">{m.ar}</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                {m.popular && <span className="shrink-0 rounded bg-emerald-600 px-1.5 py-0.5 text-[7px] font-bold text-white">POPULAR</span>}
                <p className={`text-[9px] leading-4 ${MUTED}`}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={1} />
    </>
  );
}

/* ---------- Thibbun Nabawi ---------- */
export function ThibbunScreen() {
  const chips = ['All', 'Spiritual', 'Physical', 'Wisdom'];
  const items = [
    { Icon: Heart, t: 'The Qur’an as healing and mercy', r: 'QS Al-Isra’ 17:82' },
    { Icon: Activity, t: 'Honey: a remedy for people', r: 'QS An-Nahl 16:69' },
    { Icon: Sparkles, t: 'Hearts find rest in remembrance', r: 'QS Ar-Ra’d 13:28' },
    { Icon: Moon, t: 'Seeking help through patience and prayer', r: 'QS Al-Baqarah 2:153' },
  ];
  return (
    <>
      <StatusBar />
      <div className={`flex items-center justify-between border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <p className="text-[11px] font-bold">Prophetic Medicine</p>
        <div className="w-4" />
      </div>
      <div className="px-3 pt-3">
        <div className={`flex items-center gap-2 rounded-xl border ${BORDER} bg-card px-3 py-2`}>
          <Search className={`h-3.5 w-3.5 ${MUTED}`} />
          <span className={`text-[10px] ${MUTED}`}>Search theme or 2:255</span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {chips.map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${i === 0 ? 'bg-emerald-700 text-white' : `border ${BORDER} bg-card`}`}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {items.map(({ Icon, t, r }) => (
            <div key={t} className={`flex items-center gap-2.5 rounded-xl border ${BORDER} bg-card p-2.5`}>
              <span className="rounded-lg bg-emerald-100 p-2"><Icon className="h-4 w-4 text-emerald-700" /></span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold leading-4">{t}</p>
                <p className={`text-[9px] ${MUTED}`}>{r}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-2.5">
          <Info className="h-3.5 w-3.5 shrink-0 text-amber-700" />
          <p className="text-[8.5px] leading-[13px] text-amber-900">
            This content is for study and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </>
  );
}

/* ---------- Prayer Times (kartu Lokasi & Countdown + kompas kiblat) ---------- */
export function PrayerScreen() {
  const [sec, setSec] = useState(2 * 3600 + 40 * 60 + 5);
  const [heading, setHeading] = useState(262);
  useEffect(() => {
    const id = setInterval(() => setSec((x) => (x > 0 ? x - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    // kompas "hidup": heading bergoyang pelan di sekitar arah kiblat
    let t = 0;
    const id = setInterval(() => {
      t += 0.12;
      setHeading(280 + Math.sin(t) * 24);
    }, 120);
    return () => clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, '0');
  const cd = `${p(Math.floor(sec / 3600))}:${p(Math.floor((sec % 3600) / 60))}:${p(sec % 60)}`;
  const rows = [
    ['Fajr', '04:34'], ['Sunrise', '05:48'], ['Dhuhr', '11:55'], ['Asr', '15:12', true], ['Maghrib', '17:59'], ['Isha', '19:08'],
  ] as [string, string, boolean?][];
  return (
    <>
      <StatusBar />
      <div className={`flex items-center border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <p className="ml-2 text-[12px] font-bold">Prayer Times</p>
      </div>
      <div className="px-3 pt-3">
        <div className="rounded-xl border border-sand bg-emerald-50 p-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-800">
              <MapPin className="h-3 w-3 text-emerald-700" /> Kota Jakarta, DKI Jakarta
            </span>
            <span className="text-[9px] font-bold text-emerald-800">CHANGE</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className={`text-[8px] uppercase tracking-wider ${MUTED}`}>Until next prayer</p>
              <p className="text-[22px] font-bold tabular-nums leading-tight">{cd}</p>
            </div>
            <div className="flex flex-col items-center">
              <Compass size={64} bearing={295} heading={heading} compact />
              <p className="mt-1.5 text-[8px] font-semibold text-emerald-800">Qibla · 295°</p>
              <p className={`text-[7px] ${MUTED}`}>Tap for details</p>
            </div>
          </div>
        </div>
        <div className="mb-1.5 mt-3 flex items-center justify-between">
          <p className="text-[11px] font-bold">Today</p>
          <p className={`text-[8px] ${MUTED}`}>Sun, 18 Oct • 6 Jumada I</p>
        </div>
        <div className="space-y-1.5">
          {rows.map(([n, tm, next]) => (
            <div
              key={n}
              className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 ${
                next ? 'border-emerald-500 bg-emerald-600 text-white' : `${BORDER} bg-card`
              }`}
            >
              <span className="flex items-center gap-1.5 text-[10px] font-semibold">
                <Clock className={`h-3 w-3 ${next ? 'text-white' : 'text-emerald-700'}`} /> {n}
              </span>
              <span className={`text-[11px] font-bold ${next ? 'text-white' : 'text-emerald-700'}`}>{tm}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- Dhikr detail + penghitung 3/33 ---------- */
export function DhikrScreen() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((x) => (x >= 33 ? 0 : x + 1)), 750); // sama dengan jeda 0,75 s di app
    return () => clearInterval(id);
  }, []);
  const done = n >= 33;
  return (
    <>
      <StatusBar />
      <div className={`flex items-center justify-between border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <p className="text-[11px] font-bold">Du&apos;a Detail</p>
        <div className="w-4" />
      </div>
      <div className="px-3 pt-2.5">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-bold text-emerald-800">Dhikr After Salah</span>
        <p className="mt-1 text-[14px] font-bold leading-tight">Tasbih</p>
        <div className={`mt-2 rounded-xl border ${BORDER} bg-[#fffcf5] p-2 text-center`}>
          <p className="font-arabic text-lg leading-[1.9]" dir="rtl">سُبْحَانَ اللَّهِ</p>
          <p className="text-[8px] italic text-emerald-700">Subḥānallāh</p>
        </div>
        <div className={`mt-2.5 rounded-2xl border ${BORDER} bg-card p-3`}>
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-semibold uppercase tracking-wider text-emerald-800/70">Dhikr Counter</span>
            <span className={`flex items-center gap-0.5 text-[8px] ${MUTED}`}><RotateCcw className="h-2.5 w-2.5" /> Reset</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className={`text-[8px] ${MUTED}`}>Target</span>
            <span className={`rounded-full border px-3 py-1 text-[10px] font-bold ${BORDER} bg-card`}>3</span>
            <span className="rounded-full border border-emerald-800 bg-emerald-800 px-3 py-1 text-[10px] font-bold text-white">33</span>
          </div>
          <div className="mt-2.5 flex justify-center">
            <div
              className={`flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full border-4 ${
                done ? 'border-emerald-700 bg-emerald-600 text-white' : 'border-emerald-600 bg-emerald-50'
              }`}
            >
              <span className="text-[34px] font-bold leading-none">{n}</span>
              <span className={`text-[10px] ${done ? 'text-emerald-100' : MUTED}`}>/ 33</span>
            </div>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full bg-emerald-600 transition-all duration-500" style={{ width: `${(n / 33) * 100}%` }} />
          </div>
          <p className={`mt-1.5 text-center text-[8px] ${MUTED}`}>Tap to count</p>
        </div>
      </div>
    </>
  );
}

/* ---------- Detail arah kiblat ---------- */
export function QiblaScreen() {
  const [heading, setHeading] = useState(250);
  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.1;
      setHeading(295 + Math.sin(t) * 38 * Math.exp(-0.03 * t) * (t < 90 ? 1 : 0));
    }, 100);
    return () => clearInterval(id);
  }, []);
  const diff = Math.round(((295 - heading + 540) % 360) - 180);
  const aligned = Math.abs(diff) <= 3;
  const rows = [
    ['Qibla Direction', '295.15° from North'],
    ['Phone heading', `${Math.round(((heading % 360) + 360) % 360)}°`],
    ['Sensor accuracy', 'High'],
    ["Distance to the Ka'bah", '7.920 km'],
    ['My location', '-6.2088, 106.8456'],
  ];
  return (
    <>
      <StatusBar />
      <div className={`flex items-center border-b ${BORDER} px-3 py-2`}>
        <ArrowLeft className="h-4 w-4" />
        <p className="ml-2 flex-1 text-[12px] font-bold">Qibla Direction</p>
      </div>
      <div className="px-3 pt-2.5">
        <p className={`text-center text-[11px] font-bold ${aligned ? 'text-emerald-700' : ''}`}>
          {aligned ? 'Facing the Qibla' : diff > 0 ? `Turn right ${Math.abs(diff)}°` : `Turn left ${Math.abs(diff)}°`}
        </p>
        <div className="mt-2.5 flex justify-center">
          <Compass size={176} bearing={295} heading={heading} />
        </div>
        <div className={`mt-3 rounded-xl border ${BORDER} bg-card px-3`}>
          {rows.map(([a, b]) => (
            <div key={a} className={`flex items-center justify-between border-b ${BORDER} py-1.5 text-[9px]`}>
              <span className={MUTED}>{a}</span>
              <span className="font-semibold">{b}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 py-1.5">
            <Navigation className={`h-3 w-3 ${MUTED}`} />
            <span className={`text-[8px] ${MUTED}`}>Bearing from Aladhan API</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Reading history ---------- */
export function HistoryScreen() {
  const rest = [
    ['An-Nisa', 'Verse 58 of 176', '2 hours ago'],
    ['Al-Kahf', 'Verse 10 of 110', 'Yesterday'],
    ['Yasin', 'Verse 83 of 83', '3 days ago'],
  ];
  return (
    <>
      <StatusBar />
      <div className="px-4 pt-2">
        <p className="text-[16px] font-bold">History</p>
        <p className={`text-[9px] ${MUTED}`}>Your reading history</p>
      </div>
      <div className="px-3 pt-3">
        <div className="rounded-2xl bg-emerald-700 p-3.5 text-white">
          <p className="flex items-center gap-1 text-[8px] font-semibold tracking-wide text-emerald-100">
            <BookOpen className="h-3 w-3" /> CONTINUE READING
          </p>
          <p className="mt-1 text-[15px] font-bold">Al-Baqarah</p>
          <p className="text-[9px] text-emerald-100">Verse 142 of 286 • 12 minutes ago</p>
        </div>
        <p className={`mb-2 mt-4 text-[8px] font-semibold tracking-wide ${MUTED}`}>EARLIER</p>
        <div className="space-y-2">
          {rest.map(([n, v, ts]) => (
            <div key={n} className={`flex items-center justify-between rounded-xl border ${BORDER} bg-card p-2.5`}>
              <div>
                <p className="text-[11px] font-bold">{n}</p>
                <p className={`text-[8.5px] ${MUTED}`}>{v} • {ts}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <Trash2 className="h-3 w-3 text-red-500" />
                <ChevronRight className="h-3.5 w-3.5 text-emerald-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={2} />
    </>
  );
}
