import Button from '@/shared/Button';
import { Box } from '@mui/material';

const ButtonsSection = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
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
	);
};

export default ButtonsSection;
