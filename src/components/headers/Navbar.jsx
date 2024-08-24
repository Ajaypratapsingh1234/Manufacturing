import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About Us', 'Consulting & Services', 'Industries', 'Blog', 'Case studies', 'Career', 'Contact Us'];

const consultingSubPages = [
  'Consulting & Services', // Add this to the list
  'Automotive',
  'Aerospace and Defense',
  'Electronics and Electrical Equipment',
  'Consumer Goods',
  'Food and Beverage',
  'Pharmaceuticals and Biotechnology',
  'Chemicals and Petrochemicals',
  'Textiles and Apparel',
  'Metal Fabrication and Machinery',
  'Plastic and Rubber Products',
  'Paper and Packaging',
  'Construction Materials',
  'Medical Devices',
  'Industrial Equipment',
  'Furniture and Wood Products',
  'Agriculture Equipment',
  'Glass and Ceramics',
  'Renewable Energy Equipment',
  'Engineering Manufacturing'
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElConsulting, setAnchorElConsulting] = React.useState(null);
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    handleCloseNavMenu();
    if (page === 'Consulting & Services') {
      navigate('/consulting-and-services');
    } else {
      navigate(`/${page.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenConsultingMenu = (event) => {
    setAnchorElConsulting(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseConsultingMenu = () => {
    setAnchorElConsulting(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <span className="material-symbols-outlined">
          <img 
    src="assets/Logo1.jpeg" 
    alt="Logo" 
    style={{
      width: '50px', // Initial size
      height: '50px',
      borderRadius: '50%', // Makes the logo circular
      objectFit: 'cover',  // Ensures the image covers the entire area of the circle
      transition: 'transform 0.1s ease', // Smooth transition
    }} 
    className="logo"
  />
          </span>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigation(page)}>
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
            href="#app-bar-with-responsive-menu"
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box key={page} sx={{ position: 'relative' }}>
                <Button
                  onClick={() => page === 'Consulting & Services' ? handleOpenConsultingMenu() : handleNavigation(page)}
                  onMouseEnter={page === 'Consulting & Services' ? handleOpenConsultingMenu : null}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
                {page === 'Consulting & Services' && (
                  <Menu
                    id="menu-consulting"
                    anchorEl={anchorElConsulting}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElConsulting)}
                    onClose={handleCloseConsultingMenu}
                    MenuListProps={{
                      onMouseLeave: handleCloseConsultingMenu,
                    }}
                  >
                    {consultingSubPages.map((subPage) => (
                      <MenuItem key={subPage} onClick={() => handleNavigation(subPage)}>
                        <Typography textAlign="center">{subPage}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
