import { Box, Typography } from '@mui/material';

import { CustomIcon } from '@/shared/ui';

const HeaderTitle = () => {
  return (
    <Box className="flex shrink-1 grow-1 flex-col gap-2">
      <Box className="flex h-fit w-fit items-center gap-2 gap-3 rounded-full bg-orange-300 px-3! py-1! text-orange-600">
        <CustomIcon name="AutoAwesome" className="h-5! min-h-5! w-5! min-w-5!" />
        <Typography component={'p'} className="text-xs! font-bold! uppercase">
          Premium Services
        </Typography>
      </Box>
      <Typography
        component={'h1'}
        className="text-3xl! font-extrabold! uppercase md:text-4xl! lg:text-5xl!"
      >
        Сделай свой выбор
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
