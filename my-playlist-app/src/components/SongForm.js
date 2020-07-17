import React from "react"

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            title: "",
            artist: "",
            genre: "",
            rating: ""

        }

        this.changeSongTitleState = this.changeSongTitleState.bind(this)
        this.changeArtistState = this.changeArtistState.bind(this)
        this.changeGenreState = this.changeGenreState.bind(this)
        this.changeRatingState = this.changeRatingState.bind(this)
        this.submitChangedInput = this.submitChangedInput.bind(this)
    }

    changeSongTitleState(event) {
        this.setState({
            title: event.target.value
        })
    }

    changeArtistState(event) {
        this.setState({
            artist: event.target.value
        })
    }

    changeGenreState(event) {
        this.setState({
            genre: event.target.value
        })
    }

    changeRatingState(event) {
        this.setState({
            rating: event.target.value
        })
    }

    submitChangedInput(event) {
        event.preventDefault();
        this.props.addSong(this.state)
        this.setState({
            title: "",
            artist: "",
            genre: "",
            rating: ""
        })

    }

    render() {
        return (
            <form onSubmit={this.submitChangedInput}>
                <input value={this.state.title} onChange={this.changeSongTitleState} type="text" placeholder="Song"></input>
                <input value={this.state.artist} onChange={this.changeArtistState} type="text" placeholder="Artist"></input>
                <select
                    onChange={this.changeGenreState}
                    value={this.state.genre}
                    name="genre"
                >
                    <option value="">--Select Genre--</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="dance">Dance</option>
                    <option value="blues">Blues</option>
                    <option value="alternative">Alternative</option>

                </select>

                <select
                    value={this.state.rating}
                    name="rating"
                    onChange={this.changeRatingState}

                >
                    <option value="">--Rating--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>

                <button type="submit" value="Add Song">Add Song</button>

            </form>
        )

    }
}

export default SongForm


//state van deze component moet een song object worden {},
//zodat this.state als argument kan worden meegegeven aan
//addSong in songoverview en dat object aan de array toevoegt
//met onSubmit wordt de state van deze component als argument doorgegeven en worden
//de properties in this.state terug gezet naar ""