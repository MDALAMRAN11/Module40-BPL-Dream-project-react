import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AvailablePlayer = ({
    player,
    setAvailableBalance,
    availableBalance,
    selectedPlayer,
    setSelectedPlayer,
}) => {
    const [selected, setSelected] = useState(false);
    const handleBalance = (playerData) => {
        const playerPrice = parseInt(
            playerData.price.split("USD").join("").split(",").join("")
        );
        if (availableBalance < playerPrice) {
            toast("Not Enough Balance You Have🥹");
            return;
        }

        if (selectedPlayer.length < 6) {
            const newSelectedPlayer = [...selectedPlayer, player];
            setSelectedPlayer(newSelectedPlayer);

            newSelectedPlayer.length === 3
                ? toast("You Have 3 Players Left To Select")
                : newSelectedPlayer.length === 5
                ? toast("You Have 1 Player Left To Select")
                : newSelectedPlayer.length === 6
                ? toast(
                      "😍Congratulations🎉🎉 You Have Completed Your Selection"
                  )
                : null;
        } else {
            return toast("You cant select more than 6 player");
        }

        setAvailableBalance(availableBalance - playerPrice);
        //console.log(newSelectedPlayer);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img src={player.image} alt={player.name} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center gap-20 text-xs">
                        <h2 className="card-title">👤 {player.name}</h2>
                        <p className="font-bold"> Age: {player.age}</p>
                    </div>
                    <div className="flex justify-between items-center border-b-1 border-b-gray-400 pb-3 text-xs">
                        <p className="font-medium">🏴 {player.nationality}</p>
                        <button className="btn btn-xs sm:btn-sm ">
                            {player.role}
                        </button>
                    </div>
                    <h3 className="font-bold">Rating</h3>
                    <div className="flex justify-between items-center text-xs">
                        <p className="font-bold">Batting Style</p>
                        <button className="btn btn-xs sm:btn-sm ">
                            {player.battingStyle}
                        </button>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <p className="font-bold">Bowling Style</p>
                        <button className="btn btn-xs sm:btn-sm">
                            {player.bowlingStyle}
                        </button>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <p className="font-bold">Strike Rate</p>
                        <button className="btn btn-xs sm:btn-sm">
                            {player.strikeRate}
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-extrabold">Price: {player.price}</p>
                        <button
                            disabled={selected}
                            onClick={() => {
                                setSelected(true);
                                handleBalance(player);
                            }}
                            className={`btn btn-xs sm:btn-sm md:btn-md`}
                        >
                            {selectedPlayer.length >= 6
                                ? "Player Selected"
                                : selected
                                ? "Selected"
                                : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayer;
