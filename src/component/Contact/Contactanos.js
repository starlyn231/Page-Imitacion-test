import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { BtnContacto, ComponentContact, SpanContainer, TitleContact } from './styles/ContactStyles';
export const Contactanos = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>  <TitleContact >Contactanos</TitleContact>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>



        <ComponentContact>


          <BtnContacto>  <LocalPhoneIcon style={{
            color: 'rgb(9, 97, 173)',
            textAlign: 'center', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '30px', marginRight: '15px'

          }} /> <SpanContainer> 809-726-1000 </SpanContainer></BtnContacto>

          <BtnContacto>< MailOutlineIcon style={{
            color: 'rgb(9, 97, 173)',
            textAlign: 'center', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '30px', marginRight: '15px'

          }} /> <SpanContainer>community@bsc.com.do</SpanContainer> </BtnContacto>

          <BtnContacto> <EditLocationIcon style={{
            color: 'rgb(9, 97, 173)',
            textAlign: 'center', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '30px', marginRight: '15px'

          }} />  <SpanContainer>Encuentranos</SpanContainer>  </BtnContacto>

        </ComponentContact>


      </div>
    </div >
  )
}
