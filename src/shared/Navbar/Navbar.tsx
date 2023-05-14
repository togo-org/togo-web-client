import NavLink from '@/shared/Navbar/NavLink';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <NavLink href='/' label='Home' />
      <NavLink href='/ComponentsTest' label='Components Test' />
      <NavLink href='/Splash' label='Splash' />
      <NavLink href='/SelectEvent' label='Select Event' />
      <NavLink href='/HamburgerPage' label='Hamburger' />
    </Box>
  );
};

export default Navbar;
