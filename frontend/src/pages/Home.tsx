import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Sidebar from '../components/Sidebar';
import ProtectedRoutes from '../components/ProtectedRoutes';
import AuthOverlay from '../components/AuthOverlay';
import ProfileSettings from '../components/ProfileSettings';
import RoomList from '../components/RoomList';
import { Flex } from '@mantine/core';
import AddChatroom from '../components/AddChatroom';

const Home = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <ProfileSettings />
        <Sidebar />
        <ProtectedRoutes>
          <AddChatroom />
          <Flex direction={{ base: 'column', md: 'row' }}>
            <RoomList />{' '}
          </Flex>
        </ProtectedRoutes>
      </>
    </MainLayout>
  );
};

export default Home;
