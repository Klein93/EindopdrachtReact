import React from "react"

function Checkbox(props) {
    return (
        <div>
            <input name="sorting" type="checkbox" onChange={props.sortFunction}></input>
        </div>
    )
}

export default Checkbox