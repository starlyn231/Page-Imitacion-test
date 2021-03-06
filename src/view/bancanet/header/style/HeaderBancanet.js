import { styled } from "@mui/system";

import { Button, TextField } from "@mui/material";
import COLORS from "../../../../theme/Colors";


export const Container = styled("div")({
  display: "flex",
  // zIndex: 1000,
  flexDirection: "row",
  backgroundColor: COLORS.secondary,
  justifyContent: "space-around",
  alignItems: "center",
  //minHeight: "100px",
  width: "100% ",
  height: '50px',
  padding: '5px',
  fontWeight: 'normal',
  fontFamily: 'calibriLight',




});


export const LineContainer = styled('div')({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  justifyContent: 'space-between',
  //  minHeight: '100px',
  width: '100vw'


});

export const MenuContainer = styled("div")({
  display: 'flex',
  justifyContent: 'flex-end',

  // float: 'right',


})

export const UlList = styled("ul")({
  width: 'auto',
  float: 'right',
  listStyle: 'none',
  height: '15px',
  position: 'relative',
  right: '10px',
  top: '5px',
})

export const List = styled("li")({
  border: ' 0 none!important',
  float: 'left',
  fontSize: '.85em',
  color: '#f7f7f7',
  borderLeft: '1px solid #bbe1ed',
  height: ' 14px',
  padding: '0 5px 0 5px',
  listStyle: 'none',
  display: 'list-item'
})

export const Link = styled("a")({
  textDecoration: 'none',
  color: '#f7f7f7'
})
export const Image = styled("img")({
  display: 'block',
  position: 'relative',
  float: 'left',
  top: '2px',
  left: '5px',
  cursor: 'pointer',

  color: COLORS.white,
  marginRight: '10px',
  "@media (min-width:320px)": {
    width: "100px",
    height: '50px',
  },
  "@media (min-width:768px)": {
    width: "100px",
    height: '50px',
  },
  "@media (min-width:1200px)": {
    width: "145px",
    height: '50px',

  },
});



export const MenuDivider = styled("div")({
  width: "16px",

});

export const TextInput = styled('input')({
  //backgroundColor: 'transparent!important',
  //border: ' 0 none!important',
  color: '#8686a5',
  fontSize: '1.1em',
  padding: '0 5px 0 5px',
  width: '245px',
  margin: '6px 0 6px 0',
  height: '22px'


});

export const UlContainer = styled('ul')({
  width: '600px', margin: '0', paddin: '0', display: 'flex'
})

export const TableContainer = styled('table')({
  margin: '15px auto 20px auto', borderCollapse: 'collapse',
  borderSpacing: '0',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  borderColor: 'grey',
  textIndent: 'initial', listStyle: 'none',


})

export const TextTextarea = styled('textarea')({
  // backgroundColor: 'transparent!important',
  //border: ' 0 none!important',
  color: '#8686a5',
  fontSize: '1.1em',
  padding: '0 5px 0 5px',
  width: '245px',
  margin: '6px 0 6px 0',
})

/*export const TextInput = styled(TextField)({
 
})*/

export const ButtonDialog = styled(Button)({
  textDecoration: 'none',
  border: ' 1px outset ',
  cursor: 'pointer'


})