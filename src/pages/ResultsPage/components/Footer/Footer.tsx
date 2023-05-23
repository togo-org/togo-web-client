import FooterContainer from '@/pages/ResultsPage/components/Footer/components/FooterContainer/FooterContainer';
import NotFindResultsLabel from '@/pages/ResultsPage/components/Footer/components/NotFindResultsLabel';
import RefreshButton from '@/pages/ResultsPage/components/Footer/components/RefreshButton';

const Footer = () => {
  const handleRefreshClick = () => {
    console.log('Refresh');
  };

  return (
    <FooterContainer>
      <NotFindResultsLabel label='לא הוצאות שחיפשת?' />
      <RefreshButton onClick={handleRefreshClick} />
    </FooterContainer>
  );
};

export default Footer;
