import BgImage from '@/pages/Splash/components/BgImage';
import Title from '@/pages/Splash/components/Title';
import Button from '@/shared/Button';
import { Box, Typography } from '@mui/material';

const Splash = () => {
	return (
		<Box>
			<Box
				sx={{
					position: 'absolute',
					top: '33%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Title />

				<Typography variant='subtitle1'>פשוט לצאת</Typography>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: '66%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					width: '100%',
					alignItems: 'center',
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
