import React from "react"
import ListItem from "./ListItem"
import "bootstrap/dist/css/bootstrap.min.css";




function SongList(props) {
    const songItems = props.songs.map(song =>

        <ListItem key={song.id} id={song.id} title={song.title} artist={song.artist}
            genre={song.genre} rating={song.rating} removeSong={props.removeSong} />)

    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>

                {songItems}

            </tbody>
        </table>
    )

}

/*
function List(props) {
    const listItems = props.data.map(item =>
        //console.log(item))
        <ListItem key={item.id} title={item.title} addItemtoShoppingList={props.addItemtoShoppingList} />)

    return (
        <ul>
            {listItems}
        </ul>
    )
}


*/


export default SongList