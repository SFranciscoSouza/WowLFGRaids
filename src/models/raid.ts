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
  scheduledTime: number; // Unix timestamp for scheduled run time
  avgPayTime: string;
  payLimit: string;
  isSaved: boolean;
  description?: string;
  selectedBosses?: string[]; // Array of boss IDs/names, empty or undefined = full clear

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

export type BossFilterType = 'full' | 'partial';

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
  scheduledFrom?: number; // Unix timestamp
  scheduledTo?: number; // Unix timestamp
  bossFilter?: BossFilterType; // Filter by full clear or partial clear
  searchQuery?: string; // Flexible search across raid name, difficulty, and boss names
}

export type SortOption =
  | 'scheduled_asc'
  | 'scheduled_desc'
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

// Boss data for each raid
export const RAID_BOSSES: Record<string, string[]> = {
  // The War Within
  'Nerub-ar Palace': [
    'Ulgrax the Devourer',
    'The Bloodbound Horror',
    'Sikran, Captain of the Sureki',
    'Rasha\'nan',
    'Broodtwister Ovi\'nax',
    'Nexus-Princess Ky\'veza',
    'The Silken Court',
    'Queen Ansurek'
  ],
  'Liberation of Undermine': [
    'Boss 1',
    'Boss 2',
    'Boss 3',
    'Boss 4',
    'Boss 5',
    'Boss 6',
    'Boss 7',
    'Gallywix'
  ],
  'Manaforge Omega': [
    'Boss 1',
    'Boss 2',
    'Boss 3',
    'Boss 4',
    'Boss 5',
    'Boss 6',
    'Boss 7',
    'Boss 8'
  ],

  // Dragonflight
  'Vault of the Incarnates': [
    'Eranog',
    'Terros',
    'The Primal Council',
    'Sennarth, the Cold Breath',
    'Dathea, Ascended',
    'Broodkeeper Diurna',
    'Kurog Grimtotem',
    'Raszageth the Storm-Eater'
  ],
  'Aberrus, the Shadowed Crucible': [
    'Kazzara, the Hellforged',
    'The Amalgamation Chamber',
    'The Forgotten Experiments',
    'Assault of the Zaqali',
    'Rashok, the Elder',
    'The Vigilant Steward, Zskarn',
    'Magmorax',
    'Echo of Neltharion',
    'Scalecommander Sarkareth'
  ],
  'Amirdrassil, the Dream\'s Hope': [
    'Gnarlroot',
    'Igira the Cruel',
    'Volcoross',
    'Council of Dreams',
    'Larodar, Keeper of the Flame',
    'Nymue, Weaver of the Cycle',
    'Smolderon',
    'Tindral Sageswift, Seer of the Flame',
    'Fyrakk the Blazing'
  ],

  // Shadowlands
  'Sepulcher of the First Ones': [
    'Vigilant Guardian',
    'Skolex, the Insatiable Ravener',
    'Artificer Xy\'mox',
    'Dausegne, the Fallen Oracle',
    'Prototype Pantheon',
    'Lihuvim, Principal Architect',
    'Halondrus the Reclaimer',
    'Anduin Wrynn',
    'Lords of Dread',
    'Rygelon',
    'The Jailer'
  ],
  'Sanctum of Domination': [
    'The Tarragrue',
    'The Eye of the Jailer',
    'The Nine',
    'Remnant of Ner\'zhul',
    'Soulrender Dormazain',
    'Painsmith Raznal',
    'Guardian of the First Ones',
    'Fatescribe Roh-Kalo',
    'Kel\'Thuzad',
    'Sylvanas Windrunner'
  ],
  'Castle Nathria': [
    'Shriekwing',
    'Huntsman Altimor',
    'Hungering Destroyer',
    'Artificer Xy\'mox',
    'Sun King\'s Salvation',
    'Lady Inerva Darkvein',
    'The Council of Blood',
    'Sludgefist',
    'Stone Legion Generals',
    'Sire Denathrius'
  ],

  // WotLK Classic
  'Icecrown Citadel': [
    'Lord Marrowgar',
    'Lady Deathwhisper',
    'Gunship Battle',
    'Deathbringer Saurfang',
    'Festergut',
    'Rotface',
    'Professor Putricide',
    'Blood Prince Council',
    'Blood-Queen Lana\'thel',
    'Valithria Dreamwalker',
    'Sindragosa',
    'The Lich King'
  ],
  'Trial of the Crusader': [
    'Northrend Beasts',
    'Lord Jaraxxus',
    'Faction Champions',
    'Twin Val\'kyr',
    'Anub\'arak'
  ],
  'Ulduar': [
    'Flame Leviathan',
    'Ignis the Furnace Master',
    'Razorscale',
    'XT-002 Deconstructor',
    'Assembly of Iron',
    'Kologarn',
    'Auriaya',
    'Hodir',
    'Thorim',
    'Freya',
    'Mimiron',
    'General Vezax',
    'Yogg-Saron',
    'Algalon the Observer'
  ],
  'Naxxramas': [
    'Anub\'Rekhan',
    'Grand Widow Faerlina',
    'Maexxna',
    'Noth the Plaguebringer',
    'Heigan the Unclean',
    'Loatheb',
    'Instructor Razuvious',
    'Gothik the Harvester',
    'The Four Horsemen',
    'Patchwerk',
    'Grobbulus',
    'Gluth',
    'Thaddius',
    'Sapphiron',
    'Kel\'Thuzad'
  ],

  // TBC Classic
  'Sunwell Plateau': [
    'Kalecgos',
    'Brutallus',
    'Felmyst',
    'Eredar Twins',
    'M\'uru',
    'Kil\'jaeden'
  ],
  'Black Temple': [
    'High Warlord Naj\'entus',
    'Supremus',
    'Shade of Akama',
    'Teron Gorefiend',
    'Gurtogg Bloodboil',
    'Reliquary of Souls',
    'Mother Shahraz',
    'The Illidari Council',
    'Illidan Stormrage'
  ],
  'Serpentshrine Cavern': [
    'Hydross the Unstable',
    'The Lurker Below',
    'Leotheras the Blind',
    'Fathom-Lord Karathress',
    'Morogrim Tidewalker',
    'Lady Vashj'
  ],
  'Karazhan': [
    'Attumen the Huntsman',
    'Moroes',
    'Maiden of Virtue',
    'Opera Event',
    'The Curator',
    'Terestian Illhoof',
    'Shade of Aran',
    'Netherspite',
    'Chess Event',
    'Prince Malchezaar'
  ],

  // Vanilla Classic
  'Temple of Ahn\'Qiraj': [
    'The Prophet Skeram',
    'Silithid Royalty',
    'Battleguard Sartura',
    'Fankriss the Unyielding',
    'Viscidus',
    'Princess Huhuran',
    'Twin Emperors',
    'Ouro',
    'C\'Thun'
  ],
  'Blackwing Lair': [
    'Razorgore the Untamed',
    'Vaelastrasz the Corrupt',
    'Broodlord Lashlayer',
    'Firemaw',
    'Ebonroc',
    'Flamegor',
    'Chromaggus',
    'Nefarian'
  ],
  'Molten Core': [
    'Lucifron',
    'Magmadar',
    'Gehennas',
    'Garr',
    'Shazzrah',
    'Baron Geddon',
    'Sulfuron Harbinger',
    'Golemagg the Incinerator',
    'Majordomo Executus',
    'Ragnaros'
  ]
};

// Helper function to get bosses for a specific raid
export const getBossesForRaid = (raidName: string): string[] => {
  return RAID_BOSSES[raidName] || [];
};

// Helper function to check if a raid is a full clear
export const isFullClear = (raid: RaidPost): boolean => {
  if (!raid.selectedBosses || raid.selectedBosses.length === 0) {
    return true; // No bosses selected = full clear
  }
  const totalBosses = getBossesForRaid(raid.raidName);
  return raid.selectedBosses.length === totalBosses.length;
};

// Helper function to get boss count string
export const getBossCountString = (raid: RaidPost): string => {
  if (isFullClear(raid)) {
    return 'Full Clear';
  }
  const totalBosses = getBossesForRaid(raid.raidName);
  const selectedCount = raid.selectedBosses?.length || 0;
  return `${selectedCount}/${totalBosses.length} Bosses`;
};
