
import React from 'react';
import { Container, LinkBancanet, Image, MenuContainer, MenuDivider, MenuButton, LineContainer, HeaderButton } from './style/HeaderStyle';
import { Search } from '../search/Search';
import { Location } from '../Location/Location';
import LogoPage from '../../asset/image/descarga.png'
import { Information } from '../info/Information';

import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from '../drawer/Drawer';

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const matchesWidth = useMediaQuery("(min-width:768px)");
  const onRoute = () => {
    navigate("/posts", {
      replace: true
    })
  }

  return <Container>
    <LineContainer>

      <Image src={LogoPage} />

      {matchesWidth ?
        <MenuContainer>


          <HeaderButton>
            <LinkBancanet onClick={onRoute}>
              Bancanet
            </LinkBancanet>
          </HeaderButton>
          <MenuDivider />
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
