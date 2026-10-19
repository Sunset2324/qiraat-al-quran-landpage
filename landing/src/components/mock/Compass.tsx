/** Kompas kiblat versi web — meniru QiblaCompass di app (piringan berputar, penanda Ka'bah, penunjuk tetap). */
export default function Compass({
  size,
  bearing,
  heading,
  compact = false,
}: {
  size: number;
  bearing: number;
  heading: number;
  compact?: boolean;
}) {
  const aligned = Math.abs(((bearing - heading + 540) % 360) - 180) <= 3;
  const ring = aligned ? '#059669' : '#164A38';
  const ticks = compact ? [0, 90, 180, 270] : Array.from({ length: 24 }, (_, i) => i * 15);
  const marker = Math.max(14, size * 0.17);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          background: '#F6F1E4',
          border: `${compact ? 2 : 4}px solid ${ring}`,
          transform: `rotate(${-heading}deg)`,
          transition: 'transform 0.25s linear',
        }}
      >
        {ticks.map((a) => (
          <div key={a} className="absolute inset-0 flex justify-center" style={{ transform: `rotate(${a}deg)` }}>
            <div
              style={{
                marginTop: 2,
                width: a % 90 === 0 ? 3 : 1.5,
                height: a % 90 === 0 ? size * 0.07 : size * 0.04,
                background: a === 0 ? '#dc2626' : '#9a9280',
                borderRadius: 2,
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 flex justify-center">
          <span style={{ marginTop: size * 0.1, fontSize: Math.max(8, size * 0.09), fontWeight: 700, color: '#dc2626' }}>N</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center" style={{ transform: `rotate(${bearing}deg)` }}>
          <div
            style={{
              marginTop: size * 0.17,
              width: marker,
              height: marker,
              borderRadius: 4,
              background: '#1c1917',
              border: '1px solid #d4a017',
            }}
          >
            <div style={{ marginTop: marker * 0.25, height: marker * 0.14, background: '#d4a017' }} />
          </div>
          <div style={{ width: 2, height: size * 0.22, background: aligned ? '#059669' : '#d4a017', opacity: 0.8 }} />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: -2 }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size * 0.06}px solid transparent`,
            borderRight: `${size * 0.06}px solid transparent`,
            borderTop: `${size * 0.1}px solid ${aligned ? '#059669' : '#b91c1c'}`,
          }}
        />
      </div>
      <div className="absolute rounded-full" style={{ left: size / 2 - 3, top: size / 2 - 3, width: 6, height: 6, background: ring }} />
    </div>
  );
}
