import type { Competition } from '../types';

export const competitions: Competition[] = [
  {
    id: 'tamera-depth-2024',
    year: 2024,
    type: 'depth',
    startDate: new Date('2024-10-15'),
    endDate: new Date('2024-10-17'),
    registrationDeadline: new Date('2024-09-30'),
    status: 'completed'
  },
  {
    id: 'tamera-indoor-2024',
    year: 2024,
    type: 'indoor',
    startDate: new Date('2024-12-07'),
    endDate: new Date('2024-12-08'),
    registrationDeadline: new Date('2024-11-20'),
    status: 'completed'
  },
  {
    id: 'tamera-depth-2025',
    year: 2025,
    type: 'depth',
    startDate: new Date('2025-10-15'),
    endDate: new Date('2025-10-17'),
    registrationDeadline: new Date('2025-09-30'),
    status: 'upcoming'
  },
  {
    id: 'tamera-indoor-2025',
    year: 2025,
    type: 'indoor',
    startDate: new Date('2025-12-06'),
    endDate: new Date('2025-12-07'),
    registrationDeadline: new Date('2025-11-20'),
    status: 'upcoming'
  }
];

export const getCurrentCompetition = () => {
  const now = new Date();
  return competitions.find(comp => 
    comp.status === 'upcoming' && comp.registrationDeadline > now
  ) || competitions.find(comp => comp.status === 'upcoming');
};

export const getCompetitionsByYear = (year: number) => 
  competitions.filter(comp => comp.year === year);

export const getUpcomingCompetitions = () => 
  competitions.filter(comp => comp.status === 'upcoming');

// 참가비 정보
export const REGISTRATION_FEES = {
  single: 250000, // 1종목 25만원
  double: 290000  // 2종목 29만원
};

export const calculateRegistrationFee = (disciplineCount: number): number => {
  if (disciplineCount <= 1) return REGISTRATION_FEES.single;
  return REGISTRATION_FEES.double;
}; 