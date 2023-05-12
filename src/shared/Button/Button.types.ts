type ButtonVariant = 'text' | 'outlined' | 'contained';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
}

export interface ButtonOptionsInterface {
	variant: ButtonVariant;
	size: ButtonSize;
	color: ButtonColor;
}

export default ButtonProps;
