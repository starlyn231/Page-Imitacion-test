import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ContainerIcons, Item } from '../style/Home'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const Footer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <ContainerIcons>
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />

            </ContainerIcons>
            <small style={{ fontSize: '80%' }} className="bsc-white uk-display-block uk-margin-left uk-text-center">© 2022. Banco Santa Cruz RD. Todos los Derechos Reservados. </small>
          </Item>
        </Grid>



      </Grid>
    </Box>
  )
}
