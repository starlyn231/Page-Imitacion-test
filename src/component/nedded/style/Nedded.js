import { fontSize, fontWeight, letterSpacing, styled } from '@mui/system';

import { Button } from "@mui/material";
import COLORS from '../../../theme/Colors';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
export const Container = styled('div')({
  /* width: '100%',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   margin: '1px',
   paddingLeft: '30px',
   paddingRight: '30px',
   // maxWidth: '1080px',
 */
  display: "flex",
  flexDirection: "column",
  textAlign: "center",

})


export const Title = styled('h2')({

  fontWeight: 500,
  marginTop: '40px!important',
  textAlign: 'center',
  color: '#0e3252!important',
  fontSize: '2rem',
  //lineHeigh: 1.3,
  letterSpacing: '2px',
})

export const List = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  margin: 0,
  padding: '30px',
  justifyContent: 'center',
  fontFamily: 'Montserrat,sans-serif!important',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  paddingInlineStart: '40px',
  listStyle: 'none',

})


export const ItemList = styled('li')({
  flex: 'none',
  display: 'list-item',
  paddingLeft: '20px',
  //position: 'relative',
  fontFamily: 'Montserrat,sans-serif!important',

})

export const LinkItem = styled('a')({
  background: '#fff',
  // border: '2px solid #707070',
  borderRadius: '2px !important',
  padding: '2px 10px',
  color: '#707070',
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: 'Montserrat,sans-serif!important',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#1e87f0',
    color: 'white',
    cursor: 'pointer'
  }
})

export const CardContains = styled('div')({

  width: '80%',
  flexDirection: 'row',
  alignContent: 'center',
  padding: '15px, 20px',

  //height: '683px',
  marginTop: '70px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',

  textAlign: 'left!important',
  display: "flex",

  textAlign: "center",
  flexWrap: ' wrap',
})

export const CardProduct = styled(Card)({
  margin: '8px',
  width: '350px',
  // height: '200px',
})


export const ButtonCard = styled(Button)({
  margin: '8px',
  width: '350px',
  backgroundColor: '#0961ad!important',
  fontSize: '12px',
  marginBottom: 0,
  cursor: 'pointer',
  padding: '15px',
  color: '#fff',
  border: '1px solid transparent',
  textDecoration: 'uppercase',
  fontFamily: 'Montserrat,sans-serif!important',
  lineHeight: 1.5,
  padding: '15px',
  fontWeight: 700,
  width: '200px',

})

export const ContainerBtn = styled(CardActions)({

  margin: '2px',
  paddingLeft: '3px',
  alignContent: 'left'

})


