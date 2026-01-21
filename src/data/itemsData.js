// In your itemsData.js
import blueChafing from "../assets/blue-chafing-dish-006.jpg";
import pinkChafing from "../assets/pink-chafing-dish-008.jpg";
import whiteChafing from "../assets/white-chafing-dish-009.jpg";
import silverHanging from "../assets/silver-hanging-chafing-dish-010.jpg";
import goldHanging from "../assets/gold-hanging-chafing-dish-011.jpg";
import bronzeRectangular from "../assets/bronze-rectangular-chafing-012.jpg";
import goldChafing from "../assets/gold-chafing-dish-002.jpg";
import roundWoodBody from "../assets/round-wood-body-chafing-dish-001.jpg";
import roundGold from "../assets/round-gold-chafing-002.jpg";
import sideHanging from "../assets/side-hanging-chafing-dish-003.jpg";
import goldHanging006 from "../assets/gold-hanging-chafing-dish-006.jpg";
import goldHanging009 from "../assets/gold-hanging-chafing-dish-009.jpg";
import goldRectangle from "../assets/gold-rectangle-chafing-dish-010.jpg";
import blackRectangle from "../assets/black-rectangle-chafing-dish-011.jpg";
import blackSquare from "../assets/black-square-chafing-dish-012.jpg";
import goldRectangle013 from "../assets/gold-rectangle-chafing-dish-013.jpg";
import miniGold from "../assets/mini-gold-chafing-dishes-016.jpg";
import miniRings from "../assets/mini-rings-chafing-dishes-017.jpg";
import silverMini from "../assets/silver-mini-chafing-dishes-018.jpg";
import oldFashioned from "../assets/old-fashioned-rectangular-chafing-dishes-019.jpg";
import goldCoverHanging from "../assets/gold-cover-hanging-chafing-dishes-020.jpg";
import silverRectangularRollTop from "../assets/silver-rectangular-roll-top-chafing-dishes-021.jpg";
import silverRoundRollTop from "../assets/silver-round-roll-top-chafing-dishes-022.jpg";
import roundSilver from "../assets/round-silver-chafing-dish-024.jpg";
import roundGoldRollTop from "../assets/round-gold-roll-top-chafing-dish-025.jpg";
// Original plate imports
import squareGoldRimmed from "../assets/square-gold-rimmed-plate.jpg";
import rectangularWhite from "../assets/rectangular-white-plate.jpg";
import goldRimmedFourDivided from "../assets/gold-rimmed-four-divided-plate.jpg";
import roundGoldRimmed from "../assets/round-gold-rimmed-plate.jpg";
import squareSnowflakeWhite from "../assets/square-snowflake-white-plate.jpg";

// New plate imports (you'll need to add these images to your assets folder)
import rectangularGoldRimmedPlate001 from "../assets/rectangular-gold-rimmed-plate-001.jpg";
import roundGoldRimmedPlate002 from "../assets/round-gold-rimmed-plate-002.jpg";
import rectangularWhite003 from "../assets/rectangular-white-003.jpg";
import rectangularGoldRimmed004 from "../assets/rectangular-gold-rimmed-004.jpg";
import roundGoldRimmed005 from "../assets/round-gold-rimmed-005.jpg";
import rectangularFloweredWhite006 from "../assets/rectangular-flowered-white-006.jpg";
import roundSilverRimmed008 from "../assets/round-silver-rimmed-008.jpg";
import roundBlack009 from "../assets/round-black-009.jpg";
import whiteRectangularTables010 from "../assets/white-rectangular-tables-010.jpg";
import whiteOval011 from "../assets/white-oval-011.jpg";
import rectangularLong012 from "../assets/rectangular-long-012.jpg";
import partitioned013 from "../assets/partitioned-013.jpg";
import rectangularRoundMiddle013 from "../assets/rectangular-round-middle-013.jpg";
import rectangularCurvedSmall014 from "../assets/rectangular-curved-small-014.jpg";
import rectangularCurvedBig014 from "../assets/rectangular-curved-big-014.jpg";
import roundWhite015 from "../assets/round-white-015.jpg";
import rectangular016 from "../assets/rectangular-016.jpg";
import semiRectangular016 from "../assets/semi-rectangular-016.jpg";
import plainRound017 from "../assets/plain-round-017.jpg";

