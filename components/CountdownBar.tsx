
import React, { useState, useEffect } from 'react';

const CountdownBar: React.FC = () => {
  const targetDate = new Date('2026-01-26T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-y border-slate-800 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
            Phase 1 Deployment Countdown
          </span>
        </div>

        <div className="flex gap-8 text-center">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hrs" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>

        <div className="hidden lg:block">
          <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-500 hover:text-orange-400 transition underline decoration-2 underline-offset-4">
            Pre-Order Status: ACTIVE
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="text-xl font-bold font-['Oswald'] text-white leading-none">{value}</span>
    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-1">{label}</span>
  </div>
);

export default CountdownBar;
