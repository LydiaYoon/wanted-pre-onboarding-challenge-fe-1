import styled from 'styled-components';

export const CircleButton = styled.button`
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  font-size: 60px;

  background: #38d9a9;
  &:hover,
  &:focus {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  position: absolute;
  right: 24px;
  bottom: 24px;

  border-radius: 50%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);
`;
