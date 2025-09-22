import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({
    selectedPlayer,
    setSelectedPlayer,
    playersData,
    setAvailableBalance,
    availableBalance,
}) => {
    const players = use(playersData);
    return (
        <div className="w-11/12 mx-auto my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-60 object-cover my-10">
                {players.map((player) => (
                    <AvailablePlayer
                        setSelectedPlayer={setSelectedPlayer}
                        selectedPlayer={selectedPlayer}
                        availableBalance={availableBalance}
                        setAvailableBalance={setAvailableBalance}
                        player={player}
                        key={player.id}
                    ></AvailablePlayer>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;
