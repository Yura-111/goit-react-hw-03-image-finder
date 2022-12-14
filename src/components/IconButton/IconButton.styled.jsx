import styled from 'styled-components';

export const StyledIconButton = styled.button`
display: inline-block;
width: 40px;
height: 40px;
border: 0;
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;

:hover {
  opacity: 1;
}
`;