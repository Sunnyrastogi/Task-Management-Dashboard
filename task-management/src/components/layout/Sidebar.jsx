import  { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

const drawerWidth = 240;
const collapsedWidth = 60; // Width for the collapsed drawer

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ open }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDrawer = () => {
    setIsCollapsed((prev) => !prev);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Tasks', icon: <AssignmentIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: isCollapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isCollapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: isCollapsed ? 'center' : 'flex-end',
          padding: 1,
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {isCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
