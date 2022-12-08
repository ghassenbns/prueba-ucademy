import React, { useState } from 'react';
import info from '../../../assets/info-dark.svg';
import styled, { css } from 'styled-components';
import { Button } from '../button';
import { Colors } from '../../styles/colors';
import UserInfo from '../user-details/user-info';
import { User } from '../../models/user.model';
import { Fonts } from '../../styles/fonts';

const TABLE_HEADERS = ['Conexión', 'Nombre y apellidos', 'Nombre de usuario', 'Email', 'Móvil', ''];
const Table = styled.table`font-family: ${Fonts.Poppins}; border-collapse: collapse; width: 100%;`;
const Th = styled.th`${(props: { center?: boolean }) => props.center ? css`text-align : center` : css`text-align : left`};  margin: 0 1rem; border-bottom: 2px solid ${Colors.dark}`;
const UserCase = styled.td`padding:1em 0;border-bottom: solid black 0.5px; font-size:13px; font-family : ${Fonts.Montserrat}; ${(props: { center?: boolean }) => props.center ? css`text-align : center` : css`text-align : left`}`;
const Wrapper = styled.div`width: 100%; padding: 0 5%`;
const Spacing = styled.div`margin-bottom : 2rem`;

const DashboardContent = (props: { users: User[] }) => {
  const [editMode, setEditMode] = useState(false);
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
          <img onClick={() => setEditMode(true)} src={info} alt='info'/>
        </UserCase>
      </tr>
    );
  };

  return (
    <Wrapper>
      <Spacing>
        <Button text={'+ Nuevo estudiante'} theme={{ color: Colors.white, bg: Colors.success }}/>
      </Spacing>
      <Table>
        <thead>
        <tr>
          {TABLE_HEADERS.map((header, index) => {
            return <Th key={index} center={header === 'Conexión'}>{header}</Th>;
          })}
        </tr>
        </thead>
        <tbody>
        {props.users.map((user) => {
          return (
            <UserRow user={user}/>
          );
        })}
        </tbody>
      </Table>
      {editMode && <UserInfo/>}
    </Wrapper>
  );
};

export default DashboardContent;
