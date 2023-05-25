const getDayNameFromDate = (date: Date): string => {
  const dayNames = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  return dayNames[date.getDay()];
};

const getMonthNameFromDate = (date: Date): string => {
  const monthNames = [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ];
  return monthNames[date.getMonth()];
};

const getDayNumberFromDate = (date: Date): number => {
  return date.getDate();
};

const getNextDateByDateAndNumber = (date: Date, number: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + number);
  return newDate;
};

const getDateLabelFromDate = (date: Date): string => {
  const day = getDayNameFromDate(date);
  const month = getMonthNameFromDate(date);
  const dayNumber = getDayNumberFromDate(date);
  const formattedDateLabel = `${day}, ${dayNumber} ל${month}`;
  return formattedDateLabel;
};

const isTwoDatesEqual = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const DateHelpers = {
  getDayNameFromDate,
  getNextDateByDateAndNumber,
  getDateLabelFromDate,
  getMonthNameFromDate,
  getDayNumberFromDate,
  isTwoDatesEqual,
};

export default DateHelpers;
