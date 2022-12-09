import Header from '../components/header';
import Navigation from '../components/navigation';
import DashboardContent from '../components/dashboard/dashboard-content';
import styled from 'styled-components';
import React, {  useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../models/user.model';
import { getUsersByIndex } from '../api/users-api';

const Content = styled.div`display : flex`;

export const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // const dispatch: Dispatch<any> = useDispatch();

  

  const  bottomListener = () : void => {    
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
      return setIsLoading(true)
    }

  const loadUsers = async (loaded : number) : Promise<void> => {
    const users = await getUsersByIndex(loaded);
    return setUsers((prev)=> [...prev, ...users]);
  }
 

  useEffect( () => {
    window.addEventListener('scroll', bottomListener);
    loadUsers(users.length);
    return ()=> window.removeEventListener('scroll',bottomListener);
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
