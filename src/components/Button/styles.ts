import styled from 'styled-components';

export const Container = styled.button`
  width: 140px;
  height: 52px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff;
  background: linear-gradient(224.78deg, #5390E3 8.12%, #1357B3 92.21%);
  border-radius: 4px;

  &:hover {
      box-shadow: 0px 72px 104px rgba(52, 195, 227, 0.09), 0px 21.7059px 31.353px rgba(52, 195, 227, 0.058643), 0px 9.01552px 13.0224px rgba(52, 195, 227, 0.045), 0px 3.26074px 4.70995px rgba(52, 195, 227, 0.031357);
    }

  &[disabled] {
    cursor: not-allowed !important;
    background: gray !important;
  }
`;
