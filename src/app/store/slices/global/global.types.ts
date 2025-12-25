type TServiceType = 'countable' | 'uncountable';

export interface IService {
  id: string;
  title: string;
  description: string;
  price: number; // в рублях/условных единицах
  type: TServiceType;
}

export interface ICartItem {
  serviceId: string;
  type: TServiceType;
  qty: number;
}

export interface IGlobalState {
  services: IService[];
  cart: ICartItem[];
  cartDrawer: boolean;
}

export interface IPayloadChangeService {
  serviceId: string;
}

export interface IPayloadChangeCartDrawer {
  drawerState: boolean;
}
