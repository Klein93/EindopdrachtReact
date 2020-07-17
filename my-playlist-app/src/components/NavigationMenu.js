import React from "react";
import SongOverview from "./SongOverview"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function NavigationMenu() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About Me">About Me</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/About Me">
                        <AboutMe />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>My React Playlist</h2>
            <SongOverview />
        </div>
    );
}

function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <p>Hi, thank you for visiting this page.
            My name is Bram and I am the developer of this little project.
            I had a great time creating this app and also learned some new cool stuff about routing too.
            Although the the app itself looks a bit weird, I am proud to make it this far.
            P.S.: not all the songs in the playlist are real songs that I actually enjoy.
            </p>
        </div>
    );
}

