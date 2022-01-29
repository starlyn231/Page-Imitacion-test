import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from "@mui/system";
import COLORS from '../../../theme/Colors';


export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',

});
export const IconLocation = styled(LocationOnIcon)(() => ({
  fontSize: '35px',
  color: COLORS.secondary
}))
