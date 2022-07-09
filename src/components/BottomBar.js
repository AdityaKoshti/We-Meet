import React, { useEffect, useState } from "react";

const BottomBar = () => {
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);

    const hour = today.getHours();
    const minutes = today.getMinutes();
    const time = `${ (hour%10===0) ? '0' : ''}${hour} : ${ (minutes%10===0) ? '0' : ''}${minutes}`
  return (
    <>
        <div className="container-fluid  position-fixed bottom-0 ht-10 bg-dark">
            <div className="row justify-content-between align-item-center">
                <div className="col">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav mr-auto text-white">
                    
                        <li className="nav-item p-2 font-weight-bold">{time}</li>
                        <li className="nav-item p-2"> | </li>
                        <li className="nav-item p-2">meet-code</li>
                    
                    </ul>
                    </nav>
                    
                </div>
                <div className="col-5">
                <ul className="navbar-nav mr-auto">
                    <nav className="navbar navbar-expand-lg center">
                        
                        <li className="nav-item p-3"><i class="fa-solid fa-lg fa-microphone white mn-right"></i></li>
                        <li className="nav-item p-3"><i class="fa-solid fa-lg fa-video white mn-right bg-circle-fade"></i></li>
                        <li className="nav-item p-3"><i class="fa-solid fa-lg fa-store-slash white mn-right bg-circle-red"></i></li>

                    </nav>
                </ul>
                </div>
                <div className="col">
                <ul className="navbar-nav ml-auto">
                    <nav className="navbar navbar-expand-lg right-align">
                        <li className="nav-item p-2"><div className="circle"> <i class="fa-solid fa-lg fa-circle-info white mn-right"></i></div></li>
                        <li className="nav-item p-2"><i class="fa-solid fa-lg fa-users white mn-right"></i></li>
                        <li className="nav-item p-2"><i class="fa-solid fa-lg fa-message white mn-right"></i></li>
                    </nav>
                </ul>
                </div>
            </div>
        </div>
            
    </>
  )
}

export default BottomBar