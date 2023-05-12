import Close from '@/assets/icons/close.svg';
import IconProps, { IconSize } from '@/shared/Icon/Icon.types';
import useStyles from '@/shared/Icon/Icon.useStyles';
import { Box } from '@mui/material';
import Image from 'next/image';

const Icon = ({ src, size, alt }: IconProps) => {
	const styles = useStyles();
	function getSizeStyles(size: IconSize) {
		switch (size) {
			case 'xl': {
				return styles.size.xl;
			}
			case 'l': {
				return styles.size.l;
			}
			case 'm': {
				return styles.size.m;
			}
			case 's': {
				return styles.size.s;
			}
			case 'xs': {
				return styles.size.xs;
			}
		}
	}

	console.log('src', src);

	return (
		<Box sx={{ ...getSizeStyles(size) }}>
			<Image src={Close} alt={alt} style={{ width: '100%', height: '100%' }} />
		</Box>
	);
};

export default Icon;
