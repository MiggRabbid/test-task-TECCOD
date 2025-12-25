import React from 'react';
import { Box } from '@mui/material';

const ErrorBoundary = () => {
  return (
    <Box className="min-h-full w-full p-10! text-center text-3xl font-bold">
      <p>Произошла ошибка</p>
    </Box>
  );
};

export default React.memo(ErrorBoundary);
