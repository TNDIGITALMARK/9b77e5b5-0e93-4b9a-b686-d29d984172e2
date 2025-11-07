import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { characters } from '@/data/lore-data';

export const dynamic = 'force-dynamic';

export default function CharactersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(var(--color-blue-sky))]">
        {/* Page Header */}
        <div className="bg-[hsl(var(--color-yellow))] py-16">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-[hsl(var(--color-navy))] text-5xl font-extrabold mb-4">
              Character Deep Dives
            </h1>
            <p className="text-[hsl(var(--color-navy))] text-lg max-w-2xl mx-auto">
              Explore comprehensive analysis of Bikini Bottom's most beloved residents, their backstories, and hidden secrets.
            </p>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="container mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characters.map((character) => (
              <div key={character.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Character Header */}
                <div className="bg-[hsl(var(--color-yellow))] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[hsl(var(--color-navy))] flex items-center justify-center text-4xl">
                      {character.name === 'SpongeBob SquarePants' && '🧽'}
                      {character.name === 'Patrick Star' && '⭐'}
                      {character.name === 'Squidward Tentacles' && '🦑'}
                      {character.name === 'Eugene H. Krabs' && '🦀'}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[hsl(var(--color-navy))]">{character.name}</h2>
                      <p className="text-[hsl(var(--color-navy))] opacity-80">{character.description}</p>
                    </div>
                  </div>
                </div>

                {/* Character Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[hsl(var(--color-navy))]">Backstory</h3>
                  <p className="text-[hsl(var(--color-navy))] mb-6 leading-relaxed">{character.backstory}</p>

                  <h3 className="font-bold text-xl mb-3 text-[hsl(var(--color-navy))]">Fun Facts</h3>
                  <ul className="space-y-2">
                    {character.funFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2 text-[hsl(var(--color-navy))]">
                        <span className="text-[hsl(var(--color-seafoam))] mt-1">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
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
