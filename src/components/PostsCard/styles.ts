import styled from 'styled-components';

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

export const PostCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 280px;
  height: 500px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  padding: 20px;
  border-radius: 18px;
  gap: 15px;
  transition: all 0.3s linear;
  box-shadow: 0px 202px 343px rgba(35, 33, 38, 0.05), 0px 84.3908px 143.297px rgba(35, 33, 38, 0.0279067), 0px 45.1193px 76.6135px rgba(35, 33, 38, 0.0166157), 0px 25.2935px 42.9489px rgba(35, 33, 38, 0.00924013), 0px 13.4332px 22.8099px rgba(35, 33, 38, 0.00436612), 0px 5.58986px 9.49169px rgba(35, 33, 38, 0.00139357);

  > h2 {
    color: ${({ theme }) => theme.textColor};
  }

  > p {
    color: ${({ theme }) => theme.textColor};
  }

  > img {
    border-radius: 18px;
    width: 100%;
    overflow: hidden;
  }

  &:hover {
    box-shadow: 0px 72px 104px rgba(52, 195, 227, 0.09), 0px 21.7059px 31.353px rgba(52, 195, 227, 0.058643), 0px 9.01552px 13.0224px rgba(52, 195, 227, 0.045), 0px 3.26074px 4.70995px rgba(52, 195, 227, 0.031357);
  }
`;

export const PostCardComunity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    line-height: 0;
    background-color: transparent;
    border: none;

    > img {
      width: 22px;
      height: 22px;
    }
  }
`;
