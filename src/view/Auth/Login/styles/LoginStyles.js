import { styled } from '@mui/system';
import COLORS from '../../../../theme/Colors';
import { Button } from '@mui/material';
//import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

export const LoginContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
});

export const LeftPanelContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    '@media (min-width:320px)': {
        width: '100%',
    },
    '@media (min-width:768px)': {
        width: '100%',
    },
    '@media (min-width:1200px)': {
        width: '100%',
    },
});

export const LogoImage = styled('img')({
    '@media (min-width:320px)': {
        width: '75%',
        margin: '10%',
    },
    '@media (min-width:768px)': {
        width: '75%',
        margin: '17%',

    },
    '@media (min-width:1200px)': {
        width: '60%',
        margin: '15%',

    },
});

export const Image = styled('div')({
    //trasnparaencia



    height: 'auto',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center ',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: "center",
    width: '100%',
    minHeight: '100vh',

    '@media (min-width:320px)': {

    },
    '@media (min-width:768px)': {

    },
    '@media (min-width:1200px)': {

    },
});

export const Title = styled('h1')({
    margin: 0,
    color: COLORS.secondary,
    fontFamily: 'Bold',
    '@media (min-width:320px)': {
        fontSize: '18px',
    },
    '@media (min-width:768px)': {
        fontSize: '18px',
    },
    '@media (min-width:1200px)': {
        fontSize: '20px',
    },
});


export const FlexStartContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '75%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifySelf: 'center',
});

export const TextFieldContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

export const LinkText = styled(Link)({
    color: COLORS.black,
    fontSize: '14px',
    fontFamily: 'Book',
    fontWeight: '700',
    margin: '3px',
    textDecoration: 'underline',
});

export const BodyText = styled('p')({
    color: COLORS.black,
    fontSize: '14px',
    fontFamily: 'Book',
    margin: '0'
});

export const FooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
});

export const TextError = styled('p')({
    color: COLORS.error,
    fontSize: '15px',
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    margin: '0'
});

export const ImageLogo = styled("img")({
    display: "flex",
    flexDirection: "column",
    width: "85%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",

    marginRight: '10px',
    "@media (min-width:320px)": {
        width: "250px",

    },
    "@media (min-width:768px)": {
        width: "250px",
    },
    "@media (min-width:1200px)": {
        width: "350px",

    },
});