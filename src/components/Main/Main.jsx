import { useState } from "react";
import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import bone from "../../assets/bone.png"
import bigmac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"



export default function Main() {

const [lanche, setLanche] = useState("https://s3-alpha-sig.figma.com/img/fcfc/8dc1/460cc9bb5f8dc70b96eccd42c5e52e3a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QAyj2ByBS~RVm5J8sdXmxzA3WZnCre9kebDO0G5y9NPGQUmlZ7jeCVrcZ7Yt8dEpPwCa0~F~htIur7McOxt2WsRB86sM3K7QpIBk-~wsqF16mIwU-M17wzNwjoAYhmO0zTr6zlRMIXV8rHUmXCemwdHGNZ2fbjDXeLVcztqFBwLQVzFos3KOgm17b-Qq2KuNWBu2vC9-qXKuW1LQeKj4s2lWBnZxxCnZCXnFITJhJlSOCbY82ajgagBV07twpyf4Gju21WWEHrxIwCr0qtuKdQ-OxzQ52MDay3CxyNtqV3Ar0H52mzOiT22bVyW2jP845p439l9RlIKl7jWZtMKj1g__")

function Hamburguer(){
  setLanche("https://s3-alpha-sig.figma.com/img/fcfc/8dc1/460cc9bb5f8dc70b96eccd42c5e52e3a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QAyj2ByBS~RVm5J8sdXmxzA3WZnCre9kebDO0G5y9NPGQUmlZ7jeCVrcZ7Yt8dEpPwCa0~F~htIur7McOxt2WsRB86sM3K7QpIBk-~wsqF16mIwU-M17wzNwjoAYhmO0zTr6zlRMIXV8rHUmXCemwdHGNZ2fbjDXeLVcztqFBwLQVzFos3KOgm17b-Qq2KuNWBu2vC9-qXKuW1LQeKj4s2lWBnZxxCnZCXnFITJhJlSOCbY82ajgagBV07twpyf4Gju21WWEHrxIwCr0qtuKdQ-OxzQ52MDay3CxyNtqV3Ar0H52mzOiT22bVyW2jP845p439l9RlIKl7jWZtMKj1g__")
}

function Batata(){
  setLanche("https://s3-alpha-sig.figma.com/img/07b7/9eff/ebc54b3cac34d0b2a9018afb9ffe47be?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IizYw64nujmMrF3DZB1953baciC4krknzCQ4odE2EgHGdDbWcpHPTPNbEyYGO-NVhBBYssZY51z9Ioyea2WPjJscTZt0k~8KEnVrrciX5pM-XfDYOVQK5aMtUYoT1bdAh9IcBqhexUzUYFmN3jh5uDmK7IIrvhHfZZnIc3YwwMrUrklA0d63k5vJcp~~ZuSCOSXo1w5Ivyp1OPYCwIFldjlVwCnVmxhsITYqTrRNykp-Hg-Hc1iItxx2w-nE2emwu1GGjpcppvoGrVCJUyQDw8GIaRGeMsKKjE1xqNVhZsXXl8MOUkN5Pt4c0XAl6z0YYUKoagWb684-wqayhTsdew__")
}

function Sorvete(){
setLanche("https://s3-alpha-sig.figma.com/img/cbe8/c88c/6e92724994ab6e91cb2dfd7d949cad38?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jX8zod8fLVMuJH5HUwAjzcjWfvP1N5BhcHN1-IeaRgSBr5lx0KTsG~ibW5duACi8nozCMQMbEGVBKzUSDHRInoZNfI37BVOZfn3ncFPBDigYsZNYUCHc04fwbwC7VgALXl0HWhEk~yHUL4aSKSJWBN-j1rA7Nuee0eUcunxfWJsvg1BAAzaNUzIInKEE68CM~bsb97OoXZUwnjJANYsnrZhXnG3Wes6W~~zwoQfa~A545QML5rTlyj5gyzrsJTpDFZWDV-f~NhrzHKhaQESHaySRaetOUT36M7Gf~vabxo9ob2bozxIUY7wfOLYDyu8wG8NPdLQRnVxxUwcFzvYEVQ__")

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