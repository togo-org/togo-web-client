import { currentSelectEventTabState } from '@/store';
import ICONS from '@/utils/constants/ICONS';
import SELECT_EVENT_TABS from '@/utils/constants/SELECT_EVENT_TABS';
import { useRecoilState } from 'recoil';
import ActionsContainer from './_features/ActionsContainer';
import ArrowButton from './_features/ArrowButton';

const FooterActions = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(
    currentSelectEventTabState
  );

  const handleBackClick = () => {
    const tabsAmount = Object.keys(SELECT_EVENT_TABS).length;
    if (selectedTab === 0) {
      setSelectedTab(tabsAmount - 1);
    } else {
      setSelectedTab(selectedTab - 1);
    }
  };

  const handleNextClick = () => {
    const tabsAmount = Object.keys(SELECT_EVENT_TABS).length;
    if (selectedTab === tabsAmount - 1) {
      setSelectedTab(0);
    } else {
      setSelectedTab(selectedTab + 1);
    }
  };

  return (
    <ActionsContainer>
      <ArrowButton
        src={ICONS.ArrowBack}
        alt='arrow-left'
        onClick={handleBackClick}
      />
      <ArrowButton
        src={ICONS.ArrowForward}
        alt='arrow-right'
        onClick={handleNextClick}
      />
    </ActionsContainer>
  );
};

export default FooterActions;
