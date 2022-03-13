import { padding, styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Divider } from '@mui/material';


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


export const ContainerImage = styled("div")({
  gridColumn: 'span 6',
  gridRow: 'span 2',
  display: 'flex',
  justifyContent: 'center',

  width: '100%',


  "@media (min-width:320px)": {
    //flexDirection: "column",
  },
  "@media (min-width:768px)": {
    //flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    flexWrap: 'wrap',
    flexDirection: "row",

  },

});
export const SubContainer = styled("div")({
  maxWidth: '1200px',




  "@media (min-width:320px)": {
    flexDirection: "column",

  },
  "@media (min-width:768px)": {
    flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',

    alignItems: 'center',
  },

});


export const Image = styled("img")({

  "@media (min-width:320px)": {
    width: ' 300px'
  },
  "@media (min-width:768px)": {
    height: '723.75px',
    marginRight: '40px',
    marginBottom: '40px',
    width: ' 550px'
  },
  "@media (min-width:1200px)": {
    height: '723.75px',
    marginRight: '40px',
    marginBottom: '40px',
    width: ' 100%'
  },

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


export const Card = styled('div')({
  display: 'flex',
  textAlign: 'center',
  width: '342px',
  backgroundColor: COLORS.white,
  flexDirection: "column",
  height: '230px',
  padding: '15px 20px 15px 20px',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px',
  boxSizing: 'border-box',
  fontSize: '16px',
  lineHeight: '24px',
  margin: ' 5px 15px 20px 15px',
  "@media (min-width:320px)": {
    flexDirection: "column",
  },
  "@media (min-width:768px)": {
    flexDirection: "column",
  },
  "@media (min-width:1200px)": {
    flexDirection: "column",
  },
})


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
export const TextContainer = styled('div')({


  "@media (min-width:320px)": {

    width: '80vw',

  },
  "@media (min-width:768px)": {

  },
  "@media (min-width:1200px)": {
    width: '565px',
    margin: '20px, 10px 20px 0px'
  }

})


export const TextInforme = styled('p')({
  fontFamily: 'Montserrat, sans-serif',

  textAlign: 'justify',

  fontWeight: '600',


  "@media (min-width:320px)": {

    fontSize: '16px',
    fontWeight: '400', textAlign: 'justify',
  },
  "@media (min-width:768px)": {
    fontSize: '16px',
  },
  "@media (min-width:1200px)": {
    maxWidth: '100%',

    color: 'rgb(14, 50, 82)',
    fontWeight: '300',
    marginBottom: '20px',
    marginTop: '20px',
  }
})