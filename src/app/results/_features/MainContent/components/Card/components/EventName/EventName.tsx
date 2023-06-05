import { Typography } from '@mui/material';

interface EventNameProps {
  name: string;
}

const EventName = ({ name }: EventNameProps) => {
  return (
    <Typography
      sx={{
        fontFamily: 'Rubik',
        fontWeight: '700',
        fontSize: '22px',
        padding: '0px',
      }}
    >
      {name}
    </Typography>
  );
};

export default EventName;
