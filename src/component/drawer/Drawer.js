import React, { useState } from 'react';
import { DrawerList, TitleList, DrawerListItemContainer, ListText, MenuButton, StyledDrawer, IconClose, ContainerIcon } from './style/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from '@mui/material';

export const Drawer = () => {

  const [drawerState, setDrawerState] = useState(false);

  const goToRoute = () => {
    setDrawerState(false);
    //history.push(route);
  };
  return <div>

    <MenuButton
      color='inherit'
      startIcon={<MenuIcon style={{ fontSize: "35px" }} />}
      name='drawerState'
      onClick={() => setDrawerState(!drawerState)}

    />
    <StyledDrawer
      anchor="right"
      open={drawerState}
      onClose={() => setDrawerState(!drawerState)}
    > <DrawerList>
        <div> <TitleList>Menu</TitleList>  </div>
        <ContainerIcon><IconClose onClick={() => setDrawerState(!drawerState)} /></ContainerIcon>
        <DrawerListItemContainer>
          <ListText>Sobre nosotros</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Sala de prensa</ListText>
        </DrawerListItemContainer>
        <DrawerListItemContainer>
          <ListText>Para ti</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Para Mi Negocio</ListText>
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
        </DrawerListItemContainer>
      </DrawerList>
    </StyledDrawer>



  </div>;
};
