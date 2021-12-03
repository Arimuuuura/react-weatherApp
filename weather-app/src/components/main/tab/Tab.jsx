import React, { useState, memo } from 'react'
import styled from 'styled-components';
import { City } from './components/City';
import { Tabs as TabArea, Tab } from '@material-ui/core';
import { TabPanel } from './components/TabPanel';
import { Search } from './components/Search';
import { TabDetailContainer } from './components/TabDetailContainer';

const Container = styled(TabArea)`
  padding: 0 24px;
  & .MuiTabs-flexContainer {
    justify-content: space-evenly;

    & .MuiTab-root {
      font-family: 'Yusei Magic', sans-serif;
      font-size: 16px;
    }

    & .MuiTab-textColorInherit.Mui-selected {
      background-color: rgba(0, 128, 128, 0.5);
      border-radius: 5px 5px 0 0;
    }
  }
  & .PrivateTabIndicator-colorSecondary-3 {
    background-color: transparent;
  }
`

export const Tabs = memo(() => {

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container value={value} onChange={handleChange}>
        <Tab label='郵便番号で検索' />
        <Tab label='都道府県で検索' />
      </Container>
      <TabDetailContainer>
        <TabPanel index={0} value={value}>
          <Search />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <City />
        </TabPanel>
      </TabDetailContainer>
    </>
  )
})
