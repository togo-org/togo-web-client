import { currentDateState } from '@/store';
import { DateHelpers } from '@/utils/helpers';
import { useRecoilValue } from 'recoil';
import SelectDayButton from './_features/SelectDayButton';
import SelectDayContainer from './_features/SelectDayContainer';

const SelectDay = () => {
  const currentDate = useRecoilValue(currentDateState);
  const dayCount = [0, 1, 2, 3, 4, 5, 6];

  return (
    <SelectDayContainer>
      {dayCount.map((day) => {
        const buttonDate = DateHelpers.getNextDateByDateAndNumber(
          currentDate,
          day
        );
        const buttonDayLabel = DateHelpers.getDayNameFromDate(buttonDate);
        const buttonDateLabel = DateHelpers.getDateLabelFromDate(buttonDate);

        return (
          <SelectDayButton
            key={day}
            label={day === 0 ? 'היום' : buttonDayLabel}
            dateLabel={buttonDateLabel}
            buttonDate={buttonDate}
          />
        );
      })}
    </SelectDayContainer>
  );
};

export default SelectDay;
