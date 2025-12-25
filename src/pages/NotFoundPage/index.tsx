import React from 'react';
import { Box } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box className="min-h-full w-full p-10! text-center text-3xl font-bold">
      <p>Страница не найдена</p>
    </Box>
  );
};

export default React.memo(NotFoundPage);
