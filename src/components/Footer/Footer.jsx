import * as S from "./footer_styled"
import logo from "../../assets/logo.png"
import googleplay from "../../assets/googleplay.png"
import appstore from "../../assets/appstore.png"


export default function Footer() {
  return (
    <S.Footer>
      <>

    <img src={logo} alt="" />
    <p>© McDonald’s 2024</p>
      </>
      <S.BoxFoot>
      <S.Store>
        <img src={googleplay} alt="" />
       </S.Store>
       <S.Store>
        <img src={appstore} alt="" />
       </S.Store>
      </S.BoxFoot>
      
    </S.Footer>
  )
}