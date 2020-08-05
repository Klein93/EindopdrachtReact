import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import Radiobutton from "./Radiobutton"
import "bootstrap/dist/css/bootstrap.min.css";

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            songs: [

            ]
        }

        this.addSong = this.addSong.bind(this)
        this.sortTitle = this.sortTitle.bind(this)
        this.sortArtist = this.sortArtist.bind(this)
        this.sortRating = this.sortRating.bind(this)
        this.sortGenre = this.sortGenre.bind(this)
        this.removeSong = this.removeSong.bind(this)
    }

    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length + 1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        this.setState({ songs: this.state.songs.concat(newSong) })

    };

    sortTitle = () => {
        const sortedByTitle = this.state.songs.sort((a, b) => (a.title > b.title) ? 1 : -1);
        this.setState({
            songs: sortedByTitle
        })
    };

    sortArtist = () => {
        const sortedByArtist = this.state.songs.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
        this.setState({
            songs: sortedByArtist
        })
    };

    sortRating = () => {
        const sortedByRating = this.state.songs.sort(function (a, b) { return b.rating - a.rating });
        this.setState({
            songs: sortedByRating
        })
    };

    sortGenre = () => {
        const sortedByGenre = this.state.songs.sort((a, b) => (a.genre > b.genre) ? 1 : -1);
        this.setState({
            songs: sortedByGenre
        })
    };

    removeSong = (songId) => {
        const updatedList = this.state.songs.filter((item) => {
            return (item.id !== songId)
        })
        this.setState({
            songs: updatedList
        })
    };

    render() {
        return (
            <div >
                <table class="table">
                    <tbody>
                        <tr>
                            <td><Radiobutton sortFunction={this.sortTitle} />Sort by Title</td>
                            <td><Radiobutton sortFunction={this.sortArtist} />Sort by Artist</td>
                            <td><Radiobutton sortFunction={this.sortGenre} />Sort by Genre</td>
                            <td><Radiobutton sortFunction={this.sortRating} />Sort by Rating</td>
                        </tr>
                    </tbody>
                </table>

                <SongForm addSong={this.addSong} />
                <SongList removeSong={this.removeSong} songs={this.state.songs} />
            </div >
        );
    }
}


export default SongOverview