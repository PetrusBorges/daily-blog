import styled from 'styled-components';
import { device } from '../responsiveDevice';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.cardBorderColor};
  padding: 20px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;

  > a {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.color.blue };

    > img {
      width: 37px;
      height: 47px;
    }
  }
`;

export const ContainerNavigation = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.laptop} {
    justify-content: center;
    gap: 30px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > h2 {
    font-size: 28px;
    color: ${({ theme }) => theme.color.blue};
  }

  > a {
    padding: 10px 0;
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.textColor};

    &:hover {
      color: ${({ theme }) => theme.color.blueLight};
    }
  }
`;

export const ContainerInfoNews = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > h2 {
    font-size: 28px;
    color: ${({ theme }) => theme.color.blue};
  }

  > p {
    color: ${({ theme }) => theme.textColor};
    margin: 8px 0;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  > input {
    width: 100%;
    height: 52px;
    border: none;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    appearance: none;
    border-radius: 4px;
    transition: all 0.2s linear;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.cardBackground};
    border: 2px solid ${({ theme }) => theme.cardBorderColor};;

    &:focus {
      border-color: ${({ theme }) => theme.color.blueLight};
    }

    &::placeholder {
      color: ${({ theme }) => theme.textColor};
    }
  }

  @media ${device.mobileL} {
    gap: 8px;
    flex-direction: column;
  }
`;

export const ContainerSocial = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.cardBorderColor};

  > small {
    color: ${({ theme }) => theme.textColor};
  }

  @media ${device.mobileL} {
    gap: 30px;
    flex-direction: column;
  }
`;

export const ContainerSocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > a {
    line-height: 0;
  }
`;
