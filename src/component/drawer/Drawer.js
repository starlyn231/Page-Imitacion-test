import React, { useState } from 'react';
import { DrawerList, TitleList, DrawerListItemContainer, ListText, MenuButton, StyledDrawer } from './style/Drawer';
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


        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra gente</ListText>
        </DrawerListItemContainer>
        <DrawerListItemContainer>
          <ListText>Nuestra filosofia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Memorias</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Informe anual Gobierno Corporativo</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Informe Anual Gestión Integral De Riesgos</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>

        <DrawerListItemContainer>
          <ListText>Nuestra Historia</ListText>
        </DrawerListItemContainer>
      </DrawerList>
    </StyledDrawer>

  </div>;
};
