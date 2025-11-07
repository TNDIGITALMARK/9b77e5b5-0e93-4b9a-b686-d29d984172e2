import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--color-navy))] flex items-center justify-center text-white font-bold text-lg">
              BB
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-xs uppercase tracking-wider">Bikini Bottom</div>
              <div className="font-bold text-base uppercase tracking-wide">Lore Encyclopedia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-semibold hover:opacity-70 transition-opacity uppercase text-sm">
              Home
            </Link>
            <Link href="/characters" className="font-semibold hover:opacity-70 transition-opacity uppercase text-sm">
              Character Analysis
            </Link>
            <Link href="/episodes" className="font-semibold hover:opacity-70 transition-opacity uppercase text-sm">
              Episode Deep Dives
            </Link>
            <Link href="/timeline" className="font-semibold hover:opacity-70 transition-opacity uppercase text-sm">
              Fan Theories
            </Link>
            <Link href="/forum" className="font-semibold hover:opacity-70 transition-opacity uppercase text-sm">
              Forum
            </Link>
          </nav>

          {/* Sign Up Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[hsl(var(--color-navy))] text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wide hover:shadow-lg transition-all">
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
