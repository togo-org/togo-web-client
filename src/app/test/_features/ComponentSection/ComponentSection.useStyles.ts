const useStyles = () => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
		},

		title: {
			fontSize: '2rem',
			textAlign: 'center',
		},

		description: {
			fontSize: '1.2rem',
			textAlign: 'center',
		},

		components: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
	};
};

export default useStyles;
