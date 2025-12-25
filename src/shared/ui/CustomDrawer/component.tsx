import { Box, Divider, Drawer, Stack, Typography } from '@mui/material';
import { cn } from '@/shared/utils';

import { Button, CustomIcon } from '@/shared/ui';

import type { FC, ReactNode } from 'react';
import type { DrawerProps, SxProps } from '@mui/material';
import { useAppActions } from '@/app/hooks';

interface ICustomDrawerProps {
  open: boolean;
  onClose: () => void;
  variant: DrawerProps['variant'];
  title: string;
  width?: string;
  sx?: SxProps;
  children: ReactNode;
}

const CustomDrawer: FC<ICustomDrawerProps> = ({
  title,
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
          'h-full! max-w-screen min-w-100 overflow-x-auto',
          width ? width : 'w-100!',
        )}
      >
        <Box className="flex h-fit flex-row items-start justify-between gap-4 px-4! py-3!">
          <Typography
            component={'h5'}
            className="text-2xl! leading-none font-extrabold! uppercase"
          >
            {title}
          </Typography>

          <Button
            size="icon"
            onClick={() => onClose()}
            variant="error"
            className="h-7! min-h-7! w-7! min-w-7! bg-transparent! p-0! shadow-none!"
          >
            <CustomIcon
              name="CancelRounded"
              className="m-1 h-full! min-h-full! w-full! min-w-full!"
              color="primary"
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
