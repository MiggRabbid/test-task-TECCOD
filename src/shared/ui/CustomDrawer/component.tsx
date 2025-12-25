import { Box, Divider, Drawer, Stack, Typography } from '@mui/material';
import { cn } from '@/shared/utils';

import { Button, CustomIcon, type ICustomIconProps } from '@/shared/ui';

import type { FC, ReactNode } from 'react';
import type { DrawerProps, SxProps } from '@mui/material';

interface ICustomDrawerProps {
  open: boolean;
  onClose: () => void;
  variant: DrawerProps['variant'];
  title: string;
  titleIcon?: ICustomIconProps['name'];
  width?: string;
  sx?: SxProps;
  children: ReactNode;
}

const CustomDrawer: FC<ICustomDrawerProps> = ({
  title,
  titleIcon,
  open,
  onClose,
  children,
  width,
  sx,
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          overflow: 'hidden',
        },
      }}
      sx={{
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Stack
        className={cn(
          'h-full! max-w-screen min-w-full overflow-x-auto sm:min-w-100',
          width ? width : 'w-full sm:w-100!',
        )}
      >
        <Box className="flex h-fit flex-row items-start justify-between gap-4 px-4! py-4!">
          <Box className="flex items-center justify-start">
            {titleIcon && (
              <CustomIcon
                name={titleIcon}
                className="mr-4! h-8! min-h-8! w-8! min-w-8! text-slate-700"
              />
            )}
            <Typography
              component={'h5'}
              className="text-2xl! leading-none font-extrabold! text-slate-700 uppercase"
            >
              {title}
            </Typography>
          </Box>

          <Button
            size="icon"
            onClick={() => onClose()}
            variant="text"
            color="default"
            className="h-7! min-h-7! w-7! min-w-7! bg-transparent! p-0! shadow-none! hover:bg-slate-200!"
          >
            <CustomIcon
              name="ClearRounded"
              className="m-1 h-full! min-h-full! w-full! min-w-full!"
              color="action"
            />
          </Button>
        </Box>

        <Divider orientation="horizontal" />

        <Box className="flex h-full shrink-1 flex-col justify-between pt-5!">
          {children}
        </Box>
      </Stack>
    </Drawer>
  );
};

export default CustomDrawer;
