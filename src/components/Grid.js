import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import BottomBar from "./BottomBar";
import VideoBoxes from "./VideoBoxes";

const Grid = () => {
    
    const [micOn, setMicOn] = useState(false);
    const [cameraOn, setCameraOn] = useState(false);
    const [screenShare, setScreenShare] = useState(false);

    return (
        <div> 
            {/* Grid Space */}
            <VideoBoxes />
            
            {/* Bottom bar */}
            <BottomBar />
            </div>
    );
};

export default Grid;