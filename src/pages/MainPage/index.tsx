// Библиотеки
import { memo, useCallback } from 'react';
import { Box, Grid } from '@mui/material';
// Логика
import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';
// Компоненты
import { CardDrawer, ServiceCard } from '@/features';

const MainPage = () => {
  const { changeCartDrawerState } = useAppActions();

  const cardDrawerIsOpen = useAppSelector(getGlobalField('cartDrawer'));
  const services = useAppSelector(getGlobalField('services'));
  const cart = useAppSelector(getGlobalField('cart'));

  const handelCloseDrawer = useCallback(() => {
    changeCartDrawerState({
      drawerState: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="mt-4! flex items-start justify-center px-6! py-2! md:mt-10! md:px-20! md:py-10!">
      <Box className="w-full max-w-[1600px]">
        <Grid
          container
          display="grid"
          // gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          // spacing={{ xs: 2, sm: 3, md: 4 }}
          direction="row"
          gap={4}
          className="grid-cols-1 gap-4! md:grid-cols-2 md:gap-8! xl:grid-cols-3"
        >
          {services.map((service, index: number) => {
            const isSelected = cart.some((x) => x.serviceId === service.id);
            const counter = cart.find((x) => x.serviceId === service.id)?.qty ?? 0;

            return (
              <ServiceCard
                key={`service-${index}-${service.id}`}
                service={service}
                isSelected={!!isSelected}
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
