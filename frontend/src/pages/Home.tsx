import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Sidebar from '../components/Sidebar';
import ProtectedRoutes from '../components/ProtectedRoutes';

const Home = () => {
  return (
    <MainLayout>
      <ProtectedRoutes>
        <Sidebar />
        Home page
      </ProtectedRoutes>
    </MainLayout>
  );
};

export default Home;
