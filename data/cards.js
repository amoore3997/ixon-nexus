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
    }

    maxHp: 8,
    stats: {
      MR: 4,
      AP: 5,
      AR: 4,
      DR: 4
    }
    cardImage: "../assets/cards/Kaelen Veyne.png",
    notes: "Required Warlord for the current Rangers prototype roster. Kaelen provides a 10 Influence Warband limit and does not spend Influence himself."
  }

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
    }
    cardImage: "../assets/cards/Hollowfang Signals Operator.png",
    notes: "Prototype Rangers infantry unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  }

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
    }
    cardImage: "../assets/cards/Ashen-Hallow Recon Sniper.png",
    notes: "Prototype Rangers ranged unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  }

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
    }
    cardImage: "../assets/cards/Ironvale Shield Tech.png",
    notes: "Prototype Rangers heavy unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  }

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
    }
    cardImage: "../assets/cards/Braedon Forge.png",
    notes: "Unique Rangers Spec unit for the current prototype roster."
  }

{
  id: "x-a1-avatar-of-the-concord",
  name: "X-A1 - Avatar of the Concord",
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
  extraTags: ["Warlord", "Unique", "Avatar", "Concord", "Technology"],
  extraVetoTags: ["Survival", "Devotion"],

  warlordRules: {
    allowedFactions: ["Concord", "Factionless"],
    allowedCoalitionKeys: ["Technology"],
    allowedTags: [],
    vetoTags: ["Survival", "Devotion"]
  }

  maxHp: 6,
  stats: {
    MR: 6,
    AP: 7,
    AR: 3,
    DR: 2
  }
  cardImage: "../assets/cards/X-A1 - Avatar of Concord.png",
  notes: "Override: While X-A1 is on the battlefield, units in your warband have no activation limit. Concord units within MR of X-A1 gain +1 AP."
}

