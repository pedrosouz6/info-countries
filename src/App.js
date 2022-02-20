import { useState, useEffect } from "react";
import { ContextTheme } from "./context/context";

import Header from "./components/header/header"; 
import Filter from "./components/filter/filter";

export default function App() {

  const [ theme, setTheme ] = useState(false);
  const [ datas, setDatas ] = useState([]);
  const [ country, setCountry ] = useState(0);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/paises")
    .then(response => response.json())
    .then(data => setDatas(data))
    .catch(err => {
	    console.error(err);
    });
  }, [])

  return (
    <ContextTheme.Provider value={{
      theme: theme,
      setTheme: setTheme,
      datas: datas,
      setCountry: setCountry
    }}>
      <Header/>
      <Filter/>
    </ContextTheme.Provider>
  )
}