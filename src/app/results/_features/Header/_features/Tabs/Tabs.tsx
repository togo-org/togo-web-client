'use client';

import { userSearchDataState } from '@/store';
import { useRecoilValue } from 'recoil';
import Tab from './_features/Tab';
import TabsContainer from './_features/TabsContainer';

const Tabs = () => {
  const userSearchData = useRecoilValue(userSearchDataState);
  const getFormattedWhat = () => {
    const { what } = userSearchData;
    switch (what) {
      case 'trip': {
        return 'טיול';
      }
      case 'restaurant': {
        return 'מסעדה';
      }
      case 'attraction': {
        return 'אטרקציה';
      }
      default: {
        return 'לא מוגדר';
      }
    }
  };

  const getFormattedHowMuch = () => {
    const { howMuch } = userSearchData;
    if (howMuch === 1) {
      return 'איש אחד';
    }
    return `${howMuch} אנשים`;
  };

  // TODO: add this after update in the design

  //   const getFormattedDate = () => {
  //     const { when } = userSearchData;
  //     const dateObj = new Date(when);
  //     const day = dateObj.getDate().toString().padStart(2, '0');
  //     const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  //     const year = dateObj.getFullYear();
  //     return `${day}/${month}/${year}`;
  //   };

  const getFormattedTime = () => {
    const { when } = userSearchData;
    const dateObj = new Date(when);
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <TabsContainer>
      <Tab label='מה?' value={getFormattedWhat()} />
      <Tab label='כמה?' value={getFormattedHowMuch()} />
      <Tab label='בשעה?' value={getFormattedTime()} />
    </TabsContainer>
  );
};

export default Tabs;
