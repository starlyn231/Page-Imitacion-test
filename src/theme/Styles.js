import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';
import COLORS from './Colors';

export const boxShadowConfig = "5px 5px 50px -15px rgba(0,0,0,0.51)"

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const Row = styled('div')({
    display: 'flex',
    flexDirection: 'row',
});

export const StyledButton = styled(Button)({
    minHeight: '38px',
    width: '100%',
    borderRadius: '20px',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '15px',
    },
    fontFamily: 'Bold',
    '&:hover,&:focus,&:active': {
        color: COLORS.white,
        backgroundColor: COLORS.primary,
    }
});

export const StyledButtonOutlined = styled(Button)(props => ({
    minHeight: '38px',
    width: '100%',
    fontFamily: 'Bold',
    borderColor: COLORS.secondary,
    border: ` 1px solid ${COLORS.secondary}`,
    borderRadius: '20px',
    color: props.active ? COLORS.white : COLORS.secondary,
    backgroundColor: props.active ? COLORS.secondary : COLORS.white,
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '15px',
    },
    fontFamily: 'Bold',
    '&:hover,&:focus,&:active': {
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    }
}));

export const StyledTextInput = styled(TextField)({
    width: '100%',
    alignSelf: 'center',

    '& .MuiInputBase-input ': {
        width: '100%',
        fontSize: '17px',
        backgroundColor: 'transparent',
        padding: 5
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: COLORS.white,
            borderRadius: '6px',
            minHeight: '17px',
            width: '100%',
        },

        '&:hover fieldset': {
            borderColor: COLORS.white,
            width: '100%',
        },
        '&.Mui-focused fieldset': {
            borderColor: COLORS.white,
            //borderWidth: '1px',
            width: '100%',
        },
    },
});

export const BodyText = styled('p')({
    margin: 0,
    textAlign: 'left',
    fontSize: '15px',
    color: COLORS.black,
    fontFamily: 'Book',
    fontWeight: '400',
});

export const BodyTextBold = styled('p')({
    margin: 0,
    textAlign: 'left',
    fontSize: '15px',
    color: COLORS.black,
    fontFamily: 'Book',
    fontWeight: 'bold',
});

export const Title = styled('h1')({
    margin: 0,
    fontFamily: 'Bold',
    fontSize: '40px',
    '@media(max-width:768px)': {
        fontSize: '30px',
    },
    color: COLORS.secondary,
});

export const SubTitle = styled('h4')({
    margin: 0,
    fontFamily: 'Book',
    fontSize: '30px',
    '@media(max-width:768px)': {
        fontSize: '20px',
    },
    color: COLORS.secondary,
});

export const RowBodyDivider = styled('div')({
    width: '7%'
});
export const SmallHeightDivider = styled('div')({
    height: '15px'
});

export const MediumHeightDivider = styled('div')({
    height: '60px'
});

export const WpRichTextContainer = styled('div')({
    fontFamily: 'Fira Sans'
});

export const ButtonsMenuContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    '@media (min-width:320px)': {
        width: '100%',
    },
    '@media (min-width:768px)': {
        width: '80%',
    },
    '@media (min-width:1200px)': {
        width: '70%',
    },
});

export const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    boxShadow: boxShadowConfig,
});

export const CardBodyTitle = styled('p')({
    margin: 0,
    fontFamily: 'Book',
    color: COLORS.black,
    '@media(min-width:320px)': {
        fontSize: '12px',
    },
    '@media(min-width:768px)': {
        fontSize: '12px',
    },
    '@media(min-width:1200px)': {
        fontSize: '15px',
    },
});

export const CardBodyText = styled('p')({
    width: '100%',
    margin: 0,
    fontFamily: 'Book',
    color: COLORS.secondary,
    '@media(min-width:320px)': {
        fontSize: '13px',
    },
    '@media(min-width:768px)': {
        fontSize: '13px',
    },
    '@media(min-width:1200px)': {
        fontSize: '17px',
    },
});

export const CardTextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    padding: '2%'
});


//temporary
export const LinkText = styled("a")({
    color: COLORS.white,
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "Book",
    margin: "3px",
    textDecoration: "none",
    "&:hover,&:focus": {
        textDecoration: "underline",
    },
});

export const FieldTitle = styled('p')({
    marginTop: '3px',
    color: COLORS.white,
    lineHeight: '20px',
    fontFamily: '  Helvetica Neue, Helvetica, Arial, sans-serif',
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
    Width: '1585px',

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
        height: '658px',
        marginRight: '40px',
        marginBottom: '40px',
        width: ' 550px'
    },
    "@media (min-width:1200px)": {
        height: '723.75px',
        marginRight: '40px',
        marginBottom: '40px',
        width: ' 50%'
    },

});


export const TitleMain = styled('h2')({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '35.7px',
    fontWeight: '600',
    color: 'rgb(9, 97, 173)',
    letterSpacing: '10px',
    margin: '30px',
    marginTop: '40px', width: '179px',
    textTransform: 'uppercase', maxWidth: '100%',
    lineHeight: '42.8333px'
})

export const ContainerTextInforme = styled('div')({

    fontFamily: 'Montserrat, sans-serif', fontSize: '16px',
    fontWeight: '300', color: 'rgb(14, 50, 82)',
    marginBottom: '20px', marginTop: '20px',
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

    color: 'rgb(14, 50, 82)',
    textAlign: 'justify',
    lineHeight: '24px',
    fontWeight: '600',


    "@media (min-width:320px)": {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontWeight: '600', textAlign: 'justify',
    },
    "@media (min-width:768px)": {
        fontSize: '16px',
    },
    "@media (min-width:1200px)": {
        maxWidth: '100%',
        fontSize: '16px',
        color: 'rgb(14, 50, 82)',
        fontWeight: '600',
        marginBottom: '20px',
        marginTop: '20px',
    }
})
