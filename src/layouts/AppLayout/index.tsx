import React, { type FC, type ReactNode } from 'react';
import { Box } from '@mui/material';

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <Box className="flex h-full grow-1 flex-col justify-start gap-0 bg-emerald-50/30">
      {children}
    </Box>
  );
};

export default React.memo(AppLayout);
