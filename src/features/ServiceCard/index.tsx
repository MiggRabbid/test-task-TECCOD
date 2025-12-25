// Библиотеки
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

export function ServiceCard({ service, isSelected, counter }: ServiceCardProps) {
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
        'flex flex-col justify-between gap-6 rounded-xl! border-2 p-5! shadow-md! hover:shadow-lg!',
        isSelected ? 'border-emerald-100 bg-emerald-50!' : 'border-slate-50',
      )}
    >
      <CardContent className="flex flex-col gap-3 p-0!">
        <Box className="flex w-full flex-row items-center justify-between gap-4">
          <Typography
            gutterBottom
            className="px-2 text-lg! font-semibold!"
            component="h5"
          >
            {service.title}
          </Typography>
          <Box className="h-7! min-h-7! w-7! min-w-7!">
            {isSelected && (
              <Button
                size="icon"
                onClick={() => handelDelete()}
                variant="error"
                className="h-7! min-h-7! w-7! min-w-7! bg-transparent! p-0! shadow-none!"
              >
                <CustomIcon
                  name="RemoveShoppingCartRounded"
                  className="m-1 h-full! min-h-full! w-full! min-w-full!"
                  fill="red"
                  color="error"
                />
              </Button>
            )}
          </Box>
        </Box>

        <Typography className="text-slate-700">{service.description}</Typography>
      </CardContent>
      <CardActions className="mt-2! flex flex-row items-center justify-between gap-4 p-0!">
        <Typography gutterBottom className="px-2 text-xl! font-semibold!" component="h5">
          {formatMoney(service.price)} ₽
        </Typography>

        {service.type === 'uncountable' ? (
          <Button
            size="sm"
            disabled={isSelected && service.type === 'uncountable'}
            onClick={() => handelClick('add')}
          >
            Добавить
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
}
