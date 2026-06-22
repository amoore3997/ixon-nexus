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
    id: "hollowfang-signal-ops-1",
    name: "Hollowfang Signal Ops I",
    role: "Basic Infantry",
    faction: "Rangers",
    unitType: "Infantry",
    influenceDisplay: "1 Influence",
    influenceLimit: null,
    influenceCost: 1,
    commandPoints: null,
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
    notes: "Prototype Rangers infantry unit."
  },
  {
    id: "hollowfang-signal-ops-2",
    name: "Hollowfang Signal Ops II",
    role: "Basic Infantry",
    faction: "Rangers",
    unitType: "Infantry",
    influenceDisplay: "1 Influence",
    influenceLimit: null,
    influenceCost: 1,
    commandPoints: null,
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
    notes: "Second copy of the Hollowfang Signal Ops prototype infantry unit."
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
    notes: "Prototype Rangers ranged unit."
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
    notes: "Prototype Rangers heavy unit."
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
      "hollowfang-signal-ops-1",
      "hollowfang-signal-ops-2",
      "ashen-hallow-recon-sniper",
      "ironvale-shield-tech",
      "braedon-forge"
    ]
  }
};

warbands_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Ixon Warbands</title>

  <link rel="icon" href="../favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
  <link rel="manifest" href="../site.webmanifest" />
  <link rel="stylesheet" href="../styles.css" />
</head>

