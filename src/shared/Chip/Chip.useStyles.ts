import { grey } from '@/theme/colors';
import '@fontsource/rubik';

const useStyles = () => {
	return {
		root: {
			color: grey.grey2,
			backgroundColor: grey.grey3,
			fontFamily: 'rubik',
			fontSize: '0.75rem',
			borderRadius: '6px',
			border: `2px solid ${grey.grey2}`,
			width: 'fit-content',
			height: 'fit-content',
		},
	};
};

export default useStyles;
