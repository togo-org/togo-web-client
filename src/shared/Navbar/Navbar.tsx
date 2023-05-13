import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Box component='nav'>
			<Link href='/'>
				<Typography component='p' variant='body1'>
					Home
				</Typography>
			</Link>
			<Link href='/ComponentsTest'>
				<Typography component='p' variant='body1'>
					ComponentsTest
				</Typography>
			</Link>
			<Link href='/HomePage'>
				<Typography component='p' variant='body1'>
					HomePage
				</Typography>
			</Link>
		</Box>
	);
};

export default Navbar;
