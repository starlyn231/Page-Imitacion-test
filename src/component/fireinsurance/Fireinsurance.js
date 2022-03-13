import React from 'react'
import { Footer } from '../../view/home/componets/Footer';
import { Contactanos } from '../Contact/Contactanos';
import { Header } from '../header/Header';
import { ContainerHeader, CotainerFooter } from '../nosotros/styles/Nosotros';
import { PolicyComponent } from '../PolicyComponent/PolicyComponent'
import { poliza } from './FireinsuranceConstant';
import { Container } from './styles/Styles';

export const Fireinsurance = () => {

  return (
    <Container>
      <ContainerHeader>
        <Header />



      </ContainerHeader>
      {

        poliza.map((item) => (

          <PolicyComponent title='Póliza de Incendio'
            bodyText={item.bodytext}
            titlePropu={item.titlePropu}
            imagen={item.imagenIncendio}
            valor={item.valor}

          />


        ))
      }

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
