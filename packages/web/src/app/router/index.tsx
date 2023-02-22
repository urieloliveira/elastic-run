import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../../presentation/Home'));

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
