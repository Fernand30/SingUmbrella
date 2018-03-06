import OCCUPATIONS from "./occupations";

const notCovered = [
  // "cashlessMedicalBenefit",
  // "naturalDisaster",
  "war",
  "mentalDisorder",
  "unlawfulAction",
  "influenceOfDrugOrAlcohol",
  "suicide",
  "dangerousSports",
  "preExistingConditions"
];

const paParseData = {
  renewable: true,
  subclassName: "PurchaseAccident",
  endorsementFields: [
    {
      label: "Occupation",
      id: "occupationId",
      responseType: ["choice", "number"],
      choices: OCCUPATIONS
    }
  ]
};

export default (policies = [
  {
    id: "miner",
    title: "Miner Trust360",
    imageSource: "MinerTrust360",
    description:
      "At a super-low price, this is a super-big comprehensive plan that covers most of your financial loss and unforeseen expenses when you travel overseas. It covers you and your family's medical expenses, loss of baggage, loss of cash, and loss of home contents. You and your family enjoy unlimited emergency medical evacuation, cash compensation for flight delay, diversion or cancellation. In the event accidental death or permanent disability, your loved ones will receive a lump sum cash within days. These are just some highlights, and we are constantly adding more benefits and coverage to make you travel happily and peacefully!",
    // plans: [{ 0: 50000, premium: 35 }], // hardcoded for display purposes only
    plans: [
      {
        id: 1,
        legacyId: "basic",
        title: "Basic Plan",
        premium: 3000
      },
      {
        id: 2,
        legacyId: "premium",
        title: "Premium Plan"
      },
      {
        id: 84,
        legacyId: "superior",
        title: "Superior Plan"
      }
      // {
      //   id: 85,
      //   legacyId: "premium",
      //   title: "Premium Plan"
      // }
    ],
    isTravelInsurance: true,
    from: "6 months",
    usd: "3000",
    usd1: "40",
    coverageHighlights: [
      "AccidentialDamage",
      "ShortCircuitbyLightning",
      "LiquidDamage",
      "Fire",
      "Theft",
    ],
    covered: [
      "AccidentialDamage",
      "Theft",
      "LiquidDamage",
      "Fire",
      "ShortCircuitbyLightning"
    ],
    notCovered: [
      "Negligence",
      "wilfulAct",
      "dishonest",
      "war",
      "seizure",
      "Wear",
    ],
    subclassName: "PurchaseTravel",
    endorsementFields: [
      {
        label: "End Date",
        id: "endDate",
        responseType: "date",
        futureOnly: true
      }
    ],
    renewable: false
  },
  {
    id: "crypto",
    title: "Crypto Trust360",
    imageSource: "cryptoTrust360",
    from: "6 months",
    usd: "3000",
    usd1: "40",
    plans: [
      {
        id: 101,
        title: "Basic Plan",
        premium: 5.35,
        coverage: {
          accidentalDeath: 10000,
          permanentDisablement: 10000
        }
      },
      {
        id: 102,
        title: "Enhanced Plan",
        premium: 9.84,
        coverage: {
          accidentalDeath: 20000,
          permanentDisablement: 20000
        }
      },
      {
        id: 103,
        title: "Superior Plan",
        premium: 17.87,
        coverage: {
          accidentalDeath: 40000,
          permanentDisablement: 40000
        }
      },
      {
        id: 104,
        title: "Premium Plan",
        premium: 17.87,
        coverage: {
          accidentalDeath: 100000,
          permanentDisablement: 100000
        }
      }
    ],
    coverageHighlights: [
      "wallet",
      "exchange",
      "employee",
      "cryptocurrency"
    ],
    covered: [
      "wallet",
      "exchange",
      "employee",
      "cryptocurrency"
    ],
    notCovered: [
      "Negligence",
      "wilfulAct",
      "dishonest",
      "war",
      "seizure",
      "Wear",
    ],
    ...paParseData
  }
]);
