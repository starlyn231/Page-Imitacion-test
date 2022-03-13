import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import COLORS from '../../../../theme/Colors';
import { Button } from '@mui/material';
export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',

  display: 'flex',
});

export const ContentContainer = styled('div')({
  //marginTop: '5px',
  //alignSelf: 'center',
  width: '805px',
  height: 'auto',
  //  float: 'left',

});


export const TopContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  height: '44px',
  width: '100%',
  //height: '200px',
  alignItems: 'center',

  justifyContent: 'space-between',
  '@media (min-width:320px)': {
    flexDirection: 'column',
  },
  '@media (min-width:768px)': {
    flexDirection: 'row',
  },
  '@media (min-width:1200px)': {
    flexDirection: 'row',
  },
});

export const UserDataContainer = styled('div')({
  display: 'flex',

  '@media (min-width:320px)': {
    flexDirection: 'column',
    width: '100%',

  },
  '@media (min-width:768px)': {
    flexDirection: 'row',
    width: '50%',

  },
  '@media (min-width:1200px)': {
    flexDirection: 'row',
    width: '50%',

  },
});
export const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '7px'
});

export const FieldTitle = styled('p')({
  marginTop: '3px',
  color: COLORS.black,
  fontFamily: 'Book',
  // marginTop: '15px',
  '@media (min-width:320px)': {
    fontSize: '11px',
  },
  '@media (min-width:768px)': {
    fontSize: '15px',
  },
  '@media (min-width:1200px)': {
    fontSize: '17px',
  }
});

export const TextInput = styled('input')({
  // width: '300px',
  //alignSelf: 'center',
  /*marginTop: '6px',
  color: '#777',
  //height: '20px!important',
  //border: 'none 0',
  fontSize: '11pt',
  fontStyle: 'italic',
  // padding: '13px',
  margin: '0',
  fontSize: '11pt',
  //marginBottom: '25px',
  backgroundColor: 'transparent',
  //margin: '0',

  */

  width: '370px',
  //alignSelf: 'center',
  height: '18px',
  //border: 'none 0',
  fontSize: '1em',
  fontStyle: 'italic',
  padding: '7px',
  color: '#b7b7b7',
  marginBottom: '25px',
  '&:hover,&:focus': {
    border: '2px solid green'
  },
});


export const StyledTextInput = styled('input')({
  margin: '0',
  color: '#777',
  //height: '20px!important',
  //border: 'none 0',
  fontWeight: 'inherit',
  fontFamily: 'Calibri',
  padding: '5px 10px 10px 10px',
  //backgroundColor: 'transparent',
  margintOP: '6px',
  width: '250px'



});




export const ButtonSaveContainer = styled('div')({
  // backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'center',

  marginTop: '20px',
  '@media (min-width:320px)': {
    width: '100%',
  },
  '@media (min-width:768px)': {
    width: '50%',
  },
  '@media (min-width:1200px)': {
    width: '30%',
    marginTop: '20px',
  },

});


export const StyledButtonOutlined = styled(Button)(props => ({
  minHeight: '38px',
  width: '158px',
  height: '42px',
  border: 'none 0!important',
  color: '#fff',
  fontFamily: 'CalibriRegular',
  fontWeight: ' normal',
  cursor: 'pointer',
  textAlign: 'center',
  padding: '0 0 0 0',
  fontSize: '.85em',
  backgroundColor: COLORS.secondary,
  alignItems: 'center'



}));

export const MediumHeightDivider = styled('div')({
  height: '60px'
});

export const TableContainer = styled('table')({
  margin: '0 auto 0 0', borderCollapse: 'collapse',
  borderSpacing: '0',
  borderCollapse: 'collapse',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  borderColor: 'grey',
  textIndent: 'initial', listStyle: 'none',


})


export const TableBody = styled('tbody')({
  verticalAlign: 'middle',
  borderColor: 'inherit',
  //display: 'table-row-group',
  display: 'flex',
  flexDirection: 'column'

})

export const TableTr = styled('tr')({
  verticalAlign: 'inherit',
  borderColor: 'inherit',
  display: 'table-row',

})

export const TableTd = styled('td')({
  verticalalign: 'top',
  margin: '0',
  padding: 0,
  height: '33px',
  display: 'table-cell,'

})

export const TableLabel = styled('label')({
  fontSize: '11pt',
  padding: '5px 15px 10px 10px',
  width: 'auto',
  height: '18px',
  float: 'right',
  zIndex: 100,
  letterSpacing: '0.18em',
  cursor: 'default',
})

export const ConteinInput = styled('div')({
  width: '216px',
  backgroundPosition: '-793px -331px',
  height: '28px',
  position: 'relative',
  backgroundRepeat: ' no-repeat',
  padding: '0 0 4px 10px',

})

export const ButtonRegister = styled(Button)({
  textDecoration: 'none',
  border: ' 1px outset ',
  cursor: 'pointer'


})

export const UlTableContainer = styled('ul')({
  width: '805px',
  margin: '0', paddin: '0',
  display: 'flex',
  height: 'auto',
  //border: '1px solid gray',
  color: '#777'
})

export const SmallHeightDivider = styled('div')({
  height: '15px'
});