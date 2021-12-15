import styles from  "./Sidebar.module.css"
export const Sidebar = () => {
    return (
        <div>
            <div className = {styles.main_div}>
                <div>
                     <img className = {styles.spotify_logo} src ='spotify.png' alt = "spotify"/>
                </div>

                {/* Menu items group 1 */}
                <div>
                    <div className={styles.div1}>
                        <div className={styles.logo_div}>
                            <img className={styles.logo_img} src='home.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Home</p>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.logo_div}>
                            <img className={styles.logo_img} src='search.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Search</p>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.logo_div}>
                            <img className={styles.logo_img} src='library.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Your Library</p>
                    </div>
                </div>
                {/* Menu items group 2 */}

                <div className={styles.menu_div2}>
                    <div className={styles.div1}>
                        <div className={styles.logo_div}>
                            <img className={styles.logo_img} src='creative-playlist.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Creative Playlist</p>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.blue}>
                            <img className={styles.liked_img} src='liked.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Liked Songs</p>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.green}>
                            <img className={styles.episodes_img} src='episodes.svg' alt='home'/>
                        </div>
                         <p className={styles.menu_item}>Your Episodes</p>
                    </div>
                </div>

                <hr></hr>
                <div className={styles.music_type_div}>
                    <p className={styles.music_types}>Best of Decade For You</p>
                    <p className={styles.music_types}>Motivation</p>
                    <p className={styles.music_types}>Workout Music</p>
                    <p className={styles.music_types}>Nostalgia</p>
                    <p className={styles.music_types}>Travel</p>
                    <p className={styles.music_types}>K-pop</p>
                    <p className={styles.music_types}>Mood Booster</p>
                    <p className={styles.music_types}>Liked from Radio</p>
                </div>

                <div className={styles.downloadApp_div}>
                    <div>
                        <img className={styles.downloadApp_img} src = "Download_app.svg" alt = "download"/>
                    </div>
                    <p className={styles.downloadPara}>Install App</p>
                    
                </div>

            </div>
        </div>
    )
}