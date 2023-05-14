import BgImage from '@/pages/Splash/BgImage';
import Button from '@/shared/Button';
import { Box, Typography } from '@mui/material';

const Splash = () => {
	return (
		<Box>
			<Box
				sx={{
					position: 'absolute',
					border: '4px solid red',
					top: '33%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Typography
					variant='h1'
					sx={{
						position: 'relative',
						background: 'transparent',
						border: '1px solid black',
						color: 'white',
						textAlign: 'center',
						fontSize: '5rem',
						fontWeight: 'bold',
						fontFamily: 'sans-serif',
						letterSpacing: '0.5rem',
						padding: '1rem',
						zIndex: 1,
					}}
				>
					טוגו
				</Typography>
				<Typography variant='subtitle1'>פשוט לצאת</Typography>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					border: '4px solid red',
					top: '66%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
				}}
			>
				<Button label='התחברות באמצעות גוגל' />
				<Button label='התחברות באמצעות מייל' />
			</Box>

			<BgImage />
		</Box>
	);
};

export default Splash;
