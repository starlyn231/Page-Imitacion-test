import { fontSize, fontWeight, styled } from "@mui/system";

import { Button, TextField } from "@mui/material";
import COLORS from "../../../theme/Colors";




export const Container = styled("div")({

  margin: 0,
  width: '100%',


  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6), 1fr)',
  //display: "flex",
  // justifyContent: 'center',
  //flexDirection: 'column',
  // zIndex: 1000,
  // flexDirection: "row",
  // backgroundColor: COLORS.secondary,
  //justifyContent: "space-around",
  // alignItems: "center",
  //minHeight: "100px",

  "@media (min-width:320px)": {

  },
  "@media (min-width:768px)": {

  },
  "@media (min-width:1200px)": {


  },

});

export const ContainerHeader = styled("div")({

  gridColumn: 'span 6',
  gridRow: 'span 1'

});


export const TopContainer = styled("div")({

  // zIndex: 1000,
  // flexDirection: "row",
  backgroundColor: 'rgba(0, 0, 0, 0)',

  //justifyContent: "space-around",
  // alignItems: "center",
  //minHeight: "100px",
  width: "980px",
  height: '44px',
  //padding: '5px',
  fontWeight: '400',
  color: ' rgb(0, 0, 0)',
  //fontFamily: 'calibriLight'
  margin: '0 auto 0 auto',

  "@media (min-width:320px)": {
    // display: "flex",
  },
  "@media (min-width:768px)": {
    // display: 'block'
  },
  "@media (min-width:1200px)": {


  },


});


export const MainContainer = styled("div")({
  gridColumn: '2/6',
  gridRow: 'span 1',
  zIndex: 0,
  // display: 'flex',
  //flexDirection: 'row',
  zIndex: 0,
  width: "990px",
  backgroundColor: 'rgba(0, 0, 0, 0)',
  paddingTop: '10px',
  //fontWeight: 'normal',
  //fontFamily: 'calibriLight'
  margin: '0 5px 0 12px',


});

export const LoginContainer = styled("div")({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  margin: '0 5px 0 12px',
  zIndex: 805,
  width: ' 100%',
  //zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  backgroundOrigin: 'padding-box',

});


export const AsideRight = styled("div")({

  gridColumn: 'span 1',


});

export const ContainerLeft = styled('div')({
  //zIndex: 5,
  display: 'flex',

  width: "980px",

  background: 'linear-gradient(#ffffff, #dfe4ea)',
  boxShadow: 'inset 0 0 10px #444444',

  border: '2px solid green'
})
export const ListUl = styled('ul')({
  position: 'relative',
  // zIndex: 101,
  width: '100%',
  margin: ' 0 auto 0 auto',
  top: '40px',
})

export const List = styled('li')({
  listStyle: 'none',
  display: 'flex',
  width: '100%'
})



export const TitleWelcome = styled('h3')({
  textShadow: ' 0 1px 1px #fff',
  fontSize: '1.3em',
  color: '#838181',
  float: 'left',
  padding: '17px 10px 0 40px',
  fontFamily: 'CalibriRegular',
  fontWeight: 'normal',
})


export const Date = styled('span')({
  textShadow: ' 0 1px 1px #fff',
  fontSize: '1.3em',
  color: '#838181',
  float: 'right',
  padding: '23px 20px 5px 40px',
  fontFamily: 'CalibriRegular',
  fontWeight: 'normal',
  '@media (min-width:320px)': {



  },
  '@media (min-width:768px)': {
    display: 'flex'
  },
  '@media (min-width:1200px)': {

  },


})

export const TextFieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const StyledTextInput = styled(TextField)({
  width: '370px',
  //alignSelf: 'center',
  height: '30px',
  border: 'none 0',

  fontStyle: 'italic',
  padding: '13px',
  color: '#b7b7b7',
  marginBottom: '25px',
  padding: '20px',
  '& .MuiInputBase-input ': {

  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {

    },

    '&:hover fieldset': {
      borderColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.secondary,

    },
  },
});


export const StyledButton = styled(Button)({
  marginTop: '15px',
  border: 'none 0!important',
  color: '#fff',
  fontFamily: 'CalibriRegular',
  fontWeight: 'normal',
  cursor: 'pointer',
  color: '#fff',
  textAlign: 'center',

  padding: '0 0 0 0',
  fontSize: '.85em',
  width: '158px',
  height: '40px',
  '@media (min-width:320px)': {

  },
  '@media (min-width:768px)': {

  },
  '@media (min-width:1200px)': {

  },
  fontFamily: 'Bold',
  '&:hover,&:focus,&:active': {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  }
});




export const BodyText = styled('p')({
  color: COLORS.black,
  fontSize: '14px',
  fontFamily: 'Book',
  margin: '0'
});

export const LinkRegister = styled('a')({
  fontFamily: 'CalibriLight',
  fontSize: '16px',
  textAlign: 'right',
  color: 'rgb(16, 99, 176)',
  fontWeight: '400', letterSpacing: '-0.16px',
  marginLeft: '10px',
  padding: '2px',
  fontWeight: 600,

  '&:hover,&:focus,&:active': {

    textDecoration: 'underline',
    fontSize: '18px',
    cursor: 'pointer'
  }

})
