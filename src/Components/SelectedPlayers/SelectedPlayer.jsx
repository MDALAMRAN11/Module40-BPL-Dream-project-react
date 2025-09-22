import React from "react";

const SelectedPlayer = ({ player, deleteHandleSelectedPlayer }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm my-5 pl-5">
                <div className="flex-1">
                    <div className="flex">
                        <img
                            className="w-28 rounded-xl"
                            src={player.image}
                            alt="player"
                        />
                        <div className="ml-5">
                            <h3 className="font-bold mt-3 text-xl">
                                {player.name}
                            </h3>
                            <p className="mb-3 mt-2">{player.role}</p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => deleteHandleSelectedPlayer(player)}
                    className="flex-none"
                >
                    <button className="btn btn-circle mr-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;
