import Header from '../components/dashboard/header';
import Navigation from '../components/navigation';
import DashboardContent from '../components/dashboard/dashboard-content';
import styled from 'styled-components';
import React, { Dispatch, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../models/user.model';
import { getUsersByIndex } from '../api/users-api';

const Content = styled.div`display : flex`;


export const dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  // const dispatch: Dispatch<any> = useDispatch();



  useEffect( () => {
    getUsersByIndex(users.length).then((result)=> setUsers(result));
  }, []);

  return (
      <>
      <Header/>
      <Content>
        <Navigation/>
        <DashboardContent users={users}/>
      </Content>
      </>
  );
};
