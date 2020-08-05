import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";


function ListItem(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td><button onClick={() => props.removeSong(props.id)}>Remove</button></td>
        </tr>
    )

}
export default ListItem