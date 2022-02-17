import { styled } from "@mui/system";

import { Button, TextField } from "@mui/material";
import COLORS from "../../../theme/Colors";




export const Container = styled("div")({
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
  // zIndex: 1000,
  // flexDirection: "row",
  // backgroundColor: COLORS.secondary,
  //justifyContent: "space-around",
  // alignItems: "center",
  //minHeight: "100px",
  width: "100%",

  //padding: '5px',
  //fontWeight: 'normal',
  //fontFamily: 'calibriLight'
  margin: '0 auto 0 auto',

  "@media (min-width:320px)": {
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    backgroundColor: 'lightBlue',
  },
  "@media (min-width:768px)": {
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    backgroundColor: 'lightGray',
  },
  "@media (min-width:1200px)": {

    width: "100%",
    display: "flex",
    justifyContent: 'center',

  },


});

export const TopContainer = styled("div")({

  // zIndex: 1000,
  // flexDirection: "row",
  // backgroundColor: COLORS.secondary,
  //justifyContent: "space-around",
  // alignItems: "center",
  //minHeight: "100px",
  width: "100%",
  height: '44px',
  //padding: '5px',
  //fontWeight: 'normal',
  //fontFamily: 'calibriLight'
  margin: '0 auto 0 auto',
  //backgroundColor: 'yellow',
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
  //  display: "block",
  //position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 0,
  width: "100%",

  paddingTop: '10px',
  //fontWeight: 'normal',
  //fontFamily: 'calibriLight'
  margin: '0 auto 0 auto',


});

export const LoginContainer = styled("div")({
  width: ' 100%',
  //height: '265px',
  //background: 'url(https://images.unsplash.com/photo-1565347878134-064b9185ced8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80) 0 0 no-repeat',
  //  position: 'relative',
  //zIndex: 100,
  // marginTop: '30px',
  //backgroundColor: 'yellowgreen',

  display: 'flex',
  flexDirection: 'column'


});
export const ListUl = styled('ul')({
  position: 'relative',
  zIndex: 101,
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
  fontSize: '.8em',
  color: '#838181',
  float: 'right',
  padding: '23px 20px 5px 40px',
  fontFamily: 'CalibriRegular',
  fontWeight: 'normal',
  '@media (min-width:320px)': {
    display: 'flex',
    position: 'absolute',
    right: '100%'

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
  width: '350px',
  //alignSelf: 'center',
  height: '30px',
  border: 'none 0',
  fontSize: '1em',
  fontStyle: 'italic',
  color: '#b7b7b7',
  '& .MuiInputBase-input ': {

  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {

    },

    '&:hover fieldset': {
      borderColor: COLORS.secondary,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.secondary,

    },
  },
});


export const StyledButton = styled(Button)({

  border: 'none 0!important',
  color: '#fff',
  fontFamily: 'CalibriRegular',
  fontWeight: 'normal',
  cursor: 'pointer',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: 'green',
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


