import { styled } from '@mui/system';
import COLORS from '../../../theme/Colors';
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: COLORS.white,
  minHeight: '350px',

  '@media(min-width:320px)': {
    minWidth: '300px',

  },
  '@media(min-width:768px)': {
    minWidth: '400px',
    overflow: 'hidden'

  },
  '@media(min-width:1200px)': {

    overflow: 'hidden'
  },

});


export const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});
export const ContentContainer = styled('div')({
  marginTop: '5px',
  alignSelf: 'center',
  width: '90%',
});

export const StyledBackdrop = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '80%',
  backdropFilter: 'blur(8px)'
});

export const StyledCloseIcon = styled(CloseIcon)({
  alignSelf: 'center',
  color: COLORS.gray,
  '@media (min-width:320px)': {
    fontSize: '18px',
  },
  '@media (min-width:768px)': {
    fontSize: '20px',
  },
  '@media (min-width:1200px)': {
    fontSize: '25px',
  }
});