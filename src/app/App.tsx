import { RouterProvider } from 'react-router-dom';

import { MuiThemeProvider, StoreProvider } from './providers';

import AppRouter from './router/AppRouter';

function App() {
  return (
    <MuiThemeProvider>
      <StoreProvider>
        <RouterProvider router={AppRouter} />
      </StoreProvider>
    </MuiThemeProvider>
  );
}

export default App;
