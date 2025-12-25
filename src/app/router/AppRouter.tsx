import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import routes from './routes';

import { MainPage, ErrorBoundary, NotFoundPage } from '@/pages';
import { AppLayout } from '@/layouts';

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={routes.MainPage}
      element={
        <AppLayout>
          <Outlet />
        </AppLayout>
      }
      errorElement={<ErrorBoundary />}
    >
      <Route index path={routes.MainPage} element={<MainPage />} />

      {/* Страница 404 */}
      <Route path="*" element={<NotFoundPage />} key="not-found" />
    </Route>,
  ),
);

export default AppRouter;
