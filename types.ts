
export interface ItineraryDay {
  day: string;
  title: string;
  activities: string[];
}

export interface Place {
  name: string;
  description: string;
  imageUrl: string;
}

export interface CostItem {
  category: string;
  details: string;
  price: string;
  perPerson?: boolean;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
