import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import User from '../../../interfaces/user';

interface PropsCourse {
  children?: React.ReactNode;
  percentCompleted: number;
  courseName?: string;
  inscriptionDate?: string;
}


const Container = styled.div`
  height: 12px;
  width: 80%;
  position: relative;
  margin-right: auto;
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

const Progress = styled(BaseBox)<{ progress: number }>`
  background: ${Colors.successGradient};
  width: ${(props) => props.progress}%;
`;
const Label = styled.div`
  font-family : ${Fonts.Poppins};
  font-weight : 600;
  font-size : 13px;
`;

const DateLabel = styled.div`
  font-family : ${Fonts.Montserrat};
  font-weight : 400;
  font-size : 13px;
`;

const CourseWrapper = styled.div`
  text-align : left;
  margin : 5%;
`;

const CoursesWrapper = styled.div`
  overflow : auto;
`;

const FlexContainer = styled.div`
  display:flex;
  flex-direction : row;
  align-items: center;
`;

const ProgressBar = (props: { progress: number }) => (
  <FlexContainer>
    <Container>
      <Background/>
      <Progress progress={props.progress}/>
    </Container>
    <Label>{props.progress + '%'}</Label>
  </FlexContainer>
);


const CourseContainer = (props: PropsCourse) => {
  const { courseName, percentCompleted, inscriptionDate} = props;
  return (
    <CourseWrapper>
      <Label>{courseName}</Label>
      <ProgressBar progress={percentCompleted}/>
      <DateLabel>Fecha de inscripción : {inscriptionDate}</DateLabel>
    </CourseWrapper>
  );
};

export const UserCourses = (props: { user: User }) => {
  const { user } = props;
  return (
    <CoursesWrapper>
      {
        user.courses.map((course, index) => (
          <CourseContainer key={index} percentCompleted={course.percentCompleted} courseName={course.title}
                           inscriptionDate={course.inscriptionDate} />
        ))
      }
    </CoursesWrapper>
  );
};
