import PageContainer from "@/pages/HamburgerPage/components/PageContainer"
import BgImage from "@/shared/BgImage"
import IMAGES from "@/utils/constants/IMAGES"
import TitlesContainer from "@/pages/HamburgerPage/components/TitlesContainer/TitlesContainer"
import Title from "@/pages/HamburgerPage/components/Title/Title"
import SubTitle from "@/pages/HamburgerPage/components/SubTitle/SubTitle"

const HamburgerPage = () => {
    return (
        <PageContainer>
            <TitlesContainer>
                <Title />
                <SubTitle />
            </TitlesContainer>
            <BgImage src={IMAGES.BgImage} alt='Background Image' />
        </PageContainer>
    )
}

export default HamburgerPage