import { Section } from "./style";
import { ContextTheme } from "../../context/context";
import { useContext } from "react";
import { Theme } from "../../theme/theme";

export default function Filter() {

    const { theme, datas } = useContext(ContextTheme);

    //Themes
    const themeLight = Theme.light;
    const themeDark = Theme.dark;

    const currentBackground = theme ? themeDark : themeLight;
    const oppositeBackground = !theme ? themeDark : themeLight;

    return(
        <Section style={{
            backgroundColor: `${currentBackground.sub_background}`
        }}>
            <div className="center">
                <div className="container">
                    <form>

                        <select>
                            {datas.map((item, index) => (
                                <option key={index} value={index}>{item.nome.abreviado}</option>
                            ))}
                        </select>

                        <button style={{
                            backgroundColor: `${oppositeBackground.background}`,
                            color: `${oppositeBackground.color}`
                        }}>Buscar</button>

                    </form>
                </div>
            </div>


        </Section>
    )
}