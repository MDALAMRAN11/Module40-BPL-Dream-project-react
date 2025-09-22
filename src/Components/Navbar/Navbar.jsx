import React from "react";
import navImg from "../../assets/logo.png";
import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";
const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex mb-5">
                <div className="navbar-start">
                    <img src={navImg} alt="" />
                </div>

                <div className="navbar-end flex gap-10 ">
                    <div className="lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Fixture</a>
                            </li>
                            <li>
                                <a>Teams</a>
                            </li>
                            <li>
                                <a>Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn">
                        <span>0</span> Coins💲
                    </a>
                </div>
            </div>
            <div
                className="bg-cover bg-black rounded-2xl text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bgShadow})` }}
            >
                <img className="mt-5 mb-2" src={bannerMain} alt="" />
                <h3 className="text-4xl font-bold">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h3>
                <p className="text-sm text-gray-400 my-2">
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="my-3 rounded-2xl btn btn-warning bg-[#E7FE29] hover:bg-amber-400">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Navbar;
