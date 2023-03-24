import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.blueLight};
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;
