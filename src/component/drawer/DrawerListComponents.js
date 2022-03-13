import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DrawerList, TitleList, DrawerListItemContainer, ListText, MenuButton, StyledDrawer, IconClose, ContainerIcon } from './style/Drawer';
export const DrawerListComponents = () => {

  const navigate = useNavigate();

  const Nosotros = () => {
    navigate("/nosotros", {
      replace: true
    })
  }

  const reportgov = () => {
    navigate("/reportgov", {
      replace: true
    })
  }

  const OnRoutefireinsurance = () => {
    navigate("/fireinsurance", {
      replace: true
    })
  }


  const OnRoutePolicylife = () => {
    navigate("/policylife", {
      replace: true
    })
  }
  return (
    <div>
      <DrawerListItemContainer>
        <ListText onClick={Nosotros}>Sobre nosotros</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText onClick={reportgov}>Informe Anual</ListText>
      </DrawerListItemContainer>
      <DrawerListItemContainer>
        <ListText onClick={OnRoutefireinsurance}>Póliza De Incendio </ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText onClick={OnRoutePolicylife}>Póliza De Vida</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Para tu empresa</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Banca Seguros</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Tarifarios y tasas</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Proteción al usuario</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Informacion</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Noticias</ListText>
      </DrawerListItemContainer>

      <DrawerListItemContainer>
        <ListText>Canales de contacto</ListText>
      </DrawerListItemContainer></div>
  )
}
