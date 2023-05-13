import NavLink from '@/shared/Navbar/NavLink';
import { Box } from '@mui/material';

const Navbar = () => {
	return (
		<Box component='nav'>
			<NavLink href='/' label='Home' />
			<NavLink href='/ComponentsTest' label='Components Test' />
		</Box>
	);
};

export default Navbar;
