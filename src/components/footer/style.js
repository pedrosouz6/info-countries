import Style from "styled-components";

export const Footer = Style.footer `
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    transition: .3s ease-in-out; 

    .container {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        height: 20px;
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 11pt;
    }

    a {
        font-size: 15pt;
        text-decoration: none;
    }
`