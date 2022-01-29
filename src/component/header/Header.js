
import React from 'react';
import { Container, LinkBancanet, Image, MenuContainer, MenuDivider, MenuButton, LineContainer, HeaderButton } from './style/HeaderStyle';
import { Search } from '../search/Search';
import { Location } from '../Location/Location';
import LogoPage from '../../asset/image/Logo.png'
import { Information } from '../info/Information';

import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from '../drawer/Drawer';
export const Header = () => {
  const matchesWidth = useMediaQuery("(min-width:768px)");
  return <Container>
    <LineContainer>
      <Image src={LogoPage} />
      {matchesWidth ?
        <MenuContainer>


          <HeaderButton>
            <LinkBancanet>
              Bancanet
            </LinkBancanet>
          </HeaderButton>

          <Information />


          <MenuDivider />
          <Location />

          <Search />
          <Drawer />

        </MenuContainer>
        : <div > <Drawer />
        </div>}


    </LineContainer>


  </Container>;
};
