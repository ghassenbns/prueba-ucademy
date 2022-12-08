import React, { useState } from 'react';

import styled from 'styled-components';
import { Colors } from '../../../styles/colors';


const Form = styled.form`display : flex; flex-direction:column; text-align : left`;

const Container = styled.div` 
    backgroundColor : ${Colors.white};
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%,-50%);
    padding : 30;
    text-align :center
    `;

const InputField = styled.input` border-radius: 5px; border: 1px solid ${Colors.grey} `

type Values = {
  name: string,
  lastName: string,
  username: string,
  phone: string,
  age: string,
}

export const UserModal = () => {

  const [values, setValues] = useState<Values>({
    name: '',
    lastName: '',
    username: '',
    phone: '',
    age: ''
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
        <label>Nombre<InputField onChange={handleChange} name={'name'}/></label>
        <label>Apellidos <InputField onChange={handleChange} name={'lastName'}/></label>
        <label>Nombre de usuario <InputField onChange={handleChange} name={'username'}/></label>
        <label>Email <InputField onChange={handleChange} name={'email'}/></label>
        <label>Móvil <InputField onChange={handleChange} name={'phone'}/></label>
      </Form>
    </Container>
  );
};
