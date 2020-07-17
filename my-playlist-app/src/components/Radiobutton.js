import React from "react"

function Radiobutton(props) {
    return (
        <div>
            <input name="sorting" type="radio" onChange={props.sortFunction}></input>
        </div>
    )
}

export default Radiobutton