import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

type HeaderProps = { siteTitle: string };

const Header = ({ siteTitle }: HeaderProps) => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">{siteTitle}</Typography>
      </Toolbar>
    </AppBar>
  </header>
);

export default Header;
