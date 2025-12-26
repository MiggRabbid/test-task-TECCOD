// Библиотеки
import { memo, useMemo } from 'react';
import { Box, Divider, Typography } from '@mui/material';
// Логика
import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField, getServiceItem } from '@/app/selectors';
// Компоненты
import { Button, CustomIcon, CustomList } from '@/shared/ui';
// Типизация
import type { TRenderItem } from '@/shared/ui';
import type { ICartItem } from '@/app/store';

const CartList = () => {
  const services = useAppSelector(getGlobalField('services'));
  const cart = useAppSelector(getGlobalField('cart'));

  const renderItems: TRenderItem[] = useMemo(
    () =>
      cart
        .map((item) => {
          const selectedService = services.find((x) => x.id === item.serviceId);
          if (selectedService) {
            return {
              key: `CartList-${item.serviceId}`,
              node: <MemoCartListItem item={item} />,
            };
          }
        })
        .filter((item) => !!item) ?? [],
    [cart, services],
  );

  return <CustomList renderItems={renderItems} />;
};

const CartListItem = ({ item }: { item: ICartItem }) => {
  const { removeFromCart } = useAppActions();
  const cartItem = useAppSelector(getServiceItem(item.serviceId));

  if (!cartItem) return null;

  const qty = item.qty;
  const totalPrice = cartItem.price * qty || '-';

  return (
    <Box className="flex w-full flex-row items-center justify-between">
      <Box className="flex w-fit! grow-1 flex-col items-start justify-start">
        <Typography className="font-bold!">{cartItem.title}</Typography>
        <Box className="flex w-fit! grow-1 items-start justify-start gap-2 text-emerald-800">
          <Typography>{qty} шт</Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="my-1! w-0.5! rounded-xl border-0! bg-emerald-800!"
          />
          <Typography>{totalPrice} ₽</Typography>
        </Box>
      </Box>
      <Box>
        <Button
          className="h-7! w-7! border-0! p-0! outline-0! hover:bg-red-100!"
          variant="outline"
          color="error"
          onClick={() => removeFromCart({ serviceId: item.serviceId })}
        >
          <CustomIcon name="DeleteForeverRounded" />
        </Button>
      </Box>
    </Box>
  );
};

const MemoCartListItem = memo(CartListItem);
export { MemoCartListItem as CartListItem };

const MemoCartList = memo(CartList);
export { MemoCartList as CartList };
