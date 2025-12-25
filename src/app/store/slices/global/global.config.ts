import type { IGlobalState, IService } from './global.types';

const SERVICES_MOCK: IService[] = [
  {
    id: 's1',
    title: 'Консультация',
    description: 'Анализ задачи, требований и рекомендации по оптимальному решению',
    price: 50000,
    type: 'uncountable',
  },
  {
    id: 's2',
    title: 'Разработка',
    description: 'Полный цикл разработки веб-приложения под ключ',
    price: 250000,
    type: 'uncountable',
  },
  {
    id: 's3',
    title: 'UI/UX дизайн',
    description: 'Проектирование удобных и современных пользовательских интерфейсов',
    price: 120000,
    type: 'uncountable',
  },
  {
    id: 's4',
    title: 'SEO аудит',
    description: 'Анализ сайта и рекомендации по улучшению поисковой оптимизации',
    price: 100000,
    type: 'uncountable',
  },
  {
    id: 's5',
    title: 'Техническая поддержка (1 месяц)',
    description: 'Поддержка, исправление ошибок и доработки проекта в течение месяца',
    price: 50000,
    type: 'countable',
  },
  {
    id: 's6',
    title: 'Frontend аудит',
    description: 'Проверка качества кода, производительности и архитектуры интерфейса',
    price: 80000,
    type: 'uncountable',
  },
  {
    id: 's7',
    title: 'Backend аудит',
    description: 'Анализ серверной части, безопасности и масштабируемости системы',
    price: 90000,
    type: 'uncountable',
  },
  {
    id: 's8',
    title: 'Интеграция API',
    description: 'Подключение и настройка сторонних сервисов и API',
    price: 70000,
    type: 'uncountable',
  },
  {
    id: 's9',
    title: 'Тестирование',
    description: 'Функциональное и регрессионное тестирование приложения',
    price: 60000,
    type: 'uncountable',
  },
  {
    id: 's10',
    title: 'Оптимизация производительности',
    description: 'Ускорение загрузки и работы приложения',
    price: 110000,
    type: 'uncountable',
  },
];

export const initialGlobalState: IGlobalState = {
  services: SERVICES_MOCK,
  cart: [],
  cartDrawer: false,
};
