import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from 'react-router-dom';
import {Pages, UserSettings, UrlPages, ChartsSettings, BotsSettings} from '../../utils/constants'

import headerStyles from './HeaderStyles'


const Header = () => {
  const navigate = useNavigate()

  const classes = headerStyles()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [anchorElCharts, setAnchorElCharts] = React.useState<null | HTMLElement>(null)
  const [anchorElBots, setAnchorElBots] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  };

  const handleOpenChartsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCharts(event.currentTarget)
  };

  const handleOpenBotsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBots(event.currentTarget)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleCloseMenu = () => {
    setAnchorElCharts(null)
    setAnchorElBots(null)
    setAnchorElUser(null)
  }

  const moveToPage = page => {
    const urlToNavigate = UrlPages.find(element => element.polishTranslation === page)?.name

    navigate(`/${urlToNavigate}`)
    setAnchorElNav(null);
  }

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CryptoRadar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Pages.map((page) => (
                <MenuItem key={page} onClick={() => moveToPage(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CryptoRadar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                  key={Pages[0]}
                  onClick={() => moveToPage(Pages[0])}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {Pages[0]}
            </Button>
            <>
              <Button
                key={Pages[1]}
                onClick={(e) => handleOpenChartsMenu(e)}
                onMouseOver={(e) => {
                  handleOpenChartsMenu(e)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {Pages[1]}
              </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar2"
                anchorEl={anchorElCharts}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElCharts)}
                onClose={handleCloseMenu}
                MenuListProps={{ onMouseLeave: handleCloseMenu }}
              >
                {ChartsSettings.map((setting) => (
                    <MenuItem key={setting} onClick={() => moveToPage(Pages[1])}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </>
            <>
              <Button
                key={Pages[2]}
                onClick={(e) => handleOpenBotsMenu(e)}
                onMouseOver={(e) => {
                  handleOpenBotsMenu(e)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {Pages[2]}
              </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar2"
                anchorEl={anchorElBots}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElBots)}
                onClose={handleCloseMenu}
                MenuListProps={{ onMouseLeave: handleCloseMenu }}
              >
                {BotsSettings.map((setting) => (
                    <MenuItem key={setting} onClick={() => moveToPage(Pages[2])}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </>
            <Button
                  key={Pages[3]}
                  onClick={() => moveToPage(Pages[3])}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {Pages[3]}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              // MenuListProps={{ onMouseLeave: handleCloseUserMenu }}
            >
              {UserSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Header
