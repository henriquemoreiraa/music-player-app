import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    .oi { 
        box-shadow: 0px 0px 7px #cecece;
        height: 86vh;
        width: 15%;
      }

    .divSongs {
    height: 75vh;
    position: fixed; 
    overflow-y: scroll;
    z-index: 1;
    }

    .title {
        margin: 10px 10px;
        font-size: 40px;
        color: #16171a;
        
    }
      
    
`;

export const Music = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
    

    div {
        margin-right: 20px;
        margin-bottom: 20px;
        box-shadow: 0px 0px 7px #cecece;
        padding: 5px 5px 25px;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: fit-content;
        border-radius: 10px;
        color: #16171a;
    }
    img {
        margin: 0;
        width: 100%;
        border-radius: 8px;
    }
    
    h1 {
        font-size: 22px;
        margin-bottom: 2px;
    }
    h3 {
        margin: 0;
        font-size: 14px;
        color: #4c4e51
    }
`;