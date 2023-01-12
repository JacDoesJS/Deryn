import banner from "./images/banner3.webp"
import guardian from "./images/guardian.png"

const Header = () => {
    return (
        <header className="App-header">

            <nav className="head">
                <div className="container-fluid">
                    <p id="dfx">DFX News for you</p>
                </div>
            </nav>
            <div className="banner">
                <img src={banner} alt="logo" />
            </div>
            <h2 className="topTitle">Breaking News <img src={guardian} alt="Guardian logo" width="200"></img></h2>

        </header>
    );
}

export default Header;