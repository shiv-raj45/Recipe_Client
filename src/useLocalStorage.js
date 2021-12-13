import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setTheme } from "./Features/recipeSlice"

const useLocalStorge = () => {
const dispatch=useDispatch()
    const [lightMode, setLightMode] = useState(true);
    
    const toggleTheme = () => {
        const currentTheme = localStorage.getItem("appTheme");
        if (currentTheme) {                       //watch in localStorage if apptheme is available
            localStorage.removeItem("appTheme"); 
            setLightMode(false) //if apptheme is available remove it
        dispatch(setTheme(false))                 //dispath action with payload to state manager

        } else {
            localStorage.setItem("appTheme", "light")
            setLightMode(true);
        dispatch(setTheme(true))

        

        }
    }
    useEffect(() => {    //change the global state each time action is dispatched or apptheme is changed 
        const currentTheme = localStorage.getItem("appTheme");
        setLightMode(currentTheme);
        dispatch(setTheme(lightMode))

    }, [lightMode,dispatch])    
    return { toggleTheme, lightMode }


}
export default useLocalStorge