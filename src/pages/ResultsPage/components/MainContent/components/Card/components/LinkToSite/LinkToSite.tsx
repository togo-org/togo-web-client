import useStyles from '@/pages/ResultsPage/components/MainContent/components/Card/components/LinkToSite/LinkToSite.useStyles';
import Button from '@/shared/Button';

interface LinkToSiteProps {
  link: string | undefined;
}

const LinkToSite = ({ link }: LinkToSiteProps) => {
  const styles = useStyles();
  if (!link) {
    return null;
  }

  return (
    <Button label='לפרטים נוספים' href={link} shape='pill' sx={styles.root} />
  );
};

export default LinkToSite;
