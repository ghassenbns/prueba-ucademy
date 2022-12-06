import Header from '../components/header';
import Navigation from '../components/navigation';
import DashboardContent from '../components/dashboard-content';
import styled from 'styled-components';
import UserProfile from '../components/user-profile';
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
        {/*<UserProfile/>*/}
      </Content>
    </>
  );
};
