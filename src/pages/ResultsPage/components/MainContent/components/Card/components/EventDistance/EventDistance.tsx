import { Typography } from '@mui/material';

interface EventDistanceProps {
  distance: number;
}

const EventDistance = ({ distance }: EventDistanceProps) => {
  const getRoundToSingleDecimalPlace = (num: number): number => {
    return Number(num.toFixed(1));
  };

  const getFormattedDistance = (d: number) => {
    const roundedDistance = getRoundToSingleDecimalPlace(d);
    const units = 'ק״מ';
    return `${roundedDistance} ${units}`;
  };
  return (
    <Typography
      sx={{
        fontFamily: 'Rubik',
        fontWeight: '700',
        fontSize: '1rem',
      }}
    >
      {getFormattedDistance(distance)}
    </Typography>
  );
};

export default EventDistance;
