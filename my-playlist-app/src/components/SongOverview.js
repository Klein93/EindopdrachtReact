import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import Checkbox from "./Checkbox"

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
            <div>
                <Checkbox sortFunction={this.sortTitle} />Sort by Title
                <Checkbox sortFunction={this.sortArtist} />Sort by Artist
                <Checkbox sortFunction={this.sortGenre} />Sort by Genre
                <Checkbox sortFunction={this.sortRating} />Sort by Rating

                <SongForm addSong={this.addSong} />
                <table style={{ width: `100%` }}>
                    <tbody>
                        <tr className="song-header">
                            <th className="song-row__item">Song</th>
                            <th className="song-row__item">Artist</th>
                            <th className="song-row__item">Genre</th>
                            <th className="song-row__item">Rating</th>
                        </tr>
                    </tbody>
                </table>
                <SongList removeSong={this.removeSong} songs={this.state.songs} />
            </div >
        );
    }
}


export default SongOverview