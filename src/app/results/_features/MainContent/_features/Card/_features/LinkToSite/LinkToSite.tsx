'use client';

import Button from '@/features/shared/Button';
import useStyles from './LinkToSite.useStyles';

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
