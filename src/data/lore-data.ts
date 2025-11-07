// SpongeBob Lore Encyclopedia - Mock Data

export interface LoreCard {
  id: string;
  title: string;
  description: string;
  category: 'theory' | 'character' | 'episode' | 'timeline';
  color: 'yellow' | 'blue' | 'purple' | 'white';
  icon?: string;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  backstory: string;
  funFacts: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  season?: number;
  episode?: string;
}

// Homepage Featured Content
export const featuredMystery = {
  title: "What happened to SpongeBob's parents?",
  description: "Exploring the mysterious absence of SpongeBob's parents and their rare appearances throughout the series.",
  image: "/images/mystery.jpg"
};

export const trendingTheory = {
  title: "The Krusty Krab Secret Formula Timeline",
  description: "A comprehensive analysis of every time the secret formula was revealed, stolen, or nearly discovered.",
  image: "/images/formula.jpg"
};

export const characterSpotlight = {
  title: "Patrick Star: Genius or Fool?",
  description: "Evidence suggests Patrick may be hiding his true intelligence. We investigate the moments that prove he's smarter than he lets on.",
  image: "/images/patrick.jpg"
};

// Homepage Lore Cards
export const homepageLoreCards: LoreCard[] = [
  {
    id: '1',
    title: 'The Secret Formula',
    description: 'Unraveling the mystery behind the Krabby Patty secret formula and its connection to oceanic lore.',
    category: 'theory',
    color: 'yellow'
  },
  {
    id: '2',
    title: "Plankton's Master Plan Timeline",
    description: 'A chronological breakdown of every scheme Plankton has attempted to steal the formula.',
    category: 'timeline',
    color: 'blue'
  },
  {
    id: '3',
    title: "Plankton's Life Story",
    description: 'From college roommates to bitter rivals: the untold story of Plankton and Mr. Krabs.',
    category: 'character',
    color: 'purple'
  },
  {
    id: '4',
    title: "SpongeBob's Origins",
    description: 'How does a sea sponge learn to cook? A deep dive into SpongeBob\'s early years.',
    category: 'character',
    color: 'yellow'
  },
  {
    id: '5',
    title: "Jellyfish Fields Explained",
    description: 'The ecological wonder of Jellyfish Fields and its significance to Bikini Bottom.',
    category: 'episode',
    color: 'blue'
  },
  {
    id: '6',
    title: "Jellyfish Mysteries",
    description: 'Strange jellyfish behaviors and their connection to SpongeBob\'s adventures.',
    category: 'theory',
    color: 'white'
  }
];

// Character Database
export const characters: Character[] = [
  {
    id: 'spongebob',
    name: 'SpongeBob SquarePants',
    description: 'Optimistic fry cook at the Krusty Krab',
    backstory: 'SpongeBob SquarePants was born on July 14, 1986, to Harold and Margaret SquarePants. He attended Poseidon Elementary and later Mrs. Puff\'s Boating School. Despite failing his driving test 1,258,056 times, SpongeBob became the best fry cook in Bikini Bottom.',
    funFacts: [
      'Has won "Employee of the Month" 374 consecutive times',
      'Can absorb objects when frightened',
      'His laugh is exactly 10 decibels',
      'Lives in a pineapple that fell from a ship in 1984'
    ]
  },
  {
    id: 'patrick',
    name: 'Patrick Star',
    description: 'SpongeBob\'s best friend and neighbor',
    backstory: 'Patrick Star lives under a rock at 120 Conch Street. Despite his apparent lack of intelligence, Patrick has shown moments of surprising wisdom and even genius. He once attended community college but dropped out.',
    funFacts: [
      'Invented the "wumbo" theory',
      'Once became a genius after hitting his head',
      'Has a sister named Sam',
      'His rock has a fully furnished interior'
    ]
  },
  {
    id: 'squidward',
    name: 'Squidward Tentacles',
    description: 'Cynical cashier and clarinet player',
    backstory: 'Squidward Q. Tentacles attended the prestigious Bikini Bottom School of Music. His dreams of becoming a famous artist and musician were crushed by reality, leading him to his job at the Krusty Krab. He lives between SpongeBob and Patrick, which he considers a personal nightmare.',
    funFacts: [
      'Actually an octopus, not a squid',
      'Has 492 self-portraits',
      'Attended Kelp High School',
      'Once traveled to the future'
    ]
  },
  {
    id: 'krabs',
    name: 'Eugene H. Krabs',
    description: 'Owner of the Krusty Krab',
    backstory: 'Eugene Harold Krabs served in the Navy before opening the Krusty Krab. His obsession with money stems from his impoverished childhood. He was once friends with Plankton in high school before their falling out over the Krabby Patty formula.',
    funFacts: [
      'Fought in the Great War',
      'Has a daughter named Pearl who is a whale',
      'His first dollar is framed in the Krusty Krab',
      'Went to Bikini Bottom High with Plankton'
    ]
  }
];

// Sidebar Content
export const characterAnalysis = [
  { id: '1', name: 'SpongeBob', icon: 'user' },
  { id: '2', name: 'Patrick', icon: 'star' },
  { id: '3', name: 'Mr. Krabs', icon: 'dollar-sign' }
];

export const episodeDives = [
  { id: '1', title: 'Sandals Showdown', icon: 'book-open' },
  { id: '2', title: 'The Hash-Slinging Slasher', icon: 'ghost' },
  { id: '3', title: 'Ripped Pants', icon: 'zap' }
];

export const fanTheories = [
  { id: '1', title: 'The Krabby Patty Conspiracy', icon: 'eye' },
  { id: '2', title: 'Seven Deadly Sins Theory', icon: 'alert-circle' }
];

// Timeline Events
export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Krusty Krab Founding',
    description: 'Detailed analysis of conflicting episode evidence about when Mr. Krabs opened the Krusty Krab.',
    season: 1
  },
  {
    id: '2',
    title: 'SpongeBob Driving Test Attempts',
    description: 'Complete chronological failure documentation spanning 1,258,056+ attempts.',
    season: 1
  },
  {
    id: '3',
    title: 'Plankton Scheme Evolution',
    description: 'How his plans became more sophisticated over time, from simple theft to elaborate mind control.',
    season: 1
  },
  {
    id: '4',
    title: 'Bikini Bottom Geography Changes',
    description: 'Mapping location inconsistencies across seasons and explaining the shifting landscape.',
    season: 2
  }
];
