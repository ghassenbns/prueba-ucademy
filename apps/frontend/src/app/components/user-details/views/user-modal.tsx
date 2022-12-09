import React, { useState } from 'react';

import styled from 'styled-components';
import { User } from '../../../models/user.model';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';


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

const InputField = styled.input`border-radius: 5px; border: 1px solid ${Colors.grey}; height: 1.5rem; margin-bottom:5%`

const Label = styled.label`font-family : ${Fonts.Montserrat}`

const FlexWrapper = styled.div`display: flex; flex-direction: row; `;

type Values = {
  name: string,
  lastName: string,
  username: string,
  phone: string,
  email: string,
}

export const UserModal = (props : {user : User}) => {
  const {user} = props;
  const [values, setValues] = useState<Values>({
    name: user.name,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phone: user.phone
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FlexWrapper>
        <div><Label>Nombre</Label><InputField onChange={handleChange} name={'name'}/></div>
        <div><Label>Apellido </Label><InputField onChange={handleChange} name={'lastName'}/></div></FlexWrapper>
        <Label>Nombre de usuario </Label><InputField onChange={handleChange} name={'username'}/>
        <Label>Email </Label><InputField onChange={handleChange} name={'email'}/>
        <Label>Móvil </Label><InputField onChange={handleChange} name={'phone'}/>
      </Form>
    </Container>
  );
};
