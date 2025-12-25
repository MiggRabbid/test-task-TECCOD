// Библиотеки
import { useCallback, useMemo, useState } from 'react';
import { Alert, Box, Divider, Snackbar, Typography } from '@mui/material';
// Логика
import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';
import { formatMoney } from '@/shared/utils';
// Компоненты
import { CustomDrawer, Button, CustomIcon } from '@/shared/ui';
import { CartList } from '../';
// Типизация
import type { IService } from '@/app/store';

interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ onClose, open }: ICartDrawerProps) => {
  const { clearCart } = useAppActions();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const services = useAppSelector(getGlobalField('services'));
  const cart = useAppSelector(getGlobalField('cart'));

  const { total, selectedCount, isEmpty } = useMemo(() => {
    const servicesById = new Map(services.map((s) => [s.id, s]));
    const detailed: Array<{
      serviceId: string;
      qty: number;
      service: IService;
      lineTotal: number;
    }> = [];
    let currTotal = 0;
    let currSelectedCount = 0;

    for (const item of cart) {
      const service = servicesById.get(item.serviceId);
      if (!service) continue;
      const lineTotal = service.price * item.qty;
      detailed.push({ ...item, service, lineTotal });
      currTotal += lineTotal;
      currSelectedCount += item.qty;
    }

    return {
      total: currTotal,
      selectedCount: currSelectedCount,
      isEmpty: detailed.length === 0,
    };
  }, [services, cart]);

  const handelBuy = useCallback(() => {
    handelClear();
    setOpenSnackbar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelClear = useCallback(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomDrawer
      open={open}
      onClose={onClose}
      variant="permanent"
      title="Ваш заказ"
      titleIcon="ShoppingCart"
    >
      <Box className="grow-1 px-5!">
        {isEmpty ? (
          <Typography
            gutterBottom
            className="mt-10! px-2 text-center! text-xl! font-semibold! text-slate-500 uppercase"
            component="h5"
          >
            Корзина пуста
          </Typography>
        ) : (
          <CartList />
        )}
      </Box>

      <Divider orientation="horizontal" />

      <Box className="flex w-full flex-col items-center justify-between gap-1 p-5!">
        <Box className="flex w-full flex-row items-center justify-between gap-5">
          <Typography
            gutterBottom
            className="text-md px-2 leading-none font-semibold! text-slate-800 sm:text-lg!"
            component="h5"
          >
            Всего товаров:
          </Typography>

          <Typography
            gutterBottom
            className="text-md px-2 leading-none font-semibold! text-emerald-900 sm:text-lg!"
            component="h5"
          >
            {formatMoney(selectedCount)} шт.
          </Typography>
        </Box>
        <Box className="flex w-full flex-row items-center justify-between gap-5">
          <Typography
            gutterBottom
            className="text-md px-2 font-semibold! text-slate-800 sm:text-lg!"
            component="h5"
          >
            Общая стоимость:
          </Typography>

          <Typography
            gutterBottom
            className="text-md px-2 font-bold! text-emerald-900 sm:text-xl!"
            component="h5"
          >
            {formatMoney(total)} ₽
          </Typography>
        </Box>

        <Box className="mt-3! flex w-full flex-row items-center justify-between gap-3">
          <Button size="lg" disabled={isEmpty} onClick={handelBuy}>
            Оформить
            <CustomIcon
              name="MonetizationOnRounded"
              className="h-6! min-h-6! w-6! min-w-6!"
            />
          </Button>

          <Button
            size="lg"
            disabled={isEmpty}
            onClick={handelClear}
            variant="default"
            color="error"
          >
            <Typography className="hidden! sm:block!">Очистить</Typography>
            <CustomIcon
              name="RemoveShoppingCartRounded"
              className="h-6! min-h-6! w-6! min-w-6!"
            />
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ваш заказ оформлен
        </Alert>
      </Snackbar>
    </CustomDrawer>
  );
};

export default CartDrawer;
