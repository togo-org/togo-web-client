import { Typography } from '@mui/material';
import Link from 'next/link';

interface NavLinkProps {
	href: string;
	label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
	return (
		<Link href={href}>
			<Typography variant='subtitle1'>{label}</Typography>
		</Link>
	);
};

export default NavLink;
