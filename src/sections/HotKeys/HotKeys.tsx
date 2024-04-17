import { useHotkeys } from 'react-hotkeys-hook';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { FlexBox } from '@/components/styled.ts';
import useHotKeysDialog from '@/store/hotkeys/index.ts';
import useSidebar from '@/store/sidebar/index.ts';
import useTheme from '@/store/theme/index.ts';

function HotKeys() {
  const [, themeActions] = useTheme();
  const [, sidebarActions] = useSidebar();
  const [isHotKeysDialogOpen, hotKeysDialogActions] = useHotKeysDialog();

  // I would love to define all hotkeys in the config and loop it here and avoid this repetitive code.
  // But the `react-hotkeys-hook` library, which we use to handle hotkeys provides only hook (`useHotkeys`).
  // And as you know we can't use hooks inside loops (read "Rules of Hooks" - https://reactjs.org/docs/hooks-rules.html).
  // There is always a workaround, but sometimes it's better to avoid premature and unnecessary optimizations :)
  useHotkeys('shift+s', sidebarActions.toggle);
  useHotkeys('shift+t', themeActions.toggle);
  useHotkeys('shift+k', hotKeysDialogActions.toggle);

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      onClose={hotKeysDialogActions.close}
      open={isHotKeysDialogOpen}
      data-test-id="hotkeys-dialog"
    >
      <DialogTitle>Hot Keys</DialogTitle>
      <DialogContent>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Theme</Typography>
          <Button color="info" variant="outlined" onClick={themeActions.toggle}>
            shift + t
          </Button>
        </FlexBox>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Sidebar</Typography>
          <Button color="info" variant="outlined" onClick={sidebarActions.toggle}>
            shift + s
          </Button>
        </FlexBox>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Hot Keys&apos; Dialog</Typography>
          <Button color="info" variant="outlined" onClick={hotKeysDialogActions.toggle}>
            shift + k
          </Button>
        </FlexBox>
      </DialogContent>
    </Dialog>
  );
}

export default HotKeys;
