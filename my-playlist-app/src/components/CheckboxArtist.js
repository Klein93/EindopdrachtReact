import React from "react"

function CheckboxArtist(props) {
    return (
        <div>Sort by Artist
            <input type="checkbox" onChange={props.filterArtist}></input>
        </div>
    )
}

export default CheckboxArtist