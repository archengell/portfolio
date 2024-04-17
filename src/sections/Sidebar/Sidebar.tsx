import { Link, PathRouteProps } from 'react-router-dom';
import React from 'react';

import DefaultIcon from '@mui/icons-material/Deblur';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  SwipeableDrawer,
} from '@mui/material';

import routes from '@/routes';
// import { Pages, Routes } from '@/routes/types.ts';
import useSidebar from '@/store/sidebar/index.ts';
import { Actions } from '@/store/sidebar/types.ts';
import { Colors } from '@lib/constants/colors.ts';

type SibeBarItemProps = {
  path: string;
  title: string;
  icon: React.FC<SvgIconProps>;
  sidebarActions: Actions;
};

const SidebarItem = ({ path, title, icon: Icon, sidebarActions }: SibeBarItemProps) => (
  <ListItem sx={{ p: 0 }} key={path}>
    <ListItemButton component={Link} to={path} onClick={sidebarActions.close}>
      <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItemButton>
  </ListItem>
);

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      data-pw="sidebar"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: Colors.Blue8,
        },
      }}
    >
      <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
        {Object.values(routes)
          .filter((route: any) => route.title)
          .map((item: any) => (
            <SidebarItem key={item.path} sidebarActions={sidebarActions} {...item} />
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
