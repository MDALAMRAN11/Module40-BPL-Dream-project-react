import "./App.css";
import navImg from "./assets/logo.png";
function App() {
    return (
        <>
            <div className="navbar w-11/12 mx-auto">
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
        </>
    );
}

export default App;
