import { CheckCircle } from '@material-ui/icons'
import React from 'react'
import '../Css/Methods.css'
function Methods({method,step}) {
    return (
        <div  className="method_row">
            <span className="step_icon"> <CheckCircle/> Step:{step} </span>
            <span className="method_text">{method} </span>
        </div>
    )
}

export default Methods
