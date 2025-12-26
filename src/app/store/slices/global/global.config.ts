import type { IGlobalState, IService } from './global.types';

const SERVICES_MOCK: IService[] = [
  {
    id: 's1',
    title: 'Выбор места в салоне',
    description: 'Возможность заранее выбрать удобное место в самолёте',
    price: 1500,
    type: 'uncountable',
  },
  {
    id: 's2',
    title: 'Дополнительный багаж',
    description: 'Покупка дополнительного места багажа сверх включённой нормы',
    price: 3000,
    type: 'countable',
  },
  {
    id: 's3',
    title: 'Дополнительный багаж в салон',
    description: 'Увеличение допустимого веса ручной клади',
    price: 2500,
    type: 'countable',
  },
  {
    id: 's4',
    title: 'Приоритетная посадка',
    description: 'Посадка на борт в числе первых пассажиров',
    price: 1800,
    type: 'uncountable',
  },
  {
    id: 's5',
    title: 'Питание на борту',
    description: 'Выбор и предварительный заказ горячего питания',
    price: 1200,
    type: 'uncountable',
  },
  {
    id: 's6',
    title: 'Приоритетная регистрация',
    description: 'Отдельная стойка регистрации без очередей',
    price: 2000,
    type: 'uncountable',
  },
  {
    id: 's7',
    title: 'Доступ в бизнес-зал',
    description: 'Посещение зала ожидания повышенного комфорта в аэропорту',
    price: 4000,
    type: 'uncountable',
  },
  {
    id: 's8',
    title: 'Страхование перелёта',
    description: 'Страхование на время авиаперелёта и пребывания в поездке',
    price: 1000,
    type: 'uncountable',
  },
  {
    id: 's9',
    title: 'Wi-Fi на борту',
    description: 'Доступ к интернету во время полёта',
    price: 900,
    type: 'uncountable',
  },
  {
    id: 's10',
    title: 'Услуга сопровождения',
    description: 'Помощь пассажиру в аэропорту при регистрации и пересадках',
    price: 3500,
    type: 'uncountable',
  },
];

export const initialGlobalState: IGlobalState = {
  services: SERVICES_MOCK,
  cart: [],
  cartDrawer: false,
};
