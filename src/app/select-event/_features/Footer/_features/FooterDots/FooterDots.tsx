import { currentSelectEventTabState } from '@/store';
import { useRecoilValue } from 'recoil';
import Dot from './_features/Dot';
import DotsContainer from './_features/DotsContainer';

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
