import { React, useState, useEffect } from "react";
import List from "./components/List";
import Details from "./components/Details";
import "./App.css";

function App() {
  const [dataList, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DATA_URL}users.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const dataList = await response.json();
        setData(dataList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlyClick = (id) => {
    const infoObj = dataList[dataList.findIndex((item) => item.id === id)];
    setInfo(infoObj);
  };

  return (
    <div className='container'>
      {loading && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      <List
        dataList={dataList}
        handlyClick={handlyClick}
        active={info && info.id}
      />
      {info ? <Details info={info} /> : null}
    </div>
  );
}

export default App;
