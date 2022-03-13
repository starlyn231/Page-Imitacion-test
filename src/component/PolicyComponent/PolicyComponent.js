import React from 'react'
import {
  ComponenAply,
  ComponenPrpuesta, Container, ContainerImage,
  ContainerLogoDone,
  ContainerText, ContainerTextInforme, DefaultButton, Image, ImageDone, SubContainer, SubContainerPropuesta, TextContainer,
  TextInforme,
  TitleMain,
  TitlePropuesta
} from './styles/PolicyStyles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ImagenDoneLogo from '../../asset/image/grupo-703.svg';
import { TexPolizaIncendio } from './PolicyFire'
import { Button } from '@mui/material';
import { ComponentHeader } from '../subComponents/ComponetHeaderPoliza/ComponentHeader';
export const PolicyComponent = ({ title, bodyText, titlePropu, imagen }) => {

  console.log(TexPolizaIncendio)

  return (
    <>




      <ComponentHeader
        title={title}
        bodyText={bodyText}
        imagen={imagen}
        TexPolizaIncendio={TexPolizaIncendio} />

      <ComponenPrpuesta>


        <TitlePropuesta
        >{titlePropu}</TitlePropuesta>


        <br />     <br />     <br />
        <SubContainerPropuesta style={{


        }}>

          {TexPolizaIncendio.map((item) => (
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

    </>

  )
}
