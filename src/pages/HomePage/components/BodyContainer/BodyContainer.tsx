import { Box } from "@mui/material";
import useStyles from "./BodyContainer.useStyles";

interface BodyContainerProps {
  children: React.ReactNode;
}

const BodyContainer = ({ children }: BodyContainerProps) => {
  const styles = useStyles()
    return <Box sx={styles.root}>{children}</Box>;
};

export default BodyContainer;
