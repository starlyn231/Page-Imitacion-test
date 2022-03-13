
import React from 'react'
import { Footer } from '../../view/home/componets/Footer';
import { Contactanos } from '../Contact/Contactanos';
import { Header } from '../header/Header';
import { ContainerHeader, CotainerFooter } from '../nosotros/styles/Nosotros';
import { PolicyComponent } from '../PolicyComponent/PolicyComponent'
import { ComponenAply, ComponenPrpuesta, ContainerLogoDone, ContainerText, DefaultButton, ImageDone, SubContainerPropuesta, TitlePropuesta } from '../PolicyComponent/styles/PolicyStyles';
import { ComponentHeader } from '../subComponents/ComponetHeaderPoliza/ComponentHeader';
import { Container } from './Styles/PolicyLife';
import ImagenDoneLogo from '../../asset/image/grupo-703.svg';
import { PolicyLifeData, TexPolizaVida } from './PolicyLifeContans'
//import { poliza } from './FireinsuranceConstant';



export const PolicyLife = () => {
  //const valor = true;
  return (
    <Container>
      <ContainerHeader>
        <Header />

      </ContainerHeader>


      {

        PolicyLifeData.map((item) => (

          <ComponentHeader
            title='Póliza de Vida'
            bodyText={item.text}
            titlePropu='Nuestras Ventajas '
            imagen='https://bsc.com.do/api/content/uploads/2019/11/vida-seguro.jpg'
            valor={item.valor}
          />))}


      <ComponenPrpuesta>


        <TitlePropuesta
        >{/* titlePropu */}</TitlePropuesta>


        <br />     <br />     <br />
        <SubContainerPropuesta style={{


        }}>

          {TexPolizaVida.map((item) => (
            <ContainerLogoDone  >


              <ImageDone src={ImagenDoneLogo} />



              <ContainerText >
                {item.text}
              </ContainerText>


            </ContainerLogoDone>
          ))}

          {/**  <ContainerLogoDone  >
    <ImageDone src={ImagenDoneLogo} />
    <ContainerText  >


    </ContainerText>
  </ContainerLogoDone>

*/}
        </SubContainerPropuesta>
      </ComponenPrpuesta>


      <ComponenAply style={{}}>

        <TitlePropuesta
        >Solicita el seguro</TitlePropuesta>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>


          <DefaultButton className="btnMore">
            Aplica ahora
          </DefaultButton>
        </div>
      </ComponenAply>





      <div style={{
        gridColumn: 'span 6',
        gridRow: 'span 1', width: '100%', display: 'flex', flexDirection: 'column'
      }}>


        <Contactanos />
      </div>
      <CotainerFooter>
        <Footer />
      </CotainerFooter>
    </Container>
  )
}
