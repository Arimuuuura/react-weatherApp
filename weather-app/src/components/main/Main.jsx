import React, { memo, useContext } from 'react'
import styled from 'styled-components';
import { Current } from './current/Current';
import { Every3Hours } from './every3hours/Every3Hours';
import { WeeklyWeather } from './weekly/WeeklyWeather';
import { Tabs } from './tab/Tab';
import { WeatherDataContext } from '../../providers/WeatherDataProvider';
import { Loading } from './components/Loading';

const MainContainer = styled.div`
  min-height: calc(100vh - 112px);
`

const ErrorMessage = styled.p`
  padding: 24px;
  color: red;
  font-family: 'Yusei Magic', sans-serif;
`

export const Main = memo(() => {
  const { isLoading, error } = useContext(WeatherDataContext);

  return (
    <MainContainer>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            {
              error && <ErrorMessage>{error}</ErrorMessage>
            }
            <Tabs />
            <Current />
            <Every3Hours />
            <WeeklyWeather />
          </>
        )
      }
    </MainContainer>
  )
})
