import { Box } from "@mui/material";
import useStyles from "@/pages/HomePage/components/CardContainer/CardContainer.useStyles";

interface CardContainerProps {  
    children: React.ReactNode;
}

const CardContainer = ({children} : CardContainerProps) => {
    const styles = useStyles();
    return (<Box sx={styles.root}>
        {children}
    </Box>);
    };
export default CardContainer;