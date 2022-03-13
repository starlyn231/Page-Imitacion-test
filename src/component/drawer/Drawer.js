import React, { useState } from 'react';
import { DrawerList, TitleList, DrawerListItemContainer, ListText, MenuButton, StyledDrawer, IconClose, ContainerIcon, Bancanet } from './style/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from '@mui/material';
import LogoPage from '../../asset/image/descarga.png'
import useMediaQuery from "@mui/material/useMediaQuery";
import { DrawerListComponents } from './DrawerListComponents';
import { Header } from '../header/Header';
import { Image, LinkBancanet } from '../header/style/HeaderStyle';
import { Location } from '../Location/Location';
import { Information } from '../info/Information';
import { Search } from '../search/Search';
import { display } from '@mui/system';
export const Drawer = () => {

  const [drawerState, setDrawerState] = useState(false);
  const matchesWidth = useMediaQuery("(min-width:768px)");
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

    {matchesWidth ?
      <StyledDrawer
        anchor="right"
        open={drawerState}
        onClose={() => setDrawerState(!drawerState)}
      > <DrawerList>
          <div> <TitleList>Menu</TitleList>  </div>
          <ContainerIcon><IconClose onClick={() => setDrawerState(!drawerState)} /></ContainerIcon>

          <DrawerListComponents />


        </DrawerList>
      </StyledDrawer>
      : <div>


        <StyledDrawer
          anchor="right"
          open={drawerState}
          onClose={() => setDrawerState(!drawerState)}
        > <DrawerList>
            <div>  <Image src={LogoPage} />  </div>
            <ContainerIcon><IconClose onClick={() => setDrawerState(!drawerState)} /></ContainerIcon>
            <div style={{ display: 'flex', margin: '5px' }}>
              <span style={{ margin: '2px' }}><Location /></span>
              <span style={{ margin: '2px' }}><Information /></span>
              <span style={{ margin: '2px' }}><Search /></span>
              <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}> <Bancanet > Bancanet</Bancanet> </div>
            </div>


            <DrawerListComponents />


          </DrawerList>
        </StyledDrawer> </div>
    }
  </div>;
};
