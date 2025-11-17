import { RaidPost } from 'src/models/raid';

// Helper to create scheduled times relative to now
const now = Date.now();
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

export const mockRaidPosts: RaidPost[] = [
  {
    id: 'raid-1',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Liberation of Undermine',
    difficulty: 'heroic',
    price: 2500000,
    faction: 'horde',
    server: 'area-52',
    poster: {
      id: 'user-1',
      name: 'Draven',
      avatar: '/static/images/avatars/1.jpg',
      credit: 150.5,
      karma: 245,
      isOnline: true,
      tier: 'normal'
    },
    signups: 13,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 59 * 60 * 1000,
    scheduledTime: now + 3 * HOUR, // Tonight, 3 hours from now
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 169,
      averageRating: 9.93,
      karmaChange: 70.22,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 10,
    currentBuyers: 3,
    marketAveragePrice: 2300000,
    requirements: {
      minIOScore: 3200,
      minIlvl: 639,
      minRating: 0,
      minKarma: -100
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 2, max: 4 },
      { role: 'dps', current: 10, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-1',
        name: 'Tankmaster',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: 'member-2',
        name: 'Holylight',
        class: 'paladin',
        role: 'healer',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 3
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Full clear, loot council. Whisper for more info.',
    selectedBosses: undefined // Full clear - all bosses
  },
  {
    id: 'raid-2',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Nerub-ar Palace',
    difficulty: 'mythic',
    price: 8000000,
    faction: 'alliance',
    server: 'illidan',
    poster: {
      id: 'user-2',
      name: 'Shadowmend',
      avatar: '/static/images/avatars/2.jpg',
      credit: 320.0,
      karma: 890,
      isOnline: true,
      tier: 'premium'
    },
    signups: 18,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 25 * 60 * 1000,
    scheduledTime: now + 5 * HOUR, // Tonight, 5 hours from now
    avgPayTime: '4 Hours',
    payLimit: '45 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 342,
      averageRating: 9.98,
      karmaChange: 156.5,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: true,
    maxBuyers: 5,
    currentBuyers: 2,
    marketAveragePrice: 8500000,
    requirements: {
      minIOScore: 3800,
      minIlvl: 645,
      minRating: 5,
      minKarma: 50
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 12, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-3',
        name: 'Bloodguard',
        class: 'death_knight',
        role: 'tank',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: 'member-4',
        name: 'Protector',
        class: 'paladin',
        role: 'tank',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 2
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: ['hunter', 'mage', 'warlock', 'evoker']
    },
    note: 'CE prog group, need ranged DPS only. Must have logs.',
    selectedBosses: ['The Silken Court', 'Queen Ansurek'] // Only last 2 bosses
  },
  {
    id: 'raid-3',
    gameVersion: 'retail',
    expansion: 'df',
    raidName: "Amirdrassil, the Dream's Hope",
    difficulty: 'normal',
    price: 450000,
    faction: 'horde',
    server: 'tichondrius',
    poster: {
      id: 'user-3',
      name: 'Frostweave',
      avatar: '/static/images/avatars/3.jpg',
      credit: 45.0,
      karma: 120,
      isOnline: false,
      tier: 'low_cut'
    },
    signups: 5,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 2 * 60 * 60 * 1000,
    scheduledTime: now + 4 * HOUR, // Tonight, 4 hours from now
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 45,
      averageRating: 8.5,
      karmaChange: 23.0,
      riskLevel: 'medium'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 15,
    currentBuyers: 8,
    marketAveragePrice: 500000,
    requirements: {
      minIOScore: 2800,
      minIlvl: 625,
      minRating: 0,
      minKarma: -50
    },
    roleSlots: [
      { role: 'tank', current: 0, max: 2 },
      { role: 'healer', current: 1, max: 4 },
      { role: 'dps', current: 4, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-5',
        name: 'Naturebless',
        class: 'druid',
        role: 'healer',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 8
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Chill run, alts welcome. Discord required.',
    selectedBosses: ['Fyrakk the Blazing'] // Only final boss
  },
  {
    id: 'raid-4',
    gameVersion: 'classic',
    expansion: 'wotlk',
    raidName: 'Icecrown Citadel',
    difficulty: 'heroic',
    price: 1200000,
    faction: 'alliance',
    server: 'grobbulus',
    poster: {
      id: 'user-4',
      name: 'Lightbringer',
      avatar: '/static/images/avatars/4.jpg',
      credit: 89.5,
      karma: 340,
      isOnline: true,
      tier: 'premium'
    },
    signups: 22,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 15 * 60 * 1000,
    scheduledTime: now + 2 * HOUR, // Tonight, 2 hours from now
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 128,
      averageRating: 9.45,
      karmaChange: 45.8,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 8,
    currentBuyers: 4,
    marketAveragePrice: 1100000,
    requirements: {
      minIOScore: 0,
      minIlvl: 264,
      minRating: 0,
      minKarma: 0
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 6 },
      { role: 'dps', current: 15, max: 17 }
    ],
    groupMembers: [
      {
        id: 'member-6',
        name: 'Iceguard',
        class: 'paladin',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: 'member-7',
        name: 'Frostshield',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 4
    },
    eligibleClasses: {
      tank: 'any',
      healer: ['paladin', 'priest', 'shaman', 'druid'],
      dps: 'any'
    },
    note: 'LK mount reserved to guild. All other loot free roll.',
    selectedBosses: ['Sindragosa', 'The Lich King'] // Last 2 bosses
  },
  {
    id: 'raid-5',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Manaforge Omega',
    difficulty: 'normal',
    price: 150000,
    faction: 'horde',
    server: 'zuljin',
    poster: {
      id: 'user-5',
      name: 'Stormrage',
      avatar: '/static/images/avatars/5.jpg',
      credit: 12.0,
      karma: 45,
      isOnline: true,
      tier: 'low_cut'
    },
    signups: 2,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 3 * 60 * 60 * 1000,
    scheduledTime: now + 6 * HOUR, // Tonight, 6 hours from now
    avgPayTime: '1 Hour',
    payLimit: '15 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 15,
      averageRating: 7.2,
      karmaChange: 8.5,
      riskLevel: 'high'
    },
    numberOfRuns: 4,
    isTimed: false,
    maxBuyers: 20,
    currentBuyers: 12,
    marketAveragePrice: 180000,
    requirements: {
      minIOScore: 2000,
      minIlvl: 610,
      minRating: 0,
      minKarma: -200
    },
    roleSlots: [
      { role: 'tank', current: 0, max: 2 },
      { role: 'healer', current: 0, max: 4 },
      { role: 'dps', current: 2, max: 14 }
    ],
    groupMembers: [],
    buyerInfo: {
      willParticipate: false,
      count: 12
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'New raid! Quick clear for transmog. New boosters welcome!'
    // No selectedBosses = Full clear
  },
  {
    id: 'raid-6',
    gameVersion: 'classic',
    expansion: 'tbc',
    raidName: 'Black Temple',
    difficulty: 'normal',
    price: 800000,
    faction: 'horde',
    server: 'faerlina',
    poster: {
      id: 'user-6',
      name: 'Demonslayer',
      avatar: '/static/images/avatars/1.jpg',
      credit: 200.0,
      karma: 567,
      isOnline: false,
      tier: 'premium'
    },
    signups: 15,
    rolesNeeded: ['tank', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 45 * 60 * 1000,
    scheduledTime: now + 2 * DAY + 19 * HOUR, // Day after tomorrow, evening
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 89,
      averageRating: 9.12,
      karmaChange: 38.9,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 6,
    currentBuyers: 3,
    marketAveragePrice: 750000,
    requirements: {
      minIOScore: 0,
      minIlvl: 141,
      minRating: 0,
      minKarma: 10
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 5, max: 5 },
      { role: 'dps', current: 16, max: 18 }
    ],
    groupMembers: [
      {
        id: 'member-8',
        name: 'Warbreaker',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 3
    },
    eligibleClasses: {
      tank: ['warrior', 'paladin', 'druid'],
      healer: 'any',
      dps: 'any'
    },
    note: 'Warglaives reserved. Tier tokens open roll.',
    selectedBosses: ['Illidan Stormrage'] // Only Illidan
  },
  {
    id: 'raid-7',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Liberation of Undermine',
    difficulty: 'mythic',
    price: 12000000,
    faction: 'alliance',
    server: 'stormrage',
    poster: {
      id: 'user-7',
      name: 'Mythiccarry',
      avatar: '/static/images/avatars/2.jpg',
      credit: 1250.0,
      karma: 2100,
      isOnline: true,
      tier: 'premium'
    },
    signups: 19,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 10 * 60 * 1000,
    scheduledTime: now + 4 * HOUR, // Tonight, 4 hours from now
    avgPayTime: '5 Hours',
    payLimit: '60 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 512,
      averageRating: 9.99,
      karmaChange: 285.3,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: true,
    maxBuyers: 1,
    currentBuyers: 1,
    marketAveragePrice: 11000000,
    requirements: {
      minIOScore: 4000,
      minIlvl: 650,
      minRating: 8,
      minKarma: 100
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 13, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-9',
        name: 'Eliterank',
        class: 'demon_hunter',
        role: 'tank',
        avatar: '/static/images/avatars/5.jpg'
      },
      {
        id: 'member-10',
        name: 'Topparse',
        class: 'monk',
        role: 'tank',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 1
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: ['mage', 'warlock', 'hunter']
    },
    note: 'Top 100 guild. Guaranteed kill. Buyers get all loot.'
    // No selectedBosses = Full clear
  },
  {
    id: 'raid-8',
    gameVersion: 'retail',
    expansion: 'df',
    raidName: 'Aberrus, the Shadowed Crucible',
    difficulty: 'heroic',
    price: 1800000,
    faction: 'horde',
    server: 'area-52',
    poster: {
      id: 'user-8',
      name: 'Blazeclaw',
      avatar: '/static/images/avatars/3.jpg',
      credit: 78.0,
      karma: 189,
      isOnline: true,
      tier: 'normal'
    },
    signups: 9,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 90 * 60 * 1000,
    scheduledTime: now + 3 * DAY + 21 * HOUR, // 3 days from now, late evening
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 67,
      averageRating: 8.89,
      karmaChange: 32.1,
      riskLevel: 'medium'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 8,
    currentBuyers: 5,
    marketAveragePrice: 1900000,
    requirements: {
      minIOScore: 3000,
      minIlvl: 630,
      minRating: 0,
      minKarma: -25
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 3, max: 4 },
      { role: 'dps', current: 8, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-11',
        name: 'Shieldwall',
        class: 'paladin',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 5
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Transmog and mount farm. Multiple clears available.'
  },
  {
    id: 'raid-9',
    gameVersion: 'classic',
    expansion: 'wotlk',
    raidName: 'Ulduar',
    difficulty: 'heroic',
    price: 500000,
    faction: 'alliance',
    server: 'benediction',
    poster: {
      id: 'user-9',
      name: 'Titanforge',
      avatar: '/static/images/avatars/4.jpg',
      credit: 95.0,
      karma: 412,
      isOnline: false,
      tier: 'normal'
    },
    signups: 7,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 4 * 60 * 60 * 1000,
    scheduledTime: now + 5 * DAY + 18 * HOUR, // 5 days, afternoon
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 156,
      averageRating: 9.67,
      karmaChange: 52.4,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 3,
    currentBuyers: 2,
    marketAveragePrice: 480000,
    requirements: {
      minIOScore: 0,
      minIlvl: 226,
      minRating: 0,
      minKarma: 5
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 2, max: 3 },
      { role: 'dps', current: 4, max: 5 }
    ],
    groupMembers: [
      {
        id: 'member-12',
        name: 'Mimiron',
        class: 'paladin',
        role: 'tank',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: 'member-13',
        name: 'Yoggsaron',
        class: 'druid',
        role: 'tank',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 2
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: "Val'anyr fragments run. Yogg+0 included."
  },
  {
    id: 'raid-10',
    gameVersion: 'retail',
    expansion: 'sl',
    raidName: 'Sepulcher of the First Ones',
    difficulty: 'normal',
    price: 350000,
    faction: 'horde',
    server: 'malganis',
    poster: {
      id: 'user-10',
      name: 'Voidwalker',
      avatar: '/static/images/avatars/5.jpg',
      credit: 22.5,
      karma: 78,
      isOnline: true,
      tier: 'low_cut'
    },
    signups: 4,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 5 * 60 * 60 * 1000,
    scheduledTime: now + 1 * DAY + 14 * HOUR, // Tomorrow afternoon
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 28,
      averageRating: 7.85,
      karmaChange: 12.3,
      riskLevel: 'medium'
    },
    numberOfRuns: 3,
    isTimed: false,
    maxBuyers: 12,
    currentBuyers: 7,
    marketAveragePrice: 400000,
    requirements: {
      minIOScore: 2500,
      minIlvl: 620,
      minRating: 0,
      minKarma: -75
    },
    roleSlots: [
      { role: 'tank', current: 0, max: 2 },
      { role: 'healer', current: 2, max: 4 },
      { role: 'dps', current: 4, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-14',
        name: 'Holymend',
        class: 'priest',
        role: 'healer',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: 'member-15',
        name: 'Rejuvenate',
        class: 'druid',
        role: 'healer',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 7
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Transmog run. All appearances available. Fast clears.'
  },
  {
    id: 'raid-11',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Nerub-ar Palace',
    difficulty: 'heroic',
    price: 3200000,
    faction: 'horde',
    server: 'thrall',
    poster: {
      id: 'user-11',
      name: 'Webspinner',
      avatar: '/static/images/avatars/1.jpg',
      credit: 185.0,
      karma: 623,
      isOnline: true,
      tier: 'premium'
    },
    signups: 16,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 32 * 60 * 1000,
    scheduledTime: now + 1 * HOUR, // Tonight, 1 hour from now (soonest!)
    avgPayTime: '3.5 Hours',
    payLimit: '35 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 234,
      averageRating: 9.78,
      karmaChange: 98.2,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 6,
    currentBuyers: 4,
    marketAveragePrice: 3000000,
    requirements: {
      minIOScore: 3400,
      minIlvl: 641,
      minRating: 3,
      minKarma: 25
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 3, max: 4 },
      { role: 'dps', current: 11, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-16',
        name: 'Darkguard',
        class: 'death_knight',
        role: 'tank',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 4
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Aiming for full clear. AOTC included.'
  },
  {
    id: 'raid-12',
    gameVersion: 'classic',
    expansion: 'vanilla',
    raidName: 'Molten Core',
    difficulty: 'normal',
    price: 250000,
    faction: 'alliance',
    server: 'whitemane',
    poster: {
      id: 'user-12',
      name: 'Ragnarosbane',
      avatar: '/static/images/avatars/2.jpg',
      credit: 55.0,
      karma: 198,
      isOnline: false,
      tier: 'normal'
    },
    signups: 28,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 6 * 60 * 60 * 1000,
    scheduledTime: now + 4 * DAY + 20 * HOUR, // 4 days, evening
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 76,
      averageRating: 8.92,
      karmaChange: 28.7,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 20,
    currentBuyers: 15,
    marketAveragePrice: 280000,
    requirements: {
      minIOScore: 0,
      minIlvl: 60,
      minRating: 0,
      minKarma: -50
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 8, max: 10 },
      { role: 'dps', current: 25, max: 28 }
    ],
    groupMembers: [
      {
        id: 'member-17',
        name: 'Fireward',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 15
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Classic nostalgia run. Thunderfury binding reserved.'
  },
  {
    id: 'raid-13',
    gameVersion: 'retail',
    expansion: 'df',
    raidName: 'Vault of the Incarnates',
    difficulty: 'mythic',
    price: 5500000,
    faction: 'alliance',
    server: 'proudmoore',
    poster: {
      id: 'user-13',
      name: 'Primalforce',
      avatar: '/static/images/avatars/3.jpg',
      credit: 445.0,
      karma: 1245,
      isOnline: true,
      tier: 'premium'
    },
    signups: 17,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 20 * 60 * 1000,
    scheduledTime: now + 7 * DAY + 22 * HOUR, // 1 week, late night
    avgPayTime: '4 Hours',
    payLimit: '45 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 289,
      averageRating: 9.91,
      karmaChange: 142.6,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: true,
    maxBuyers: 2,
    currentBuyers: 1,
    marketAveragePrice: 5200000,
    requirements: {
      minIOScore: 3600,
      minIlvl: 643,
      minRating: 6,
      minKarma: 75
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 13, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-18',
        name: 'Stormcaller',
        class: 'shaman',
        role: 'healer',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 1
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: ['evoker', 'mage', 'warlock']
    },
    note: 'Old content for mounts. Guaranteed Raszageth mount drop.'
  },
  {
    id: 'raid-14',
    gameVersion: 'classic',
    expansion: 'tbc',
    raidName: 'Karazhan',
    difficulty: 'normal',
    price: 180000,
    faction: 'horde',
    server: 'mankrik',
    poster: {
      id: 'user-14',
      name: 'Medivhson',
      avatar: '/static/images/avatars/4.jpg',
      credit: 38.0,
      karma: 134,
      isOnline: true,
      tier: 'low_cut'
    },
    signups: 6,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 85 * 60 * 1000,
    scheduledTime: now + 8 * HOUR, // Later tonight
    avgPayTime: '1.5 Hours',
    payLimit: '15 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 52,
      averageRating: 8.45,
      karmaChange: 19.8,
      riskLevel: 'medium'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 4,
    currentBuyers: 2,
    marketAveragePrice: 200000,
    requirements: {
      minIOScore: 0,
      minIlvl: 115,
      minRating: 0,
      minKarma: 0
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 1, max: 2 },
      { role: 'dps', current: 4, max: 6 }
    ],
    groupMembers: [
      {
        id: 'member-19',
        name: 'Chessmaster',
        class: 'mage',
        role: 'dps',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 2
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Quick Kara clear. Nightbane summon included.'
  },
  {
    id: 'raid-15',
    gameVersion: 'retail',
    expansion: 'sl',
    raidName: 'Castle Nathria',
    difficulty: 'heroic',
    price: 950000,
    faction: 'alliance',
    server: 'sargeras',
    poster: {
      id: 'user-15',
      name: 'Venthyrlord',
      avatar: '/static/images/avatars/5.jpg',
      credit: 112.0,
      karma: 387,
      isOnline: false,
      tier: 'normal'
    },
    signups: 11,
    rolesNeeded: ['tank', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 3.5 * 60 * 60 * 1000,
    scheduledTime: now + 6 * DAY + 19 * HOUR, // 6 days, evening
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 145,
      averageRating: 9.34,
      karmaChange: 56.9,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 10,
    currentBuyers: 6,
    marketAveragePrice: 1000000,
    requirements: {
      minIOScore: 2600,
      minIlvl: 622,
      minRating: 0,
      minKarma: -10
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 9, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-20',
        name: 'Bloodfeast',
        class: 'demon_hunter',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 6
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Denathrius mount farm. Multiple kills available.'
  },
  {
    id: 'raid-16',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Manaforge Omega',
    difficulty: 'heroic',
    price: 1100000,
    faction: 'alliance',
    server: 'keltuzad',
    poster: {
      id: 'user-16',
      name: 'Arcanemaster',
      avatar: '/static/images/avatars/1.jpg',
      credit: 67.0,
      karma: 256,
      isOnline: true,
      tier: 'normal'
    },
    signups: 8,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 55 * 60 * 1000,
    scheduledTime: now + 1 * DAY + 21 * HOUR, // Tomorrow late evening
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 98,
      averageRating: 9.21,
      karmaChange: 41.3,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 8,
    currentBuyers: 5,
    marketAveragePrice: 1050000,
    requirements: {
      minIOScore: 3100,
      minIlvl: 637,
      minRating: 2,
      minKarma: 10
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 2, max: 4 },
      { role: 'dps', current: 10, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-21',
        name: 'Manaburn',
        class: 'mage',
        role: 'dps',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 5
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Full heroic clear. New tier pieces available.'
  },
  {
    id: 'raid-17',
    gameVersion: 'classic',
    expansion: 'wotlk',
    raidName: 'Trial of the Crusader',
    difficulty: 'normal',
    price: 650000,
    faction: 'horde',
    server: 'sulfuras',
    poster: {
      id: 'user-17',
      name: 'Crusaderlord',
      avatar: '/static/images/avatars/2.jpg',
      credit: 82.0,
      karma: 298,
      isOnline: true,
      tier: 'normal'
    },
    signups: 19,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 42 * 60 * 1000,
    scheduledTime: now + 10 * DAY + 20 * HOUR, // 10 days, evening
    avgPayTime: '1.5 Hours',
    payLimit: '20 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 112,
      averageRating: 9.15,
      karmaChange: 43.2,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 10,
    currentBuyers: 7,
    marketAveragePrice: 620000,
    requirements: {
      minIOScore: 0,
      minIlvl: 245,
      minRating: 0,
      minKarma: 5
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 4, max: 6 },
      { role: 'dps', current: 14, max: 17 }
    ],
    groupMembers: [
      {
        id: 'member-22',
        name: 'Tribunaldefender',
        class: 'paladin',
        role: 'tank',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 7
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Quick TOC run. Trophy of the Crusade up for roll.'
  },
  {
    id: 'raid-18',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Liberation of Undermine',
    difficulty: 'normal',
    price: 750000,
    faction: 'horde',
    server: 'bleeding-hollow',
    poster: {
      id: 'user-18',
      name: 'Goblinboss',
      avatar: '/static/images/avatars/3.jpg',
      credit: 43.0,
      karma: 167,
      isOnline: false,
      tier: 'low_cut'
    },
    signups: 7,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 2.5 * 60 * 60 * 1000,
    scheduledTime: now + 2 * DAY + 14 * HOUR, // 2 days, afternoon
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 61,
      averageRating: 8.67,
      karmaChange: 25.4,
      riskLevel: 'medium'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 12,
    currentBuyers: 8,
    marketAveragePrice: 800000,
    requirements: {
      minIOScore: 2900,
      minIlvl: 628,
      minRating: 0,
      minKarma: -30
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 2, max: 4 },
      { role: 'dps', current: 7, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-23',
        name: 'Goldseeker',
        class: 'rogue',
        role: 'dps',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 8
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Normal clear for gearing alts. Chill environment.'
  },
  {
    id: 'raid-19',
    gameVersion: 'classic',
    expansion: 'vanilla',
    raidName: 'Blackwing Lair',
    difficulty: 'heroic',
    price: 320000,
    faction: 'alliance',
    server: 'pagle',
    poster: {
      id: 'user-19',
      name: 'Nefariansbane',
      avatar: '/static/images/avatars/4.jpg',
      credit: 71.0,
      karma: 245,
      isOnline: true,
      tier: 'normal'
    },
    signups: 24,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 72 * 60 * 1000,
    scheduledTime: now + 9 * DAY + 21 * HOUR, // 9 days, late evening
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 94,
      averageRating: 9.08,
      karmaChange: 37.6,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 15,
    currentBuyers: 11,
    marketAveragePrice: 350000,
    requirements: {
      minIOScore: 0,
      minIlvl: 66,
      minRating: 0,
      minKarma: 0
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 6, max: 8 },
      { role: 'dps', current: 22, max: 30 }
    ],
    groupMembers: [
      {
        id: 'member-24',
        name: 'Razorgore',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: 'member-25',
        name: 'Chromaggus',
        class: 'druid',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 11
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'BWL speedrun. Chromatic boots and DFT reserved.'
  },
  {
    id: 'raid-20',
    gameVersion: 'retail',
    expansion: 'df',
    raidName: "Amirdrassil, the Dream's Hope",
    difficulty: 'mythic',
    price: 9500000,
    faction: 'horde',
    server: 'illidan',
    poster: {
      id: 'user-20',
      name: 'Dreamweaver',
      avatar: '/static/images/avatars/5.jpg',
      credit: 890.0,
      karma: 1876,
      isOnline: true,
      tier: 'premium'
    },
    signups: 18,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 12 * 60 * 1000,
    scheduledTime: now + 14 * DAY + 20 * HOUR, // 2 weeks, evening
    avgPayTime: '4.5 Hours',
    payLimit: '50 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 423,
      averageRating: 9.96,
      karmaChange: 234.7,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: true,
    maxBuyers: 2,
    currentBuyers: 1,
    marketAveragePrice: 9000000,
    requirements: {
      minIOScore: 3900,
      minIlvl: 648,
      minRating: 7,
      minKarma: 90
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 13, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-26',
        name: 'Fyrakk',
        class: 'evoker',
        role: 'dps',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 1
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: ['hunter', 'rogue', 'warrior']
    },
    note: 'CE sales. Fyrakk mount guaranteed. All loot to buyer.'
  },
  {
    id: 'raid-21',
    gameVersion: 'retail',
    expansion: 'sl',
    raidName: 'Sanctum of Domination',
    difficulty: 'normal',
    price: 280000,
    faction: 'alliance',
    server: 'moonguard',
    poster: {
      id: 'user-21',
      name: 'Sylvanassfan',
      avatar: '/static/images/avatars/1.jpg',
      credit: 28.0,
      karma: 89,
      isOnline: true,
      tier: 'low_cut'
    },
    signups: 3,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 4.5 * 60 * 60 * 1000,
    scheduledTime: now + 11 * DAY + 18 * HOUR, // 11 days, afternoon
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 34,
      averageRating: 7.95,
      karmaChange: 14.2,
      riskLevel: 'medium'
    },
    numberOfRuns: 3,
    isTimed: false,
    maxBuyers: 15,
    currentBuyers: 10,
    marketAveragePrice: 320000,
    requirements: {
      minIOScore: 2400,
      minIlvl: 618,
      minRating: 0,
      minKarma: -60
    },
    roleSlots: [
      { role: 'tank', current: 0, max: 2 },
      { role: 'healer', current: 1, max: 4 },
      { role: 'dps', current: 3, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-27',
        name: 'Mawwalker',
        class: 'priest',
        role: 'healer',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 10
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Transmog farming. All Maw appearances available.'
  },
  {
    id: 'raid-22',
    gameVersion: 'classic',
    expansion: 'tbc',
    raidName: 'Sunwell Plateau',
    difficulty: 'mythic',
    price: 1500000,
    faction: 'alliance',
    server: 'faerlina',
    poster: {
      id: 'user-22',
      name: 'Kiljaedenkiller',
      avatar: '/static/images/avatars/2.jpg',
      credit: 156.0,
      karma: 534,
      isOnline: false,
      tier: 'premium'
    },
    signups: 21,
    rolesNeeded: ['tank', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 38 * 60 * 1000,
    scheduledTime: now + 12 * DAY + 19 * HOUR, // 12 days, evening
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 178,
      averageRating: 9.52,
      karmaChange: 67.8,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: false,
    maxBuyers: 6,
    currentBuyers: 4,
    marketAveragePrice: 1400000,
    requirements: {
      minIOScore: 0,
      minIlvl: 154,
      minRating: 0,
      minKarma: 15
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 6, max: 6 },
      { role: 'dps', current: 16, max: 17 }
    ],
    groupMembers: [
      {
        id: 'member-28',
        name: 'Brutallusbuster',
        class: 'warrior',
        role: 'tank',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 4
    },
    eligibleClasses: {
      tank: ['warrior', 'paladin'],
      healer: 'any',
      dps: 'any'
    },
    note: "Full SWP clear. Thori'dal bow reserved to guild."
  },
  {
    id: 'raid-23',
    gameVersion: 'retail',
    expansion: 'tww',
    raidName: 'Nerub-ar Palace',
    difficulty: 'normal',
    price: 850000,
    faction: 'horde',
    server: 'area-52',
    poster: {
      id: 'user-23',
      name: 'Nerubianqueen',
      avatar: '/static/images/avatars/3.jpg',
      credit: 52.0,
      karma: 178,
      isOnline: true,
      tier: 'normal'
    },
    signups: 10,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 95 * 60 * 1000,
    scheduledTime: now + 1.5 * HOUR, // Tonight, 1.5 hours from now
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 72,
      averageRating: 8.78,
      karmaChange: 29.3,
      riskLevel: 'low'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 10,
    currentBuyers: 6,
    marketAveragePrice: 900000,
    requirements: {
      minIOScore: 2700,
      minIlvl: 624,
      minRating: 0,
      minKarma: -20
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 2, max: 4 },
      { role: 'dps', current: 9, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-29',
        name: 'Spidersilk',
        class: 'hunter',
        role: 'dps',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 6
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Normal mode for weekly vault. Fast and efficient.'
  },
  {
    id: 'raid-24',
    gameVersion: 'retail',
    expansion: 'df',
    raidName: 'Aberrus, the Shadowed Crucible',
    difficulty: 'mythic',
    price: 7200000,
    faction: 'alliance',
    server: 'stormrage',
    poster: {
      id: 'user-24',
      name: 'Sarkarethdoom',
      avatar: '/static/images/avatars/4.jpg',
      credit: 678.0,
      karma: 1567,
      isOnline: true,
      tier: 'premium'
    },
    signups: 19,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 18 * 60 * 1000,
    scheduledTime: now + 13 * DAY + 22 * HOUR, // 13 days, late night
    avgPayTime: '4 Hours',
    payLimit: '45 Minutes',
    isSaved: false,
    credibility: {
      totalReviews: 367,
      averageRating: 9.94,
      karmaChange: 198.4,
      riskLevel: 'low'
    },
    numberOfRuns: 1,
    isTimed: true,
    maxBuyers: 3,
    currentBuyers: 2,
    marketAveragePrice: 7000000,
    requirements: {
      minIOScore: 3700,
      minIlvl: 646,
      minRating: 7,
      minKarma: 85
    },
    roleSlots: [
      { role: 'tank', current: 2, max: 2 },
      { role: 'healer', current: 4, max: 4 },
      { role: 'dps', current: 13, max: 14 }
    ],
    groupMembers: [
      {
        id: 'member-30',
        name: 'Scalecommander',
        class: 'evoker',
        role: 'healer',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: true,
      count: 2
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: ['mage', 'warlock', 'hunter', 'evoker']
    },
    note: 'CE farm. Ahead of the Curve achievement included.'
  },
  {
    id: 'raid-25',
    gameVersion: 'classic',
    expansion: 'wotlk',
    raidName: 'Naxxramas',
    difficulty: 'normal',
    price: 220000,
    faction: 'horde',
    server: 'grobbulus',
    poster: {
      id: 'user-25',
      name: 'Kelthuzadpriest',
      avatar: '/static/images/avatars/5.jpg',
      credit: 31.0,
      karma: 112,
      isOnline: false,
      tier: 'low_cut'
    },
    signups: 5,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 5.5 * 60 * 60 * 1000,
    scheduledTime: now + 3 * DAY + 18 * HOUR, // 3 days, afternoon
    avgPayTime: '1.5 Hours',
    payLimit: '15 Minutes',
    isSaved: true,
    credibility: {
      totalReviews: 41,
      averageRating: 8.23,
      karmaChange: 16.7,
      riskLevel: 'medium'
    },
    numberOfRuns: 2,
    isTimed: false,
    maxBuyers: 5,
    currentBuyers: 3,
    marketAveragePrice: 250000,
    requirements: {
      minIOScore: 0,
      minIlvl: 200,
      minRating: 0,
      minKarma: -10
    },
    roleSlots: [
      { role: 'tank', current: 1, max: 2 },
      { role: 'healer', current: 1, max: 3 },
      { role: 'dps', current: 3, max: 5 }
    ],
    groupMembers: [
      {
        id: 'member-31',
        name: 'Plaguebringer',
        class: 'death_knight',
        role: 'tank',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    buyerInfo: {
      willParticipate: false,
      count: 3
    },
    eligibleClasses: {
      tank: 'any',
      healer: 'any',
      dps: 'any'
    },
    note: 'Easy Naxx 10 clear. Great for fresh 80s. All loot open.'
  }
];
