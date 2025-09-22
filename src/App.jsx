import React, { Suspense, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayersData = async () => {
    const res = await fetch("/players.json");
    return res.json();
};
//console.log(fetchPlayersData());

const playersData = fetchPlayersData();
const App = () => {
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const [availableBalance, setAvailableBalance] = useState(60000000);
    const [toggleButton, settoggleButton] = useState(true);
    return (
        <div>
            <Navbar availableBalance={availableBalance}></Navbar>
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center my-5">
                    <p className="font-bold">Available Players</p>
                    <div>
                        <button
                            onClick={() => settoggleButton(true)}
                            className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-[#E7FE29] border-r-0 rounded-r-none ${
                                toggleButton ? "bg-[#E7FE29]" : ""
                            }`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => settoggleButton(false)}
                            className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-[#E7FE29] border-l-0 rounded-l-none ${
                                !toggleButton ? "bg-[#E7FE29]" : ""
                            }`}
                        >
                            Selected (<span>0</span>)
                        </button>
                    </div>
                </div>
            </div>

            {/* toggling available and selected buttons------------- */}
            {toggleButton ? (
                <Suspense
                    fallback={
                        <div className="text-9xl text-center">
                            <span className="loading loading-dots loading-xl"></span>
                        </div>
                    }
                >
                    <AvailablePlayers
                        setSelectedPlayer={setSelectedPlayer}
                        selectedPlayer={selectedPlayer}
                        availableBalance={availableBalance}
                        setAvailableBalance={setAvailableBalance}
                        playersData={playersData}
                    ></AvailablePlayers>
                </Suspense>
            ) : (
                <SelectedPlayers></SelectedPlayers>
            )}
        </div>
    );
};

export default App;
