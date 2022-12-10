import Header from '../components/header';
import Navigation from '../components/navigation';
import DashboardContent from '../components/dashboard/dashboard-content';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { GetUsers } from '../../actions/usersActions';
import { useAppDispatch } from '../hooks/hooks';

const Content = styled.div`display : flex;`;

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const usersState = useSelector((state: RootStore)=> state.users);

  const loadMoreUsers = () => dispatch(GetUsers(users.length));

  const {users, max} = usersState;

  const bottomListener = (): void => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      return setIsLoading(!isLoading);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', bottomListener);
    if(max=== 0 || max!== users.length) loadMoreUsers();
    return () => window.removeEventListener('scroll', bottomListener);
  }, [isLoading]);

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
