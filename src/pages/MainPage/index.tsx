import React from 'react';
import { Box } from '@mui/material';

import { useAppSelector } from '@hooks/index';
import { getGlobalField } from '@/app/selectors/card.selector';

const MainPage = () => {

  return (
    <Box className="min-h-full w-full p-10! text-center text-3xl font-bold">
      <p>Главная страница</p>
    </Box>
  );
};

export default React.memo(MainPage);
