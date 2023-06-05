'use client';

import FooterContainer from './_features/FooterContainer';
import NotFindResultsLabel from './_features/NotFindResultsLabel';
import RefreshButton from './_features/RefreshButton';

const Footer = () => {
  return (
    <FooterContainer>
      <NotFindResultsLabel label='לא הוצאות שחיפשת?' />
      <RefreshButton />
    </FooterContainer>
  );
};

export default Footer;
