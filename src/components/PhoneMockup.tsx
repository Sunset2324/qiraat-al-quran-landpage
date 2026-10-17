import Phone from './mock/Phone';
import { DashboardScreen } from './mock/screens';

/** Mockup hero: dashboard app (header jam + adzan terdekat, grid fitur). */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <Phone label="Qiraat app dashboard showing the next prayer time and feature shortcuts">
        <DashboardScreen />
      </Phone>
      <div className="absolute -right-8 -top-6 -z-10 h-32 w-32 rounded-full bg-emerald/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-6 -z-10 h-24 w-24 rounded-full bg-emerald/10 blur-2xl" />
    </div>
  );
}
