import { padding, styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Divider } from '@mui/material';


export const Container = styled("div")({
  margin: 0,
  width: '100%',

  //minWidth: '900px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  // backgroundColor: ' lightblue',
  border: 'medium solid #222',

});
export const DividerMaterialUi = styled(Divider)({
  margin: 0,
  width: '100%',
  gridColumn: 'span 6',
});
export const ContainerHeader = styled("div")({

  gridColumn: 'span 6',
  gridRow: 'span 1'

});


export const ComponentHistory = styled("div")({

  alignContent: 'center',
  gridColumn: 'span 6',
  gridRow: 'span 3',
  margin: '10px',
});

export const Image = styled("img")({
  // display: 'flex',
  // float: 'right',
  alignContent: 'start',
  //gridColumn: ' 1 / span 3',
  //gridRow: 'span 3',
  margin: '10px',
  width: '380px',
  /* maxWidth: ' 100%',
   height: 'auto',
   boxSizing: 'border-box'*/
});

export const WelcomeSC = styled("div")({
  alignContent: 'center',
  flexFlow: 'row',
  gridColumn: 'span 6',
  gridRow: 'span 2',



})

export const ComponenPrpuesta = styled("div")({
  backgroundColor: COLORS.snow,
  opacity: '0.4.00%',

  width: '100%',

  "@media (min-width:320px)": {

    gridColumn: 'span 6',
    gridRow: 'span 3',
    margin: '10px',
    marginBottom: '35px',
    paddingBottom: '40px',
  },
  "@media (min-width:768px)": {
    gridColumn: 'span 6',
    gridRow: 'span 3',
    margin: '10px',
    marginBottom: '35px',
    paddingBottom: '40px',

  },
  "@media (min-width:1200px)": {
    flexDirection: 'row',
    gridColumn: 'span 6',
    gridRow: 'span 3',
  },
});

export const SubContainerPropuesta = styled("div")({
  backgroundColor: COLORS.snow,
  opacity: '0.4.00%',

  width: '100%',
  "@media (min-width:320px)": {
    width: '100%',
    flexDirection: 'row',
  },
  "@media (min-width:768px)": {
    width: '100%',
    flexDirection: 'row',

  },
  "@media (min-width:1200px)": {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
});

export const ContainerText = styled("div")({
  backgroundColor: COLORS.snow,
  opacity: '0.4.00%',

  width: '100%',
  "@media (min-width:320px)": {
    width: '100%',

  },
  "@media (min-width:768px)": {
    width: '80%',
    textAlign: 'center'


  },
  "@media (min-width:1200px)": {
    boxSizing: 'border-box',
    width: '250px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left'
  },
});


export const ComponentSatify = styled("div")({
  //display: 'flex',
  alignContent: 'center',


  gridColumn: 'span 6',
  gridRow: 'span 1',
  margin: '0  20px 5px  20px',


});


export const ComponentSign = styled("div")({
  //display: 'flex',
  alignContent: 'center',
  justifySelf: 'center',
  zIndex: 1000,
  gridColumn: '1 / span 6',
  gridRow: 'span 1',
  margin: '0  20px 5px  20px'
});




export const CotainerFooter = styled("div")({
  //display: 'flex',


  gridColumn: 'span 6',
  gridRow: 'span 1',

});

