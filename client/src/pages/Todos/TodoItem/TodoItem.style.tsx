import styled, { css } from 'styled-components';

export const TodoItemWrapper = styled.li`
  display: flex;
  padding: 12px 0;

  div:nth-child(1) {
    flex: 1;
    margin-top: 2px;
  }

  div:nth-child(2) {
    flex: 8;
    display: flex;
    line-height: initial;
    word-break: break-word;
  }
`;

export const CheckCircle = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

export const TodoItemTitle = styled.div<{ done: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--color-black);
  font-size: 21px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      color: #aaa;
      text-decoration: line-through;
    `}
`;
