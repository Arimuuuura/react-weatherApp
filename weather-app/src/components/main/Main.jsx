import React, { memo, useContext } from 'react'
import { Current } from './current/Current';
import { Every3Hours } from './every3hours/Every3Hours';
import { WeeklyWeather } from './weekly/WeeklyWeather';
import { Tabs } from './tab/Tab';
import { WeatherDataContext } from '../../providers/WeatherDataProvider';

export const Main = memo(() => {
  const { isLoading } = useContext(WeatherDataContext);

  return (
    <>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Tabs />
            <Current />
            <Every3Hours />
            <WeeklyWeather />
          </>
        )
      }
    </>
  )
})
