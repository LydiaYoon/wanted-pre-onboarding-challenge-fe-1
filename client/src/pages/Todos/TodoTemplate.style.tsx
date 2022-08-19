import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);

  .link {
    display: flex;
    justify-content: center;
    margin-top: 36px;
    color: #aaa;
  }
`;

export default TodoContainer;
