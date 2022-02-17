import { letterSpacing, styled, textAlign } from "@mui/system";

import { Button } from "@mui/material";
import COLORS from "../../../theme/Colors";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import { Calculate } from "@mui/icons-material";
//import FONTS_FAMILY from '../../../theme/FontsFamily'
import CloseIcon from '@mui/icons-material/Close';
export const Container = styled("div")(props => ({
  zIndex: 11,
  position: 'relative',
  display: "flex",
  flexDirection: "row",
  alignSelf: "flex-end",
  right: "3vw",


}));

export const DrawerList = styled(List)({

  width: "400px",
  //alignSelf: "end",
  position: 'relative',
  overflowY: 'auto',
  display: 'block',


});

export const StyledDrawer = styled(Drawer)(props => ({

  /* '.MuiPaper-root': {
    backgroundColor: props.layout === 'public' ? COLORS.secondary : COLORS.white,
  }*/

  overflow: "scroll",

}));

export const TitleList = styled('h3')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Montserrat,sans-serif',
  marginBottom: '20px',
  // fontWeight: 400,

  textAlign: 'start',
  color: COLORS.secondary,
  //opacity: '50.0%',
  //lineHeight: 1.5,
  fontSize: '16px',
  textDecoration: 'underline',
  //fontWeight: 400

})

export const DrawerListItemContainer = styled(ListItem)(props => ({
  //color: COLORS.black,
  display: 'flex',
  justifyContent: 'flex-end',

  fontFamily: 'Montserrat,sans-serif',
  paddingLeft: '40px',
  marginBottom: '30px',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '100%'
}))

export const MenuButton = styled(Button)({
  fontSize: "15px",
  fontFamily: 'Book',
  color: COLORS.secondary
  //color: props.layout === 'public' ? COLORS.white : COLORS.black,
})


export const ListText = styled(ListItemText)({
  color: '#00a44f',
  opacity: '50%',
  backgroundColor: '#ffffff',

  fontFamily: 'Montserrat,sans-serif',
  transition: 'color .1s',
  textDecoration: 'none',
  fontSize: '20.8px',
  padding: '0.7em 0.6em 0.7em 0.7em',
  position: 'absolute',
  fontWeight: 600,
  lineHeight: '32px',
  letterSpacing: 'normal',
  textAlign: 'right',


})



export const ContainerIcon = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'start',
  //backgroundColor: 'red',
  padding: '15px 0',
  position: 'absolute',
  top: 0,
  right: '0',
})

export const IconClose = styled(CloseIcon)({
  //fontFamily: FONTS_FAMILY.regular.title,
  fontFamily: 'Montserrat,sans-serif',
  width: '20px',
  overflow: 'hidden',
  transform: 'translate(0)',
  stroke: 'rgb(9, 97, 173)',
  strokeWidth: 3.2,
  cursor: 'pointer',
})