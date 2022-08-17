import styled from 'styled-components';

export const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  line-height: initial;
  word-break: break-all;
`;

export const TodoDetailWrapper = styled.div`
  height: 100%;
  overflow-y: auto;

  .title {
    padding-bottom: 12px;
    font-size: 21px;
  }

  .content {
    padding-bottom: 36px;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li div:last-child {
    color: #888;
  }

  .label {
    font-weight: bold;
  }
`;
