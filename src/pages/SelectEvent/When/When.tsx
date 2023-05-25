import FineEventButton from '@/pages/SelectEvent/When/components/FineEventButton';
import SelectDay from '@/pages/SelectEvent/When/components/SelectDay';
import { userSearchDataState } from '@/store';
import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const When = () => {
  const currentDate = useState(new Date())[0];
  const [userSearchData, setUserSearchData] =
    useRecoilState(userSearchDataState);

  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getFormattedTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateParts = event.target.value.split('-');
    const year = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1;
    const day = Number(dateParts[2]);
    const userHours = userSearchData.when.getHours();
    const userMinutes = userSearchData.when.getMinutes();
    const newDate = new Date(year, month, day, userHours, userMinutes);
    setUserSearchData((prev) => ({ ...prev, when: newDate }));
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeParts = event.target.value.split(':');
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);
    const userYear = userSearchData.when.getFullYear();
    const userMonth = userSearchData.when.getMonth();
    const userDay = userSearchData.when.getDate();
    const newDate = new Date(userYear, userMonth, userDay, hours, minutes);
    setUserSearchData((prev) => ({ ...prev, when: newDate }));
  };

  return (
    <Box
      sx={{
        padding: '10px',
        height: '100%',
        width: '100%',
      }}
    >
      <SelectDay />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <TextField
          id='date'
          type='date'
          defaultValue={getFormattedDate(currentDate)}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDateChange}
          sx={{
            marginTop: '10px',
          }}
        />

        <TextField
          id='time'
          type='time'
          defaultValue={getFormattedTime(currentDate)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={handleTimeChange}
        />
      </Box>

      <FineEventButton />
    </Box>
  );
};

export default When;
