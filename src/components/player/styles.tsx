import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #16171a;
    width: 100%;
    height: 110px;
    position: fixed; 
    z-index: 1;

    box-shadow: 0px -1px 7px #16171aa0;
    
    .musicDiv {
        width: 400px;
        margin-top: 5px;
    }

    .test {
        width: 300px;
    }
    .music {
        display: flex;
        color: #fff;
        align-items: center;
        margin-left: 5px;

        h1 {
            font-size: 18px;
            margin-bottom: 2px;
        }
        h3 {
            margin-top: 0px;
            font-size: 14px;
            color: #b5b5b5;
        }

        div {
            margin-left: 8px;
        }
        img {
            width: 100px;
            height: 100px;
        }
    }

    .player {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: auto;


        button {
            border: none;
            outline: none;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
        }
    }

`; 