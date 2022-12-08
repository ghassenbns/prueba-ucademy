import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../styles/fonts';
import { Colors } from '../styles/colors';

interface Props {
  children?: React.ReactNode;
  theme?: { color: string, bg: string, borderColor?:string;};
  text?: string;

  callback ?: ()=> Function|void;
}

export const Button = (props: Props) => (<StyledButton onClick={props.callback} theme={props?.theme}>{props?.text}</StyledButton>);

const StyledButton = styled.button`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border-color : ${props => props.theme.borderColor ? props.theme.borderColor : props.theme.bg === Colors.white ? Colors.dark : props.theme.bg};
  font-size: 12px;
  padding: 5px 10px;
  font-family: ${Fonts.Montserrat};
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  :hover {
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
