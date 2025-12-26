import { memo } from 'react';
import { Box, Typography } from '@mui/material';

import { CustomIcon } from '@/shared/ui';

const HeaderTitle = () => {
  return (
    <Box className="flex w-fit shrink-1 grow-1 flex-col flex-wrap items-start justify-start gap-2 sm:flex-row md:flex-col">
      <Box className="flex h-fit w-fit items-center gap-2 gap-3 rounded-full bg-orange-300 px-3! py-1.5! text-orange-600">
        <CustomIcon name="AutoAwesome" className="h-4! min-h-4! w-4! min-w-4!" />
        <Typography className="text-xs! font-bold! uppercase">
          Premium Services
        </Typography>
      </Box>

      <Typography
        component={'h1'}
        className="text-2xl! font-extrabold! uppercase sm:text-3xl! md:text-3xl! lg:text-4xl!"
      >
        Выбор за вами
      </Typography>
    </Box>
  );
};

export default memo(HeaderTitle);
