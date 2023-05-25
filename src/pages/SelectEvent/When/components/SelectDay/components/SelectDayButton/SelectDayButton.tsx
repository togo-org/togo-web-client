import useStyles from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayButton/SelectDayButton.useStyles';
import SelectDayDateLabel from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayDateLabel';
import SelectDayLabel from '@/pages/SelectEvent/When/components/SelectDay/components/SelectDayLabel/SelectDayLabel';
import Button from '@/shared/Button';
import { userSearchDataState } from '@/store';
import { DateHelpers } from '@/utils/helpers';
import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';

interface SelectDayButtonProps {
  label: string;
  dateLabel: string;
  buttonDate: Date;
}

const SelectDayButton = ({
  label,
  dateLabel,
  buttonDate,
}: SelectDayButtonProps) => {
  const [userSearchData, setUserSearchData] =
    useRecoilState(userSearchDataState);
  const styles = useStyles();

  const isSelected = DateHelpers.isTwoDatesEqual(
    userSearchData.when,
    buttonDate
  );

  const handleClick = () => {
    setUserSearchData({
      ...userSearchData,
      when: buttonDate,
    });
  };

  return (
    <Button
      shape='default'
      sx={{
        ...styles.root,
        ...(isSelected ? styles.selected : styles.notSelected),
      }}
      onClick={handleClick}
    >
      {isSelected ? (
        <Box>
          <SelectDayLabel label={label} />
          <SelectDayDateLabel dateLabel={dateLabel} />
        </Box>
      ) : (
        <Box>
          <SelectDayLabel label={label} />
        </Box>
      )}
    </Button>
  );
};

export default SelectDayButton;
