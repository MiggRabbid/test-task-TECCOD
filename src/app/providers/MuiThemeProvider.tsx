import { ThemeProvider } from '@mui/material/styles';

import { customThemeMUI } from '@/app/theme';

const MuiThemeProvider = ({ children }: { children: any }) => {
  return <ThemeProvider theme={customThemeMUI}>{children}</ThemeProvider>;
};

export { MuiThemeProvider };