// New cutlery imports (you'll need to add these images to your assets folder)
import silverCutlery001 from "../assets/silver-cutlery-001.jpg";
import silverCutlery002 from "../assets/silver-cutlery-002.jpg";
import silverCutlery003 from "../assets/silver-cutlery-003.jpg";
import goldCutlery004 from "../assets/gold-cutlery-004.jpg";
import goldCutlery005 from "../assets/gold-cutlery-005.jpg";
import goldCutlery006 from "../assets/gold-cutlery-006.jpg";
import silverTeaSpoons from "../assets/silver-tea-spoons.jpg";
import goldTeaSpoons from "../assets/gold-tea-spoons.jpg";

export const categoriesData = [
  {
    id: "featured-combo",
    label: "Popular Items",
    items: [
      {
        id: "combo-chafing",
        name: "Gbadebo",
        price: 5000,
        unit: "each",
        image: roundWoodBody,
        description: "Available in single and Divided pans, 7 litres capacity",
      },
      {
        id: "combo-plate",
        name: "Square Gold Rimmed Plate",
        price: 1500,
        unit: "each",
        image: squareGoldRimmed,
        description: "Elegant square plate with gold rim detailing",
      },
      {
        id: "combo-cutlery",
        name: "Silver Cutlery",
        price: 50,
        unit: "per piece",
        image: silverCutlery001,
        description: "Elegant silver cutlery set",
      },
    ],
  },
  {
    id: "chafing-dishes",
    label: "Chafing Dishes",
    items: [
      {
        id: "round-wood-body-chafing-dish-001",
        name: "Gbadebo",
        price: 5000,
        unit: "each",
        image: roundWoodBody,
        description: "Available in single and Divided pans, 7 litres capacity",
      },
      {
        id: "round-gold-chafing-002",
        name: "Aduke",
        price: 2500,
        unit: "each",
        image: roundGold,
        description: "Available in single and Divided pans, 7 litres capacity",
      },
      {
        id: "side-hanging-chafing-dish-003",
        name: "Aisha",
        price: 2000,
        unit: "each",
        image: sideHanging,
        description: "8 litres capacity",
      },
      {
        id: "gold-hanging-chafing-dish-009",
        name: "Ummi",
        price: 2000,
        unit: "each",
        image: goldHanging009,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "gold-rectangle-chafing-dish-010",
        name: "Amaka",
        price: 3500,
        unit: "each",
        image: goldRectangle,
        description:
          "Available in single, double and triple pans, 9 litres capacity",
      },
      {
        id: "black-rectangle-chafing-dish-011",
        name: "Duduyemi I",
        price: 3000,
        unit: "each",
        image: blackRectangle,
        description:
          "Available in single, double and triple pans, 9 litres capacity",
      },
      {
        id: "black-square-chafing-dish-012",
        name: "Duduyemi II",
        price: 2500,
        unit: "each",
        image: blackSquare,
        description: "Available in single and double pans, 6 litres capacity",
      },
      {
        id: "gold-rectangle-chafing-dish-013",
        name: "Emeka",
        price: 2000,
        unit: "each",
        image: goldRectangle013,
        description:
          "Available in single, double and triple pans, 9 litres capacity",
      },
      {
        id: "mini-gold-chafing-dishes-016",
        name: "Keremi I",
        price: 2000,
        unit: "each",
        image: miniGold,
        description: "4 litres capacity",
      },
      {
        id: "mini-rings-chafing-dishes-017",
        name: "Keremi II",
        price: 2000,
        unit: "each",
        image: miniRings,
        description: "4 litres capacity",
      },
      {
        id: "silver-mini-chafing-dishes-018",
        name: "Ayo",
        price: 1200,
        unit: "each",
        image: silverMini,
        description: "5 litres capacity",
      },
      {
        id: "old-fashioned-rectangular-chafing-dishes-019",
        name: "Akin",
        price: 600,
        unit: "each",
        image: oldFashioned,
        description: "9 litres capacity",
      },
      {
        id: "gold-cover-hanging-chafing-dishes-020",
        name: "Ada",
        price: 1500,
        unit: "each",
        image: goldCoverHanging,
        description: "9 litres capacity",
      },
      {
        id: "silver-rectangular-roll-top-chafing-dishes-021",
        name: "Olu",
        price: 2000,
        unit: "each",
        image: silverRectangularRollTop,
        description: "9 litres capacity, Available in single and double pans",
      },
      {
        id: "silver-round-roll-top-chafing-dishes-022",
        name: "Ifeoma",
        price: 1500,
        unit: "each",
        image: silverRoundRollTop,
        description: "6 litres capacity, Available in single and double pans",
      },
      {
        id: "round-silver-chafing-dish-024",
        name: "Ebuka",
        price: 2500,
        unit: "each",
        image: roundSilver,
        description: "7 litres capacity, Available in single and divided pan",
      },
      {
        id: "round-gold-roll-top-chafing-dish-025",
        name: "Danjuma",
        price: 2000,
        unit: "each",
        image: roundGoldRollTop,
        description: "6 litres capacity",
      },
      {
        id: "blue-chafing-dish-006",
        name: "Dumebi",
        price: 4000,
        unit: "each",
        image: blueChafing,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "pink-chafing-dish-008",
        name: "Ifunnaya",
        price: 4000,
        unit: "each",
        image: pinkChafing,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "white-chafing-dish-009",
        name: "Efun",
        price: 3000,
        unit: "each",
        image: whiteChafing,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "silver-hanging-chafing-dish-010",
        name: "Gimbiya I",
        price: 3500,
        unit: "each",
        image: silverHanging,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "gold-hanging-chafing-dish-011",
        name: "Gimbiya II",
        price: 4000,
        unit: "each",
        image: goldHanging,
        description: "Available in single and Divided pans, 8 litres capacity",
      },
      {
        id: "bronze-rectangular-chafing-012",
        name: "Bronze Rectangular Chafing (012)",
        price: 3000,
        unit: "each",
        image: bronzeRectangular,
        description:
          "Available in single, double and triple divider pans, 9 litres capacity",
      },
      {
        id: "gold-chafing-dish-002",
        name: "Abeni",
        price: 3000,
        unit: "each",
        image: goldChafing,
        description: "Available in single and Divided pans, 7 litres capacity",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    id: "plates",
    label: "Plates",
    items: [
      // Original plates
      {
        id: "rectangular-white-plate-002",
        name: "Rectangular White Plate (002)",
        price: 100,
        unit: "each",
        image: rectangularWhite,
        description: "Modern rectangular white plate for stylish serving",
      },
      {
        id: "gold-rimmed-four-divided-plate-003",
        name: "Gold Rimmed Four Divided Plate (003)",
        price: 120,
        unit: "each",
        image: goldRimmedFourDivided,
        description: "Four-section plate with elegant gold rim",
      },
      // New plates
      {
        id: "rectangular-gold-rimmed-plate-001",
        name: "Rectangular Gold Rimmed Plate (001)",
        price: 120,
        unit: "each",
        image: rectangularGoldRimmedPlate001,
        description: "Elegant rectangular plate with gold rim",
      },
      {
        id: "round-gold-rimmed-plate-002",
        name: "Round Gold Rimmed Plate (002)",
        price: 120,
        unit: "each",
        image: roundGoldRimmedPlate002,
        description: "Classic round plate with gold rim",
      },
      {
        id: "rectangular-white-003",
        name: "Rectangular White (003)",
        price: 100,
        unit: "each",
        image: rectangularWhite003,
        description: "Modern rectangular white plate",
      },
      {
        id: "rectangular-gold-rimmed-004",
        name: "Rectangular Gold Rimmed (004)",
        price: 120,
        unit: "each",
        image: rectangularGoldRimmed004,
        description: "Elegant rectangular plate with gold rim",
      },
      {
        id: "round-gold-rimmed-005",
        name: "Round Gold Rimmed (005)",
        price: 120,
        unit: "each",
        image: roundGoldRimmed005,
        description: "Classic round plate with gold rim",
      },
      {
        id: "rectangular-flowered-white-006",
        name: "Rectangular Flowered White Plate (006)",
        price: 100,
        unit: "each",
        image: rectangularFloweredWhite006,
        description: "Beautiful white plate with flower design",
      },
      {
        id: "round-silver-rimmed-008",
        name: "Round Silver Rimmed Plate (008)",
        price: 120,
        unit: "each",
        image: roundSilverRimmed008,
        description: "Elegant round plate with silver rim",
      },
      {
        id: "round-black-009",
        name: "Round Black Plates (009)",
        price: 100,
        unit: "each",
        image: roundBlack009,
        description: "Modern black round plates",
      },
      {
        id: "white-rectangular-tables-010",
        name: "White Rectangular Tables with Side Compartment (010)",
        price: 100,
        unit: "each",
        image: whiteRectangularTables010,
        description: "Functional white tables with storage",
      },
      {
        id: "white-oval-011",
        name: "White Oval Plates (011)",
        price: 100,
        unit: "each",
        image: whiteOval011,
        description: "Elegant white oval shaped plates",
      },
      {
        id: "rectangular-long-012",
        name: "Rectangular Long Plates (012)",
        price: 100,
        unit: "each",
        image: rectangularLong012,
        description: "Long rectangular plates for serving",
      },
      {
        id: "partitioned-013",
        name: "Partitioned Plates (013)",
        price: 100,
        unit: "each",
        image: partitioned013,
        description: "Plates with built-in compartments",
      },
      {
        id: "rectangular-round-middle-013",
        name: "Rectangular Plates with Round Middle (013)",
        price: 80,
        unit: "each",
        image: rectangularRoundMiddle013,
        description: "Unique rectangular plates with round center",
      },
      {
        id: "rectangular-curved-small-014",
        name: "Rectangular Plates with Curved Edges (Small) (014)",
        price: 80,
        unit: "each",
        image: rectangularCurvedSmall014,
        description: "Small rectangular plates with elegant curved edges",
      },
      {
        id: "rectangular-curved-big-014",
        name: "Rectangular Plates with Curved Edges (Big) (014)",
        price: 100,
        unit: "each",
        image: rectangularCurvedBig014,
        description: "Large rectangular plates with elegant curved edges",
      },
      {
        id: "round-white-015",
        name: "Round White Plate (015)",
        price: 80,
        unit: "each",
        image: roundWhite015,
        description: "Simple and elegant white round plate",
      },
      {
        id: "rectangular-016",
        name: "Rectangular Plates (016)",
        price: 80,
        unit: "each",
        image: rectangular016,
        description: "Standard rectangular plates",
      },
      {
        id: "semi-rectangular-016",
        name: "Semi Rectangular Plates (016)",
        price: 70,
        unit: "each",
        image: semiRectangular016,
        description: "Unique semi-rectangular shaped plates",
      },
      {
        id: "plain-round-017",
        name: "Plain Round Plates (017)",
        price: 80,
        unit: "each",
        image: plainRound017,
        description: "Simple plain round plates",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    id: "cutlery",
    label: "Cutlery",
    items: [
      {
        id: "silver-cutlery-001",
        name: "Silver Cutlery (001)",
        price: 50,
        unit: "per piece",
        image: silverCutlery001,
        description: "Elegant silver cutlery set",
      },
      {
        id: "silver-cutlery-002",
        name: "Silver Cutlery (002)",
        price: 40,
        unit: "per piece",
        image: silverCutlery002,
        description: "Standard silver cutlery set",
      },
      {
        id: "silver-cutlery-003",
        name: "Silver Cutlery (003)",
        price: 50,
        unit: "per piece",
        image: silverCutlery003,
        description: "Premium silver cutlery set",
      },
      {
        id: "gold-cutlery-004",
        name: "Gold Cutlery (004)",
        price: 70,
        unit: "per piece",
        image: goldCutlery004,
        description: "Elegant gold cutlery set",
      },
      {
        id: "gold-cutlery-005",
        name: "Gold Cutlery (005)",
        price: 100,
        unit: "per piece",
        image: goldCutlery005,
        description: "Premium gold cutlery set",
      },
      {
        id: "gold-cutlery-006",
        name: "Gold Cutleries (006)",
        price: 50,
        unit: "each",
        image: goldCutlery006,
        description: "Standard gold cutlery set",
      },
      {
        id: "silver-tea-spoons",
        name: "Silver Tea/Desert/Soup Spoons",
        price: 40,
        unit: "each",
        image: silverTeaSpoons,
        description: "Versatile silver spoons for tea, dessert or soup",
      },
      {
        id: "gold-tea-spoons",
        name: "Gold Tea Spoons",
        price: 40,
        unit: "each",
        image: goldTeaSpoons,
        description: "Elegant gold tea spoons",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
];

export const faqData = [
  {
    question: "Can I book for multiple dates?",
    answer:
      "Yes, you can book items for multiple dates. Please specify each date when placing your order so we can check availability for all requested dates.",
  },
  // Add more FAQs...
];

export const termsData = [
  [
    {
      number: 1,
      text: "BOOKING POLICY",
    },
    {
      number: 2,
      text: "Bookings are subject to product availability. It's advisable you book your items once you are firm on your dates and the incase of caterers. Please book your items as soon as your services are confirmed.",
    },
    {
      number: 3,
      text: "Atleast 70% payments validates your order. We do not encourage payment by cash. Our account numbers would be sent to you once you are ready to make payment.",
    },
    {
      number: 4,
      text: "Changes can be made to previous bookings subject to availability of the preferred items.",
    },
    {
      number: 5,
      text: "Please note that items are rented per event. In the event that your event would run for a couple of days, please be kind enough to notify us and appropriate charges would be applied. This is to avoid any form of embarrassment or misunderstanding.",
    },
    {
      number: 6,
      text: "DAMAGE OR LOSS POLICY",
    },
    {
      number: 7,
      text: "In the event that an item gets missing or damaged. Please note that you will be required to pay the total cost for replacement. You are liable for the replacement cost of any missing or damaged item.",
    },
    {
      number: 8,
      text: "CAUTION FEE",
    },
    {
      number: 9,
      text: "A caution fee of 30%-40% will be charged on the total cost of rentals. Caution fee for glassware is 50% of the total cost of rentals. In the event that there's no loss or damage, the caution fee will be fully refunded. However, if there is a damage or loss the cost of replacement would be deducted from the caution fee. If the damage or loss is more than the caution fee, you would be required to pay the balance.",
    },
  ],
  [
    {
      number: 10,
      text: "DELIVERY/PICKUP",
    },
    {
      number: 11,
      text: "We offer both pick up & delivery services at a fee depending on the location. This is strictly on a first come first serve basis. We stop taking deliveries as soon as the slots are filled. This is to enable us plan and ensure prompt delivery of items. Customers can walk in to the store or send a third party to have their items picked up. Please note that pick up or delivery maybe the evening before your event or on the event day.",
    },
    {
      number: 12,
      text: "REFUND POLICY",
    },
    {
      number: 13,
      text: "We have a refund policy however this would be treated on a case by case basis. Please note that a refund may attract penal charges which is 10-20% of the total amount. This is totally at our discretion.",
    },
    {
      number: 14,
      text: "GENERAL RULES",
    },
    {
      number: 15,
      text: "Please ensure all items are confirmed before pickups or during deliveries. We would not be liable for any loss or damage after then.",
    },
    {
      number: 16,
      text: "Please note that all items are to be returned next day after the event. The store opens by 2pm on Sundays for return. Failure to return rented items as at when due could result in total forfeiture of the caution fee.",
    },
    {
      number: 17,
      text: "All items are to be washed and packed in the crate upon return. We offer after event washing services at a fee.",
    },
  ],
];
