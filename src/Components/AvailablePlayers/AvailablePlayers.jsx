import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ playersData }) => {
    const players = use(playersData);
    return (
        <div className="w-11/12 mx-auto my-8">
            <div className="flex justify-between items-center">
                <p>Available Players</p>
                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-[#E7FE29] border-r-0 rounded-r-none">
                        Available
                    </button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-[#E7FE29] border-l-0 rounded-l-none">
                        Selected
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-60 object-cover my-10">
                {players.map((player) => (
                    <AvailablePlayer player={player}></AvailablePlayer>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;
