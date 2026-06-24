window.IXON_RULES = {
  factions: [
    "Rangers",
    "Concord",
    "TROI",
    "Zol Empire",
    "Dominion of Thawn",
    "Factionless",
    "Everturned",
    "The Arcanum Order"
  ],

  coalitionKeys: [
    "Survival",
    "Conquest",
    "Technology",
    "Devotion"
  ],

  factionProfiles: {
    "Rangers": {
      coalitionKeys: ["Survival"],
      defaultTags: ["Rangers", "Survival"],
      defaultVetoTags: []
    },

    "Concord": {
      coalitionKeys: ["Technology"],
      defaultTags: ["Concord", "Technology"],
      defaultVetoTags: []
    },

    "TROI": {
      coalitionKeys: ["Technology", "Conquest"],
      defaultTags: ["TROI", "Technology", "Conquest"],
      defaultVetoTags: []
    },

    "Zol Empire": {
      coalitionKeys: ["Conquest", "Devotion"],
      defaultTags: ["Zol Empire", "Conquest"],
      defaultVetoTags: []
    },

    "Dominion of Thawn": {
      coalitionKeys: ["Survival", "Technology"],
      defaultTags: ["Dominion of Thawn", "Survival", "Technology"],
      defaultVetoTags: []
    },

    "Everturned": {
      coalitionKeys: ["Devotion", "Technology"],
      defaultTags: ["Everturned", "Devotion", "Technology"],
      defaultVetoTags: []
    },

    "The Arcanum Order": {
      coalitionKeys: ["Devotion"],
      defaultTags: ["The Arcanum Order", "Devotion"],
      defaultVetoTags: []
    },

    "Factionless": {
      coalitionKeys: [],
      defaultTags: ["Factionless"],
      defaultVetoTags: []
    }
  }
};

