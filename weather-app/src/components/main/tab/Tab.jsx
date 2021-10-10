import React, { useState, memo } from 'react'
import styled from 'styled-components';
import { City } from './components/City';
import { Tabs as TabArea, Tab } from '@material-ui/core';
import { TabPanel } from './components/TabPanel';
import { SearchArea } from './components/SearchArea';

const Container = styled.div`
  background: rgba(0, 128, 128, 0.5);
  padding: 16px;
  & span {
    margin: 16px;
  }
`

export const Tabs = memo(() => {

  const [value, setValue] = useState(0);

  const TabLabels = [
    {
      label: "郵便番号で検索"
    },
    {
      label: "都道府県で検索"
    },
  ];

  const TabDetails = [
    {
      value: value,
      index: 0,
      contents:
      <SearchArea />,
    },
    {
      value: value,
      index: 1,
      contents: <City />
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabArea value={value} onChange={handleChange}>
        {
          TabLabels.map(tab => (
            <Tab label={tab.label} />
          ))
        }
      </TabArea>
      {
        TabDetails.map(detail => (
          <TabPanel value={detail.value} index={detail.index}>{ detail.contents }</TabPanel>
        ))
      }
    </>
  )
})
