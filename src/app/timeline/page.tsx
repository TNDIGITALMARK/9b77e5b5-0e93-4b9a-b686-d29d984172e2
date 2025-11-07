'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { timelineEvents } from '@/data/lore-data';
import { Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TimelinePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(var(--color-blue-sky))]">
        {/* Page Header */}
        <div className="bg-[hsl(var(--color-navy))] py-16">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-white text-5xl font-extrabold mb-4">
              Episode Timeline Explorer
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Interactive timeline showing how episodes connect, recurring themes, and lore implications across seasons.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="container mx-auto px-6 lg:px-10 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[hsl(var(--color-navy))] opacity-20" />

              {/* Timeline Events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-[hsl(var(--color-seafoam))] border-4 border-white shadow-md" />

                    {/* Event Card */}
                    <div className="ml-20">
                      <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                        onClick={() => toggleExpand(event.id)}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {event.season && (
                                  <span className="bg-[hsl(var(--color-yellow))] text-[hsl(var(--color-navy))] px-3 py-1 rounded-full text-xs font-bold uppercase">
                                    Season {event.season}
                                  </span>
                                )}
                              </div>
                              <h3 className="text-2xl font-bold text-[hsl(var(--color-navy))] mb-2">
                                {event.title}
                              </h3>
                              {expandedId === event.id && (
                                <p className="text-[hsl(var(--color-navy))] opacity-80 leading-relaxed mt-4">
                                  {event.description}
                                </p>
                              )}
                            </div>
                            <ChevronDown
                              className={`w-6 h-6 text-[hsl(var(--color-navy))] transition-transform ${
                                expandedId === event.id ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
