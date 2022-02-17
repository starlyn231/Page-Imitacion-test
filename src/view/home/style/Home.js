import { border, borderRadius, fontSize, lineHeight, styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Button, CardContent, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});
export const HomeContainer = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const HomeTextContainer = styled("div")({
  display: 'flex',
  flexDirection: "column",
  position: "relative",
  marginLeft: "17%",
  marginTop: "8%",
  height: "500px",
  alignSelf: "center",
  fontSize: "15px",
  width: "100%",
  justifyContent: 'center'

});

export const DefaultButton = styled(Button)({
  color: COLORS.white,
  backgroundColor: COLORS.secondary,
  fontWeight: 700,
  color: ' #fff',
  border: '1px solid transparent',
  fontSize: ".875rem",
  height: '38px',
  borderRadius: '2px',
  fontFamily: 'Montserrat,sans-serif!important',
  "&:hover,&:focus,&:active": {
    cursor: 'pointer',
    backgroundColor: COLORS.secondary,
  },
  "@media (min-width:320px)": {

    width: "180px",
  },
  "@media (min-width:768px)": {

    width: "230px",
  },
  "@media (min-width:1200px)": {

    width: "230px",
  },
});



export const HomeTitle = styled("h1")({
  fontFamily: "Book",
  zIndex: 10,
  width: "55%",
  color: COLORS.white,
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  "@media (min-width:320px)": {
    fontSize: "25px",
    height: "280px",
    WebkitLineClamp: 8, /* number of lines to show */
  },
  "@media (min-width:768px)": {
    fontSize: "30px",
    WebkitLineClamp: 6, /* number of lines to show */
    height: "250px",
  },
  "@media (min-width:1200px)": {
    fontSize: "50px",
    height: "200px",
    WebkitLineClamp: 5, /* number of lines to show */
  },
});
export const CardsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center',


  width: '100%',
  marginTop: '10px',
  marginBottom: '14px',


  "@media (min-width:320px)": {
    flexDirection: "column",

  },
  "@media (min-width:768px)": {
    flexDirection: 'row',
  },
  "@media (min-width:1200px)": {
    flexDirection: 'row',
  },
});


export const ContainerSegmento = styled('div')({
  display: "flex",
  flexDirection: "row",
  //position: 'relative',
  justifyContent: 'center',

  width: '100%',
  marginTop: '10px',
  marginBottom: '14px',
  backgroundColor: COLORS.snow,
  textAlign: 'center',
  fontFamily: 'Montserrat,sans-serif!important',

})

export const CardSegmento = styled(Card)({
  margin: '8px',
  width: '350px',
  boxSizing: 'border-box',
  // height: '200px',

})
export const ContentCard = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px',
  margin: '0 0 20px',
  fontFamily: 'Montserrat,sans-serif!important',

})

export const BtncardHome = styled(Button)({

  width: '80%',
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

  fontWeight: 700,


})


export const BtnContacto = styled(Button)({
  display: 'flex',

  backgroundColor: 'transparent',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '15px',
  color: "#333",
  border: '1px solid  #0961ad!important;',
  textDecoration: 'uppercase',
  fontFamily: 'Montserrat,sans-serif!important',
  lineHeight: 1.5,
  minWidth: '205px',
  marginBottom: 0,
  fontWeight: 400,
  alignItems: 'center',
  borderRadius: '5px',
  marginLeft: '15px'

})


export const TitleContact = styled('h3')({
  letterSpacing: '2px',
  fontWeight: '500!important',
  fontSize: '1.26rem',
  lineHeight: '1.4',
  margin: '0  0 20px 5px',
  fontFamily: 'Montserrat,sans-serif!important',
  color: '#333',
  textTransform: 'uppercase'
})

export const Item = styled(Paper)({
  //...theme.typography.body2,
  //padding: theme.spacing(2),
  padding: '15px',
  textAlign: 'center',
  //color: theme.palette.text.secondary,
  color: '#fff',
  backgroundColor: '#0961ad',
  fontFamily: 'Montserrat,sans-serif!important',
  display: 'block',
  marginBottom: 0,
  marginTop: '35px'

});

export const ContainerIcons = styled('div')({

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
  fontFamily: 'Montserrat,sans-serif!important',
  marginBottom: '5px'

});

