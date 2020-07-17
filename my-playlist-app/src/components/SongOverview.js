import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import CheckboxTitle from "./CheckboxTitle"
import CheckboxArtist from "./CheckboxArtist"
import CheckboxRating from "./CheckboxRating"
import Checkbox from "./Checkbox"

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            songs: [
                {
                    id: 1,
                    title: `Floppy`,
                    artist: `Youp van 't Hack`,
                    genre: `Blues`,
                    rating: `2`
                },
                {
                    id: 2,
                    title: `Another Bug in the File`,
                    artist: `Pink Floyd`,
                    genre: `Rock`,
                    rating: `5`
                },
                {
                    id: 3,
                    title: `Sorry`,
                    artist: `Mark Rutte`,
                    genre: `Alternative`,
                    rating: `3`
                },
                {
                    id: 4,
                    title: `Lucretia my Reflection`,
                    artist: `Sisters of Mercy`,
                    genre: `Rock`,
                    rating: `10`
                }
            ]
        }

        this.addSong = this.addSong.bind(this)
        this.sortTitle = this.sortTitle.bind(this)
        this.sortArtist = this.sortArtist.bind(this)
        this.sortRating = this.sortRating.bind(this)

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
    }

    render() {
        return (
            <div>
                <Checkbox sortFunction={this.sortTitle} />Sort by Title
                <Checkbox sortFunction={this.sortArtist} />Sort by Artist
                <Checkbox sortFunction={this.sortRating} />Sort by Rating

                {/* <CheckboxTitle filterTitle={this.filterTitle} />
                <CheckboxArtist filterArtist={this.filterArtist} />
                <CheckboxRating filterRating={this.filterRating} /> */}
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
                <SongList songs={this.state.songs} />
            </div >
        );
    }
}


export default SongOverview