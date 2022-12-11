import React, { FC, useState } from 'react';
import { Table, Tag, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Pokeball from '../pokeball/Pokeball';
import { useGetPokemons } from '../../hooks/pokemons/useGetPokemons';
import { PokemonInterface, IColumnSearchProps } from '../../shared/interfaces';

import './Table.scss';

const PokemonsTable: FC = () => {
  const dataSource = useGetPokemons();
  let pokemons: PokemonInterface[] = dataSource?.pokemons?.edges?.map(
    (item) => ({
      ...item.node,
      cursor: item.cursor,
    })
  );
  const [filteredPokemons, setFilteredPokemons] = useState<
    PokemonInterface[]
  >();

  const handleSearch = (
    selectedKeys: string,
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();

    pokemons?.filter((p) => {
      return p.name.toLowerCase() === selectedKeys[0].toLowerCase()
        ? setFilteredPokemons([p])
        : null;
    });
  };

  const handleReset = (clearFilters: () => string) => {
    clearFilters();
    setFilteredPokemons(pokemons);
  };

  const getColumnSearchProps = (dataIndex: string) => {
    return {
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        confirm,
        clearFilters,
      }: IColumnSearchProps) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            >
              Search
            </Button>
            <Button
              size="small"
              style={{ width: 90 }}
              onClick={() => handleReset(clearFilters)}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    };
  };

  const getTagColor = (type: string) => {
    switch (type) {
      case 'Grass':
      case 'Bug':
      case 'Dragon':
        return 'green';
      case 'Poison':
      case 'Psychic':
        return 'purple';
      case 'Fire':
        return 'red';
      case 'Flying':
      case 'Water':
      case 'Ice':
        return 'blue';
      case 'Normal':
      case 'Fighting':
      case 'Rock':
      case 'Steel':
      case 'Ghost':
        return 'gray';
      case 'Electric':
        return 'yellow';
      case 'Ground':
        return 'brown';
      case 'Fairy':
        return 'violet';
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'cursor',
      key: 'cursor',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
      render: (tags: string[]) =>
        tags.map((tag) => <Tag color={getTagColor(tag)}>{tag}</Tag>),
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
        <br />
        Go and catch 'em all!
      </p>
      <Table
        columns={columns}
        dataSource={filteredPokemons ? filteredPokemons : pokemons}
        rowKey={(p) => p.cursor}
      />
    </div>
  );
};

export default PokemonsTable;
