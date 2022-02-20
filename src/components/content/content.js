import { Section } from "./style";
import { ContextTheme } from "../../context/context";
import { useContext } from "react";

export default function Content() {

    const { country, datas } = useContext(ContextTheme);

    const nameCountry = datas[country].nome.abreviado;
    const areaCountry = datas[country].area.total;
    const areaSymbol = datas[country].area.unidade.símbolo;
    const locationCountry = datas[country].localizacao.regiao.nome;
    const language = datas[country].linguas[0].nome;
    const capital = datas[country].governo.capital.nome;
    const history = datas[country].historico;

    return (
        <Section>
            <div className="center">
                <div className="container">
                    <p><strong>Nome do país: </strong>{nameCountry}</p>
                    <p><strong>Área do país: </strong>{areaCountry} {areaSymbol}</p>
                    <p><strong>Localização do país: </strong>{locationCountry}</p>
                    <p><strong>Lingua(s): </strong>{language}</p>
                    <p><strong>Capital: </strong>{capital}</p>
                    <div className="history">
                        <h3>História - {nameCountry} </h3>
                        <p>{history}</p>
                    </div>                    
                </div>
            </div>
        </Section>
    )
}