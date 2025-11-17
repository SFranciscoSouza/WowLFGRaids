export type GameVersion = 'retail' | 'classic';

export type RaidDifficulty = 'normal' | 'heroic' | 'mythic';

export type PosterTier = 'premium' | 'normal' | 'low_cut';

export type Faction = 'alliance' | 'horde';

export type Role = 'tank' | 'healer' | 'dps';

export type WoWClass =
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'monk'
  | 'druid'
  | 'demon_hunter'
  | 'death_knight'
  | 'evoker';

export interface RaidPoster {
  id: string;
  name: string;
  avatar: string;
  credit: number;
  karma: number;
  isOnline: boolean;
  tier: PosterTier;
}

export type RiskLevel = 'low' | 'medium' | 'high';

export interface RaidCredibility {
  totalReviews: number;
  averageRating: number;
  karmaChange: number;
  riskLevel: RiskLevel;
}

export interface RaidRequirements {
  minIOScore?: number;
  minIlvl?: number;
  minRating?: number;
  minKarma?: number;
}

export interface RoleSlot {
  role: Role;
  current: number;
  max: number;
}

export interface GroupMember {
  id: string;
  name: string;
  class: WoWClass;
  role: Role;
  avatar?: string;
}

export interface BuyerInfo {
  willParticipate: boolean;
  count: number;
}

export interface EligibleClasses {
  tank: WoWClass[] | 'any';
  healer: WoWClass[] | 'any';
  dps: WoWClass[] | 'any';
}

export interface RaidPost {
  id: string;
  gameVersion: GameVersion;
  expansion: Expansion;
  raidName: string;
  difficulty: RaidDifficulty;
  price: number;
  faction: Faction;
  server: string;
  poster: RaidPoster;
  signups: number;
  rolesNeeded: Role[];
  classesAllowed: WoWClass[] | 'all';
  postedAt: number;
  avgPayTime: string;
  payLimit: string;
  isSaved: boolean;
  description?: string;

  // Expanded view fields
  credibility: RaidCredibility;
  numberOfRuns: number;
  isTimed: boolean;
  maxBuyers: number;
  currentBuyers: number;
  marketAveragePrice: number;
  requirements: RaidRequirements;
  roleSlots: RoleSlot[];
  groupMembers: GroupMember[];
  buyerInfo: BuyerInfo;
  eligibleClasses: EligibleClasses;
  note?: string;
}

export interface RaidFilters {
  gameVersion?: GameVersion;
  expansion?: Expansion;
  raidName?: string;
  difficulty?: RaidDifficulty;
  faction?: Faction;
  minPrice?: number;
  maxPrice?: number;
  rolesNeeded?: Role[];
  isSaved?: boolean;
  posterTiers?: PosterTier[];
}

export type SortOption =
  | 'price_asc'
  | 'price_desc'
  | 'posted_desc'
  | 'posted_asc'
  | 'signups_desc'
  | 'karma_desc';

export type RetailExpansion = 'tww' | 'df' | 'sl';
export type ClassicExpansion = 'wotlk' | 'tbc' | 'vanilla';
export type Expansion = RetailExpansion | ClassicExpansion;

export const EXPANSION_LABELS: Record<Expansion, string> = {
  tww: 'The War Within',
  df: 'Dragonflight',
  sl: 'Shadowlands',
  wotlk: 'Wrath of the Lich King',
  tbc: 'The Burning Crusade',
  vanilla: 'Classic Vanilla'
};

// Configuration for raid options
export const RETAIL_RAIDS: Record<RetailExpansion, string[]> = {
  tww: ['Manaforge Omega', 'Liberation of Undermine', 'Nerub-ar Palace'],
  df: [
    'Amirdrassil, the Dream\'s Hope',
    'Aberrus, the Shadowed Crucible',
    'Vault of the Incarnates'
  ],
  sl: [
    'Sepulcher of the First Ones',
    'Sanctum of Domination',
    'Castle Nathria'
  ]
};

export const CLASSIC_RAIDS: Record<ClassicExpansion, string[]> = {
  wotlk: [
    'Icecrown Citadel',
    'Trial of the Crusader',
    'Ulduar',
    'Naxxramas'
  ],
  tbc: ['Sunwell Plateau', 'Black Temple', 'Serpentshrine Cavern', 'Karazhan'],
  vanilla: ['Naxxramas', 'Temple of Ahn\'Qiraj', 'Blackwing Lair', 'Molten Core']
};

export const RETAIL_EXPANSIONS: RetailExpansion[] = ['tww', 'df', 'sl'];

export const CLASSIC_EXPANSIONS: ClassicExpansion[] = ['wotlk', 'tbc', 'vanilla'];

export const RETAIL_DIFFICULTIES: RaidDifficulty[] = [
  'normal',
  'heroic',
  'mythic'
];

export const CLASSIC_DIFFICULTIES: RaidDifficulty[] = [
  'normal',
  'heroic',
  'mythic'
];

export const getDifficultyLabel = (difficulty: RaidDifficulty): string => {
  const labels: Record<RaidDifficulty, string> = {
    normal: 'Normal',
    heroic: 'Heroic',
    mythic: 'Mythic'
  };
  return labels[difficulty];
};

export const getDifficultyColor = (
  difficulty: RaidDifficulty
): 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' => {
  const colors: Record<
    RaidDifficulty,
    'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  > = {
    normal: 'success',
    heroic: 'warning',
    mythic: 'error'
  };
  return colors[difficulty];
};

export const getPosterTierLabel = (tier: PosterTier): string => {
  const labels: Record<PosterTier, string> = {
    premium: 'Premium',
    normal: 'Normal',
    low_cut: 'Low Cut'
  };
  return labels[tier];
};

export const getPosterTierColor = (
  tier: PosterTier
): 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' => {
  const colors: Record<
    PosterTier,
    'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  > = {
    premium: 'warning',
    normal: 'primary',
    low_cut: 'info'
  };
  return colors[tier];
};

export const getPosterTierPriority = (tier: PosterTier): number => {
  const priorities: Record<PosterTier, number> = {
    premium: 0,
    normal: 1,
    low_cut: 2
  };
  return priorities[tier];
};

export const formatGold = (amount: number): string => {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}K`;
  }
  return amount.toString();
};
