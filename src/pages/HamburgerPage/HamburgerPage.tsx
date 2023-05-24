import PageContainer from "@/pages/HamburgerPage/components/PageContainer"
import BgImage from "@/shared/BgImage"
import IMAGES from "@/utils/constants/IMAGES"
import TitlesContainer from "@/pages/HamburgerPage/components/TitlesContainer"
import Title from "@/pages/HamburgerPage/components/Title"
import SubTitle from "@/pages/HamburgerPage/components/SubTitle"
import ContentContainer from "@/pages/HamburgerPage/components/ContentContainer"
import Button from '@/shared/Button';
import TextAndIcon from "@/pages/HamburgerPage/components/TextAndIcon/TextAndIcon"
import SectionContainer from "@/pages/HamburgerPage/components/SectionContainer"
import ICONS from '@/utils/constants/ICONS';

const sentences =
    ['יש לכם הצעות לשיפור?',
        'דברים שאהבתם?',
        'סתם רוצים לשתף על החוויה באפליקציה?',
        'נשמח לשמוע!'
    ]

const HamburgerPage = () => {
    return (
        <PageContainer>
            <TitlesContainer>
                <Title />
                <SubTitle />
            </TitlesContainer>
            <ContentContainer>
                <SectionContainer>
                    <TextAndIcon text={'איך טוגו עוזרת לי'} icon={ICONS.HelpCircle} />
                    <Button label='מה זה טוגו?' shape='pill' />
                </SectionContainer>

                <SectionContainer>
                    <TextAndIcon text={'רוצים לקבל הצעות טובות ומדויקות יותר?'} icon={ICONS.Smile} />
                    <Button label='לחצו להרשמה' shape='pill' />
                </SectionContainer>

                <SectionContainer>
                    <TextAndIcon text={sentences.join('\n')} icon={ICONS.MessageCircle} />
                    <Button label='כתבו לנו כאן' shape='pill' />
                </SectionContainer>
            </ContentContainer>

            <BgImage src={IMAGES.BgImage} alt='Background Image' />
        </PageContainer>
    )
}

export default HamburgerPage