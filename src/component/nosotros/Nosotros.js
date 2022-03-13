import React from 'react'
import { BtnContacto, TitleContact } from '../../view/home/style/Home';
import { Header } from '../header/Header';
import { ComponenPrpuesta, ComponentContact, ComponentHistory, ComponentSatify, ComponentSign, Container, ContainerHeader, ContainerText, CotainerFooter, DividerMaterialUi, Image, SubContainerPropuesta, WelcomeSC } from './styles/Nosotros'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Footer } from '../../view/home/componets/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Contactanos } from '../Contact/Contactanos';
export const Nosotros = () => {

  const pStyle = {
    fontSize: "24px",
    color: " #0961ad!important",
    gridColumn: '2/ span 4',
    gridRow: 'span 1',
    letterSpacing: '10px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '20px'

  };
  return (
    <Container>
      <ContainerHeader>
        <Header />

      </ContainerHeader>

      <h1 style={pStyle} > NUESTRA HISTORIA </h1>

      <WelcomeSC>
        <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'justify', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>

          <Image src=' https://bsc.com.do/stresources/Fausto-Pimentel.jpg' />






          <p style={{ justifyContent: 'flex-end' }}>
            Hola! Bienvenidos a nuestra página web oficial. Mi nombre es Fausto Arturo Pimentel Peña y soy el Presidente
            Ejecutivo del Banco Santa Cruz de la República Dominicana, una gran familia de 1,500 colaboradores dispuestos a
            entregarte lo mejor de nosotros para ver siempre el futuro junto a ti.
            Quiero contarte un poco de dónde venimos y por qué deberías elegirnos como tu aliado financiero.</p> <br /> <br />

          <p style={{ color: '#666666', fontSize: '16px', lineHeight: '24px', textAlign: 'justify' }} >¡Hola! Bienvenidos a nuestra página web oficial. Mi nombre es Fausto Arturo Pimentel Peña y soy el Presidente Ejecutivo del Banco Santa Cruz de la República Dominicana, una gran familia de 1,500 colaboradores dispuestos a entregarte lo mejor de nosotros para ver siempre el futuro junto a ti. Quiero contarte un poco de dónde venimos y por qué deberías elegirnos como tu aliado financiero.

            Banco Santa Cruz fue fundado el 18 de noviembre de 1983, bajo la razón social de Inversiones Santa Cruz, S. A. En ese momento, nuestro negocio estaba completamente orientado a la banca comercial, con una importante participación en el financiamiento de la producción agrícola. Cuando iniciamos, teníamos un claro objetivo de promover el desarrollo agroindustrial y el comercio y, con todas las ganas de aportarle valor a nuestro país, decidimos iniciar nuestras operaciones en nuestra primera
            oficina ubicada en la calle Restauración esquina Valerio, de la maravillosa ciudad corazón, Santiago de los Caballeros. ¡Orgullosamente santiagueros!

            Luego de 16 años de exitosa operación necesitábamos un nuevo reto. Así que en el año 1999, la Junta Monetaria del Banco Central de la República Dominicana, nos aprobó la solicitud de Inversiones Santa Cruz, S. A. para operar como banco de servicios múltiples. El 1ero de noviembre del 1999, con el respaldo de un dinámico grupo de empresarios, nuestra institución inició sus operaciones bajo la nueva razón social “Banco Múltiple Santa Cruz, S. A.”. Felices ya de operar como banco múltiple dominicano, nuestra propuesta de negocios siempre se diferenció por ofrecer un estilo financiero de alta calidad, basado en los principios del servicio personalizado y con una respuesta frente al cliente ágil, transparente y segura.

            En el año 2000, nuestra oficina principal estrenó nuevas y modernas instalaciones en la Ave. 27 de febrero no. 49 esquina Sabana Larga, en Santiago que dieron acogida a nuestro gran equipo de profesionales expertos en áreas de negocios tanto de Banca Persona como Banca Empresa. Cuatro años más tarde, como parte de nuestro plan de crecimiento y expansión de nuestra red de centros de negocios, en el año 2004, trasladamos nuestra sede principal a la ciudad de Santo Domingo, en la Ave. Lope de Vega del sector de Naco, manteniendo así dos oficinas principales: una en la zona norte y una en la zona metropolitana del país.
            La pasión por nuestros clientes siempre ha sido el principal cimiento de nuestra institución, es por esto que nuestro enfoque estratégico siempre ha girado en torno a ver el futuro junto a ellos.</p>

        </div>


      </WelcomeSC>


      <ComponentHistory>




      </ComponentHistory>

      <ComponenPrpuesta>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: '1500',
          width: '100%'
        }}></div>
        <h2
          style={{
            fontSize: '27.2px', lineHeight: '35.3px', color: '0e3252', textAlign: 'center',
            textTransform: 'uppercase'
          }} >Nuestra propuesta de valor</h2>
        <br />
        <br />
        <div className='' style={{
          marginBottom: ' 20px 20px 0 0',
          textAlign: 'center', fontFamily: ' Montserrat,sans-serif',
          fontSize: '20px'
        }} >La propuesta de valor que le ofrecemos
          consta de tres principales ejes que hacen de la experiencia del cliente en nuestro banco, una memorable y con ganas de más:
        </div>
        <br />     <br />     <br />
        <SubContainerPropuesta style={{


        }}>


          <ContainerText style={{}}>
            <span style={{ margin: '10px' }}><CheckCircleOutlineIcon fontSize="large" color="success" /></span>
            <p style={{ fontSize: '20px', fontWeight: '400', }}>   <b> Ponemos a nuestro cliente en el centro de todo lo que hacemos: </b>nuestro cliente, tanto interno como externo, es nuestra más preciada posesión. Por eso, nuestra relación con ellos va algo más allá de lo comercial; somos sus socios, sus consejeros, sus aliados, sus amigos.
              Ver el futuro junto a ellos y acompañarlos en el camino siempre ha sido y será nuestro principal enfoque estratégico.</p>
          </ContainerText>


          <ContainerText style={{}}>
            <span style={{ margin: '10px' }}><CheckCircleOutlineIcon fontSize="large" color="success" /></span>
            <p style={{ fontSize: '20px', fontWeight: '400', }}>  <b> Ponemos a nuestro cliente en el centro de todo lo que hacemos: </b>nuestro cliente, tanto interno como externo, es nuestra más preciada posesión. Por eso, nuestra relación con ellos va algo más allá de lo comercial; somos sus socios, sus consejeros, sus aliados, sus amigos. Ver el futuro junto a ellos y acompañarlos en el camino siempre ha sido y será nuestro principal enfoque estratégico.</p>
          </ContainerText>

          <ContainerText style={{}}>
            <span style={{ margin: '10px' }}><CheckCircleOutlineIcon fontSize="large" color="success" /></span>
            <p style={{ fontSize: '20px', fontWeight: '400', }}>  <strong> Ponemos a nuestro cliente en el centro de todo lo que hacemos: </strong>nuestro cliente, tanto interno como externo, es nuestra más preciada posesión. Por eso, nuestra relación con ellos va algo más allá de lo comercial; somos sus socios, sus consejeros, sus aliados, sus amigos.
              Ver el futuro junto a ellos y acompañarlos en el camino siempre ha sido y será nuestro principal enfoque estratégico.</p>
          </ContainerText>
        </SubContainerPropuesta>
      </ComponenPrpuesta>
      <ComponentSatify>
        <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'justify', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px', fontWeight: '400px', lineHeight: '24px' }}>
            Para satisfacer las necesidades de nuestros clientes, contamos con un completo portafolio de productos y servicios orientados a servir de manera especial y oportuna a cada uno de ellos. Al pasar los años, hemos ido fortaleciendo nuestras principales líneas de negocios de Banca Persona, Banca Empresa, Banca Internacional y Tesorería, sirviendo actualmente a más de 140,000 clientes que han depositado su confianza en nosotros. Aportar valor al desarrollo de nuestro país siempre ha sido para nosotros prioritario, por eso a través de toda nuestra historia, hemos movilizado importantes recursos al segmento de banca empresarial, destinados principalmente al comercio, la industria, el turismo, la agricultura, entre otros, participando activamente en proyectos que contribuyen a elevar la productividad y eficiencia de las empresas así como a generar un impacto positivo en nuestra sociedad.

            <br /><br />

            En el ámbito internacional, actualmente mantenemos un importante liderazgo en la línea de negocios de comercio internacional, con una perspectiva global y participativa en los flujos transaccionales y financieros que genera esta importante actividad económica. Contamos con ágiles mecanismos de financiamientos para operaciones internacionales, a través de nuestra red de bancos corresponsales e instituciones de fomento y desarrollo. Así como también, nuestra mesa de divisas es un participante importante en el mercado; a través de ella realizamos significativas transacciones de múltiples monedas extranjeras, específicamente dólar estadounidense, euro, franco suizo, libra esterlina y dólar canadiense.
            <br /><br />
            Desde nuestros inicios como banco de servicios múltiples, siempre hemos presentado una excelente ejecución de nuestros principales indicadores financieros, gracias a cada uno de los clientes que han decidido ver el futuro junto a nosotros. Actualmente, nos sentimos orgullosos de mantener una importante posición en el mercado financiero nacional, siendo la pasión por el servicio que identifica a nuestros colaboradores el factor diferenciador frente a nuestros competidores.

            Gracias por tomarte el tiempo de conocer más sobre nosotros. Nos encantará poder servirte.
            ¡Veamos el futuro juntos!

          </p>
        </div>
      </ComponentSatify>
      <br />


      <ComponentSign>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px', fontWeight: '400px', lineHeight: '24px',
          color: 'rgb(102, 102, 102)',
          textAlign: 'center'
        }}>
          <img src='https://bsc.com.do/stresources/firma.png' style={{ width: '300px', alignSelf: 'center' }} />
          <p>Fausto A. Pimentel Peña</p>

          <p> Presidente Ejecutivo</p>
          <p>  Banco Santa Cruz</p>
        </div>

      </ComponentSign>

      <div style={{
        gridColumn: 'span 6',
        gridRow: 'span 1', width: '100%', display: 'flex', flexDirection: 'column'
      }}>


        <Contactanos />
      </div>
      <CotainerFooter>
        <Footer />
      </CotainerFooter>
    </Container >
  )
}
