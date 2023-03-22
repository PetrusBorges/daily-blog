import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 999;
  line-height: 0;
  padding: 12px;
  border: none;
  transition: all 0.3s linear;
  border-radius: 50%;
  background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);

  > img {
    width: 22px;
    height: 22px;
  }

  &:hover {
    scale: 1.15;
  }
`;
