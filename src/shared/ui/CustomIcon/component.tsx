// Библиотека
import * as Icons from '@mui/icons-material';
// Типизация
import type { ICustomIconProps, TLibraryIconMUIName } from '.';
import { cn } from '@/shared/utils';

export const CustomIcon = ({ name, color, className, ...props }: ICustomIconProps) => {
  const IconMUI = Icons?.[name as TLibraryIconMUIName] ?? null;

  return (
    <>
      {IconMUI ? (
        <IconMUI
          color={color ?? 'inherit'}
          {...props}
          className={className ? className : 'h-4 min-h-4 w-4 min-w-4'}
        />
      ) : null}
    </>
  );
};
