import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  theme?: { color: string, bg: string };
  text?: string;
}

export const Button = (props: Props) => (<StyledButton theme={props?.theme}>{props?.text}</StyledButton>);

const StyledButton = styled.button`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border-color : transparent;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
