import type { LoreCard as LoreCardType } from '@/data/lore-data';

interface LoreCardProps {
  card: LoreCardType;
}

export function LoreCard({ card }: LoreCardProps) {
  const colorClasses = {
    yellow: 'bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))]',
    blue: 'bg-[hsl(var(--color-blue-sky))] text-[hsl(var(--color-navy))]',
    purple: 'bg-[hsl(270,50%,70%)] text-white',
    white: 'bg-white text-[hsl(var(--color-navy))]'
  };

  return (
    <div className={`${colorClasses[card.color]} rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group`}>
      {/* Image Placeholder */}
      <div className="w-full aspect-square rounded-lg bg-white/20 mb-4 flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform">
          {card.category === 'theory' && '🔍'}
          {card.category === 'character' && '👤'}
          {card.category === 'episode' && '📺'}
          {card.category === 'timeline' && '⏰'}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-bold text-xl mb-2">{card.title}</h3>
      <p className="text-sm opacity-90 leading-relaxed">{card.description}</p>

      {/* Meta */}
      <div className="mt-4 flex items-center gap-2 text-xs uppercase font-semibold opacity-70">
        <span>{card.category}</span>
      </div>
    </div>
  );
}
