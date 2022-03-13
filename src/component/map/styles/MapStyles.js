import { styled } from '@mui/system';
import { VerticalAlignTop } from "@mui/icons-material";
import { border, height } from "@mui/system";

export const TextInput = styled('input')({
  margin: '0',
  color: '#666',
  font: 'inherit',
  fontFamily: 'Calibri',
  // padding: '0 10px 0 10px',
  background: 'transparent',
  margin: '6px 4px 0 0',
  width: ' 70%',
  height: '40px',
  border: '1px solid #e5e5e5',
  overflow: 'visible',
  VerticalAlign: 'middle',
  //width: '270px',
  //alignSelf: 'center',
  //height: '18px',

});


export const ContainerForm = styled('div')({
  margin: '0',
  boxSizing: 'border-box',


  paddingLeft: '30px',
  width: '100%',
  maxWidth: '100%',
  height: '40px',
  border: '1px solid #e5e5e5',
  overflow: 'visible',
  VerticalAlign: 'middle',


});



export const IconFiltre = styled('span')({
  marginRight: '2px',
  border: 'none',
  borderRadius: 0,
  overflow: 'visible',
  font: 'inherit',
  color: 'inherit',
  textTransform: 'none',
  padding: 0,
  backgroundColor: 'transparent',
  display: 'inline-block',
  fill: 'currentcolor',
  lineHeight: 0,

})