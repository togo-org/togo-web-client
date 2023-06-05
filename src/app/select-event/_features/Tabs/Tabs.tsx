import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import useStyles from './Tabs.useStyles';

const Tabs = () => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useRecoilState(
    currentSelectEventTabState
  );

  return (
    <Box sx={styles.root}>
      <Button
        label='מה?'
        onClick={() => setSelectedTab(0)}
        sx={selectedTab === 0 ? styles.selectedTab : styles.notSelectedTab}
      />
      <Button
        label='כמה?'
        onClick={() => setSelectedTab(1)}
        sx={selectedTab === 1 ? styles.selectedTab : styles.notSelectedTab}
      />
      <Button
        label='מתי?'
        onClick={() => setSelectedTab(2)}
        sx={selectedTab === 2 ? styles.selectedTab : styles.notSelectedTab}
      />
    </Box>
  );
};

export default Tabs;
