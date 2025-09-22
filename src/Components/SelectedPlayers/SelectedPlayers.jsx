import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
    selectedPlayer: players,
    deleteHandleSelectedPlayer,
}) => {
    //console.log(players);
    return (
        <div>
            <div className="my-10 w-11/12 mx-auto">
                {players.map((player) => (
                    <SelectedPlayer
                        key={player.id}
                        deleteHandleSelectedPlayer={deleteHandleSelectedPlayer}
                        player={player}
                    ></SelectedPlayer>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;
