import { letterSpacing, styled, textAlign } from "@mui/system";

import { Button } from "@mui/material";
import COLORS from "../../../theme/Colors";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import { Calculate } from "@mui/icons-material";
import FONTS_FAMILY from '../../../theme/FontsFamily'
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
}));

export const TitleList = styled('h3')({
  display: 'flex',
  marginBottom: '20px!important',
  marginLeft: '20px',
  textAlign: 'start',
  //color: '#ffffff',
  lineHeight: '24px',
  fontSize: '16px',
  textDecoration: 'underline',
  //fontWeight: 400
})

export const DrawerListItemContainer = styled(ListItem)(props => ({
  //color: COLORS.black,
  display: 'flex',
  justifyContent: 'flex-end',

  padding: '0.7em 0.6em 0.7em 0.7em',
  //paddingLeft: '40px'
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
  backgroundColor: '#ffffff',
  //fontFamily: FONTS_FAMILY.regular.title,
  fontFamily: 'Montserrat,sans-serif!important',
  transition: 'color .1s',
  textDecoration: 'none',
  fontSize: '20.8px',

  position: 'absolute',
  fontWeight: 600,
  lineHeight: '31.2px',
  letterSpacing: 'normal',
  textAlign: 'start',


})