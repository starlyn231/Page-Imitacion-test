import { styled } from '@mui/system';

import { Button } from "@mui/material";
import COLORS from '../../../../theme/Colors';

export const Container = styled('div')((props) => ({
  //olor:'red'
  backgroundColor: props.backgroundColor === 'blueDark' ?
    COLORS.blueDark : props.backgroundColor === 'gray' ?
      COLORS.grayCard : COLORS.secondary,

  display: 'flex',
  flexDirection: 'column',
  //backgroundColor: '#0961AD',
  width: '350px',
  height: '200px',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '1px',
  paddingLeft: '2px'


}))

export const LineContainer = styled('div')({
  width: '50%',
  alignSelf: 'center'
})

export const Title = styled('h2')({
  color: '#fff!important',
  fontWeight: 700,
  fontSize: '2rem',
  display: 'block',
  fontFamily: 'Montserrat,sans-serif!important',
  margin: '12px'
})

export const ButtonLink = styled(Button)({
  color: '#fff!important',
  backgroundColor: 'transparent',
  border: '1px solid #e5e5e5',
  font: 'inherit',
  // padding: '0 30px',
  textAlign: 'center',

})