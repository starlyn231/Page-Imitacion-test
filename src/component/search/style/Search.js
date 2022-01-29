
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import COLORS from '../../../theme/Colors';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',
  zIndex: 1000
});
export const Searchicon = styled(SearchIcon)(() => ({

  color: COLORS.secondary,
  '&:hover,&:focus': {
    color: COLORS.primary,
  },
  '@media (min-width:768px)': {
    fontSize: '35px',
  },
  '@media (min-width:1200px)': {
    fontSize: '35px',
  },
}));