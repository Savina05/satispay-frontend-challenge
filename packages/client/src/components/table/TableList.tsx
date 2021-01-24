import React from 'react';

const Table: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Table;

// import React, { FunctionComponent, useState, useEffect } from 'react';

// import { Table, Tag, Input, Button, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

// import Pokeball from '../button/Pokeball';
// import { useGetPokemons } from '../../hooks/pokemons/useGetPokemons';
// import { IPokemon, IPokemonQuery } from '../../shared/interfaces';

// const TableList: FunctionComponent<{ pokemons?: IPokemon[] }> = ({
//   pokemons,
// }) => {
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const [data] = useState<IPokemon[]>(pokemons);

//   //   interface IColumnProp {
//   //     selectedKeys: string[];
//   //   }

//   //   const data = useGetPokemons();
//   //   const pokemons = data?.pokemons?.edges?.map((item) => ({
//   //     ...item.node,
//   //     cursor: item.cursor,
//   //   }));

//   const handleSearch = (selectedKeys: string, confirm, dataIndex: string) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const getColumnSearchProps = (dataIndex: string) => {
//     return {
//       filterDropdown: ({
//         selectedKeys,
//         setSelectedKeys,
//         confirm,
//         clearFilters,
//       }) => (
//         <div style={{ padding: 8 }}>
//           {console.log(selectedKeys)}
//           <Input
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={(e) =>
//               setSelectedKeys(e.target.value ? [e.target.value] : [])
//             }
//             onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ width: 188, marginBottom: 8, display: 'block' }}
//           />
//           <Space>
//             <Button
//               type="primary"
//               icon={<SearchOutlined />}
//               size="small"
//               style={{ width: 90 }}
//               onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             >
//               Search
//             </Button>
//             <Button
//               size="small"
//               style={{ width: 90 }}
//               onClick={() => handleReset(clearFilters)}
//             >
//               Reset
//             </Button>
//           </Space>
//         </div>
//       ),
//       filterIcon: (filtered: boolean) => (
//         <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
//       ),
//       render: (text: string) =>
//         searchedColumn === dataIndex ? (
//           <Highlighter
//             textToHighlight={searchText}
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[searchText]}
//             autoEscape
//           />
//         ) : (
//           text
//         ),
//     };
//   };

//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'cursor',
//       key: 'cursor',
//       width: '10%',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       ...getColumnSearchProps('name'),
//     },
//     {
//       title: 'Types',
//       dataIndex: 'types',
//       key: 'types',
//       ...getColumnSearchProps('types'),
//       render: (tags: string[]) =>
//         tags.map((tag) => <Tag color="magenta">{tag}</Tag>),
//     },
//     {
//       title: 'Classification',
//       dataIndex: 'classification',
//       key: 'classification',
//       render: (classification: string) => classification.replace('Pokémon', ''),
//     },
//     {
//       title: 'More',
//       dataIndex: 'cursor',
//       render: (id: string) => <Pokeball id={parseInt(id, 10)} />,
//       width: '5%',
//     },
//   ];

//   return <Table columns={columns} dataSource={data} />;
// };

// export default TableList;
