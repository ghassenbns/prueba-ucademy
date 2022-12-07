import Header from '../components/dashboard/header';
import Navigation from '../components/navigation';
import DashboardContent from '../components/dashboard/dashboard-content';
import styled from 'styled-components';
import UserProfile from '../components/dashboard/user-profile';
import React, { useState } from 'react';

const Content = styled.div`display : flex`;

export const dashboard = () => {
  const [editMode, SetEditMode] = useState(false);
  return (
    <>
      <Header/>
      <Content>
        <Navigation/>
        <DashboardContent/>
        {editMode && <UserProfile/>}
      </Content>
    </>
  );
};
