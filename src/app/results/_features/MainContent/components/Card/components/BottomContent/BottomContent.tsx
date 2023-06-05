import LinkToSite from '@/pages/ResultsPage/components/MainContent/components/Card/components/LinkToSite/LinkToSite';
import { Box } from '@mui/material';

interface BottomContentProps {
  link: string | undefined;
}

const BottomContent = ({ link }: BottomContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <LinkToSite link={link} />
    </Box>
  );
};

export default BottomContent;
