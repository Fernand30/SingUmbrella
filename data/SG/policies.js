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
        id: 101,
        title: "Basic Plan",
        premium: 5.35,
        questions:[
        {name:'Accidential Damage',value:'USD 1,000'},
        {name:'Theft',value:'USD 1,000'},
        {name:'Liquid Damage',value:'USD 1,000'},
        {name:'Fire',value:'USD 1,000'},
        {name:'Short Circuit by Lightning',value:'USD 1,000'},
        {name:'Repair excess for each unit',value:'USD 80'},
        ],
        coverage: {
          accidentalDeath: 10000,
          permanentDisablement: 10000
        }
      },
      {
        id: 103,
        title: "Superior Plan",
        premium: 17.87,
        questions:[
        {name:'Accidential Damage',value:'USD 2,000'},
        {name:'Theft',value:'USD 2,000'},
        {name:'Liquid Damage',value:'USD 2,000'},
        {name:'Fire',value:'USD 2,000'},
        {name:'Short Circuit by Lightning',value:'USD 2,000'},
        {name:'Repair excess for each unit',value:'USD 160'},
        ],
        coverage: {
          accidentalDeath: 40000,
          permanentDisablement: 40000
        }
      },
      {
        id: 103,
        title: "Premium Plan",
        premium: 17.87,
        questions:[
        {name:'Accidential Damage',value:'USD 3,000'},
        {name:'Theft',value:'USD 3,000'},
        {name:'Liquid Damage',value:'USD 3,000'},
        {name:'Fire',value:'USD 3,000'},
        {name:'Short Circuit by Lightning',value:'USD 3,000'},
        {name:'Repair excess for each unit',value:'USD 240'},
        ],
        coverage: {
          accidentalDeath: 100000,
          permanentDisablement: 100000
        }
      }
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
        questions:[
        {name:'Wallet Operator Insolvency',value:'USD 10,000'},
        {name:'Exchange Insolvency',value:'USD 10,000'},
        {name:'Theft on Wallet',value:'USD 10,000'},
        {name:'Cryptocurrency Exchange Hack',value:'USD 10,000'},
        ],
        coverage: {
          accidentalDeath: 10000,
          permanentDisablement: 10000
        }
      },
      {
        id: 102,
        title: "Superior Plan",
        premium: 9.84,
        questions:[
        {name:'Wallet Operator Insolvency',value:'USD 20,000'},
        {name:'Exchange Insolvency',value:'USD 20,000'},
        {name:'Theft on Wallet',value:'USD 20,000'},
        {name:'Cryptocurrency Exchange Hack',value:'USD 20,000'},
        ],
        coverage: {
          accidentalDeath: 20000,
          permanentDisablement: 20000
        }
      },
      {
        id: 10103,
        title: "Premium Plan",
        premium: 17.87,
        questions:[
        {name:'Wallet Operator Insolvency',value:'USD 30,000'},
        {name:'Exchange Insolvency',value:'USD 30,000'},
        {name:'Theft on Wallet',value:'USD 30,000'},
        {name:'Cryptocurrency Exchange Hack',value:'USD 30,000'},
        ],
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
