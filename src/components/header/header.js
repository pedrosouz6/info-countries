import { useState } from "react";

//Import Files
import { HeaderS } from "./style";
import { Theme } from "../../theme/theme";

export default function Header() {

    //Themes
    const themeLight = Theme.light;
    const themeDark = Theme.dark;

    const [ theme, setTheme ] = useState(false);

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