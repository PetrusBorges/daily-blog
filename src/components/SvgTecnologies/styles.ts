import styled, { keyframes } from 'styled-components';

const animationForm1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-80px, 90px, 0);
  }
`;

const animationForm2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-30px, -70px, 0);
  }
`;

const animationForm3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100px, 50px, 0);
  }
`;

export const Svg = styled.svg`
  overflow: hidden;
  width: 350px;
  #group1 {
    animation: ${animationForm1} 1s ease 2s infinite alternate;
  }
  #group2 {
    animation: ${animationForm2} 1.5s ease 1.5s infinite alternate;
  }
  #group3 {
    animation: ${animationForm3} 1.2s ease 1.2s infinite alternate;
  }
`;
