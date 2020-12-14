import React, {useEffect, useState, useCallback} from 'react';
import './App.css';

import { Loader } from './Loader';
import { Table } from './Table';

function App() {

  const [data, setData] = useState([]);
  const [sort, setSort] = useState(true);

  console.log('data', data);

  const fetchDataApi = useCallback(async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users');
  }, []);

  // const onSort = sortField => {
  //   let sortBy = [];
  //   if(sort) {
  //     sortBy = [...data].sort((prev, next) => next[sortField] - prev[sortField]);
  //     setSort(false);
  //   }else{
  //     sortBy = [...data].sort((prev, next) => prev[sortField] - next[sortField]);
  //     setSort(true);
  //   }
  //   setData(sortBy);
  // };
  
  const onSort = sortField => {
    let sortBy = [];
    if(sort) {
      sortBy = [...data].sort((prev, next) => {
        if(prev[sortField] < next[sortField]) return -1;
      })
      setSort(false);
    }else{
      sortBy = [...data].sort((prev, next) => {
        if(next[sortField] < prev[sortField]) return -1;
      });
      setSort(true);
    }
    setData(sortBy);
  };
  const getData = useCallback(async () => {
    const res = await fetchDataApi();
    setData(await res.json());
  }, [fetchDataApi]);

  useEffect(() => {
      getData();
  }, [getData]);

  return (
    <div className="container">
       {
         data.length > 0 ? <Table data={data} onSort={onSort} /> : <Loader />
       }
    </div>
  );
}

export default App;
