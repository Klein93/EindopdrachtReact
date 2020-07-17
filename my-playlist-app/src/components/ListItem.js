import React from "react"


function ListItem(props) {
    return (
        <div style={{ display: `flex`, width: "100%", justifyContent: "spaceAround" }}>
            <div>{props.title}</div>
            <div>{props.artist}</div>
            <div>{props.genre}</div>
            <div>{props.rating}</div>
        </div>
    )

}
export default ListItem