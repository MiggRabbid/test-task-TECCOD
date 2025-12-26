// Библиотеки
import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Логика
import routes from '@/app/router/routes';
// Компоненты
import { Button, CustomIcon } from '@/shared/ui';

const ErrorBoundary = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(routes.MainPage);
  };

  return (
    <Box className="flex flex-col items-center justify-center gap-20 p-10! pt-40! text-center text-3xl font-bold">
      <p>Произошла ошибка</p>
      <Button onClick={handleRedirect} size="lg">
        На главную
        <CustomIcon name="HomeRounded" />
      </Button>
    </Box>
  );
};

export default React.memo(ErrorBoundary);
