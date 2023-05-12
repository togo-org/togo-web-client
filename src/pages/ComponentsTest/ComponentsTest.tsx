import close from '@/assets/icons/close.svg';
import Button from '@/shared/Button';
import Chip from '@/shared/Chip';
import Icon from '@/shared/Icon/Icon';
import { Box } from '@mui/material';

const ComponentsTest = () => {
	return (
		<Box>
			<Button label='Click' />
			<Chip label='אוכל טעים רצח'/>
			<Icon src={close} size='xl' alt='close'/>
		</Box>
	);
};

export default ComponentsTest;
