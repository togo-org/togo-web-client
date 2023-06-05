'use client';

import { Box } from '@mui/material';
import AddressLine from '../AddressLine';
import EventDistance from '../EventDistance';
import EventName from '../EventName';

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
