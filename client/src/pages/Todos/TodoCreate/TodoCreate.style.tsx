import styled from 'styled-components';

export const TodoCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  textarea {
    height: 100%;
    resize: none;
  }
`;
