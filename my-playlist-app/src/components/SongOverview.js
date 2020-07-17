import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import CheckboxTitle from "./CheckboxTitle"
import CheckboxArtist from "./CheckboxArtist"
import CheckboxRating from "./CheckboxRating"

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            songs: [
                {
                    id: 1,
                    title: `floppy`,
                    artist: `youp van t hack`,
                    genre: `Blues`,
                    rating: `2`
                },
                {
                    id: 2,
                    title: `another bug in the file`,
                    artist: `pink floyd`,
                    genre: `Rock`,
                    rating: `5`
                }
            ]
        }

        this.addSong = this.addSong.bind(this)
        this.filterTitle = this.filterTitle.bind(this)
        this.filterArtist = this.filterArtist.bind(this)
        this.filterRating = this.filterRating.bind(this)

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

    filterTitle = () => {
        const filteredByTitle = this.state.songs.sort((a, b) => (a.title > b.title) ? 1 : -1);
        this.setState({
            songs: filteredByTitle
        })
    };

    filterArtist = () => {
        const filteredByArtist = this.state.songs.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
        this.setState({
            songs: filteredByArtist
        })
    };

    filterRating = () => {
        const filteredByRating = this.state.songs.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
        this.setState({
            songs: filteredByRating
        })
    }

    render() {
        return (
            <div>
                <CheckboxTitle filterTitle={this.filterTitle} />
                <CheckboxArtist filterArtist={this.filterArtist} />
                <CheckboxRating filterRating={this.filterRating} />
                <SongForm addSong={this.addSong} />
                {/* <SongForm addSong={this.addSong} /> */}
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