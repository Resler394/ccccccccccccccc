export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingPlan {
  id: string;
  category: string;
  title: string;
  sessions?: string;
  price?: string;
  subtitle?: string;
  badge?: string;
  supportMessage?: string;
  popular?: boolean;
  highlight?: boolean;
  accentColor?: string;
  iconType?: 'dumbbell' | 'figure' | 'star' | 'crown';
  options: PricingItem[];
  buttonText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarLetter: string;
  rating: number;
  text: string;
  discipline?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface InternalRule {
  id: number;
  arabicNumber: string;
  icon: string;
  titleFr: string;
  descFr: string;
  titleAr: string;
  descAr: string;
  noteFr?: string;
  noteAr?: string;
  highlight?: boolean;
}

export interface ServiceDetail {
  category: string;
  title: string;
  activities: string[];
  coaching: string[];
  groupPrograms: string[];
  hours: {
    daily: string;
    friday?: string;
    group?: string;
  };
}

export interface FAQItem {
  id: string;
  category: 'membership' | 'trial' | 'rules' | 'facilities';
  icon: string;
  questionFr: string;
  questionAr: string;
  questionEn: string;
  answerFr: string;
  answerAr: string;
  answerEn: string;
  badgeFr?: string;
  badgeAr?: string;
  badgeEn?: string;
  highlight?: boolean;
}
