import React from "react"

function CheckboxRating(props) {
    return (
        <div>Sort by Rating
            <input type="checkbox" onChange={props.filterRating}></input>
        </div>
    )
}

export default CheckboxRating