import logo from "../../assets/logo.png"
import app from "../../assets/app1.png"
import celapp from "../../assets/app.png"
import * as S from "./header_styled"

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="" />
        <S.BtnApp>
            <S.App>
                <img src={app} alt="" />
                <p>Baixe o App</p>
            </S.App>
            <S.App color="#FFC72C">
                <p>Peça seu Méqui</p>
                <img src={celapp} alt="" />
            </S.App>
        </S.BtnApp>
    </S.Header>
  )
}