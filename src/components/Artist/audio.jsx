

import { AutheContext } from "../Contextprovider"
import { useContext } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';

/* <SpotifyPlayer
  token="BQAI_7RWPJuqdZxS-I8XzhkUi9RKr8Q8UUNaJAHwWlpIq6..."
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
/>; */
export const Audiopplay = ({ value, uri }) => {
  const { t } = useContext(AutheContext)
  console.log(t);
  return <>

    <SpotifyPlayer
      token={value}
      uris={[uri]}

    />
  </>
}