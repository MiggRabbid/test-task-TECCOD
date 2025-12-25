import React, { type FC, type ReactNode } from 'react';
import { Box } from '@mui/material';

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <Box className="flex min-h-full w-full items-center justify-center bg-emerald-50">
      {children}
    </Box>
  );
};

export default React.memo(AppLayout);
