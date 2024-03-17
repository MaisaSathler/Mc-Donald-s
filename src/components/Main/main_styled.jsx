import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`


export const BoxOne = styled.section`
height: 80vh;
background-color:#ffc72c;

${center}
justify-content: space-around;

`
export const BoxImage = styled.div`
/* border: solid 1px green; */
width: 30vw;
height: 25vw;
${center}
img{
    width: 25vw;
}

`
export const BoxText = styled.div`

width: 40vw;
height: 50vh;
${center}
p{
    color: white;
}
span{
    color:#DB0007;;
}
font-size: 50px;
font-weight: 800;
font-family: "Inter", sans-serif;

`
export const BoxTwo = styled.section`
height: 30vh;
background-color:#ffc72c;

img{
    /* border:  solid 1px; */
    width:9vw;
    cursor:pointer;
}
${center}
gap: 70px;
padding-bottom: 100px;

`


export const Promocao = styled.section`
background-color: #FEB706;
/* border: solid 1px; */
height: 90vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
    font-size: 35px;
    /* border: solid 1px; */
    width: 20vw;
    height: 40vh;
    ${center}
    font-family: "Roboto Flex", sans-serif;
    
}
`
export const Center = styled.div`

width: 85vw;
height: 100vh;
${center}
justify-content: space-around;
padding-bottom: 20px;
`






export const Card = styled.div`
/* border: solid 2px green; */
width: 20.5vw;
height: 45vh;
text-align: center;
background-color: white;
border-radius: 13px;

p{
   /* border: solid 2px green;  */
   height: 9vh;
   ${center}
   font-family: "Roboto Flex", sans-serif;
   
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Roboto Flex", sans-serif;
}
`