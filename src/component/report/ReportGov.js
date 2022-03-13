import React from 'react'
import { Footer } from '../../view/home/componets/Footer'
import { Header } from '../header/Header'
import { ContainerHeader, CotainerFooter } from '../nosotros/styles/Nosotros'
import Informe from '../../asset/image/fachada-informe-anual.jpg';
import {
  Container, ContainerCenter, ContainerImage, Image, ContainerCard, Card, ContainerMain,
  Title, SubContainer, TextContainer, TextInforme
} from './styles/Styles';
import { localInformation } from './ReportConstant'
import { SmallHeightDivider } from '../../theme/Styles';
import { Button } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Contactanos } from '../Contact/Contactanos';
export const ReportGov = () => {
  return (
    <Container> <ContainerHeader>
      <Header />
    </ContainerHeader>
      <ContainerImage>
        <SubContainer>
          <Image src={Informe} />
          <TextContainer >
            <span style={{ width: "240px", color: 'rgb(102, 102, 102)', margin: '15px' }}>
              <h2 style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '24px',
                fontWeight: '600', color: 'rgb(9, 97, 173)', letterSpacing: '10px',
                margin: '30px', marginTop: '40px', width: '458px', textTransform: 'uppercase',
                maxWidth: '100%', lineHeight: '28.8px'
              }}>Informe Anual Gobierno Corporativo</h2>
            </span>
            <TextInforme style={{

            }}>
              El Banco Múltiple Santa Cruz, S.A. en la Asamblea General Extraordinaria de Accionistas celebrada en fecha
              26 de enero de 2013 actualizó su gestión de gobierno corporativo conforme a la nueva Ley de Sociedades Comerciales y Empresas Individuales de Responsabilidad Limitada (Ley No. 479-08) con el objetivo de adecuar a la sociedad a las mejores prácticas de Gobierno Corporativo. El presente informe anual es un ejercicio de análisis y revisión de la situación
              actual, y de implementación a las buenas prácticas de gobierno adoptadas, teniendo siempre presente
              la búsqueda de la fórmula que mejor defienda los intereses de los accionistas y la creación de valor de la empresa.
            </TextInforme>

          </TextContainer>
        </SubContainer>
      </ContainerImage>
      <ContainerCenter>
        <ContainerMain>
          <div style={{ flexDirection: 'column', textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}><Title >INFORMES Y ASAMBLEAS</Title></div>
            <Button style={{
              backgroundColor: 'rgb(255, 255, 255)',
              borderBottomColor: 'rgb(9, 97, 173)', borderColor: 'rgb(9, 97, 173)',
              borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', padding: '2px 15px 2px 15px ',
              color: 'rgb(9, 97, 173)',
            }} variant="outlined" href="#outlined-buttons">
              Descargables
            </Button>
          </div>
          <ContainerCard>




            {
              localInformation.map((item) => (
                <Card key={item.id}>

                  <h3 style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: '16px',
                    fontWeight: '400', color: 'rgb(102, 102, 102)', letterSpacing: '5px',
                    marginTop: '40px'
                  }}>{item.title}</h3>
                  <SmallHeightDivider />
                  <div style={{ marginTop: '10px' }}>


                    <Button variant="contained">{item.btnInformation}</Button>
                  </div>
                </Card>
              ))
            }


          </ContainerCard>

        </ContainerMain>

      </ContainerCenter>
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
