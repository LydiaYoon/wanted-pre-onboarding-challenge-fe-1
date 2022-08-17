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

  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    font-size: 18px;
    box-sizing: border-box;
  }

  textarea {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    height: 100%;
    font-size: 18px;
    box-sizing: border-box;
    resize: none;
  }
`;
