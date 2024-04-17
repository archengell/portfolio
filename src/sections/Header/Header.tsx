import { GitHub, InvertColors, Menu } from '@mui/icons-material';
import { AppBar, Box, Button, Divider, IconButton, Toolbar, Tooltip } from '@mui/material';

import ArchengeLogo from '@/assets/icons/ArchengeLogo.tsx';
import { FlexBox } from '@/components/styled.ts';

import { repository, title } from '@/config/index.ts';
import useHotKeysDialog from '@/store/hotkeys/index.ts';
import useNotifications from '@/store/notifications/index.ts';
import useSidebar from '@/store/sidebar/index.ts';
import useTheme from '@/store/theme/index.ts';

import { HotKeysButton } from './styled.ts';
import { getRandomJoke } from './utils.ts';

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
    <Box component={'div'} sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <Menu />
            </IconButton>
            <Tooltip arrow title="click me for an IT joke!" placement="right-end">
              <Button onClick={showNotification} color="info">
                {title}
              </Button>
            </Tooltip>
          </FlexBox>
          <FlexBox>
            <ArchengeLogo />
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + k
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="source code" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHub />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={themeActions.toggle}
                data-pw="theme-toggle"
              >
                <InvertColors />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
