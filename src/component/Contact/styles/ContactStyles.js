import { styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Button } from "@mui/material";

export const BtnContacto = styled(Button)({
  display: 'flex',

  backgroundColor: 'transparent',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '17px',
  color: "#333",
  border: '1px solid  #0961ad!important;',
  textDecoration: 'uppercase',
  fontFamily: 'Montserrat,sans-serif!important',
  lineHeight: 1.5,
  minWidth: '150px',
  marginBottom: '15px',
  fontWeight: 600,
  alignItems: 'center',
  borderRadius: '5px',
  marginLeft: '15px'

})


export const TitleContact = styled('h3')({
  letterSpacing: '10px',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '28px',
  margin: '0  0 20px 5px',
  fontFamily: 'Montserrat,sans-serif',
  color: 'rgb(51, 51, 51)',
  textTransform: 'uppercase',
  alignSelf: 'center',
  //backgroundColor: 'red',

})

export const ComponentContact = styled("div")({

  gridColumn: '1 / span 6',
  gridRow: 'span 1',
  margin: '0  25px 5px  20px !important',
  display: 'flex',

  "@media (min-width:320px)": {
    flexDirection: "column",
  }, flexWrap: 'wrap',
  "@media (min-width:768px)": {
    flexDirection: "column",
    flexWrap: 'wrap',
  },
  "@media (min-width:1200px)": {
    flexWrap: 'wrap',
    flexDirection: "row",
    justifySelf: 'center',
    justifyContent: 'center',

  },
});

export const SpanContainer = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px', fontWeight: '600px', lineHeight: '24px',
  color: 'rgb(102, 102, 102)',
  textAlign: 'center',
})