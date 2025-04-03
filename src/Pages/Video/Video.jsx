import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'

const Video = () => {

  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      
    </div>
  )
}

export default Video
