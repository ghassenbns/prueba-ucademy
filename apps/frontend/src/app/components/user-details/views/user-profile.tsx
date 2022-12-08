import img from '../../../../assets/img.svg';
import userImg from '../../../../assets/user.svg';
import mail from '../../../../assets/mail.svg';
import phone from '../../../../assets/phone.svg';
import calendar from '../../../../assets/calendar.svg';
import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';

const ModalAvatar = styled.img`
    display: block;
    margin: auto`;
const ModalInfoContent = styled.div`margin : 10% 5%; width: 66%; display:flex; flex-direction : column; align-items: center; align-items: flex-start;`;
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
const ModalInfoField = styled.div`display:flex;  text-align:left; border-bottom: 1px solid ${Colors.grey}; width:100%; padding: 1% 0; font-family:${Fonts.Poppins}; font-size: 12px; font-weight:600`;
const Image = styled.img`margin-right : 1rem`;

export const UserProfile = () => {
  return (
    <>
      <AvatarContainer>
        <ModalAvatar src={img}/>
      </AvatarContainer>
      <ModalInfoContent>
        <ModalInfoField>
          <Image src={userImg}/>
          <div>
            <div>Nombre y apellidos</div>
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
    </>
  );
};
