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
  console.log(`non : ${error.notFound}`);
  console.log(`un : ${error.unexpected}`);

  return (
    <MainContainer>
      {
        error.unexpected ? (
          <>
            <ErrorMessage>{error.unexpected}</ErrorMessage>
            <Loading />
          </>
        ) : (
          <>
            {
              isLoading ? (
                <Loading />
              ) : (
                <>
                  {
                    error.notFound && <ErrorMessage>{error.notFound}</ErrorMessage>
                  }
                  <Tabs />
                  <Current />
                  <Every3Hours />
                  <WeeklyWeather />
                </>
              )
            }
          </>
        )
      }
    </MainContainer>
  )
})
