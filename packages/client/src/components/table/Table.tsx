import React from 'react';
import { Table } from 'antd';

import Pokeball from '../button/Pokeball';

import './Table.scss';

const PokemonsTable = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Pikachu',
      types: 'electric',
      classification: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Bulbasaur',
      types: 'green',
      classification: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
    },
    {
      title: 'Classification',
      dataIndex: 'classification',
      key: 'classification',
    },
    {
      title: 'More',
      render: () => <Pokeball />,
      width: '10%',
    },
  ];

  return (
    <div className="container">
      <p>Here you will find all the Pokémons of Generation I.</p>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default PokemonsTable;
