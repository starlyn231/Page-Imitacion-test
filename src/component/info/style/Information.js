import InfoIcon from '@mui/icons-material/Info';
import { styled } from "@mui/system";
import COLORS from '../../../theme/Colors';


export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',

});
export const IconInfo = styled(InfoIcon)(() => ({
  fontSize: '35px',
  color: COLORS.secondary
}))
