import BgImage from '@/features/shared/BgImage';
import Button from '@/features/shared/Button';
import { isMenuOpenState } from '@/store';
import ICONS from '@/utils/constants/ICONS';
import IMAGES from '@/utils/constants/IMAGES';
import { useSetRecoilState } from 'recoil';
import ContentContainer from './_features/ContentContainer';
import PageContainer from './_features/PageContainer';
import SectionContainer from './_features/SectionContainer';
import SubTitle from './_features/SubTitle';
import TextAndIcon from './_features/TextAndIcon';
import Title from './_features/Title';
import TitlesContainer from './_features/TitlesContainer';

const sentences = [
  'יש לכם הצעות לשיפור?',
  'דברים שאהבתם?',
  'סתם רוצים לשתף על החוויה באפליקציה?',
  'נשמח לשמוע!',
];

const HamburgerPage = () => {
  const setIsMenuOpen = useSetRecoilState(isMenuOpenState);

  return (
    <PageContainer>
      <TitlesContainer>
        <Title />
        <SubTitle />
      </TitlesContainer>
      <ContentContainer>
        <SectionContainer>
          <TextAndIcon text='איך טוגו עוזרת לי' icon={ICONS.HelpCircle} />
          <Button label='מה זה טוגו?' shape='pill' />
        </SectionContainer>

        <SectionContainer>
          <TextAndIcon
            text='רוצים לקבל הצעות טובות ומדויקות יותר?'
            icon={ICONS.Smile}
          />
          <Button label='לחצו להרשמה' shape='pill' />
        </SectionContainer>

        <SectionContainer>
          <TextAndIcon text={sentences.join('\n')} icon={ICONS.MessageCircle} />
          <Button label='כתבו לנו כאן' shape='pill' />
        </SectionContainer>
        <Button
          label='חזור לדף הבית'
          shape='pill'
          onClick={() => setIsMenuOpen(false)}
        />
      </ContentContainer>

      <BgImage src={IMAGES.BgImage} alt='Background Image' />
    </PageContainer>
  );
};

export default HamburgerPage;
