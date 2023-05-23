import { Box, Typography } from '@mui/material';

interface AddressLineProps {
  address: string;
  city: string;
}

const AddressLine = ({ address, city }: AddressLineProps) => {
  return (
    <Box>
      <Typography>
        <Typography component='span'>{address}</Typography>
        <Typography component='span'>, </Typography>
        <Typography component='span'>{city}</Typography>
      </Typography>
    </Box>
  );
};

export default AddressLine;
