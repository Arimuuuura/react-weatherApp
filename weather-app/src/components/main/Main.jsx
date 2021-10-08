import React, { memo, useContext } from 'react'
import styled from 'styled-components';
import { Current } from './current/Current';
import { Every3Hours } from './every3hours/Every3Hours';
import { WeeklyWeather } from './weekly/WeeklyWeather';
import { Tabs } from './tab/Tab';
import { WeatherDataContext } from '../../providers/WeatherDataProvider';

// const Container = styled.div`
//   background: rgba(0, 128, 128, 0.5);
//   padding: 16px;
//   & span {
//     margin: 16px;
//   }
// `

export const Main = memo(() => {
  const { isLoading, currentData, weeklyData, onChangeTextFirst, onChangeTextSecond, onClickGetZip, onChangeGetCity } = useContext(WeatherDataContext);

  return (
    <>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Tabs first={onChangeTextFirst} second={onChangeTextSecond} onClick={onClickGetZip} onChange={onChangeGetCity} />
            <Current data={currentData} />
            <Every3Hours data={weeklyData} />
            <WeeklyWeather data={weeklyData} />
          </>
        )
      }
    </>
  )
})
