import styled from 'styled-components';
import React from 'react';
import logo from '../../assets/logo.svg';
import { Colors } from '../styles/colors';
const PageHeader = styled.header`background: ${Colors.dark}; margin-bottom: 2rem`;

const Header = () => {
  return (
    <PageHeader>
      <img src={logo} alt='logo'/>
    </PageHeader>
  )
};

export default Header;
