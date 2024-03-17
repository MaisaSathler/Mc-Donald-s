import styled,{css} from "styled-components";


const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`



export const Footer = styled.footer`
${center}
justify-content: start;
padding-left: 60px;
height: 12vh;
img{
    width: 3vw;
}
p{
    padding-left: 20px;
    font-family: "Roboto Flex", sans-serif;
    color: gray;
    
}

`

export const BoxFoot = styled.section`
/* border: solid 2px blue; */
width: 76vw;
${center}
justify-content:end;

`





export const Store = styled.div`
${center}
justify-content: space-evenly;
cursor: pointer;
img{
    width: 9vw;
}
/* border: solid 1px green; */
padding-left: 30px;
`