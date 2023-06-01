import { useRef } from 'react';
import Youtube from 'react-youtube';
import '../../styles/css/components/MediaComponents/MediaPlayer.css'

function MediaPlayer ({id, mediaObject, onReady, className}) {
    const mediaPlayerRef = useRef(null);

    const handleReady = () => {
        if(mediaPlayerRef?.current){
            mediaPlayerRef.current.querySelector('iframe').classList.add('loaded')
        }
        onReady()
    }

    return (
        <div id={id} className={`${className || ''} MediaPlayer`} ref={mediaPlayerRef}>
            <Youtube 
                className="player youtube"
                videoId={mediaObject.videoId} 
                onReady={handleReady}
                opts={{
                    height: '100%',
                    width: '100%',
                    allow: 'fullscreen',
                    data: 'highres',
                }}
            />
        </div>
    )
}

export default MediaPlayer;