import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { isMobile } from 'react-device-detect';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
    }
    *::before,
    *::after,
    * {
        font-family: var(--primary-font) !important;
        box-sizing: border-box !important;
    }
    html {
        width: 100vw;
        height: 100vh;
        font-size: 14px;
    }

    html, body {
        padding: 0em;
        margin: 0em;
        font-size: 14px;
        font-weight: 400;
    }
    body {
        width: 100%;
        height: 100vh;
    }
    #root {
        height: 100%;
        width: 100%;
    }
    :root{
        --primary-color: #09244c;
        --white-color: #ffffff;
        --primary-grey: #333333;
        --primary-black: #000000;
        --secondary-color: #0ED5FF;
        --placeholder-grey: #736C6C;
        --primary-font: 'SF Pro Display', sans-serif;
        --off-white: #F4F4F2;
        --lemon-green: #7EC544;
        --lighter-grey: #828282;
    }
    h1,h2,h3,h4,h5,h6,p,ul{
      padding: 0;
      margin: 0;
    }
    h5 {
        font-size: ${isMobile ? '20px' : '30px'};
        font-weight: ${isMobile ? '500' : '200'};
    }
    a {
        color: #09244c;
    }
    .recharts-cartesian-axis-tick {    
        font-size: 12px;
        font-weight: 300;
        font-family: var(--primary-font);
    }

    .scrollbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
		background-color: #F5F5F5;
	}

	.scrollbar::-webkit-scrollbar {
		width: 8px;
		background-color: #F5F5F5;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
		background-color: #c1c1c1;
	}
    .link {
        cursor: pointer;
        font-weight: 400;
        color: #4185e9;
        text-decoration: underline;
    }
    .link:hover {
        color: #4185e9;
        text-decoration: none;
    }
    .link-out {
        cursor: pointer;
        font-weight: 400;
        color: #4185e9;
        text-decoration: none;
    }
    .link-out:hover {
        color: #4185e9;
        text-decoration: underline;
    }
    .modal-content {
        padding: 10px 30px;
    }
    .modal-header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        
    }
    .modal-title {
        font-size: 16px;
        font-weight: 600 !important;
    }
    .modal-body {
        padding: 1rem 0;
    }
    object {
        pointer-events: none;
    }
    ::-webkit-input-placeholder {font-style: ; background: none !important;} /*Chrome */
    :-moz-placeholder {font-style: italic} /*ff*/
    :-ms-input-placeholder {font-style: italic} /*ie latest */
    input:-webkit-autofill, select:-webkit-autofill, textarea:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 500px white inset;
    }
    section {
        padding: 20px 0;
    }
`;

export default GlobalStyle;
