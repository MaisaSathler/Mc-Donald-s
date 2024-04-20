import { useState } from "react";
import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import bone from "../../assets/bone.png"
import bigmac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import bigmac2 from "../../assets/bigmac2.png"
import casquinha from "../../assets/casquinha.png"
import batata2 from "../../assets/batata2.png"



export default function Main() {

const [lanche, setLanche] = useState(bigmac2)

function Hamburguer(){
  setLanche(bigmac2)
}

function Batata(){
  setLanche(batata2)
}

function Sorvete(){
setLanche(casquinha)

} 





  return (
    <main>
     <S.BoxOne>
      <S.BoxImage>
        <img src={lanche} alt="" />
       
      </S.BoxImage>
      <S.BoxText>
        <p>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>? </p>
      </S.BoxText>
     </S.BoxOne>

     <S.BoxTwo>
      <img onClick={Hamburguer} src={bigmac} alt="" />
      <img onClick={Batata} src={batata} alt="" />
      <img onClick={Sorvete} src={sorvete} alt="" />


     </S.BoxTwo>





        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
           <Card imagem={bone} texto={"Confira as medidas que o Méqui adotou!"} />
            </S.Center>
        </S.Promocao>
    </main>
  )
}