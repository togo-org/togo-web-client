import useStyles from '@/pages/SelectEvent/components/Tabs/Tabs.useStyles';
import Button from '@/shared/Button';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface TabsProps {
  setSelectedTab: Dispatch<SetStateAction<string>>;
  selectedTab: string;
}

const Tabs = ({ setSelectedTab, selectedTab }: TabsProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Button
        label='מה?'
        onClick={() => setSelectedTab(SELECT_EVENT_TABS.WHAT)}
        color={selectedTab === SELECT_EVENT_TABS.WHAT ? 'primary' : 'secondary'}
      />
      <Button
        label='כמה?'
        onClick={() => setSelectedTab(SELECT_EVENT_TABS.HOW_MUCH)}
        color={
          selectedTab === SELECT_EVENT_TABS.HOW_MUCH ? 'primary' : 'secondary'
        }
      />
      <Button
        label='מתי?'
        onClick={() => setSelectedTab(SELECT_EVENT_TABS.WHEN)}
        color={selectedTab === SELECT_EVENT_TABS.WHEN ? 'primary' : 'secondary'}
      />
    </Box>
  );
};

export default Tabs;
