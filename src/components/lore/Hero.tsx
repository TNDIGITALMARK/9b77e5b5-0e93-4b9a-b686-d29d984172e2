'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="ocean-gradient relative overflow-hidden py-24">
      {/* Decorative Bubbles */}
      <div className="bubble" style={{ width: '24px', height: '24px', top: '10%', left: '10%', animationDelay: '0s' }} />
      <div className="bubble" style={{ width: '32px', height: '32px', top: '20%', left: '80%', animationDelay: '1s' }} />
      <div className="bubble" style={{ width: '16px', height: '16px', top: '60%', left: '15%', animationDelay: '2s' }} />
      <div className="bubble" style={{ width: '28px', height: '28px', top: '70%', left: '85%', animationDelay: '0.5s' }} />
      <div className="bubble" style={{ width: '20px', height: '20px', top: '40%', left: '90%', animationDelay: '1.5s' }} />

      {/* Decorative Coral - Left */}
      <div className="absolute bottom-0 left-0 opacity-60">
        <Image src="/images/coral.svg" alt="" width={64} height={96} className="w-16 md:w-24" />
      </div>

      {/* Decorative Seaweed - Right */}
      <div className="absolute bottom-0 right-0 opacity-60">
        <Image src="/images/seaweed.svg" alt="" width={48} height={120} className="w-12 md:w-16" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-10 text-center relative z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
          UNRAVELING THE MYSTERIES<br />OF THE DEEP BLUE
        </h1>

        <button className="bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))] px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all">
          Dive In Now!
        </button>

        {/* Decorative SpongeBob placeholder - centered */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center text-6xl md:text-7xl shadow-xl animate-bounce">
            🧽
          </div>
        </div>
      </div>
    </section>
  );
}
