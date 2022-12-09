import img from '../../../../assets/img.svg';
import userImg from '../../../../assets/user.svg';
import mail from '../../../../assets/mail.svg';
import phone from '../../../../assets/phone.svg';
import calendar from '../../../../assets/calendar.svg';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { User } from '../../../models/user.model';

const ModalAvatar = styled.img`
    display: block;
    margin: auto
    `;

const ModalInfoContent = styled.div`
    margin : 10% 5%; 
    width: 66%; 
    display:flex; 
    flex-direction : column; 
    align-items: center; 
    align-items: flex-start;
    `;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid;
    width: 7rem;
    height: 7rem;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    background-position:50% 50%;
    background-repeat:no-repeat;
    `;

const ModalInfoField = styled.div`
    display:flex;  
    text-align:left; 
    border-bottom: 1px solid ${Colors.grey}; 
    width:100%; 
    padding: 1% 0; 
    font-family:${Fonts.Poppins}; 
    font-size: 12px; 
    font-weight:600
    `;

const Image = styled.img`margin-right : 1rem`;

const FlexWrapper = styled.div`display:flex; flex-direction: column;`

const UserData = styled.div`font-weight:400`;

const DataField = (props:{fieldName:string, fieldData:string}) => {
  return(
    <div>
    <div>{props.fieldName}</div>
    <UserData>{props.fieldData}</UserData>
  </div>
  )
}

const UserProfile = (props : {user : User}) => {
  const {user} = props;
  return (
    <>
      <AvatarContainer>
        <ModalAvatar src={img}/>
      </AvatarContainer>
      <ModalInfoContent>
        <ModalInfoField>
          <Image src={userImg}/>
          <FlexWrapper>
            <DataField fieldName='Nombre y apellidos' fieldData={user.name + ' ' + user.lastName}></DataField>
            <DataField fieldName='Nombre de usuario' fieldData={user.username}></DataField>
          </FlexWrapper>
        </ModalInfoField>
        <ModalInfoField>
          <Image src={mail}/>
          <DataField fieldName='Email' fieldData={user.email}></DataField>
        </ModalInfoField>
        <ModalInfoField>
          <Image src={phone}/>
          <DataField fieldName='Móvil' fieldData={user.phone}></DataField>
        </ModalInfoField>
        <ModalInfoField>
          <Image src={calendar}/>
          <DataField fieldName='Fecha de inscripción' fieldData={user.inscriptionDate}></DataField>
        </ModalInfoField>
      </ModalInfoContent>
    </>
  );
};

export default UserProfile;