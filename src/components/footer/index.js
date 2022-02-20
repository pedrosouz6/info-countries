import { Footer } from "./style";
import { Theme } from "../../theme/theme";
import { ContextTheme } from "../../context/context";
import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Rodape(){
    const { theme, setTheme } = useContext(ContextTheme);

    //Themes
    const themeLight = Theme.light;
    const themeDark = Theme.dark;
    const currentBackground = theme ? themeDark : themeLight;
    const oppositeBackground = !theme ? themeDark : themeLight;

    return (
        <Footer style={{
            backgroundColor: `${currentBackground.sub_background}`
        }}>
            <div className="center">
                <div className="container" style={{
                    color: `${currentBackground.color}`
                }}>
                    <p>Desenvolvido por Pedro Souza <a href="https://github.com/pedrosouz6" target="_blank" style={{
                    color: `${currentBackground.color}`
                }}>{<AiFillGithub/>}</a></p>
                    <p>API usada: https://servicodados.ibge.gov.br/api/docs</p>
                </div>
            </div>
        </Footer>
    )
}