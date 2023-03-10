import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

:root {
    //Colors
    --color-dark: #050505;
    --color-dark-500: #1F1F1F;
    --color-dark-400: #2D2D2D;
    --color-dark-300: #3A3A3A;

    --color-grey: #757575;
    --color-grey-500: #E9E9E9;
    --color-grey-400: #F4F4F4;

    --color-white: #FFFFFF;
    --color-purple: #A445ED;
    --color-purple-200: rgba(164, 69, 237, 0.25);
    --color-red: #FF5252;

    // Font
    --font-inter: 'Inter', sans-serif;
    --font-lora: 'Lora', serif;
    --font-inconsolata: 'Inconsolata', monospace;
}

`;
