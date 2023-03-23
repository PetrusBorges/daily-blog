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
  gap: 20px;
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CardUser  = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  width: 500px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  box-shadow: 0px 202px 343px rgba(35, 33, 38, 0.05), 0px 84.3908px 143.297px rgba(35, 33, 38, 0.0279067), 0px 45.1193px 76.6135px rgba(35, 33, 38, 0.0166157), 0px 25.2935px 42.9489px rgba(35, 33, 38, 0.00924013), 0px 13.4332px 22.8099px rgba(35, 33, 38, 0.00436612), 0px 5.58986px 9.49169px rgba(35, 33, 38, 0.00139357);
  border-radius: 36px;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 0px 72px 104px rgba(52, 195, 227, 0.09), 0px 21.7059px 31.353px rgba(52, 195, 227, 0.058643), 0px 9.01552px 13.0224px rgba(52, 195, 227, 0.045), 0px 3.26074px 4.70995px rgba(52, 195, 227, 0.031357);
  }

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobileL} {
    width: 300px;
    font-size: 12px;
  }

  @media ${device.mobileM} {
    width: 280px;
  }
`;

export const CardUserInfo = styled.div`
  padding: 10px;
  border-left: 1px solid ${({ theme }) => theme.cardBorderColor};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  > p {
    color: ${({ theme }) => theme.textColor};

    > span {
      color: ${({ theme }) => theme.color.blueLight};
    }
  }
`;
