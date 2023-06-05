'use client';

// src/app/select-event/_features/ContentContainer/ContentContainer.tsx
import BgImage from '@/features/shared/BgImage';
import IMAGES from '@/utils/constants/IMAGES';
import React from 'react';
import ContentContainer from './_features/ContentContainer';
import Footer from './_features/Footer';
import HeaderContainer from './_features/HeaderContainer';
import PageWrapper from './_features/PageWrapper';
import Tabs from './_features/Tabs';

interface SelectEventLayoutProps {
  children: React.ReactNode;
}

const SelectEventLayout = ({ children }: SelectEventLayoutProps) => {
  return (
    <PageWrapper>
      <HeaderContainer>
        <Tabs />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
      <BgImage src={IMAGES.BgImage} alt='Background Image' />
      <Footer />
    </PageWrapper>
  );
};

export default SelectEventLayout;
