import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);

  h3 {
    padding: 18px 0;
    font-size: 21px;
    font-weight: bold;
    color: var(--color-black);
  }

  p {
    margin: 2px 0 18px 0;
  }

  input {
    margin: 4px 0 14px 0;
  }

  .auth-form-wrapper {
    margin: 20px 32px;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-top: 36px;
    color: #aaa;
  }
`;

export default AuthContainer;
