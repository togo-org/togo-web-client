import AddressLine from '@/pages/ResultsPage/components/MainContent/components/Card/components/AddressLine/AddressLine';
import EventDistance from '@/pages/ResultsPage/components/MainContent/components/Card/components/EventDistance/EventDistance';
import EventName from '@/pages/ResultsPage/components/MainContent/components/Card/components/EventName/EventName';
import { Box } from '@mui/material';

interface TopContentProps {
  name: string;
  distance: number;
  address: string;
  city: string;
}

const TopContent = ({ name, distance, address, city }: TopContentProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          padding: '0px',
        }}
      >
        <EventName name={name} />
        <EventDistance distance={distance} />
      </Box>
      <AddressLine address={address} city={city} />
    </Box>
  );
};

export default TopContent;
