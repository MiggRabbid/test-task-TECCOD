// Библиотеки
import { memo, useCallback, useLayoutEffect, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
// Логика
import { useAppActions, useAppSelector, useLocalStorage } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';
// Компоненты
import { CardDrawer, ServiceCard } from '@/features';

const MainPage = () => {
  const { getLocalCard, setLocalCard } = useLocalStorage();

  const { changeCartDrawerState, updateCart } = useAppActions();

  const cardDrawerIsOpen = useAppSelector(getGlobalField('cartDrawer'));
  const services = useAppSelector(getGlobalField('services'));
  const cart = useAppSelector(getGlobalField('cart'));

  useLayoutEffect(() => {
    const localCard = getLocalCard();
    if (localCard && localCard.length > 0) {
      updateCart({
        cart: localCard,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalCard(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const handelCloseDrawer = useCallback(() => {
    changeCartDrawerState({
      drawerState: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="mt-4! flex items-start justify-center px-6! pt-0! pb-7! md:mt-10! md:px-20! md:py-10!">
      <Box className="w-full max-w-[1600px]">
        <Grid
          container
          display="grid"
          direction="row"
          gap={4}
          className="grid-cols-1 gap-4! sm:grid-cols-2 md:gap-8! xl:grid-cols-3"
        >
          {services.map((service) => {
            const cartItem = cart.find((x) => x.serviceId === service.id);
            const isSelected = !!cartItem;
            const counter = cartItem?.qty ?? 0;
            return (
              <ServiceCard
                key={`ServiceCard-${service.id}`}
                service={service}
                isSelected={isSelected}
                counter={counter}
              />
            );
          })}
        </Grid>
      </Box>

      {cardDrawerIsOpen && (
        <CardDrawer open={cardDrawerIsOpen} onClose={handelCloseDrawer} />
      )}
    </Box>
  );
};

export default memo(MainPage);
