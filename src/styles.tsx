import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    .oi { 
        box-shadow: 0px 0px 7px #c3c1c1;
        height: 86vh;
        width: 25%;
      }

    .divSongs {
    height: 75vh;
    position: fixed; 
    overflow-y: scroll;
    z-index: 1;

    ::-webkit-scrollbar {
        width: 15px;    
      }
      
    ::-webkit-scrollbar-track {
          
      }
      
    ::-webkit-scrollbar-thumb {
        background-color: #c3c1c1;                
      }
    }

    .title {
        margin: 10px 10px;
        font-size: 40px;
        color: #16171a;   
    }

    .top {
        height: fit-content;
        width: 100%;
        box-shadow: 4px 1px 7px #c3c1c1
    }
      
    
`;

export const Music = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
    cursor: pointer;


`;