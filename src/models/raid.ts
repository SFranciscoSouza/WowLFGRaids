export type GameVersion = 'retail' | 'classic';

export type RaidDifficulty =
  | 'normal'
  | 'heroic'
  | 'mythic'
  | 'lfr'
  | '10n'
  | '10h'
  | '25n'
  | '25h'
  | 'flex';

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
}

export interface RaidPost {
  id: string;
  gameVersion: GameVersion;
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
  description?: string;
}

export interface RaidFilters {
  gameVersion?: GameVersion;
  raidName?: string;
  difficulty?: RaidDifficulty;
  faction?: Faction;
  minPrice?: number;
  maxPrice?: number;
  rolesNeeded?: Role[];
}

export type SortOption =
  | 'price_asc'
  | 'price_desc'
  | 'posted_desc'
  | 'posted_asc'
  | 'signups_desc'
  | 'karma_desc';

// Configuration for raid options
export const RETAIL_RAIDS = {
  tww: ['Nerub-ar Palace', 'Liberation of Undermine'],
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

export const CLASSIC_RAIDS = {
  wotlk: [
    'Icecrown Citadel',
    'Trial of the Crusader',
    'Ulduar',
    'Naxxramas'
  ],
  tbc: ['Sunwell Plateau', 'Black Temple', 'Serpentshrine Cavern', 'Karazhan'],
  vanilla: ['Naxxramas', 'Temple of Ahn\'Qiraj', 'Blackwing Lair', 'Molten Core']
};

export const RETAIL_DIFFICULTIES: RaidDifficulty[] = [
  'lfr',
  'normal',
  'heroic',
  'mythic'
];

export const CLASSIC_DIFFICULTIES: RaidDifficulty[] = [
  '10n',
  '10h',
  '25n',
  '25h',
  'flex'
];

export const getDifficultyLabel = (difficulty: RaidDifficulty): string => {
  const labels: Record<RaidDifficulty, string> = {
    lfr: 'Looking for Raid',
    normal: 'Normal',
    heroic: 'Heroic',
    mythic: 'Mythic',
    '10n': '10-Man Normal',
    '10h': '10-Man Heroic',
    '25n': '25-Man Normal',
    '25h': '25-Man Heroic',
    flex: 'Flexible'
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
    lfr: 'info',
    normal: 'success',
    heroic: 'warning',
    mythic: 'error',
    '10n': 'success',
    '10h': 'warning',
    '25n': 'info',
    '25h': 'error',
    flex: 'secondary'
  };
  return colors[difficulty];
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
