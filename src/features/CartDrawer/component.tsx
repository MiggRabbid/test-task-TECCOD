import { memo, useMemo, useState } from 'react';
import { Alert, Box, Divider, Snackbar, Typography } from '@mui/material';

import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';

import CustomDrawer from '@/shared/ui/CustomDrawer/component';
import { formatMoney } from '@/shared/utils';
import { Button, CustomIcon } from '@/shared/ui';
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

  const cartDetailed = useMemo(() => {
    return cart
      .map((item) => {
        const service = services.find((s) => s.id === item.serviceId);
        if (!service) return null;

        return {
          ...item,
          service,
          lineTotal: service.price * item.qty,
        };
      })
      .filter(Boolean) as Array<{
      serviceId: string;
      qty: number;
      service: IService;
      lineTotal: number;
    }>;
  }, [services, cart]);

  const total = useMemo(() => {
    return cartDetailed.reduce((acc, x) => acc + x.lineTotal, 0);
  }, [cartDetailed]);

  const isEmpty = cartDetailed.length === 0;

  const selectedCount = useMemo(
    () => cartDetailed.reduce((acc, x) => acc + x.qty, 0),
    [cartDetailed],
  );

  const handelBuy = () => {
    handelClear();
    setOpenSnackbar(true);
  };

  const handelClear = () => {
    clearCart();
  };

  return (
    <CustomDrawer open={open} onClose={onClose} variant="permanent" title="Твой выбор">
      <Box className="grow-1 px-5!">
        <p>asdasd</p>
      </Box>

      <Divider orientation="horizontal" />

      <Box className="flex w-full flex-col items-center justify-between gap-1 p-5!">
        <Box className="flex w-full flex-row items-center justify-between gap-5">
          <Typography
            gutterBottom
            className="px-2 text-xl! font-semibold! text-slate-800"
            component="h5"
          >
            Всего товаров:
          </Typography>

          <Typography
            gutterBottom
            className="px-2 text-2xl! font-semibold! text-slate-800"
            component="h5"
          >
            {formatMoney(selectedCount)}
          </Typography>
        </Box>
        <Box className="flex w-full flex-row items-center justify-between gap-5">
          <Typography
            gutterBottom
            className="px-2 text-xl! font-semibold! text-slate-800"
            component="h5"
          >
            Общая стоимость:
          </Typography>

          <Typography
            gutterBottom
            className="px-2 text-2xl! font-semibold! text-slate-800"
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

          <Button size="lg" disabled={isEmpty} onClick={handelClear} variant="error">
            Очистить
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

export default memo(CartDrawer);