{
  id: "vs-1-infantry-shell",
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
  extraTags: ["Basic", "Infantry", "Concord", "Technology", "Shell"],
  extraVetoTags: [],

  maxHp: 3,
  stats: {
    MR: 3,
    AP: 2,
    AR: 3,
    DR: 1
  }
  cardImage: "../assets/cards/VS-1 Infantry Shell.png",
  notes: "While this unit is within MR of an allied Concord unit, it gains +1 AP."
}

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
  }

  maxHp: 6,
  stats: {
    MR: 3,
    AP: 4,
    AR: 4,
    DR: 4
  }
  cardImage: "",
  notes: "Factionless Engineering Guild Warlord. Vaelor Kryss provides an 8 Influence Warband limit, supports Technology and Conquest-aligned forces, and vetoes Rangers and Zol Empire units."
}
  {
  id: "zekar-thul",
  name: "Zekar Thul, Supreme Lord",
  role: "Warlord - Unique",
  faction: "Zol Empire",
  subFaction: null,
  unitType: "Warlord",
  cardClass: "Warlord",

  influenceDisplay: "8 Influence",
  influenceLimit: 8,
  influenceCost: 0,
  commandPoints: 4,
  unique: true,
  maxCopies: 1,

  coalitionKey: "Conquest",
  vetoFlag: "Dominion of Thawn / Concord / Arcanum",

  extraCoalitionKeys: [],
  extraTags: ["Warlord", "Unique", "Supreme Lord"],
  extraVetoTags: ["Dominion of Thawn", "Concord", "Arcanum"],

  warlordRules: {
    allowedFactions: ["Zol Empire"],
    allowedCoalitionKeys: ["Conquest", "Devotion"],
    allowedTags: [],
    vetoTags: ["Dominion of Thawn", "Concord", "Arcanum"]
  }

  maxHp: 6,
  stats: {
    MR: 3,
    AP: 0,
    AR: 2,
    DR: 6
  }
  cardImage: "",
  notes: "Zol Empire prototype Warlord. Zekar Thul provides a 8 Influence Warband limit, carries the Conquest Coalition Key, and vetoes Dominion of Thawn, Concord, and Arcanum."
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

window.IXON_DECK_RULES = {
  tacticalDeckSize: 40,
  defaultMaxCopies: 4,
  tacticalTypes: [
    "Enhancement",
    "Counter",
    "Mobility"
  ]
};

window.IXON_TACTICAL_CARDS = [
  {
  id: "clan-oath",
  name: "Clan Oath",
  tacticalType: "Enhancement",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Enhancement", "Attach", "Buff"],
  cardImage: "../assets/cards/Clan Oath.png",
  rulesText: "Attach this card to a unit. If the attached unit is removed from the game, discard this card. Attached unit gains +1 AP and +1 DR. All units in your warband that share a faction with the attached card gain +1 HP."
},

{
  id: "dusty-ambush",
  name: "Dusty Ambush",
  tacticalType: "Mobility",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Mobility", "AP Buff", "Movement"],
  cardImage: "../assets/cards/Dusty Ambush.png",
  rulesText: "Choose a unit in your warband. If the target unit moved this turn, add +X AP to it until end of turn, where X is equal to the number of inches it moved this turn. It may not attack if activated next turn."
},

{
  id: "explosive-charge",
  name: "Explosive Charge",
  tacticalType: "Counter",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Counter", "Direct Damage", "Deflect"],
  cardImage: "../assets/cards/Explosive Charge.png",
  rulesText: "Choose one: Deal 3 direct damage to all units within attack range of target unit in your warband. Or, deflect all damage being dealt to a unit in your warband, then deal 2 damage to that same unit."
},

{
  id: "field-repair",
  name: "Field Repair",
  tacticalType: "Counter",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Counter", "Defense Buff", "Repair"],
  cardImage: "../assets/cards/Field Repair.png",
  rulesText: "Target unit gains +3 DR until end of turn."
},

{
  id: "first-shot",
  name: "First Shot",
  tacticalType: "Counter",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Counter", "Direct Damage", "Attack"],
  cardImage: "../assets/cards/First Shot.png",
  rulesText: "Target unit's damage is direct. Direct damage is unaffected by mitigation dice until end of turn. That unit may not attack again until its next activation."
},

{
  id: "hammer-of-the-forge",
  name: "Hammer of the Forge",
  tacticalType: "Enhancement",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Enhancement", "Attach", "Braedon Forge", "Buff"],
  cardImage: "../assets/cards/Hammer of the Forge.png",
  rulesText: "Attach this card to a target unit in your warband. Target attached unit gains +2 AP and +2 DR. If the target unit is Braedon Forge, add this active ability: On your next attack, replace your D6 with a D20."
},

{
  id: "hit-and-fade",
  name: "Hit & Fade",
  tacticalType: "Mobility",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Mobility", "Move", "Attack"],
  cardImage: "../assets/cards/Hit & Fade.png",
  rulesText: "Target unit in your warband may move immediately after its next attack. Movement from this card does not affect actions."
},

{
  id: "hollowfang-fury",
  name: "Hollowfang Fury",
  tacticalType: "Enhancement",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Enhancement", "Attach", "Kaelen Veyne", "Buff"],
  cardImage: "../assets/cards/Hollowfang Fury.png",
  rulesText: "Attach this card to target Ranger unit. Target unit gains +1 to all stats. If the target unit is Kaelen Veyne, gain +2 to all stats instead and also gain +4 HP."
},

{
  id: "ixon-credit-transfer",
  name: "Ixon Credit Transfer",
  tacticalType: "Enhancement",
  faction: "Factionless",
  maxCopies: 4,
  tags: ["Factionless", "Enhancement", "Command Points", "Discard"],
  cardImage: "../assets/cards/Ixon Credit Transaction.png",
  rulesText: "Discard any number of cards from your hand. Add +X Command Points to your Warlord until end of turn, where X is equal to the number of cards you discarded."
},

{
  id: "last-stand",
  name: "Last Stand",
  tacticalType: "Enhancement",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Enhancement", "Last Unit", "Buff"],
  cardImage: "../assets/cards/Last Stand.png",
  rulesText: "Play this card only if you have one unit left on the battlefield, and only if that unit is also a Ranger. Double all stats of target unit."
},

{
  id: "medi-pack",
  name: "Medi-Pack",
  tacticalType: "Counter",
  faction: "Factionless",
  maxCopies: 4,
  tags: ["Factionless", "Counter", "Healing"],
  cardImage: "../assets/cards/Medi-Pack.png",
  rulesText: "Add +2 HP to target damaged unit."
},

{
  id: "mis-fire",
  name: "Mis-Fire",
  tacticalType: "Counter",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Counter", "Reroll", "Attack Dice"],
  cardImage: "../assets/cards/Mis-Fire.png",
  rulesText: "Re-roll any number of your opponent's attack dice."
},

{
  id: "overcharged-magazine",
  name: "Overcharged Magazine",
  tacticalType: "Enhancement",
  faction: "Rangers",
  maxCopies: 4,
  tags: ["Rangers", "Enhancement", "AP Buff", "Attack"],
  cardImage: "../assets/cards/Overcharged Magazine.png",
  rulesText: "Target unit gains +3 AP until end of turn, but can only attack once this turn."
}
];

window.IXON_STARTER_TACTICAL_DECKS = {
  rangersPrototype: {
    id: "rangers-prototype-tactical-deck",
    name: "Rangers Prototype Tactical Deck",
    cardIds: [
      "field-reposition",
      "return-fire",
      "combat-overclock"
    ]
  }
};
