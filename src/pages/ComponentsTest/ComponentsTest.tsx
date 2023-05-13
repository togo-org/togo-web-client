import ComponentSection from '@/pages/ComponentsTest/ComponentSection';
import Header from '@/pages/ComponentsTest/Header';
import PageContainer from '@/pages/ComponentsTest/PageContainer';
import ButtonsSection from '@/pages/ComponentsTest/sections/ButtonsSection';
import ChipsSection from '@/pages/ComponentsTest/sections/ChipsSection';
import IconsSection from '@/pages/ComponentsTest/sections/IconsSection';

const ComponentsTest = () => {
	return (
		<PageContainer>
			<Header />
			<ComponentSection
				title='Buttons'
				description='All the buttons in the app with all the states and variations'
				component={<ButtonsSection />}
			/>
			<ComponentSection
				title='Chips'
				description='All the chips in the app with all the states and variations'
				component={<ChipsSection />}
			/>

			<ComponentSection
				title='Icons'
				description='All the icons in the app with all the states and variations'
				component={<IconsSection />}
			/>
		</PageContainer>
	);
};

export default ComponentsTest;
