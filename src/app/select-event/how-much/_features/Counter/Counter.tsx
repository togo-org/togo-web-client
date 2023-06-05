'use client';

import { userSearchDataState } from '@/store';
import { useRecoilState } from 'recoil';
import CounterButton from './_features/CounterButton';
import CounterButtonContainer from './_features/CounterButtonContainer';
import CounterContainer from './_features/CounterContainer';
import CounterLabel from './_features/CounterLabel';

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

  const isButtonDisabled = () => {
    if (howMuch === 1) return true;
    return false;
  };

  return (
    <CounterContainer>
      <CounterLabel label={String(howMuch)} />
      <CounterButtonContainer>
        <CounterButton label='+' onClick={() => updateCounterValue(1)} />
        <CounterButton
          label='-'
          onClick={() => updateCounterValue(-1)}
          isDisabled={isButtonDisabled()}
        />
      </CounterButtonContainer>
    </CounterContainer>
  );
};

export default Counter;
