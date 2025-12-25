// Библиотеки
import { memo, useMemo } from 'react';
import { Box } from '@mui/material';
// Логика
import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';
// Компоненты
import { CartButton, HeaderTitle } from './components';

const AppHeader = () => {
  const { changeCartDrawerState } = useAppActions();
  const cart = useAppSelector(getGlobalField('cart'));

  const counter = useMemo(() => cart.reduce((acc, x) => acc + x.qty, 0), [cart]);

  return (
    <header className="flex flex-col justify-between gap-6 px-10! py-2! md:flex-row md:items-end">
      <Box className="flex h-fit w-full flex-row items-end justify-between gap-4!">
        <HeaderTitle />

        <CartButton
          cart={cart}
          counter={counter}
          onClick={() => {
            changeCartDrawerState({
              drawerState: true,
            });
          }}
        />
      </Box>
    </header>
  );
};

export default memo(AppHeader);
