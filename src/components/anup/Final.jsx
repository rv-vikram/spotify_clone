import "../../styles.scss";
import { PlaylistPage } from "./Playlist"
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Playlists } from "./Playlists";
import { register } from "../../serviceWorker";

export function Final() {
    return (
        <div className="outerWrap">
            <div className="App">
                <Nav />
                <Main />
                {/* <PlaylistPage /> */}
                <Playlists />
                <register />
            </div>
            <div className="musicControls">
                <p>
                    Try Premium free for 3 months. Listen to your music and ad-free.
                    Monthly subscription free applies after. Open only to users who
                    haven’t already tried
                    <br />
                    Premium. Offer excludes Family and Duo plans. Terms and conditions
                    apply.
                </p>

                <button className="free">Gets 3 month Free</button>
            </div>
        </div>
    );
}
