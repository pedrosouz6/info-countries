import Style from "styled-components";

export const Section = Style.section `
    padding: 15px 0 70px 0;
    width: 100%;
    transition: .3s ease-in-out;
    z-index: 10;

    p {
        margin-bottom: 15px;
    }

    .history {
        margin: 30px 0;
    }

    .history h3 {
        text-align: center;
        margin-bottom: 15px;
    }

    .history p {
        text-indent: 30px;
    }
`