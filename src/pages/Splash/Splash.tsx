import BgImage from '@/pages/Splash/components/BgImage';
import SubTitle from '@/pages/Splash/components/SubTitle';
import Title from '@/pages/Splash/components/Title';
import Button from '@/shared/Button';
import { Box } from '@mui/material';

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
				<SubTitle />
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
				<Button label='התחברות באמצעות גוגל' shape='pill' />
				<Button label='התחברות באמצעות מייל' shape='pill' />
			</Box>

			<BgImage />
		</Box>
	);
};

export default Splash;
