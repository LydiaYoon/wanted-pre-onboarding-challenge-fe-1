import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url(https://frontend-design-system.socar.kr/fonts/SpoqaHanSansRegular.woff2);
    font-weight: normal;
  }
  
  @font-face {
    font-family: 'Spoqa Han Sans';
    src: url(https://frontend-design-system.socar.kr/fonts/SpoqaHanSansBold.woff2);
    font-weight: bold;
  }

  :root {
    --color-black: #495057;
    --color-invalid: #e57373;
    --color-valid: #81c784;

    --button-main: #6b6bff;
    --button-light: #8787ff;
    --button-dark: #5252fa;
    --button-disabled: #ccc;

    --input-main: #dee2e6;
    --input-light: #eee;
    --input-dark: #c0c0c0;
  }

  .secondary {
    --button-main: #ce93d8;
    --button-light: #f3e5f5;
    --button-dark: #ab47bc;
  }
  
  .error {
    --button-main: #ff6b6b;
    --button-light: #ff8787;
    --button-dark: #fa5252;

    --input-main: #ff6b6b;
    --input-light: #ff8787;
    --input-dark: #fa5252;
  }
  
  .warning {
    --button-main: #ffd26b;
    --button-light: #ffde87;
    --button-dark: #facf52;
  }  

  .info {
    --button-main: #29b6f6;
    --button-light: #4fc3f7;
    --button-dark: #0288d1;
  }

  .success {
    --button-main: #38d9a9;
    --button-light: #63e6be;
    --button-dark: #20c997;

    --input-main: #38d9a9;
    --input-light: #63e6be;
    --input-dark: #20c997;
  }

  body,
  html {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #eee; 
    padding: 0px;
    margin: 0px;
    font-family: 'Spoqa Han Sans',sans-serif; 
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline:none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  p {
    margin: 0;
    color: var(--color-black);
  }

  .invalid {
    --color-black: #e57373;
  }
  
  .valid {
    --color-black: #81c784;
  }

  #app {
    width: 100%;
    height: 100%;
  }
  
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  } 
  
  button {  
    display: inline-block;
    margin: 0;
    padding: 0.4rem 0.8rem;

    width: auto;

    font-size: 24px;
    text-align: center;
    text-decoration: none;

    color: white;
    background: var(--button-main);
    &:hover, &:focus {
      background: var(--button-light);
    }
    &:active {
      background: var(--button-dark);
    }

    border: none;
    border-radius: 4px;
    outline: none;

    cursor: pointer;
    transition: 0.5s;

    &:disabled {
      background: var(--button-disabled);
      cursor: default;
    }
  }

  input,
  textarea {
    padding: 12px;
    border-radius: 4px;
    color: var(--color-black);
    background: white;
    border: 1px solid var(--input-main);
    &:hover, &:focus {
      border: 1px solid var(--input-dark);
    }
    font-size: 18px;
    box-sizing: border-box; 
  }
`;

export default GlobalStyle;
