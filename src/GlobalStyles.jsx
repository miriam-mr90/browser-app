import { css, createGlobalStyle } from 'styled-components';

const Reset = css`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export default createGlobalStyle`
    ${Reset}

    @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'), local('OpenSans'),
            url('../src/assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype'), /* Safari, Android, iOS */
    }

    body {
        background: ${props => props.theme.color.bodyBg};
        color: ${props => props.theme.color.text};
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        margin: 0;
    }

    h1 {
        font-weight: initial;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 1450px;
        padding: 0 14px;
    }
`;
