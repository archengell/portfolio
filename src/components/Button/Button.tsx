import { Button as BaseButton } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '@lib/constants/colors.ts';

export const StyledButton = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${Colors.Blue8};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${Colors.Blue8};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${Colors.Blue8}, inset 0 -2px 1px ${Colors.Blue8};

  &:hover {
    background-color: ${Colors.Blue8};
  }

  &:active {
    background-color: ${Colors.Blue8};
    box-shadow: none;
    transform: scale(0.99);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${Colors.Blue8};
    outline: none;
  }

  &.base--disabled {
    background-color: ${Colors.Light2}
    color: 'white'
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
);
