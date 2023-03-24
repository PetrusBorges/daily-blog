import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    transform:scale(1);
  }
  to {
    transform:scale(0);
  }
`;

interface AnimationProps {
  isVisible: boolean;
}

export const Overlay = styled.div<AnimationProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  animation: ${fadeIn} 0.3s;

  ${({ isVisible }) => isVisible && css`
    animation: ${fadeOut} 0.3s forwards;
  `}
`;

export const Container = styled.div<AnimationProps>`
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  padding: 20px;
  border-radius: 16px;
  animation: ${scaleIn} 0.3s;

  ${({ isVisible }) => isVisible && css`
    animation: ${scaleOut} 0.3s forwards;
  `}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  > h4 {
    color: ${({ theme }) => theme.textColor};
  }

  > button {
    line-height: 0;
    background-color: transparent;
    border: none;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  > p {
    color: ${({ theme }) => theme.textColor};
  }

  > img {
    border-radius: 18px;
    width: 100%;
    overflow: hidden;
  }
`;

export const HeaderComentary = styled.h4`
  padding: 10px;
  color: ${({ theme }) => theme.color.blueLight };
  border-bottom: 1px solid ${({ theme }) => theme.color.blueLight };
  margin-bottom: 8px;
`;

export const PostComentary = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.cardBorderColor };
  border-radius: 16px;
  padding: 10px;

  > p {
    margin-top: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor };
  }

  & + & {
    margin-top: 6px;
  }
`;

export const PostComentaryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  > img {
    width: 32px;
    height: 32px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.textColor };
  }
`;
