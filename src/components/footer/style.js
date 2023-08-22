import Style from "styled-components";

export const Footer = Style.footer `
    width: 100%;
    min-height: 60px;
    position: fixed;
    bottom: 0;
    transition: .3s ease-in-out;     
    padding: 10px;

    .container {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 900px) {
            flex-direction: column;
        }
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