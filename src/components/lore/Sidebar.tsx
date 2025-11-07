import { User, Star, DollarSign, BookOpen, Ghost, Zap, Eye, AlertCircle } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="bg-[hsl(var(--color-navy))] text-white rounded-xl p-6 sticky top-24 h-fit">
      {/* Character Analysis */}
      <div className="mb-8">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          Character Analysis
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-yellow))]" />
            SpongeBob
          </li>
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-seafoam))]" />
            Patrick
          </li>
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-coral))]" />
            Mr. Krabs
          </li>
        </ul>
      </div>

      {/* Episode Dives */}
      <div className="mb-8">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Episode Dives
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-yellow))]" />
            Sandals Showdown
          </li>
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-seafoam))]" />
            The Hash-Slinging Slasher
          </li>
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-coral))]" />
            Ripped Pants
          </li>
        </ul>
      </div>

      {/* Fan Theories */}
      <div>
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Fan Theories
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-yellow))]" />
            The Krabby Patty Conspiracy
          </li>
          <li className="flex items-center gap-2 hover:text-[hsl(var(--color-yellow))] transition-colors cursor-pointer text-sm">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-seafoam))]" />
            Seven Deadly Sins Theory
          </li>
        </ul>
      </div>
    </aside>
  );
}
