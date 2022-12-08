import styled, { css } from 'styled-components';
import { Colors } from '../../styles/colors';
import React, { useState } from 'react';
import { Fonts } from '../../styles/fonts';
import { Button } from '../button';
import { UserProfile } from './views/user-profile';
import { UserCourses } from './views/user-courses';
import { UserModal } from './views/user-modal';

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
const ViewMode = styled.a<{ selected?: boolean }>`margin : 0 5%; cursor: pointer ; font-family: ${Fonts.Poppins}; ${props => props.selected ? css`border-bottom: 5px solid ${Colors.success};` : css`border-bottom: none`}`;
const RightDiv = styled.div`margin-left : auto`;



const UserInfo = () => {
  const [selectedView, setSelectedView] = useState<'profile'|'courses'|'edit'>('profile');
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <div className='text-left'>
            <ViewMode onClick={() => setSelectedView('profile')} selected={selectedView === 'profile'}>Profile</ViewMode>
            <ViewMode onClick={() => setSelectedView('courses')} selected={selectedView === 'courses'}>Courses</ViewMode>
          </div>
          <RightDiv>
            {selectedView === 'edit' && <Button text={'Cancelar edición'} />}
            <Button callback={()=>setSelectedView('edit')} text={selectedView === 'edit' ? 'Guardar' : 'Editar estudiante'} theme={{ color: Colors.white, bg: Colors.dark }}/>
          </RightDiv>
        </ModalHeader>
        {selectedView === 'profile' && <UserProfile/>}
        {selectedView === 'courses' && <UserCourses/>}
        {selectedView === 'edit' && <UserModal/>}
      </ModalContent>
      <Button text={'Cerrar'} theme={{ color: Colors.dark, bg: Colors.white }}/>
    </ModalContainer>
  );
};

export default UserInfo;
