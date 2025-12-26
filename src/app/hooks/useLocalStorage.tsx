import type { ICartItem } from '@/app/store';

const LOCAL_KEY = 'card';

export const useLocalStorage = () => {
  const getLocalCard = (): ICartItem[] | null => {
    if (typeof window === 'undefined') return null;
    const storedItem = localStorage.getItem(LOCAL_KEY);
    return storedItem ? JSON.parse(storedItem) : null;
  };

  const setLocalCard = (value: ICartItem[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(value));
  };

  return { getLocalCard, setLocalCard };
};
