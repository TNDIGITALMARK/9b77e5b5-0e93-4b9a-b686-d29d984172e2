import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

// Mock episode data
const episodes = [
  {
    id: '1',
    title: 'Sandals Showdown',
    season: 1,
    episode: 1,
    airDate: 'May 1, 1999',
    loreSignificance: 9,
    description: 'The episode that started it all. SpongeBob gets his first pair of squeaky boots and the squeaking drives Squidward insane. Hidden details reveal early character dynamics.',
    keyMoments: ['First appearance of Goofy Goober', 'Squidward\'s claustrophobia revealed', 'Patrick\'s rock interior shown']
  },
  {
    id: '2',
    title: 'The Hash-Slinging Slasher',
    season: 2,
    episode: 16,
    airDate: 'October 5, 2001',
    loreSignificance: 8,
    description: 'A horror-comedy masterpiece that introduced the legend of the Hash-Slinging Slasher. Reveals Krusty Krab\'s dark past and Squidward\'s fear of the supernatural.',
    keyMoments: ['Nosferatu cameo', 'Squidward admits he\'s scared', 'Phone that doesn\'t work']
  },
  {
    id: '3',
    title: 'Ripped Pants',
    season: 1,
    episode: 2,
    airDate: 'July 17, 1999',
    loreSignificance: 7,
    description: 'SpongeBob learns an important lesson about friendship after repeatedly ripping his pants for laughs. This episode established SpongeBob\'s fear of losing friends.',
    keyMoments: ['Introduction to Sandy Cheeks', 'SpongeBob\'s musical apology', 'Larry the Lobster debut']
  },
  {
    id: '4',
    title: 'Band Geeks',
    season: 2,
    episode: 15,
    airDate: 'September 7, 2001',
    loreSignificance: 10,
    description: 'Considered one of the greatest episodes. Squidward forms a marching band to outperform his rival Squilliam. The finale "Sweet Victory" became iconic.',
    keyMoments: ['Squidward\'s rivalry with Squilliam', 'Sweet Victory performance', 'Mayonnaise is not an instrument']
  }
];

export default function EpisodesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(var(--color-blue-sky))]">
        {/* Page Header */}
        <div className="ocean-gradient py-16">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-white text-5xl font-extrabold mb-4">
              Episode Deep Dives
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Comprehensive analysis of SpongeBob episodes with lore significance ratings and hidden details you might have missed.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search episodes, characters, or theories..."
                  className="w-full px-6 py-4 pl-12 rounded-lg bg-white/95 text-[hsl(var(--color-navy))] placeholder:text-[hsl(var(--color-navy))]/50 focus:outline-none focus:ring-4 focus:ring-[hsl(var(--color-yellow))]"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--color-navy))]/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="container mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Episode Header */}
                <div className="bg-gradient-to-r from-[hsl(var(--color-yellow))] to-[hsl(var(--color-seafoam))] p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[hsl(var(--color-navy))] text-white px-3 py-1 rounded-full text-xs font-bold">
                          S{episode.season}E{episode.episode}
                        </span>
                        <span className="text-[hsl(var(--color-navy))] text-sm font-semibold">
                          {episode.airDate}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-[hsl(var(--color-navy))]">{episode.title}</h2>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-[hsl(var(--color-navy))]">
                        {episode.loreSignificance}
                      </div>
                      <div className="text-xs text-[hsl(var(--color-navy))] uppercase font-semibold">
                        Lore Score
                      </div>
                    </div>
                  </div>
                </div>

                {/* Episode Content */}
                <div className="p-6">
                  <p className="text-[hsl(var(--color-navy))] mb-6 leading-relaxed">{episode.description}</p>

                  <h3 className="font-bold text-lg mb-3 text-[hsl(var(--color-navy))]">Key Moments</h3>
                  <ul className="space-y-2">
                    {episode.keyMoments.map((moment, index) => (
                      <li key={index} className="flex items-start gap-2 text-[hsl(var(--color-navy))]">
                        <span className="text-[hsl(var(--color-yellow))] text-xl">→</span>
                        <span>{moment}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))] py-3 rounded-lg font-bold uppercase text-sm hover:shadow-lg transition-all">
                    Read Full Analysis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
