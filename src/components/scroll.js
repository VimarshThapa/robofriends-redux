import React from "react";

function Scroll({children}) {
    return (
        <div style={{overflowY: 'scroll', height: '600px'}}>
            {children}
        </div>
    )
}

export default Scroll;