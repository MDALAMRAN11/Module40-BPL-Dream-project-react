import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
    handleAddMorePlayers,
    selectedPlayer: players,
    deleteHandleSelectedPlayer,
}) => {
    //console.log(players);
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-10">
                {players.map((player) => (
                    <SelectedPlayer
                        key={player.id}
                        deleteHandleSelectedPlayer={deleteHandleSelectedPlayer}
                        player={player}
                    ></SelectedPlayer>
                ))}
            </div>
            <div className="my-10">
                <button
                    onClick={() => handleAddMorePlayers()}
                    className="btn btn-warning bg-[#E7FE29] hover:bg-[#bfd21b]"
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;
