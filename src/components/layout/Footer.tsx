import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--color-blue-deep))] text-white py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link href="/about" className="hover:text-[hsl(var(--color-yellow))] transition-colors uppercase text-sm font-semibold">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-[hsl(var(--color-yellow))] transition-colors uppercase text-sm font-semibold">
            Contact
          </Link>
          <Link href="/lore" className="hover:text-[hsl(var(--color-yellow))] transition-colors uppercase text-sm font-semibold">
            Lore
          </Link>
          <Link href="/theories" className="hover:text-[hsl(var(--color-yellow))] transition-colors uppercase text-sm font-semibold">
            Theories
          </Link>
          <Link href="/privacy" className="hover:text-[hsl(var(--color-yellow))] transition-colors uppercase text-sm font-semibold">
            Privacy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-80">
          © 2025 Bikini Bottom Lore Trust
        </div>
      </div>
    </footer>
  );
}