<body>
  <div class="page">
    <header>
      <div>
        <div class="brand-eyebrow">Ixon Nexus Command Tools</div>
        <div class="brand-title">WARBANDS</div>
      </div>

      <nav aria-label="Main navigation">
        <a href="../">Home</a>
        <a href="../codex/">Codex</a>
        <a href="../rules/">Rules</a>
        <a href="../downloads/">Downloads</a>
        <a href="../play/">Play</a>
      </nav>
    </header>

    <main>
      <section class="page-title-section">
        <a class="breadcrumb" href="../">← Return to Nexus</a>

        <div class="pill">Build. Save. Deploy to Play Mode.</div>

        <h1>
          Construct a Warband for
          <span class="gradient-text">Ixon</span>.
        </h1>

        <p class="lead">
          Build your roster around a single Warlord. Your Warlord sets the total
          Influence budget, while your other units spend from that budget.
        </p>

        <div class="actions">
          <a class="button primary" href="#builder">Open Builder</a>
          <a class="button secondary" href="../play/tracker.html">Open Match Tracker</a>
        </div>
      </section>

      <section class="section">
        <div class="section-eyebrow">Warband Rules</div>
        <h2>Core construction limits</h2>

        <div class="card-grid">
          <div class="codex-card">
            <h3>Warlord Required</h3>
            <p>
              Each Warband must include exactly one Warlord. The Warlord defines
              Command Points, faction identity, Coalition Keys, Veto Flags, and
              the maximum Influence available to spend on other units.
            </p>
            <span>Required</span>
          </div>

          <div class="codex-card">
            <h3>Influence Budget</h3>
            <p>
              The Warlord does not spend Influence. Instead, the Warlord provides
              the Influence limit that your other selected units spend from.
            </p>
            <span>Warlord-set</span>
          </div>

          <div class="codex-card">
            <h3>Coalition Keys</h3>
            <p>
              Coalition Keys describe compatibility, identity, and shared battlefield
              logic. The current prototype roster uses Survival.
            </p>
            <span>Survival 🛡</span>
          </div>

          <div class="codex-card">
            <h3>Veto Flags</h3>
            <p>
              Veto Flags prevent incompatible cards, factions, characters, or
              Coalition Keys from entering the same Warband.
            </p>
            <span>Compatibility</span>
          </div>
        </div>
      </section>

      <section class="section" id="builder">
        <div class="section-eyebrow">Builder Prototype</div>
        <h2>Rangers prototype builder</h2>

        <p class="lead">
          Select units from the shared card database. This builder saves locally
          to your browser under <strong>ixonSavedWarband</strong>.
        </p>

        <div class="status-card">
          <div class="status-inner">
            <div class="section-eyebrow">Current Build</div>

            <div class="status-row">
              <span>Selected Warlord</span>
              <strong id="selectedWarlordValue">None</strong>
            </div>

            <div class="status-row">
              <span>Warlord Influence</span>
              <strong id="warlordInfluenceValue">0</strong>
            </div>

            <div class="status-row">
              <span>Influence Spent</span>
              <strong id="builderInfluenceValue">0 / 0</strong>
            </div>

            <div class="status-row">
              <span>Unit Count</span>
              <strong id="builderUnitCountValue">0</strong>
            </div>

            <div class="status-row">
              <span>Status</span>
              <strong id="builderStatusValue">Select a Warlord to begin.</strong>
            </div>

            <div class="actions" style="margin-top: 18px;">
              <button class="button primary" type="button" onclick="saveWarband()">Save Warband</button>
              <button class="button secondary" type="button" onclick="loadPrototype()">Load Prototype</button>
              <button class="button secondary" type="button" onclick="clearBuilder()">Clear Builder</button>
              <a class="button secondary" href="../play/tracker.html">Open in Play Mode</a>
            </div>
          </div>
        </div>

        <div class="card-grid" id="builderCardGrid" style="margin-top: 18px;">
          <!-- JavaScript creates selectable cards here -->
        </div>
      </section>

      <section class="section">
        <div class="notice">
          <strong>Prototype note:</strong>
          This builder now treats Warlord Influence correctly. The Warlord sets
          the Warband budget. Non-Warlord units spend from that budget.
        </div>
      </section>
    </main>

    <footer>
      <p>
        Ixon Warbands is part of Ixon Nexus, a public hub for the Ixon sci-fantasy
        tabletop universe.
      </p>
    </footer>
  </div>

  <script src="../data/cards.js"></script>

  <script>
    const warbandStorageKey = "ixonSavedWarband";

    let selectedUnitIds = [];

    function getCardById(cardId) {
      return window.IXON_CARDS.find((card) => card.id === cardId);
    }

    function getSelectedCards() {
      return selectedUnitIds
        .map((unitId) => getCardById(unitId))
        .filter(Boolean);
    }

    function getSelectedWarlords() {
      return getSelectedCards().filter((card) => card.unitType === "Warlord");
    }

    function getInfluenceLimit() {
      const selectedWarlords = getSelectedWarlords();

      if (selectedWarlords.length !== 1) {
        return 0;
      }

      return selectedWarlords[0].influenceLimit || 0;
    }

    function getInfluenceSpent() {
      return getSelectedCards()
        .filter((card) => card.unitType !== "Warlord")
        .reduce((total, card) => total + card.influenceCost, 0);
    }

    function renderBuilder() {
      const builderGrid = document.getElementById("builderCardGrid");
      builderGrid.innerHTML = "";

      window.IXON_CARDS.forEach((card) => {
        const selected = selectedUnitIds.includes(card.id);
        const cardElement = document.createElement("article");
        cardElement.className = selected ? "codex-card selected-builder-card" : "codex-card";

        const influenceText = card.unitType === "Warlord"
          ? `Provides ${card.influenceLimit || 0} Influence`
          : `Costs ${card.influenceCost} Influence`;

        cardElement.innerHTML = `
          <h3>${card.name}</h3>
          <p>
            <strong>${card.role}</strong><br />
            Faction: ${card.faction}<br />
            Influence: ${influenceText}<br />
            HP: ${card.maxHp}<br />
            MR ${card.stats.MR} | AP ${card.stats.AP} | AR ${card.stats.AR} | DR ${card.stats.DR}
          </p>
          <span>${card.unitType}</span>

          <div class="actions" style="margin-top: 14px;">
            <button class="button ${selected ? "secondary" : "primary"}" type="button" onclick="toggleUnit('${card.id}')">
              ${selected ? "Remove" : "Add"}
            </button>
          </div>
        `;

        builderGrid.appendChild(cardElement);
      });

      updateBuilderSummary();
    }

    function updateBuilderSummary() {
      const selectedCards = getSelectedCards();
      const selectedWarlords = getSelectedWarlords();
      const influenceLimit = getInfluenceLimit();
      const influenceSpent = getInfluenceSpent();

      document.getElementById("builderInfluenceValue").textContent = `${influenceSpent} / ${influenceLimit}`;
      document.getElementById("builderUnitCountValue").textContent = selectedCards.length;
      document.getElementById("warlordInfluenceValue").textContent = influenceLimit;
      document.getElementById("selectedWarlordValue").textContent =
        selectedWarlords.length === 0 ? "None" : selectedWarlords.map((card) => card.name).join(", ");

      let status = "Valid prototype Warband.";

      if (selectedWarlords.length === 0) {
        status = "Missing Warlord.";
      }

      if (selectedWarlords.length > 1) {
        status = "Too many Warlords selected.";
      }

      if (selectedWarlords.length === 1 && influenceSpent > influenceLimit) {
        status = "Influence limit exceeded.";
      }

      document.getElementById("builderStatusValue").textContent = status;
    }

    function toggleUnit(cardId) {
      const selected = selectedUnitIds.includes(cardId);

      if (selected) {
        selectedUnitIds = selectedUnitIds.filter((unitId) => unitId !== cardId);
      } else {
        selectedUnitIds.push(cardId);
      }

      renderBuilder();
    }

    function loadPrototype() {
      selectedUnitIds = [...window.IXON_STARTER_WARBANDS.rangersPrototype.unitIds];
      renderBuilder();
    }

    function clearBuilder() {
      selectedUnitIds = [];
      localStorage.removeItem(warbandStorageKey);
      renderBuilder();
    }

    function saveWarband() {
      const selectedWarlords = getSelectedWarlords();
      const influenceLimit = getInfluenceLimit();
      const influenceSpent = getInfluenceSpent();

      if (selectedWarlords.length !== 1) {
        alert("Your Warband must include exactly one Warlord.");
        return;
      }

      if (influenceSpent > influenceLimit) {
        alert("Your Warband exceeds the Influence limit.");
        return;
      }

      const savedWarband = {
        id: "custom-warband",
        name: "Custom Saved Warband",
        faction: selectedWarlords[0].faction,
        influenceLimit: influenceLimit,
        influenceSpent: influenceSpent,
        warlordId: selectedWarlords[0].id,
        unitIds: selectedUnitIds
      };

      localStorage.setItem(warbandStorageKey, JSON.stringify(savedWarband));
      alert("Warband saved. Open Play Mode to use it.");
    }

    function loadSavedWarband() {
      const savedWarband = localStorage.getItem(warbandStorageKey);

      if (savedWarband) {
        const parsedWarband = JSON.parse(savedWarband);
        selectedUnitIds = parsedWarband.unitIds || [];
      } else {
        loadPrototype();
        return;
      }

      renderBuilder();
    }

    loadSavedWarband();
  </script>
</body>
</html>
"""

Path("/mnt/data/cards_warlord_influence_v2.js").write_text(cards_js, encoding="utf-8")
Path("/mnt/data/warbands_builder_v2.html").write_text(warbands_html, encoding="utf-8")

print("Created /mnt/data/cards_warlord_influence_v2.js")
print("Created /mnt/data/warbands_builder_v2.html")
