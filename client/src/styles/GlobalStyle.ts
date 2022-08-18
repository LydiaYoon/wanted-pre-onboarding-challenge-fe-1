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
    --button-color: white;
    --button-bg-color: #6b6bff;
    --button-hover-bg-color: #8787ff;
    --button-active-bg-color: #5252fa;
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
  }

  p.invalid {
    color: #ff8787;
  }
  
  p.valid {
    color: #888;
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

    color: var(--button-color);
    background: var(--button-bg-color);
    &:hover, &:focus {
      var(--button-hover-bg-color);
    }
    &:active {
      background: var(--button-active-bg-color);
    }

    border: none;
    border-radius: 4px;
    outline: none;

    cursor: pointer;
    transition: 0.5s;

    &:disabled {
      background: #ccc;
      cursor: default;
    }
  }

  button.success {
    --button-bg-color: #38d9a9;
    --button-hover-bg-color: #63e6be;
    --button-active-bg-color: #20c997;
  }
  
  button.error {
    --button-bg-color: #ff6b6b;
    --button-hover-bg-color: #ff8787;
    --button-active-bg-color: #fa5252;
  }
  
  button.warning {
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
    --button-active-bg-color: #fafa52;
  }  

  .textbox,
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    font-size: 18px;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
