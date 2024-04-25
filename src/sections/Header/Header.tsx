import { GitHub, InvertColors, Menu, EmojiEmotionsOutlined } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import ArchengeLogo from '@/assets/icons/ArchengeLogo.tsx';
import { FlexBox } from '@/components/styled.ts';

import { repository } from '@/config/index.ts';
import useHotKeysDialog from '@/store/hotkeys/index.ts';
import useNotifications from '@/store/notifications/index.ts';
import useSidebar from '@/store/sidebar/index.ts';
import useTheme from '@/store/theme/index.ts';
import { Themes } from '@/theme/types.ts';

import { HotKeysButton } from './styled.ts';
import { getRandomJoke } from './utils.ts';
import { Colors } from '../../../lib/constants/colors.ts';

type DynamicTypographyProps = {
  children: string;
  minSize: number;
};

const DynamicTypography = ({ children, minSize }: DynamicTypographyProps) => {
  const fontSize = Math.max(minSize, window.innerWidth * 0.01); // Adjust the factor as needed

  return <Typography style={{ fontSize }}>{children}</Typography>;
};

function Header() {
  const [, sidebarActions] = useSidebar();
  const [theme, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // If you want to show a fully customized notification, you can define
        // your own `variant`s, see @/sections/Notifications/Notifications.tsx
        variant: 'customNotification',
      },
      message: getRandomJoke(),
    });
  }

  return (
    <Box
      component={'div'}
      sx={{
        flexGrow: 1,
        width: '100vw',
      }}
      data-pw={`theme-${theme}`}
    >
      <AppBar
        elevation={4}
        position="fixed"
        sx={{
          backgroundColor: `${theme === Themes.DARK ? Colors.Dark5 : Colors.Light1}`,
          borderBottom: `2px solid ${Colors.Blue8}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
              <IconButton
                onClick={sidebarActions.toggle}
                size="large"
                edge="start"
                color="info"
                aria-label="menu"
              >
                <Menu />
              </IconButton>
              <Tooltip arrow title="click me for an IT joke!" placement="right">
                <Button onClick={showNotification} color="info">
                  <EmojiEmotionsOutlined />
                  {/* <DynamicTypography minSize={8}>{title}</DynamicTypography> */}
                </Button>
              </Tooltip>
            </Stack>
          </FlexBox>
          <FlexBox>
            <ArchengeLogo />
          </FlexBox>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
            <FlexBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  <DynamicTypography minSize={8}>{'alt + k'}</DynamicTypography>
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Tooltip title="source code" arrow>
              <IconButton color="info" size="small" component="a" href={repository} target="_blank">
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="small"
                onClick={themeActions.toggle}
                data-pw="theme-toggle"
              >
                <InvertColors />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
