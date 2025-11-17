import { RaidPost } from 'src/models/raid';

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
      isOnline: true
    },
    signups: 13,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 59 * 60 * 1000,
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
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
    note: 'Full clear, loot council. Whisper for more info.'
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
      isOnline: true
    },
    signups: 18,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 25 * 60 * 1000,
    avgPayTime: '4 Hours',
    payLimit: '45 Minutes',
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
    note: 'CE prog group, need ranged DPS only. Must have logs.'
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
      isOnline: false
    },
    signups: 5,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 2 * 60 * 60 * 1000,
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
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
    note: 'Chill run, alts welcome. Discord required.'
  },
  {
    id: 'raid-4',
    gameVersion: 'classic',
    expansion: 'wotlk',
    raidName: 'Icecrown Citadel',
    difficulty: '25h',
    price: 1200000,
    faction: 'alliance',
    server: 'grobbulus',
    poster: {
      id: 'user-4',
      name: 'Lightbringer',
      avatar: '/static/images/avatars/4.jpg',
      credit: 89.5,
      karma: 340,
      isOnline: true
    },
    signups: 22,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 15 * 60 * 1000,
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
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
    note: 'LK mount reserved to guild. All other loot free roll.'
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
      isOnline: true
    },
    signups: 2,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 3 * 60 * 60 * 1000,
    avgPayTime: '1 Hour',
    payLimit: '15 Minutes',
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
  },
  {
    id: 'raid-6',
    gameVersion: 'classic',
    expansion: 'tbc',
    raidName: 'Black Temple',
    difficulty: '25n',
    price: 800000,
    faction: 'horde',
    server: 'faerlina',
    poster: {
      id: 'user-6',
      name: 'Demonslayer',
      avatar: '/static/images/avatars/1.jpg',
      credit: 200.0,
      karma: 567,
      isOnline: false
    },
    signups: 15,
    rolesNeeded: ['tank', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 45 * 60 * 1000,
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
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
    note: 'Warglaives reserved. Tier tokens open roll.'
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
      isOnline: true
    },
    signups: 19,
    rolesNeeded: ['dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 10 * 60 * 1000,
    avgPayTime: '5 Hours',
    payLimit: '60 Minutes',
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
      isOnline: true
    },
    signups: 9,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 90 * 60 * 1000,
    avgPayTime: '3 Hours',
    payLimit: '30 Minutes',
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
    difficulty: '10h',
    price: 500000,
    faction: 'alliance',
    server: 'benediction',
    poster: {
      id: 'user-9',
      name: 'Titanforge',
      avatar: '/static/images/avatars/4.jpg',
      credit: 95.0,
      karma: 412,
      isOnline: false
    },
    signups: 7,
    rolesNeeded: ['healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 4 * 60 * 60 * 1000,
    avgPayTime: '2 Hours',
    payLimit: '20 Minutes',
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
    note: 'Val\'anyr fragments run. Yogg+0 included.'
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
      isOnline: true
    },
    signups: 4,
    rolesNeeded: ['tank', 'healer', 'dps'],
    classesAllowed: 'all',
    postedAt: Date.now() - 5 * 60 * 60 * 1000,
    avgPayTime: '2.5 Hours',
    payLimit: '25 Minutes',
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
  }
];
