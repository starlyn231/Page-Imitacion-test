import { fontSize, lineHeight, styled } from "@mui/system";
import COLORS from "../../../theme/Colors";
import { Button } from "@mui/material";



export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  //textAlign: "center",
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
  backgroundColor: COLORS.primary,
  borderRadius: "20px",
  fontSize: "15px !important",
  height: '38px',
  fontFamily: 'Bold!important',
  "&:hover,&:focus,&:active": {
    color: COLORS.white,
    backgroundColor: COLORS.grayHover,
  },
  "@media (min-width:320px)": {

    width: "180px",
  },
  "@media (min-width:768px)": {

    width: "230pxpx",
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
