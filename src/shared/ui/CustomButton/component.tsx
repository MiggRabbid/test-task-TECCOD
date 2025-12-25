// Библиотеки
import * as React from 'react';
import ButtonMui, { type ButtonProps as ButtonMuiProps } from '@mui/material/Button';
// Утилиты
import { cn } from '@/shared/utils';

type AppVariant = 'default' | 'error' | 'outline' | 'secondary' | 'text';
type AppSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends Omit<ButtonMuiProps, 'variant' | 'size' | 'color'> {
  variant?: AppVariant;
  size?: AppSize;
}

function mapMuiVariant(v?: AppVariant): ButtonMuiProps['variant'] {
  switch (v) {
    case 'outline':
      return 'outlined';
    case 'text':
      return 'text';
    default:
      return 'contained';
  }
}

function mapMuiColor(v?: AppVariant): ButtonMuiProps['color'] {
  switch (v) {
    case 'error':
      return 'error';
    case 'secondary':
      return 'secondary';
    default:
      return 'primary';
  }
}

function mapMuiSize(s?: AppSize): ButtonMuiProps['size'] {
  switch (s) {
    case 'sm':
      return 'small';
    case 'lg':
      return 'large';
    default:
      return 'medium';
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <ButtonMui
        ref={ref}
        variant={mapMuiVariant(variant)}
        color={mapMuiColor(variant)}
        size={mapMuiSize(size)}
        className={cn(
          'focus:shadow-shadow-2xl! inline-flex min-w-fit! items-center justify-center gap-2 rounded-full! px-7! whitespace-nowrap shadow-sm shadow-orange-100 ease-in-out hover:shadow-lg! active:scale-95! disabled:cursor-not-allowed! disabled:opacity-50! disabled:shadow-none!',
          size === 'icon' && 'min-h-7!! h-7! w-7 min-w-7! p-0!',
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
