import HomePageBg from '@/assets/images/home-page-bg.png';
const useStyles = () => {
    return {
        root: {
            position: 'absolute',
            width:'fit-content',
            height:'fit-content',
            backgroundImage: `url(${HomePageBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }

};
export default useStyles;
