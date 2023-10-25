import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import swiper from "./swiper";
import antd from "./antd";

const GlobalStyles = createGlobalStyle` 
  ${reset} 
  ${swiper}
  ${antd}

 &::-webkit-scrollbar {
    width: 10px;
  }
 &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
 &::-webkit-scrollbar-track {
    background-color: transparent;
  }


  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  body {
    line-height: 1.5;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }


  a {color: #000; text-decoration: none; outline: none}
  a:hover, a:active, a:link {color: "none"; text-decoration: none;}

  p {
    word-break: keep-all;
  }

  button {border: none;}

  span {
    display: inline-block;
  }

  label {
    cursor: pointer;
  }

`;

export default GlobalStyles;
