import React, { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayersData = async () => {
    const res = await fetch("/players.json");
    return res.json();
};
//console.log(fetchPlayersData());

const App = () => {
    const playersData = fetchPlayersData();
    return (
        <div>
            <Navbar></Navbar>
            <Suspense
                fallback={
                    <div className="text-9xl text-center">
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                }
            >
                <AvailablePlayers playersData={playersData}></AvailablePlayers>
            </Suspense>
            <SelectedPlayers></SelectedPlayers>
        </div>
    );
};

export default App;
