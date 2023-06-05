import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { SelectEventTabLabels } from '@/types';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import useStyles from './Tabs.useStyles';

const Tabs = () => {
  const router = useRouter();
  const styles = useStyles();
  const [currentSelectEventTab, setSelectedTab] = useRecoilState(
    currentSelectEventTabState
  );

  const handleChangeTab = (tab: SelectEventTabLabels) => {
    setSelectedTab(tab);
    router.push(`/select-event/${tab}`);
  };

  return (
    <Box sx={styles.root}>
      <Button
        label='מה?'
        onClick={() => handleChangeTab('what')}
        sx={
          currentSelectEventTab === 'what'
            ? styles.selectedTab
            : styles.notSelectedTab
        }
      />
      <Button
        label='כמה?'
        onClick={() => handleChangeTab('how-much')}
        sx={
          currentSelectEventTab === 'how-much'
            ? styles.selectedTab
            : styles.notSelectedTab
        }
      />
      <Button
        label='מתי?'
        onClick={() => handleChangeTab('when')}
        sx={
          currentSelectEventTab === 'when'
            ? styles.selectedTab
            : styles.notSelectedTab
        }
      />
    </Box>
  );
};

export default Tabs;
