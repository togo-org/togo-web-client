'use client';

import EventTypeCard from '@/app/select-event/_features/EventTypeCard';
import IMAGES from '@/utils/constants/IMAGES';
import USER_EVENT_TYPES from '@/utils/constants/USER_EVENT_TYPES';
import { Box, useTheme } from '@mui/material';

const What = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        height: '100%',
        padding: '0 47px',
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row',
        },
      }}
    >
      <EventTypeCard
        label='טיול'
        src={IMAGES.CardTrip}
        alt='trip'
        eventType={USER_EVENT_TYPES.TRIP}
        description='אני רוצה לצאת קצת מהבית'
      />
      <EventTypeCard
        label='מסעדה'
        src={IMAGES.CardRestaurant}
        alt='restaurant'
        eventType={USER_EVENT_TYPES.RESTAURANT}
        description='וואי וואי איך באלי לאכול'
      />
      <EventTypeCard
        label='אטרקציה'
        src={IMAGES.CardAttraction}
        alt='attraction'
        eventType={USER_EVENT_TYPES.ATTRACTION}
        description='באלי לעשות משהו מגניב'
      />
    </Box>
  );
};

export default What;
