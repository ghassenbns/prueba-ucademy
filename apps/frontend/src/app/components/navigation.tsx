import React from 'react';
import dashboard from '../../assets/dashboard.svg';
import styled from 'styled-components';
import { Fonts } from '../styles/fonts';

const SideNav = styled.div`
      justify-content: center;
      position: relative;
      width: 18%;
      height: 100%;
      left: 0px;
      top: 0px;`;
const Link = styled.div`display: flex; flex-direction: row; padding: 0 1rem; align-content: center; align-items: center; justify-content : center`;
const Item = styled.a`margin : 0 10% ; font-family : ${Fonts.Poppins}`;
const NAV_LINKS = [{ name: 'Dashboard', img: dashboard }];

const Navigation = () => {
  return (
    <SideNav>
      {NAV_LINKS.map((link, index) => {
        return <Link key={index}><img src={link.img} alt='link-img'/><Item>{link.name}</Item></Link>;
      })}
    </SideNav>
  );
};

export default Navigation;
