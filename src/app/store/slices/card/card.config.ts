import type { IGlobalState, IService } from './card.types';

export const SERVICES_MOCK: IService[] = [
  { id: 's1', title: 'Консультация', price: 50000, type: 'uncountable' },
  { id: 's2', title: 'Разработка', price: 250000, type: 'uncountable' },
  { id: 's3', title: 'UI/UX дизайн', price: 120000, type: 'uncountable' },
  { id: 's4', title: 'SEO аудит', price: 100000, type: 'uncountable' },
  { id: 's5', title: 'Техническая поддержка (1 месяц)', price: 50000, type: 'countable' },
];

export const initialGlobalState: IGlobalState = {
  services: SERVICES_MOCK,
  cart: [],
};
