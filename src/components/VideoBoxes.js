import React from 'react'
import ParticipantBox from './ParticipantBox'

const VideoBoxes = () => {
  return (
    <>
        <div className="container-fluid ht-90 position relative bg-dark">
            <div className='position-absolute mic-float'> <i class="fa-solid fa-microphone-slash"></i></div>
            <div class="equal-size d-flex align-content-center flex-wrap bg-light">
                <div class="p-2 flex-fill bd-highlight min-width min-height "><ParticipantBox /></div>
                <div class="p-2 flex-fill bd-highlight min-width min-height"><ParticipantBox /></div>
                <div class="p-2 flex-fill bd-highlight min-width min-height"><ParticipantBox /></div>
                <div class="p-2 flex-fill bd-highlight min-width min-height"><ParticipantBox /></div>
            </div>
        </div>
    </>
  )
}

export default VideoBoxes