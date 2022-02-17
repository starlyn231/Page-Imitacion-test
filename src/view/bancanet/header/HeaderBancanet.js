import React from 'react'
import { Container, Image, LineContainer, List, MenuContainer, UlList, Link } from './style/HeaderBancanet'
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoBancanet from '../../../asset/image/santaCruzLogo.jpg'

export const HeaderBancanet = () => {
  //const matchesWidth = useMediaQuery("(min-width:768px)");
  return (
    <Container>
      <LineContainer>

        <Image src={LogoBancanet} />



        <MenuContainer>



          <UlList>
            <List><Link href="/BSC.ICBanking.WebUI/Pages/General/HelpPublic.aspx">
              Ayuda</Link></List>

            <List id="Li1"><Link id="contactUsPopup" onclick="ShowContactUsPopup();">
              Contáctenos</Link></List>
          </UlList>

        </MenuContainer>




      </LineContainer>
    </Container>
  )
}
