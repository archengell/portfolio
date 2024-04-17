import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Colors } from '@lib/constants/colors';

const HotKeysButton = styled(Button)(({ theme }) => ({
  height: 'fit-content',
  alignSelf: 'center',
  marginRight: theme.spacing(1),
  borderColor: Colors.Blue8,
  '&:hover': {
    borderColor: theme.palette.text.disabled,
  },
  color: Colors.Blue8,
}));

export { HotKeysButton };
