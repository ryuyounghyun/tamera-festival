export interface Competition {
  id: string;
  year: number;
  type: 'depth' | 'indoor';
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Discipline {
  id: string;
  name: string;
  type: 'depth' | 'indoor';
  description: string;
  code: 'CWT' | 'CWTB' | 'FIM' | 'CNF' | 'STA' | 'DYN' | 'DYNB' | 'DNF';
}

export interface RegistrationForm {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    aidaCertification: string;
    emergencyContact: {
      name: string;
      phone: string;
      relationship: string;
    };
  };
  competition: {
    competitionId: string;
    disciplines: string[];
    category: 'participant' | 'staff';
  };
  documents: {
    medicalForm?: File;
    waiverForm?: File;
  };
  payment: {
    amount: number;
    method: 'bank_transfer' | 'card';
    status: 'pending' | 'completed';
  };
}

export interface StaffApplication {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    experience: string;
  };
  role: 'judge' | 'safety' | 'photographer' | 'medic' | 'general_staff';
  qualifications: string[];
  availability: {
    meetings: boolean;
    eventDays: boolean;
    simulation: boolean;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  type: 'announcement' | 'deadline' | 'update';
  important: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  year: number;
  competitionType: 'depth' | 'indoor';
  photographer?: string;
  description?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description?: string;
}

export interface Prize {
  id: string;
  discipline: string;
  rank: number;
  description: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'registration' | 'sponsorship' | 'media';
} 