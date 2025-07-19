import type { Discipline } from '../types';

export const disciplines: Discipline[] = [
  // 수심 종목
  {
    id: 'cwt',
    name: 'Constant Weight',
    type: 'depth',
    code: 'CWT',
    description: '수직 하강 및 상승으로 최대 깊이를 측정하는 종목 (핀 사용)'
  },
  {
    id: 'cwtb',
    name: 'Constant Weight Bifins',
    type: 'depth',
    code: 'CWTB',
    description: '수직 하강 및 상승으로 최대 깊이를 측정하는 종목 (바이핀 사용)'
  },
  {
    id: 'fim',
    name: 'Free Immersion',
    type: 'depth',
    code: 'FIM',
    description: '로프를 당기며 수직 하강 및 상승하는 종목'
  },
  {
    id: 'cnf',
    name: 'Constant Weight No Fins',
    type: 'depth',
    code: 'CNF',
    description: '핀 없이 수직 하강 및 상승으로 최대 깊이를 측정하는 종목'
  },
  // 인도어 종목
  {
    id: 'sta',
    name: 'Static Apnea',
    type: 'indoor',
    code: 'STA',
    description: '물 위에 떠서 최대한 오래 숨을 참는 종목'
  },
  {
    id: 'dyn',
    name: 'Dynamic Apnea',
    type: 'indoor',
    code: 'DYN',
    description: '수영장에서 핀을 착용하고 최대 거리를 수영하는 종목'
  },
  {
    id: 'dynb',
    name: 'Dynamic Apnea Bifins',
    type: 'indoor',
    code: 'DYNB',
    description: '수영장에서 바이핀을 착용하고 최대 거리를 수영하는 종목'
  },
  {
    id: 'dnf',
    name: 'Dynamic Apnea No Fins',
    type: 'indoor',
    code: 'DNF',
    description: '수영장에서 핀 없이 최대 거리를 수영하는 종목'
  }
];

export const getDepthDisciplines = () => disciplines.filter(d => d.type === 'depth');
export const getIndoorDisciplines = () => disciplines.filter(d => d.type === 'indoor');
export const getDisciplineByCode = (code: string) => disciplines.find(d => d.code === code); 