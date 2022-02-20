import { useContext } from "react";

//Import Files
import { HeaderS } from "./style";
import { Theme } from "../../theme/theme";
import { ContextTheme } from "../../context/context";

export default function Header() {

    const { theme, setTheme } = useContext(ContextTheme);

    //Themes
    const themeLight = Theme.light;
    const themeDark = Theme.dark;

    const ChoiseTheme = () => {
        setTheme(!theme);
    }

    const currentBackground = theme ? themeDark : themeLight;
    const oppositeBackground = !theme ? themeDark : themeLight;

    return (
        <HeaderS style={{
            backgroundColor: `${currentBackground.sub_background}`
        }}>
            <div className="center" >
                <div className="container">

                    <div className="logo">

                        <h2 style={{
                            color: `${currentBackground.color}`
                        }}>
                            Logo
                        </h2>

                    </div>
                    
                    <div className={theme ? "theme active" : "theme"} onClick={ ChoiseTheme } 
                        style={{
                            backgroundColor: `${oppositeBackground.sub_background}`
                        }}>

                        <input type="button" onClick={ ChoiseTheme }
                        style={{
                            backgroundColor: `${currentBackground.sub_background}`
                        }} />

                    </div>

                </div>
            </div>  
        </HeaderS>
    )
}