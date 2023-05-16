import EventTypeCard from '@/pages/SelectEvent/components/EventTypeCard';
import TabTitle from '@/pages/SelectEvent/components/TabTitle';
import IMAGES from '@/utils/constants/IMAGES';
import { Box } from '@mui/material';

const What = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '0px',
      }}
    >
      <TabTitle label='מה עושים?' />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <EventTypeCard label='טיול' src={IMAGES.CardTrip} alt='trip' />
        <EventTypeCard
          label='מסעדה'
          src={IMAGES.CardRestaurant}
          alt='restaurant'
        />
        <EventTypeCard
          label='אטרקציה'
          src={IMAGES.CardAttraction}
          alt='attraction'
        />
      </Box>
    </Box>
  );
};

export default What;
