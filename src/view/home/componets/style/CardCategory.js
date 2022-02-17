import { styled } from '@mui/system';

import { Button } from "@mui/material";
import COLORS from '../../../../theme/Colors';

export const Container = styled('div')((props) => ({
  //olor:'red'
  backgroundColor: props.backgroundColor === 'blueDark' ?
    COLORS.blueDark : props.backgroundColor === 'gray' ?
      COLORS.grayCard : COLORS.secondary,


  //backgroundColor: '#0961AD',
  width: '350px',
  height: '200px',

  margin: '1px',
  paddingLeft: '2px',

  '@media(min-width:320px)': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '50px',
  },
  '@media(min-width:768px)': {
    width: '100%',
    height: '50px',
  },
  '@media(min-width:1200px)': {
    width: '350px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
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
  marginBottom: '12px',
  textAlign: 'center',

  '@media(min-width:320px)': {
    fontSize: '15px',

  },
  '@media(min-width:768px)': {
    fontSize: '15px',
  },
  '@media(min-width:1200px)': {
    fontSize: '2rem',
  },
})

export const ButtonLink = styled(Button)({
  color: '#fff!important',
  backgroundColor: 'transparent',
  border: '1px solid #e5e5e5',
  font: 'inherit',
  // padding: '0 30px',  marginLeft: '15px',
  textAlign: 'center',
  '@media(min-width:320px)': {
    display: 'none'
  },
  '@media(min-width:768px)': {
    display: 'none'
  },
  '@media(min-width:1200px)': {
    display: 'block',
    marginLeft: '25px'
  },
})