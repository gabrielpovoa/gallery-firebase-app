import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .3s linear;
        outline: none;
        border: none;
    }

    html {
        font-size: 62.5%;
        scroll-padding-top: 8rem;
    }
    body {
        background-color: #222;
        color: #FFF;
    }
`