import React from 'react'
import useLocalStorge from '../useLocalStorage'
import '../Css/ToggleTheme.css'
function ToggleTheme() {

  const { toggleTheme} = useLocalStorge()
    return (
        <div className="toggleTheme"onClick={toggleTheme}>
            
        </div>
    )
}

export default ToggleTheme
