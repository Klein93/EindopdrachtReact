import React from "react";
import SongOverview from "./SongOverview"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4"><h2>My React Playlist</h2></div>
                <div class="col-sm-4"></div>
            </div>

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
            React is not very hard to learn once you understand Javascript, but it takes effort to understand the
            concept of props and components and how to use it.
            Although the app itself looks a bit weird, I am proud to make it this far. Enjoy!
            </p>
        </div>
    );
}