window.IXON_CARDS = [
  {
    id: "kaelen-veyne",
    name: "Kaelen Veyne",
    role: "Warlord - Unique",
    faction: "Rangers",
    subFaction: null,
    unitType: "Warlord",
    cardClass: "Warlord",

    influenceDisplay: "10 Influence",
    influenceLimit: 10,
    influenceCost: 0,
    commandPoints: 4,
    unique: true,
    maxCopies: 1,

    coalitionKey: "Survival 🛡",
    vetoFlag: "Technology",

    extraCoalitionKeys: [],
    extraTags: ["Warlord", "Unique"],
    extraVetoTags: ["Technology"],

    warlordRules: {
      allowedFactions: ["Rangers", "Factionless"],
      allowedCoalitionKeys: ["Survival"],
      allowedTags: [],
      vetoTags: ["Technology"]
    },

    maxHp: 8,
    stats: {
      MR: 4,
      AP: 5,
      AR: 4,
      DR: 4
    },
    cardImage: "",
    notes: "Required Warlord for the current Rangers prototype roster. Kaelen provides a 10 Influence Warband limit and does not spend Influence himself."
  },

  {
    id: "hollowfang-signal-ops",
    name: "Hollowfang Signal Ops",
    role: "Basic Infantry",
    faction: "Rangers",
    subFaction: null,
    unitType: "Infantry",
    cardClass: "Basic",

    influenceDisplay: "1 Influence",
    influenceLimit: null,
    influenceCost: 1,
    commandPoints: null,
    unique: false,
    maxCopies: null,

    coalitionKey: "Survival 🛡",
    vetoFlag: "None",

    extraCoalitionKeys: [],
    extraTags: ["Basic", "Infantry"],
    extraVetoTags: [],

    maxHp: 5,
    stats: {
      MR: 3,
      AP: 4,
      AR: 4,
      DR: 2
    },
    cardImage: "",
    notes: "Prototype Rangers infantry unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  },

  {
    id: "ashen-hallow-recon-sniper",
    name: "Ashen-Hallow Recon Sniper",
    role: "Basic Ranged",
    faction: "Rangers",
    subFaction: null,
    unitType: "Ranged",
    cardClass: "Basic",

    influenceDisplay: "2 Influence",
    influenceLimit: null,
    influenceCost: 2,
    commandPoints: null,
    unique: false,
    maxCopies: null,

    coalitionKey: "Survival 🛡",
    vetoFlag: "None",

    extraCoalitionKeys: [],
    extraTags: ["Basic", "Ranged"],
    extraVetoTags: [],

    maxHp: 3,
    stats: {
      MR: 2,
      AP: 6,
      AR: 8,
      DR: 1
    },
    cardImage: "",
    notes: "Prototype Rangers ranged unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  },

  {
    id: "ironvale-shield-tech",
    name: "Ironvale Shield Tech",
    role: "Basic Heavy",
    faction: "Rangers",
    subFaction: null,
    unitType: "Heavy",
    cardClass: "Basic",

    influenceDisplay: "3 Influence",
    influenceLimit: null,
    influenceCost: 3,
    commandPoints: null,
    unique: false,
    maxCopies: null,

    coalitionKey: "Survival 🛡",
    vetoFlag: "None",

    extraCoalitionKeys: [],
    extraTags: ["Basic", "Heavy"],
    extraVetoTags: [],

    maxHp: 6,
    stats: {
      MR: 2,
      AP: 2,
      AR: 2,
      DR: 4
    },
    cardImage: "",
    notes: "Prototype Rangers heavy unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  },

  {
    id: "braedon-forge",
    name: "Braedon Forge, Hammer of the Forge",
    role: "Unique Spec.",
    faction: "Rangers",
    subFaction: null,
    unitType: "Spec",
    cardClass: "Unique",

    influenceDisplay: "3 Influence",
    influenceLimit: null,
    influenceCost: 3,
    commandPoints: null,
    unique: true,
    maxCopies: 1,

    coalitionKey: "Survival 🛡",
    vetoFlag: "None",

    extraCoalitionKeys: [],
    extraTags: ["Unique", "Spec"],
    extraVetoTags: [],

    maxHp: 6,
    stats: {
      MR: 4,
      AP: 5,
      AR: 2,
      DR: 4
    },
    cardImage: "",
    notes: "Unique Rangers Spec unit for the current prototype roster."
  },

{
  id: "xa1",
  name: "XA1",
  role: "Warlord - Unique",
  faction: "Concord",
  subFaction: null,
  unitType: "Warlord",
  cardClass: "Warlord",

  influenceDisplay: "12 Influence",
  influenceLimit: 12,
  influenceCost: 0,
  commandPoints: 5,
  unique: true,
  maxCopies: 1,

  coalitionKey: "Technology",
  vetoFlag: "Survival / Devotion",

  extraCoalitionKeys: [],
  extraTags: ["Warlord", "Unique"],
  extraVetoTags: ["Survival", "Devotion"],

  warlordRules: {
    allowedFactions: ["Concord", "Factionless"],
    allowedCoalitionKeys: ["Technology"],
    allowedTags: [],
    vetoTags: ["Survival", "Devotion"]
  },

  maxHp: 6,
  stats: {
    MR: 6,
    AP: 7,
    AR: 3,
    DR: 2
  },
  cardImage: "",
  notes: "Concord prototype Warlord. XA1 provides a 12 Influence Warband limit and allows Technology-aligned Concord forces while vetoing Survival and Devotion."
},

{
  id: "VS1-infantry-shell",
  name: "VS-1 Infantry Shell",
  role: "Basic Infantry",
  faction: "Concord",
  subFaction: null,
  unitType: "Infantry",
  cardClass: "Basic",

  influenceDisplay: "1 Influence",
  influenceLimit: null,
  influenceCost: 1,
  commandPoints: null,
  unique: false,
  maxCopies: null,

  coalitionKey: "Technology",
  vetoFlag: "None",

  extraCoalitionKeys: [],
  extraTags: ["Basic", "Infantry"],
  extraVetoTags: [],

  maxHp: 3,
  stats: {
    MR: 3,
    AP: 2,
    AR: 3,
    DR: 1
  },
  cardImage: "",
  notes: "Prototype Concord basic infantry unit. V2 Infantry Shell can be added multiple times as long as the Warband remains within its Influence limit."
},

{
  id: "vaelor-kryss",
  name: "Vaelor Kryss, Engineering Guild Master",
  role: "Warlord - Unique",
  faction: "Factionless",
  subFaction: "Engineering Guild",
  unitType: "Warlord",
  cardClass: "Warlord",

  influenceDisplay: "8 Influence",
  influenceLimit: 8,
  influenceCost: 0,
  commandPoints: 4,
  unique: true,
  maxCopies: 1,

  coalitionKey: "Technology / Conquest",
  vetoFlag: "Rangers / Zol Empire",

  extraCoalitionKeys: ["Technology", "Conquest"],
  extraTags: [
    "Warlord",
    "Unique",
    "Engineering Guild",
    "Guild Master",
    "Technology",
    "Conquest"
  ],
  extraVetoTags: ["Rangers", "Zol Empire"],

  warlordRules: {
    allowedFactions: ["TROI"],
    allowedCoalitionKeys: ["Technology", "Conquest"],
    allowedTags: ["Engineering Guild"],
    vetoTags: ["Rangers", "Zol Empire"]
  },

  maxHp: 6,
  stats: {
    MR: 3,
    AP: 4,
    AR: 4,
    DR: 4
  },
  cardImage: "",
  notes: "Factionless Engineering Guild Warlord. Vaelor Kryss provides an 8 Influence Warband limit, supports Technology and Conquest-aligned forces, and vetoes Rangers and Zol Empire units."
},
  {
  id: "zekar-thul",
  name: "Zekar Thul, Supreme Lord",
  role: "Warlord - Unique",
  faction: "Zol Empire",
  subFaction: null,
  unitType: "Warlord",
  cardClass: "Warlord",

  influenceDisplay: "7 Influence",
  influenceLimit: 7,
  influenceCost: 0,
  commandPoints: 4,
  unique: true,
  maxCopies: 1,

  coalitionKey: "Conquest",
  vetoFlag: "Dominion of Thawn / Concord / Devotion",

  extraCoalitionKeys: [],
  extraTags: ["Warlord", "Unique", "Supreme Lord"],
  extraVetoTags: ["Dominion of Thawn", "Concord", "Devotion"],

  warlordRules: {
    allowedFactions: ["Zol Empire"],
    allowedCoalitionKeys: ["Conquest"],
    allowedTags: [],
    vetoTags: ["Dominion of Thawn", "Concord", "Devotion"]
  },

  maxHp: 7,
  stats: {
    MR: 3,
    AP: 0,
    AR: 3,
    DR: 3
  },
  cardImage: "",
  notes: "Zol Empire prototype Warlord. Zekar Thul provides a 7 Influence Warband limit, carries the Conquest Coalition Key, and vetoes Dominion of Thawn, Concord, and Devotion-aligned forces."
}
];

window.IXON_STARTER_WARBANDS = {
  rangersPrototype: {
    id: "rangers-prototype",
    name: "Rangers Prototype Roster",
    faction: "Rangers",
    warlordId: "kaelen-veyne",
    unitIds: [
      "kaelen-veyne",
      "hollowfang-signal-ops",
      "hollowfang-signal-ops",
      "ashen-hallow-recon-sniper",
      "ironvale-shield-tech",
      "braedon-forge"
    ]
  }
};
