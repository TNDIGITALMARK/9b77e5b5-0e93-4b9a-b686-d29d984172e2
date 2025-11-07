import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/lore/Hero';
import { LoreCard } from '@/components/lore/LoreCard';
import { Sidebar } from '@/components/lore/Sidebar';
import { homepageLoreCards } from '@/data/lore-data';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* Main Content Section */}
        <div className="container mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="flex-1">
              {/* Lore Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {homepageLoreCards.map((card) => (
                  <LoreCard key={card.id} card={card} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 shrink-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}