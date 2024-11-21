import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);

  const handleOpenServices = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleCloseServices = () => {
    setServicesAnchor(null);
  };

  const handleOpenMobile = (event: React.MouseEvent<HTMLElement>) => {
    setMobileAnchor(event.currentTarget);
  };

  const handleCloseMobile = () => {
    setMobileAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleCloseServices();
    handleCloseMobile();
  };

  const services = [
    { name: 'Data Recovery', path: '/data-recovery' },
    { name: 'Computer Repair', path: '/computer-repair' },
    { name: 'Gaming Computers', path: '/gaming-computers' },
    { name: 'VoIP Services', path: '/voip-services' },
    { name: 'AI Support Agent', path: '/ai-support' }
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WCAT
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-mobile"
              aria-haspopup="true"
              onClick={handleOpenMobile}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-mobile"
              anchorEl={mobileAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(mobileAnchor)}
              onClose={handleCloseMobile}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => handleNavigation('/products')}>
                Products
              </MenuItem>
              {services.map((service) => (
                <MenuItem 
                  key={service.path}
                  onClick={() => handleNavigation(service.path)}
                >
                  {service.name}
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleNavigation('/about')}>
                About
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/contact')}>
                Contact
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WCAT
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => handleNavigation('/products')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Products
            </Button>
            <Button
              onClick={handleOpenServices}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Services
            </Button>
            <Menu
              id="menu-services"
              anchorEl={servicesAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(servicesAnchor)}
              onClose={handleCloseServices}
            >
              {services.map((service) => (
                <MenuItem 
                  key={service.path}
                  onClick={() => handleNavigation(service.path)}
                >
                  {service.name}
                </MenuItem>
              ))}
            </Menu>
            <Button
              onClick={() => handleNavigation('/about')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button
              onClick={() => handleNavigation('/contact')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact
            </Button>
          </Box>

          {/* Contact Info */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={() => window.location.href = 'tel:954-633-5353'}
            >
              954.633.5353
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
