import styled from 'styled-components';
import { Colors } from '../styles/colors';
import img from '../../assets/img.png';
import userImg from '../../assets/user.svg';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import calendar from '../../assets/calendar.svg';
import React, { useState } from 'react';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: ${Colors.darkTransparent}`;
const ModalContent = styled.div`
    position: absolute;
    background : ${Colors.white};
    text-align: -webkit-center;
    left: 50%;
    padding : 1rem;
    top: 50%;
    width: 33%;
    height : 60%;
    transform: translate(-50%, -50%);`;
const ModalHeader = styled.div`width: 100%; display : flex`;
const ViewMode = styled.a`margin : 1%`;
const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid;
    width: 7rem;
    height: 7rem;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    background-position:50% 50%;
    background-repeat:no-repeat;`;
const ModalAvatar = styled.img`
    display: block;
    margin: auto`;
const ModalInfoContent = styled.div`margin : 10% 5%; width: 66%; display:flex; flex-direction : column; align-items: center; align-items: flex-start;`;
const ModalInput = styled.input``;
const ModalInfoField = styled.div`display:flex;  text-align:left; border-bottom: 1px solid; width:100%; padding: 10px 0`;
const Image = styled.img`margin-right : 1rem`;


const UserProfile = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <div className='text-left'>
            <ViewMode>Profile</ViewMode>
            <ViewMode>Courses</ViewMode>
          </div>
          <div >
            <button color={Colors.dark}>Editar Estudiante</button>
          </div>
        </ModalHeader>
        <AvatarContainer>
          <ModalAvatar src={img}/>
        </AvatarContainer>
        <ModalInfoContent>
          <ModalInfoField>
            <Image src={userImg}/>
            <div>
              <div>Nombre y apellidos </div>
              <div>ABC</div>
            </div>
          </ModalInfoField>
          <ModalInfoField>
            <div>
              <div>Nombre de usuario</div>
              <div>ABC</div>
            </div>
          </ModalInfoField>
          <ModalInfoField>
            <Image src={mail}/>
            <div>
              <div>Email</div>
              <div>ABC</div>
            </div>
          </ModalInfoField>
          <ModalInfoField>
            <Image src={phone}/>
            <div>
              <div>Móvil</div>
              <div>ABC</div>
            </div>
          </ModalInfoField>
          <ModalInfoField>
            <Image src={calendar}/>
            <div>
              <div>Fecha de inscripción</div>
              <div>ABC</div>
            </div>
          </ModalInfoField>
        </ModalInfoContent>
      </ModalContent>
    </ModalContainer>
  );
};

export default UserProfile;
