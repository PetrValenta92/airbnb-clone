import airbnbLogo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img className="navbar__logo" src= { airbnbLogo } alt="Airbnb logo and name" />
            </div>
        </nav>
    )
}