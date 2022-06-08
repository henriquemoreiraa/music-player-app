import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0px 0px 7px #c3c1c1;
    height: 86vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .inicialSearch {
        width: 90%;
        margin: auto;
        margin-bottom: 0px;
        border-bottom: 1px solid #16171a;
        div {
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;

            p {
                margin-right: 5px;
            }
        }
        
    }

    .genres {
        width: 90%;
        margin: auto;
        margin-top: 15px;
        div {
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;
        }
    }
`;