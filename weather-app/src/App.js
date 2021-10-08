import React from 'react'
import { WeatherDataProvider } from './providers/WeatherDataProvider';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = () => {

  return (
    <>
      <Header />
      <WeatherDataProvider>
        <Main />
      </WeatherDataProvider>
      <Footer />
    </>
  )
}
