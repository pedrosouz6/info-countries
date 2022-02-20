import { useState, useEffect } from "react";
import { ContextTheme } from "./context/context";

import Header from "./components/header/header"; 
import Filter from "./components/filter/filter";
import Content from "./components/content/content";
import Footer from "./components/footer/index";

export default function App() {

  const [ theme, setTheme ] = useState(false);
  const [ datas, setDatas ] = useState([]);
  const [ country, setCountry ] = useState('null');

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/paises")
    .then(response => response.json())
    .then(data => setDatas(data))
    .catch(err => {
	    console.error(err);
    });
  }, []);

  return (
    <ContextTheme.Provider value={{
      theme: theme,
      setTheme: setTheme,
      datas: datas,
      setCountry: setCountry,
      country: country
    }}>

      <Header/>
      <Filter/>
      {country == 'null' || country < 0 ? (
        <div className="center">
          <p style={{textAlign: "center", marginTop: "15px"}}>Escolha o país acima para obter informações sobre o mesmo!</p>
        </div>
      ) : <Content/>}

      <Footer/>
      

    </ContextTheme.Provider>
  )
}