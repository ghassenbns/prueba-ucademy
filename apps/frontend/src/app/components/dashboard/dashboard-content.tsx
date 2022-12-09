import React, { useEffect, useRef, useState } from 'react';
import info from '../../../assets/info-dark.svg';
import styled, { css } from 'styled-components';
import { Button } from '../button';
import { Colors } from '../../styles/colors';
import UserInfo from '../user-details/user-info';
import { User } from '../../models/user.model';
import { Fonts } from '../../styles/fonts';

const TABLE_HEADERS = ['Conexión', 'Nombre y apellidos', 'Nombre de usuario', 'Email', 'Móvil', ''];
const Table = styled.table`font-family: ${Fonts.Poppins}; border-collapse: collapse; width: 100%;`;
const Th = styled.th`${(props: { center?: boolean }) => props.center ? css`text-align : center` : css`text-align : left`}; font-size:13px; padding:1em 0;  margin: 0 1rem; border-bottom: 2px solid ${Colors.dark}`;
const UserCase = styled.td`padding:1em 0; border-bottom: solid black 0.5px; font-size:13px; font-family : ${Fonts.Montserrat}; ${(props: { center?: boolean }) => props.center ? css`text-align : center` : css`text-align : left`}`;
const Wrapper = styled.div`width: 100%; padding: 0 5%`;
const Spacing = styled.div`margin-bottom : 2rem`;
const Info = styled.img`cursor:pointer`;
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: ${Colors.darkTransparent}
    `;
const Thead = () => {
  return(
    <thead>
    <tr>
      {TABLE_HEADERS.map((header, index) => {
        return <Th key={index} center={header === 'Conexión'}>{header}</Th>;
      })}
    </tr>
    </thead>
  )
};

const DashboardContent = (props: { users: User[] }) => {
  const [selectUser, setSelectedUser] = useState<User|null>(null);  

  const UserRow = (props: { user: User }) => {
    const { user } = props;
    return (
      <tr key={user._id}>
        <UserCase center={true}>
          <button disabled={!user.isOnline}> {user.isOnline ? 'Online' : 'Offline'} </button>
        </UserCase>
        <UserCase>{user.name + ' ' + user.lastName}</UserCase>
        <UserCase>{user.username}</UserCase>
        <UserCase>{user.email}</UserCase>
        <UserCase>{user.phone}</UserCase>
        <UserCase>
          <Info onClick={() => setSelectedUser(user)} src={info} alt='info'/>
        </UserCase>
      </tr>
    );
  };

  return (
    <Wrapper>
      <Spacing>
        <Button text={'+ Nuevo estudiante'} theme={{ color: Colors.white, bg: Colors.success, borderColor: Colors.transparent }}/>
      </Spacing>
      <Table>
        <Thead/>
        <tbody>
        {props.users.map((user) => {
          return (
            <UserRow user={user}/>
          );
        })}
        </tbody>
      </Table>
      {selectUser && <UserInfo user={selectUser} setSelectedUser={setSelectedUser}/>}
    </Wrapper>
  );
};

export default DashboardContent;
