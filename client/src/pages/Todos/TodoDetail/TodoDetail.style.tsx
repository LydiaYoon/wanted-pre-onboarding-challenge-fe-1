import styled from 'styled-components';

export const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  line-height: initial;
  word-break: break-word;
`;

export const TodoDetailWrapper = styled.div`
  height: 100%;
  overflow-y: auto;

  .title {
    padding-bottom: 24px;
    font-size: 21px;
    font-weight: bold;
  }

  .content {
    padding-bottom: 36px;
    white-space: pre-wrap;
  }

  ul {
    border-top: 1px solid #dee2e6;
    padding: 24px 0 36px 0;
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
