import Style from "styled-components";

const transition = ".3s ease-in-out";

export const Section = Style.section `
    width: 100%;
    height: 90px;
    transition: ${transition};
    border-top: 2px solid white;
    display: flex;
    align-items: center;

    form {
        height: 35px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    form select {
        height: 100%;
        border-radius: 5px;
        width: 300px;
        padding: 0 5px;
    }

    `