import { Box, Typography } from '@mui/material';
import { memo } from 'react';

import { Button, CustomIcon } from '@/shared/ui';

import type { ICartItem } from '@/app/store/slices/global';

interface ICartButtonProps {
  counter: number;
  cart: ICartItem[];
  onClick: () => void;
}

const CartButton = ({ counter, cart, onClick }: ICartButtonProps) => {
  return (
    <Box className="h-fit w-fit">
      <Button
        size="lg"
        onClick={onClick}
        className="relative flex h-14 w-fit min-w-fit! items-center justify-center gap-4 rounded-full! px-6"
      >
        <CustomIcon name="ShoppingCart" className="h-8! min-h-8! w-8! min-w-8!" />
        <Typography className="hidden! text-base! font-semibold! md:block!">
          Ваш заказ
        </Typography>
        {cart.length > 0 && (
          <span className="bg-accent ring-background outline-width absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-orange-600! text-xs! font-bold text-white shadow-sm ring-1">
            {counter}
          </span>
        )}
      </Button>
    </Box>
  );
};

export default memo(CartButton);
