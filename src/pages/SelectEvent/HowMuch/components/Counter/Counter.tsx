import CounterButton from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterButton';
import CounterButtonContainer from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterButtonContainer';
import CounterContainer from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterContainer';
import CounterLabel from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterLabel';
import { userSearchDataState } from '@/store';
import { useRecoilState } from 'recoil';

const Counter = () => {
  const [userSearchData, setUserSearchData] =
    useRecoilState(userSearchDataState);
  const { howMuch } = userSearchData;

  const updateCounterValue = (addedValue: number) => {
    const newValue = howMuch + addedValue;
    if (newValue === 0) return;
    setUserSearchData({
      ...userSearchData,
      howMuch: howMuch + addedValue,
    });
  };

  return (
    <CounterContainer>
      <CounterLabel label={String(howMuch)} />
      <CounterButtonContainer>
        <CounterButton label='+' onClick={() => updateCounterValue(1)} />
        <CounterButton label='-' onClick={() => updateCounterValue(-1)} />
      </CounterButtonContainer>
    </CounterContainer>
  );
};

export default Counter;
