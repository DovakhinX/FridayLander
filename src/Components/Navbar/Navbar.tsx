import './Navbar.css';
import logo from "../../assets/logo.svg";
function Navbar() {

    return (
        <div className="navBoss">
            <div className="navTabs">
                <img className='logo' src={logo} alt="logo" />
                <p className='tabs'>Products</p>
                <p className='tabs'>Features</p>
                <p className='tabs'>Company</p>
            </div>

            <div className="navMisc">
                <p className='tabs'>Contact us</p>
                <button className='signUp'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar