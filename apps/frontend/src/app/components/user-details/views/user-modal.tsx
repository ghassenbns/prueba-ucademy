import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import User from '../../../interfaces/user';
import { useAppDispatch } from '../../../hooks/hooks';
import { UpdateUser } from '../../../../actions/usersActions';


const Form = styled.form`display : flex; flex-direction:column; text-align : left`;

const Container = styled.div` 
    backgroundColor : ${Colors.white};
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%,-50%);
    padding : 30;
    text-align :center;
    width: auto;
    display: contents;
    `;

const InputField = styled.input<{ small?: boolean }>`border-radius: 5px; border: 1px solid ${Colors.grey}; height: 1.5rem; margin-bottom:5%; ${(props)=> props.small ? css`width:47%`:''}`;

const Label = styled.label`font-family : ${Fonts.Montserrat}`;

const FlexWrapper = styled.div`display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap;`;

const FlexColumns = styled.div<{small : boolean}>`display: flex;flex-direction: column; ${(props)=> props.small ? css`width:47%`:''}`;

export const UserModal = (props: { user: User, resetSelectedUser : () => void; users: User[] }) => {
  const { user, resetSelectedUser } = props;
  const [userEntity, setUserEntities] = useState<User>(user);
  const dispatch = useAppDispatch();
  const updateUser = () => dispatch(UpdateUser(userEntity));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEntities({ ...userEntity, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUser();
    return resetSelectedUser();
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)} id={'form-user'}>
        <FlexWrapper>
          <FlexColumns small><Label>Nombre</Label><InputField value={userEntity.name} onChange={handleChange} name={'name'}/></FlexColumns>
          <FlexColumns small><Label>Apellido </Label><InputField value={userEntity.lastName} onChange={handleChange} name={'lastName'}/></FlexColumns>
        </FlexWrapper>
        <Label>Nombre de usuario </Label><InputField value={userEntity.username} onChange={handleChange} name={'username'}/>
        <Label>Email </Label><InputField value={userEntity.email} onChange={handleChange} name={'email'}/>
        <Label>Móvil </Label><InputField small value={userEntity.phone} onChange={handleChange} name={'phone'}/>
      </Form>
    </Container>
  );
};
