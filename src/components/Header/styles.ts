import styled, { keyframes, css } from 'styled-components';
import { device } from '../responsiveDevice';

interface DropdownMenuMobileProps {
  isVisible: boolean;
}

const showMenu = keyframes`
  0% {
    right: -200px;
  }
  100% {
    right: 0;
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 82px;
  width: 100%;
  z-index: 99;
  background: rgba(6, 9, 15, 0.3);
  border-bottom: 1px solid ${({ theme }) => theme.cardBorderColor};
  backdrop-filter: blur(8px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    > img {
      width: 37px;
      height: 47px;
    }
  }

  @media ${device.laptopM} {
    padding: 0 20px;
  }
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.blueLight};
      border-bottom: 2px solid ${({ theme }) => theme.color.blueLight};
    }
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const NavigateMobile = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  line-height: 0;
  background-color: transparent;
  padding: 10px;
  border: none;

  @media ${device.mobileL} {
    display: block;
  }
`;

export const DropdownMenuMobile = styled.div<DropdownMenuMobileProps>`
  position: absolute;
  top: 95px;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  width: 200px;
  background-color: ${({ theme }) => theme.cardBackground};
  animation: ${showMenu} 1s forwards;
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  ${({ isVisible }) => isVisible && css`
    right: 0px;
  `}

  > a {
    color: ${({ theme }) => theme.textColor};
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.blueLight};
      border-bottom: 2px solid ${({ theme }) => theme.color.blueLight};
    }
  }
`;
