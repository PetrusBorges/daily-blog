import styled from 'styled-components';
import { device } from '../responsiveDevice';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;

  @media ${device.mobileM} {
    font-size: 14px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  > h2 {
    padding: 5px 14px;
    font-weight: lighter;
    color: white;
    background: linear-gradient(225deg, #1B69D2 0%, #07346F 100%);
    backdrop-filter: blur(2px);
    border-radius: 4px;
  }

  > p {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const ContainerTecnologies = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > h2 {
    padding: 5px 14px;
    font-weight: lighter;
    color: white;
    background: linear-gradient(225deg, #1B69D2 0%, #07346F 100%);
    backdrop-filter: blur(2px);
    border-radius: 4px;
  }
`;

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue};
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.blueLight};
      border-bottom: 2px solid ${({ theme }) => theme.color.blueLight};
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const AlignSvg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSocials = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  > h2 {
    padding: 5px 14px;
    font-weight: lighter;
    color: white;
    background: linear-gradient(225deg, #1B69D2 0%, #07346F 100%);
    backdrop-filter: blur(2px);
    border-radius: 4px;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue};
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.blueLight};
      border-bottom: 2px solid ${({ theme }) => theme.color.blueLight};
    }
  }
`;
