import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

interface PropsCourse {
  children?: React.ReactNode;
  percentCompleted: string;
  courseName?: string;
  inscriptionDate?: string;
}


const Container = styled.div`
  height: 12px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: ${Colors.light};
  width: 100%;
`;

const ProgressBar = () => (<Container><Background/><Progress /></Container>);

const Progress = styled(BaseBox)`
  background: ${Colors.successGradient};
  width: 45%;
`;
const CourseContainer = (props: PropsCourse) => {
  return (
    <div>
      <div>{props.courseName}</div>
      <ProgressBar/>
      <div>Fecha de inscripción : {props.inscriptionDate}</div>
    </div>
  );
};

export const UserCourses = () => {
  return (
    <>
      <CourseContainer percentCompleted={'48'} courseName={'Maths'} inscriptionDate={'2022-12-01'}/>
    </>
  );
};
