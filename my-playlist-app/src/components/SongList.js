import React from "react"
import ListItem from "./ListItem"




function SongList(props) {
    const songItems = props.songs.map(song =>

        <ListItem key={song.id} title={song.title} artist={song.artist}
            genre={song.genre} rating={song.rating} />)

    return (
        <div>
            {songItems}
        </div>
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