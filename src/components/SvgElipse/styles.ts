import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
  0% {
    fill-opacity: 0;
    stroke-dasharray: 1 1000;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
  30% {
    fill-opacity: 0;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 1;
    opacity: 1;
  }
  60%,100% {
    fill-opacity: 1;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
`;

const elipseAnimation1 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const elipseAnimation2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const elipseAnimation3 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  overflow: hidden;
  width: 450px;
  height: 450px;

  #rec1 {
    animation: ${logoAnimation} 3s ease 0s infinite alternate;
  }

  #rec2 {
    animation: ${logoAnimation} 3s ease 0s infinite alternate;
  }

  #rec3 {
    animation: ${logoAnimation} 3s ease 0s infinite alternate;
  }

  #rec4 {
    animation: ${logoAnimation} 3s ease 0s infinite alternate;
  }

  #welcome {
    animation: ${logoAnimation} 3s ease 0s infinite alternate;
  }

  #elip1 {
    animation: ${elipseAnimation1} 3s ease 0s infinite alternate;
  }

  #elip2 {
    animation: ${elipseAnimation2} 3s ease 0s infinite alternate;
  }

  #elip3 {
    animation: ${elipseAnimation3} 3s ease 0s infinite alternate;
  }
`;
