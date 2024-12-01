// src/components/layout/Header.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeToggle } from '../common/ThemeToggle';

// eslint-disable-next-line react/prop-types
export const Header = ({ onDrawerToggle }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Task Dashboard
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};