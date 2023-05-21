import Dot from '@/pages/SelectEvent/components/Footer/components/FooterDots/components/Dot';
import DotsContainer from '@/pages/SelectEvent/components/Footer/components/FooterDots/components/DotsContainer';
import { currentSelectEventTabState } from '@/store';
import { useRecoilValue } from 'recoil';

const FooterDots = () => {
  const selectedTab = useRecoilValue(currentSelectEventTabState);
  return (
    <DotsContainer>
      <Dot isFilled={selectedTab === 0} />
      <Dot isFilled={selectedTab === 1} />
      <Dot isFilled={selectedTab === 2} />
    </DotsContainer>
  );
};

export default FooterDots;
