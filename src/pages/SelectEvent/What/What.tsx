import EventTypeCard from '@/pages/SelectEvent/components/EventTypeCard';
import TabTitle from '@/pages/SelectEvent/components/TabTitle';
import { userSearchDataState } from '@/store';
import IMAGES from '@/utils/constants/IMAGES';
import USER_EVENT_TYPES from '@/utils/constants/USER_EVENT_TYPES';
import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';

const What = () => {
  const userSearchData = useRecoilValue(userSearchDataState);
  const { what } = userSearchData;
  console.log(what);
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
        <EventTypeCard
          label='טיול'
          src={IMAGES.CardTrip}
          alt='trip'
          eventType={USER_EVENT_TYPES.TRIP}
        />
        <EventTypeCard
          label='מסעדה'
          src={IMAGES.CardRestaurant}
          alt='restaurant'
          eventType={USER_EVENT_TYPES.RESTAURANT}
        />
        <EventTypeCard
          label='אטרקציה'
          src={IMAGES.CardAttraction}
          alt='attraction'
          eventType={USER_EVENT_TYPES.ATTRACTION}
        />
      </Box>
    </Box>
  );
};

export default What;
