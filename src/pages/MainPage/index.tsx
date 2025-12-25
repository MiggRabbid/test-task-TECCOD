// Библиотеки
import { memo } from 'react';
import { Box, Grid } from '@mui/material';
// Логика
import { useAppActions, useAppSelector } from '@/app/hooks';
import { getGlobalField } from '@/app/selectors';
// Компоненты
import { CardDrawer, ServiceCard } from '@/features';

const MainPage = () => {
  const { changeCartDrawerState } = useAppActions();

  const cardDrawer = useAppSelector(getGlobalField('cartDrawer'));
  const services = useAppSelector(getGlobalField('services'));
  const cart = useAppSelector(getGlobalField('cart'));

  return (
    <Box className="mt-10! flex items-start justify-center px-20! py-10!">
      <Box className="w-full max-w-[1600px]">
        <Grid
          container
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          gap={4}
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

      <CardDrawer
        open={cardDrawer}
        onClose={() => {
          changeCartDrawerState({
            drawerState: false,
          });
        }}
      />
    </Box>
  );
};

export default memo(MainPage);
