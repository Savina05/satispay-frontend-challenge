import React from 'react';
import { Table, Tag } from 'antd';

import Pokeball from '../button/Pokeball';
import { useGetPokemons } from '../../hooks/pokemons/useGetPokemons';

import './Table.scss';

const PokemonsTable = () => {
  const dataSource = useGetPokemons();
  const pokemons = dataSource?.pokemons?.edges?.map((item) => ({
    ...item.node,
    cursor: item.cursor,
  }));

  const columns = [
    {
      title: 'ID',
      dataIndex: 'cursor',
      key: 'cursor',
      width: '10%',
    },
    {
      title: 'Name 🔍',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
      render: (tags: string[]) =>
        tags.map((tag) => <Tag color="magenta">{tag}</Tag>),
    },
    {
      title: 'Classification',
      dataIndex: 'classification',
      key: 'classification',
      render: (classification: string) => classification.replace('Pokémon', ''),
    },
    {
      title: 'More',
      dataIndex: 'cursor',
      render: (id: string) => <Pokeball id={parseInt(id, 10)} />,
      width: '5%',
    },
  ];

  return (
    <div className="container">
      <p className="text">
        Here you will find all the Pokémons of Generation I.
        <br /> Go and catch 'em all!
      </p>

      <Table dataSource={pokemons} columns={columns} rowKey={(p) => p.cursor} />
    </div>
  );
};

export default PokemonsTable;
