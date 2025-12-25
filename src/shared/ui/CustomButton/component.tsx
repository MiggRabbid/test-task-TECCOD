// Библиотеки
import * as React from 'react';
import ButtonMui, { type ButtonProps as ButtonMuiProps } from '@mui/material/Button';
// Утилиты
import { cn } from '@/shared/utils';

type TBtnVariant = 'default' | 'outline' | 'text';
type TBtnColor = 'default' | 'error' | 'secondary';

type TBtnSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends Omit<ButtonMuiProps, 'variant' | 'size' | 'color'> {
  variant?: TBtnVariant;
  size?: TBtnSize;
  color?: TBtnColor;
}

function mapMuiVariant(v?: TBtnVariant): ButtonMuiProps['variant'] {
  switch (v) {
    case 'outline':
      return 'outlined';
    case 'text':
      return 'text';
    default:
      return 'contained';
  }
}

function mapMuiColor(v?: TBtnColor): ButtonMuiProps['color'] {
  switch (v) {
    case 'error':
      return 'error';
    case 'secondary':
      return 'secondary';
    default:
      return 'primary';
  }
}

function mapMuiSize(s?: TBtnSize): ButtonMuiProps['size'] {
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
  (
    { className, variant = 'default', size = 'default', color = 'default', ...props },
    ref,
  ) => {
    return (
      <ButtonMui
        ref={ref}
        variant={mapMuiVariant(variant)}
        color={mapMuiColor(color)}
        size={mapMuiSize(size)}
        className={cn(
          'focus:shadow-shadow-2xl! m-0! inline-flex min-w-fit! items-center justify-center gap-2 rounded-full! px-7! py-2! whitespace-nowrap shadow-sm shadow-orange-100 hover:shadow-md! disabled:cursor-not-allowed! disabled:opacity-50! disabled:shadow-none!',
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
