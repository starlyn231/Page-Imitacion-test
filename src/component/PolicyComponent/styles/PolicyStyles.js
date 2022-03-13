import { padding, styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Button, Divider } from '@mui/material';


export const Container = styled("div")({
  margin: 0,
  width: '100%',

  //minWidth: '900px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6), 1fr)',
  // backgroundColor: ' lightblue',
  border: 'medium solid #222'
});





export const ContainerCenter = styled("div")({
  gridColumn: 'span 6',
  gridRow: 'span 3',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: COLORS.white,
  Width: '100%',

  //minHeight: '80vh',

  "@media (min-width:320px)": {
    //flexDirection: "column",
  },
  "@media (min-width:768px)": {
    //flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    // flexDirection: "column",
  },


});


/*

    background: #fff;
    color: #666;
    */


export const ContainerCard = styled("div")({

  display: 'flex',
  flexWrap: 'wrap',


  justifyContent: 'center',

  //minHeight: '80vh',

  "@media (min-width:320px)": {
    //flexDirection: "column",
  },
  "@media (min-width:768px)": {
    //flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    // flexDirection: "column",
  },


});


export const ContainerMain = styled("div")({

  display: 'flex',

  backgroundColor: COLORS.white,
  maxWidth: '1200px',
  alignItems: 'center',
  flexDirection: 'column',
  //minHeight: '80vh',

  "@media (min-width:320px)": {
    //flexDirection: "column",
  },
  "@media (min-width:768px)": {
    //flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    // flexDirection: "column",
  },


});




export const Title = styled('h2')({
  color: 'rgb(9, 97, 173)',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '28px',
  fontWeight: '500',
  letterSpacing: '2px',
  lineHeight: '36.4px',
  margin: ' 40px 0 20px 0',

  textAlign: 'center',
  textTransform: 'none'
})






export const ComponenPrpuesta = styled("div")({
  backgroundColor: 'rgba(9, 96, 173, 0.04)',
  backgroundClip: 'border-box',
  opacity: '0.4.00%',
  color: 'rgb(102, 102, 102)',
  width: '100%',
  fontWeight: '400px',
  paddingBottom: '40px',
  "@media (min-width:320px)": {

    gridColumn: 'span 6',
    gridRow: 'span 3',
    margin: '10px',
    marginBottom: '40px',
    paddingTop: '40px',


  },
  "@media (min-width:768px)": {
    gridColumn: 'span 6',
    gridRow: 'span 3',
    margin: '10px',
    marginBottom: '35px',



  },
  "@media (min-width:1200px)": {
    flexDirection: 'row',
    gridColumn: 'span 6',
    gridRow: 'span 2',
    paddingBottom: '70px',
    paddingTop: '70px',
  },
});

export const SubContainerPropuesta = styled("div")({

  opacity: '0.4.00%',

  width: '100%',
  marginRight: '152.5px',
  "@media (min-width:320px)": {

    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  "@media (min-width:768px)": {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  "@media (min-width:1200px)": {

    justifyContent: 'center',

  },
});

export const TitlePropuesta = styled('h2')({

  fontSize: '32px',
  lineHeight: '41.6px', color: 'rgb(14, 50, 82)', textAlign: 'center',
  marginBottom: '20px',
  textTransform: 'uppercase',
  fontWeight: '600'
})
export const ContainerText = styled("div")({
  color: 'rgb(51, 51, 51)',
  boxSizing: 'border-box',

  // marginRight: '10px',

  lineHeight: '19.6px',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '20px',
  marginTop: '20px',

  "@media (min-width:320px)": {
    width: '100%'

  },
  "@media (min-width:768px)": {

    width: '90%',
  },
  "@media (min-width:1200px)": {
    width: '90%',
  },
});

export const ContainerLogoDone = styled('div')({
  marginTop: ' 70px',
  textAlign: 'center',
  width: '224px',
  //flexBasis: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  alignItems: 'center',


  "@media (min-width:320px)": {
    textAlign: 'center',

    justifyContent: 'center'

  },
  "@media (min-width:768px)": {


  },
  "@media (min-width:1200px)": {

  },

})
export const ImageDone = styled("img")({
  height: '80px',
  // marginRight: '40px',
  maxWidth: '100%',


  textAlign: 'center',


  "@media (min-width:320px)": {

  },
  "@media (min-width:768px)": {

  },
  "@media (min-width:1200px)": {

  },

});


export const ComponenAply = styled("div")({
  gridColumn: 'span 6',
  gridRow: 'span 1',
  margin: '10px',
  marginBottom: '100px',
  paddingTop: '40px',
  backgroundColor: 'rgb(255, 255, 255)',
  width: '100%',


  "@media (min-width:320px)": {




  },
  "@media (min-width:768px)": {



  },
  "@media (min-width:1200px)": {

  },
});


export const DefaultButton = styled(Button)({
  fontFamily: 'Montserrat, sans-serif',
  backgroundColor: 'rgb(0, 164, 79)',

  boxSizing: 'border-box',
  cursor: 'pointer',
  lineHeight: '38px',
  padding: '0 30px 0 30px',
  textTransform: 'uppercase',
  color: 'rgb(255, 255, 255)',
  fontStretch: '100%',
  color: COLORS.white,
  width: '100%',

  "&:hover,&:focus,&:active": {
    color: COLORS.white,
    backgroundColor: COLORS.black,

  },
  "@media (min-width:320px)": {
    fontSize: "15px",

    width: "200px",
  },
  "@media (min-width:768px)": {
    fontSize: "15px",

    width: "200px",

  },
  "@media (min-width:1200px)": {
    fontSize: "14px",
    width: "200px",
    fontWeight: '700'
  },
});
