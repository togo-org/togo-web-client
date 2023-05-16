import useStyles from "@/pages/HamburgerPage/components/PageContainer/PageContainer.useStyles";
import { Box } from "@mui/material";
import React from "react";

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
    const styles = useStyles();
    return (
        <Box component='main' sx={styles.root}>
            {children}
        </Box>
    );
}

export default PageContainer;