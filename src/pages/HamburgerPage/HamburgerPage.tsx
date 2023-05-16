import PageContainer from "@/pages/HamburgerPage/components/PageContainer"
import BgImage from "@/shared/BgImage"
import IMAGES from "@/utils/constants/IMAGES"

const HamburgerPage = () => {
    return (
        <PageContainer>

            <BgImage src={IMAGES.BgImage} alt='Background Image' />
        </PageContainer>
    )
}

export default HamburgerPage