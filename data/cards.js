window.IXON_CARDS = [
  {
    id: "kaelen-veyne",
    name: "Kaelen Veyne",
    role: "Warlord - Unique",
    faction: "Rangers",
    unitType: "Warlord",
    influenceDisplay: "10 Influence",
    influenceLimit: 10,
    influenceCost: 0,
    commandPoints: 4,
    unique: true,
    maxCopies: 1,
    coalitionKey: "Survival 🛡",
    vetoFlag: "Concord",
    maxHp: 8,
    stats: {
      MR: 3,
      AP: 5,
      AR: 3,
      DR: 3
    },
    cardImage: "",
    notes: "Required Warlord for the current Rangers prototype roster. Kaelen provides a 10 Influence Warband limit and does not spend Influence himself."
  },
  {
    id: "hollowfang-signal-ops",
    name: "Hollowfang Signal Ops",
    role: "Basic Infantry",
    faction: "Rangers",
    unitType: "Infantry",
    influenceDisplay: "1 Influence",
    influenceLimit: null,
    influenceCost: 1,
    commandPoints: null,
    unique: false,
    maxCopies: null,
    coalitionKey: "Survival 🛡",
    vetoFlag: "None",
    maxHp: 5,
    stats: {
      MR: 3,
      AP: 3,
      AR: 3,
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
    unitType: "Ranged",
    influenceDisplay: "2 Influence",
    influenceLimit: null,
    influenceCost: 2,
    commandPoints: null,
    unique: false,
    maxCopies: null,
    coalitionKey: "Survival 🛡",
    vetoFlag: "None",
    maxHp: 4,
    stats: {
      MR: 3,
      AP: 4,
      AR: 8,
      DR: 2
    },
    cardImage: "",
    notes: "Prototype Rangers ranged unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  },
  {
    id: "ironvale-shield-tech",
    name: "Ironvale Shield Tech",
    role: "Basic Heavy",
    faction: "Rangers",
    unitType: "Heavy",
    influenceDisplay: "3 Influence",
    influenceLimit: null,
    influenceCost: 3,
    commandPoints: null,
    unique: false,
    maxCopies: null,
    coalitionKey: "Survival 🛡",
    vetoFlag: "None",
    maxHp: 7,
    stats: {
      MR: 2,
      AP: 3,
      AR: 2,
      DR: 5
    },
    cardImage: "",
    notes: "Prototype Rangers heavy unit. This card can be added multiple times as long as the Warband remains within its Influence limit."
  },
  {
    id: "braedon-forge",
    name: "Braedon Forge, Hammer of the Forge",
    role: "Unique Spec.",
    faction: "Rangers",
    unitType: "Spec",
    influenceDisplay: "3 Influence",
    influenceLimit: null,
    influenceCost: 3,
    commandPoints: null,
    unique: true,
    maxCopies: 1,
    coalitionKey: "Survival 🛡",
    vetoFlag: "None",
    maxHp: 7,
    stats: {
      MR: 3,
      AP: 6,
      AR: 2,
      DR: 4
    },
    cardImage: "",
    notes: "Unique Rangers Spec unit for the current prototype roster."
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
