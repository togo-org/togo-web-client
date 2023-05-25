import { Box } from '@mui/material';

interface SelectDayProps {
  date: Date;
}

const SelectDay = ({ date }: SelectDayProps) => {
  console.log(date);
  return <Box>SelectDay</Box>;
};

export default SelectDay;
