import React from 'react';
import { Box } from '@mui/material';

import { useAppSelector } from '@hooks/index';
import { getGlobalField } from '@selectors/global.selector';

const MainPage = () => {
  const title = useAppSelector(getGlobalField('title'));

  return (
    <Box className="min-h-full w-full p-10! text-center text-3xl font-bold">
      <p>{title}</p>
    </Box>
  );
};

export default React.memo(MainPage);
