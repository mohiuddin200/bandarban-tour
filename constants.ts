
import { ItineraryDay, Place, CostItem } from './types';

export const PLACES: Place[] = [
  {
    name: "Munlai Para",
    description: "Serene indigenous village immersed in lush forest.",
    imageUrl: ""
  },
  {
    name: "Boga Lake",
    description: "Sacred mountain lake perfect for stargazing.",
    imageUrl: ""
  },
  {
    name: "Ladakh Hill",
    description: "Unique high-altitude terrain with panoramic views.",
    imageUrl: ""
  },
  {
    name: "Darjiling Para",
    description: "The cleanest village in Bangladesh on the peak trail.",
    imageUrl: ""
  },
  {
    name: "Keokradong",
    description: "Iconic peak famous for majestic sunrise clouds.",
    imageUrl: ""
  }
];

export const ITINERARY: ItineraryDay[] = [
  {
    day: "Day 0",
    title: "Dhaka Transit",
    activities: [
      "11:00 PM: Non-AC bus departure",
      "Overnight highway journey"
    ]
  },
  {
    day: "Day 1",
    title: "The Ascent",
    activities: [
      "Arrival in Bandarban",
      "Ruma registration & Army clearance",
      "Jeep ride to Boga Lake",
      "Night stay at lakeside cottage"
    ]
  },
  {
    day: "Day 2",
    title: "Peak Victory",
    activities: [
      "4:30 AM Jeep to the base",
      "Sunrise at Keokradong Peak",
      "Return to Boga Lake",
      "Evening bonfire & relaxation"
    ]
  },
  {
    day: "Day 3",
    title: "Return Trail",
    activities: [
      "Local village exploration",
      "Descent to Bandarban via Ruma",
      "Night bus to Dhaka"
    ]
  }
];

export const COSTS: CostItem[] = [
  { category: "Bus", details: "Dhaka ↔ Bandarban (Round)", price: "1,800", perPerson: true },
  { category: "Local", details: "Ruma bus & internal transit", price: "200", perPerson: true },
  { category: "Guide", details: "Official Mandatory Fee", price: "3,400", perPerson: false },
  { category: "Jeep", details: "Shared Boga-Peak ride", price: "600", perPerson: true },
  { category: "Stay", details: "Hill Cottage (2 Nights)", price: "600", perPerson: true },
  { category: "Food", details: "All Hill Meals (8-9 total)", price: "1,200", perPerson: true }
];

export const TRAVEL_NOTES = [
  "NID Original + 4 Photocopies required.",
  "Winter gear is essential (Nov-Feb).",
  "Zero mobile network at the peak.",
  "Respect local indigenous traditions."
];
