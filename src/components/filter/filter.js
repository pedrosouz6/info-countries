import { Section } from "./style";
import { ContextTheme } from "../../context/context";
import { useContext } from "react";
import { Theme } from "../../theme/theme";

export default function Filter() {

    const { theme, datas, setCountry } = useContext(ContextTheme);

    //Themes
    const themeLight = Theme.light;
    const themeDark = Theme.dark;

    const currentBackground = theme ? themeDark : themeLight;
    const oppositeBackground = !theme ? themeDark : themeLight;

    const nextCountry = (e) => {
        e.preventDefault();
    }

    return(
        <Section style={{
            backgroundColor: `${currentBackground.sub_background}`
        }}>
            <div className="center">
                <div className="container">

                    <form onSubmit={nextCountry}>

                        <select 
                        onChange={e => setCountry(e.target.value)}
                        >
                            <option value="null">Escolher o país</option>
                            {datas.map((item, index) => (
                                <option key={index} value={index}>{item.nome.abreviado}</option>
                            ))}
                        </select>

                        <button 
                        style={{
                            backgroundColor: `${oppositeBackground.background}`,
                            color: `${oppositeBackground.color}`
                        }}>Buscar</button>

                    </form>
                </div>
            </div>


        </Section>
    )
}