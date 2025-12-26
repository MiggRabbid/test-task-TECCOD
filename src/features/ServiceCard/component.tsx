// Библиотеки
import { memo } from 'react';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
// Логика
import { cn, formatMoney } from '@/shared/utils';
import { useAppActions } from '@/app/hooks';
// Компоненты
import { Button, CustomIcon } from '@/shared/ui';
// Типизация
import type { IService } from '@/app/store/slices/global';

interface ServiceCardProps {
  service: IService;
  isSelected: boolean;
  counter?: number;
}

const ServiceCard = ({ service, isSelected, counter }: ServiceCardProps) => {
  const { addToCart, decrementFromCart, removeFromCart } = useAppActions();

  const handelClick = (type: 'add' | 'remove') => {
    if (type === 'add') {
      addToCart({
        serviceId: service.id,
      });
    } else {
      decrementFromCart({
        serviceId: service.id,
      });
    }
  };

  const handelDelete = () => {
    removeFromCart({
      serviceId: service.id,
    });
  };

  return (
    <Card
      className={cn(
        'flex flex-col justify-between gap-6 rounded-xl! p-5! shadow-md! outline-2 hover:shadow-lg!',
        isSelected ? 'bg-emerald-50! outline-emerald-100' : 'outline-slate-50',
      )}
    >
      <CardContent className="flex flex-col gap-3 p-0!">
        <Box className="flex w-full flex-row items-center justify-between gap-4">
          <Typography
            gutterBottom
            className={cn(
              'px-2 text-xl! font-semibold!',
              isSelected ? 'text-emerald-900' : 'text-slate-900',
            )}
            component="h5"
          >
            {service.title}
          </Typography>
        </Box>

        <Typography className="text-slate-700">{service.description}</Typography>
      </CardContent>

      <CardActions className="mt-2! flex h-10.5 flex-row items-center justify-between gap-4 px-0 py-0! sm:px-5!">
        <Typography gutterBottom className="px-2 text-2xl! font-semibold!" component="h5">
          {formatMoney(service.price)} ₽
        </Typography>

        {service.type === 'uncountable' ? (
          <Button
            size="sm"
            onClick={() => {
              if (isSelected) {
                handelDelete();
              } else {
                handelClick('add');
              }
            }}
            variant={isSelected ? 'outline' : 'default'}
            color={isSelected ? 'error' : 'default'}
            className={cn(
              'w-fit! min-w-fit! lg:w-42! lg:min-w-42!',
              isSelected ? 'hover:bg-red-100!' : '',
            )}
          >
            <Typography className="hidden! lg:block!">
              {isSelected ? 'Убрать' : 'Добавить'}
            </Typography>
            <CustomIcon
              name={isSelected ? 'RemoveShoppingCartRounded' : 'AddShoppingCartRounded'}
              className="h-5! min-h-5! w-5! min-w-5!"
            />
          </Button>
        ) : (
          <Box className="flex items-center">
            <Button
              size="icon"
              disabled={counter === 0}
              onClick={() => handelClick('remove')}
            >
              <CustomIcon
                name="Remove"
                className="h-full! min-h-full! w-full! min-w-full!"
              />
            </Button>
            <span className="mx-2! min-w-6.5 text-center!">{counter || 0}</span>
            <Button size="icon" onClick={() => handelClick('add')}>
              <CustomIcon
                name="Add"
                className="h-full! min-h-full! w-full! min-w-full!"
              />
            </Button>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default memo(ServiceCard);
