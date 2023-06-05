import { currentSelectEventTabState } from '@/store';
import { useRecoilValue } from 'recoil';
import Dot from './_features/Dot';
import DotsContainer from './_features/DotsContainer';

const FooterDots = () => {
  const selectedTab = useRecoilValue(currentSelectEventTabState);
  return (
    <DotsContainer>
      <Dot isFilled={selectedTab === 'what'} />
      <Dot isFilled={selectedTab === 'how-much'} />
      <Dot isFilled={selectedTab === 'when'} />
    </DotsContainer>
  );
};

export default FooterDots;
