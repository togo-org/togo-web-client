'use client';

import React from 'react';
import ComponentSection from './_features/ComponentSection';
import Header from './_features/Header';
import PageContainer from './_features/PageContainer';
import ButtonsSection from './_features/sections/ButtonsSection';
import ChipsSection from './_features/sections/ChipsSection';
import IconsSection from './_features/sections/IconsSection';
import SvgSection from './_features/sections/SvgSection';

const ComponentsTest = () => {
  return (
    <PageContainer>
      <Header />

      <ComponentSection
        title='Buttons'
        description='All the buttons in the app with all the states and variations'
        componentsCountainer={<ButtonsSection />}
      />
      <ComponentSection
        title='Chips'
        description='All the chips in the app with all the states and variations'
        componentsCountainer={<ChipsSection />}
      />

      <ComponentSection
        title='Icons'
        description='All the icons in the app with all the states and variations'
        componentsCountainer={<IconsSection />}
      />
      <ComponentSection
        title='Svg'
        description='All the svgs in the app with all the states and variations'
        componentsCountainer={<SvgSection fontSize='small' />}
      />
    </PageContainer>
  );
};

export default ComponentsTest;
