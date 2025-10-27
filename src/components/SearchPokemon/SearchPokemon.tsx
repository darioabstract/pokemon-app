import React from 'react';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;



const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const SearchPokemon = () => (
  <Space direction="vertical">
  
   
    <Search
      placeholder="search your pokemon..."
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
 
  </Space>
);

