import Style from "styled-components";

const transition = ".3s ease-in-out"

export const HeaderS = Style.header `
    width: 100%;
    transition: ${transition}; 
    height: 70px;

    .container {
        width: 100%;
        height: 70px;       
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .theme {
        width: 53px;
        height: 25px;
        border-radius: 50px;
        position: relative;
        cursor: pointer;
        transition: ${transition}; 
    }

    .theme input {
        position: absolute;
        top: 50%;
        left: 5px;
        cursor: pointer;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        transition: ${transition}; 
        border-radius: 50%;
    }

    .theme.active input {
        left: 30px;
    }
`