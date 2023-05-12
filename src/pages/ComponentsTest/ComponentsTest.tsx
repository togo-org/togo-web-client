import Close from '@/assets/icons/close.svg';
import Button from '@/shared/Button';
import Chip from '@/shared/Chip';
import Icon from '@/shared/Icon';
import { Box, Typography, useTheme } from '@mui/material';


const ComponentsTest = () => {
	const theme = useTheme();
	return (
		<Box>
			<Typography
				variant='h1'
				sx={{
					color: theme.palette.primary.dark,
					fontSize: '2rem',
					fontWeight: 'bold',
					textAlign: 'center',
				}}
			>
				Components Test
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<Typography
					variant='h2'
					sx={{
						color: theme.palette.primary.light,
						fontSize: '1.5rem',
						fontWeight: 'bold',
					}}
				>
					Buttons
				</Typography>

				<Box>
					<Button label="variant='contained'" variant='contained' />
					<Button label="variant='outlined'" variant='outlined' />
					<Button label="variant='text'" variant='text' />
				</Box>
				<Box>
					<Button label="color='primary'" color='primary' />
					<Button label="color='secondary'" color='secondary' />
				</Box>
				<Box>
					<Button label="size='small'" size='small' />
					<Button label="size='medium'" size='medium' />
					<Button label="size='large'" size='large' />
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<Typography
					variant='h2'
					sx={{
						color: theme.palette.primary.light,
						fontSize: '1.5rem',
						fontWeight: 'bold',
					}}
				>
					Chips
				</Typography>
				<Chip label='אוכל טעים רצח' />
			</Box>

			<Icon src={Close} size='xl' alt='close' />
		</Box>
	);
};

export default ComponentsTest;
