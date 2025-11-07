import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center ocean-gradient py-20">
        <div className="text-center px-6">
          <div className="text-8xl mb-8 animate-bounce">🧽</div>
          <h1 className="text-5xl font-extrabold text-white mb-4">404 - Lost in Bikini Bottom!</h1>
          <p className="text-xl text-white/90 mb-8 max-w-md mx-auto">
            This page is more lost than SpongeBob in Rock Bottom! Let's get you back to familiar waters.
          </p>
          <Link
            href="/"
            className="inline-block bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))] px-8 py-4 rounded-lg font-bold uppercase text-sm shadow-lg hover:shadow-xl transition-all"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}