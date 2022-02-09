import { styled } from "@mui/system";

import { Button } from "@mui/material";
import COLORS from "../../../theme/Colors";

export const Container = styled("div")({
  display: "flex",
  // zIndex: 1000,
  flexDirection: "row",
  backgroundColor: COLORS.white,
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "100px",
  width: "100%",

});


export const LineContainer = styled('div')({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  justifyContent: 'space-between',
  minHeight: '100px',
  width: '100vw'

});

export const MenuContainer = styled("div")({
  display: 'flex',
  flexDirection: 'row',


  position: 'absolute',
  right: 0
  //gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))'
  //grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))
})


export const Image = styled("img")({


  marginRight: '10px',
  "@media (min-width:320px)": {
    width: "150px",
  },
  "@media (min-width:768px)": {
    width: "170px",
  },
  "@media (min-width:1200px)": {
    width: "190px",

  },
});



export const MenuDivider = styled("div")({
  width: "16px",

});




export const HeaderButton = styled(Button)({

  fontFamily: 'Montserrat,sans-serif',
  //backgroundColor: '#00a44f!important',

  //fontWeight: 400,



  //color: props.layout === 'public' ? COLORS.white : COLORS.black,
})

export const LinkBancanet = styled('a')({
  fontSize: "16px",
  fontFamily: 'Montserrat,sans-serif',
  color: COLORS.white,
  backgroundColor: '#00a44f!important',
  fontStyle: 'italic',
  //fontWeight: 800,
  fontSize: '16px',
  borderRadius: '5px',
  //lineHeight: 3.1,
  padding: ' 5px 10px',
  marginRight: '10px'

  //color: props.layout === 'public' ? COLORS.white : COLORS.black,
})

