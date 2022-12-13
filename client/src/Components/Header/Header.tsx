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
  let currentlyChartsHovering = false;
  let currentlyBotsHovering = false;
  const navigate = useNavigate()

  const styles = headerStyles()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [anchorElCharts, setAnchorElCharts] = React.useState<null | HTMLElement>(null)
  const [anchorElBots, setAnchorElBots] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleOpenChartsMenu = (event: React.MouseEvent<HTMLElement>) => {
    handleChartsHover()
    setAnchorElCharts(event.currentTarget)
  }
  const handleOpenBotsMenu = (event: React.MouseEvent<HTMLElement>) => {
    handleBotsHover()
    setAnchorElBots(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleCloseMenu = () => {
    setAnchorElCharts(null)
    setAnchorElBots(null)
    setAnchorElUser(null)
  }

  const handleBotsHover = () => {
    currentlyBotsHovering = true
  }
  const handleChartsHover = () => {
    currentlyChartsHovering = true
  }

  const handleCloseBotsHover = () => {
    currentlyBotsHovering = false
    setTimeout(() => {
      if (!currentlyBotsHovering) {
        handleCloseMenu()
      }
    }, 50)
  }
  const handleCloseChartsHover = () => {
    currentlyChartsHovering = false
    setTimeout(() => {
      if (!currentlyChartsHovering) {
        handleCloseMenu()
      }
    }, 50)
  }

  const moveToPage = (page, setting = undefined) => {
    console.log(setting)

    const urlToNavigate = UrlPages.find(element => element.polishTranslation === page)?.name ?? UrlPages[0].name

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
                aria-owns={anchorElCharts ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={(e) => handleOpenChartsMenu(e)}
                onMouseOver={(e) => {
                  handleOpenChartsMenu(e)
                }}
                onMouseLeave={handleCloseChartsHover}
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
                MenuListProps={{
                  onMouseLeave: handleCloseChartsHover,
                  onMouseEnter: handleChartsHover,
                  style: { pointerEvents: "auto" }
                }}
                PopoverClasses={{
                  root: styles.popOverRoot
                }}
              >
                {ChartsSettings.map((setting) => (
                    <MenuItem key={setting} onClick={() => moveToPage(Pages[1], setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </>
            <Button
                  key={Pages[4]}
                  onClick={() => moveToPage(Pages[4])}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {Pages[4]}
            </Button>
            <>
              <Button
                key={Pages[2]}
                aria-owns={anchorElBots ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={(e) => handleOpenBotsMenu(e)}
                onMouseOver={(e) => {
                  handleOpenBotsMenu(e)
                }}
                onMouseLeave={handleCloseBotsHover}
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
                MenuListProps={{
                  onMouseLeave: handleCloseMenu,
                  onMouseEnter: handleBotsHover,
                  style: { pointerEvents: "auto" }
                }}
                PopoverClasses={{
                  root: styles.popOverRoot
                }}
              >
                {BotsSettings.map((setting) => (
                    <MenuItem key={setting} onClick={() => moveToPage(Pages[2], setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </>
            <Button
                  key={Pages[3]}
                  onClick={(e) => moveToPage(e, Pages[3])}
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
