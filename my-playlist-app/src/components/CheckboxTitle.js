import React from "react"

function CheckboxTitle(props) {
    return (
        <div>Sort by Title
            <input type="checkbox" onChange={props.filterTitle}></input>
        </div>
    )
}

export default CheckboxTitle