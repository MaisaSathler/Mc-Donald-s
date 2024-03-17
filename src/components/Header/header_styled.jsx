import styled,{createGlobalStyle, css} from "styled-components"




export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Header = styled.header`
/* border: solid 1px red; */
${center}
justify-content: space-between;
padding-left: 60px;
height: 12vh;
font-family: "Inter", sans-serif;

`
export const BtnApp = styled.div`
/* border: solid 1px red; */
width: 30vw;
${center}
justify-content: space-evenly;
`
export const App = styled.div`
/* border: solid 1px red; */
border-radius: 10px;
width: 10.1vw;
height: 6vh;
${center}
justify-content: space-evenly;
background-color: ${props => props.color};
p{
    font-size: 0.8rem;
    font-weight: 700;
}
cursor: pointer;
`