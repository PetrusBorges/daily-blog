import arrowSelect from '../../assets/icons/arrowSelect.svg';
import styled from 'styled-components';
import { device } from '../responsiveDevice';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  `;

export const Content = styled.div`
  margin-top: 86px;
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    gap: 30px;
    flex-direction: column;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  > p {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > h1 {
    font-weight: 400;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const Select = styled.select`
  cursor: pointer;
  width: 300px;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  background-image: url(${arrowSelect});
  background-repeat: no-repeat;
  background-position: 95%;
  transition: all 0.3s linear;
  border: 1px solid ${({ theme }) => theme.cardBorderColor};

  > option {
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.color.blueLight};
    font-size: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.blueLight};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.blueLight};
  }

  &[disabled] {
    cursor: not-allowed;
    border-bottom: 1px solid gray;
  }

  @media ${device.mobileM} {
    width: 250px;
    font-size: 12px;
  }
`;
