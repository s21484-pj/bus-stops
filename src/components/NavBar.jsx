import "../styles/NavBar.css";

import { Link } from "react-router-dom";

import { routes } from "../routes";

export default function NavBar() {
    return (
        <header className="nav-bar">
            <h1 className="nav-bar__header">System informacji pasażerskiej</h1>
            <nav className="nav-bar__nav-menu">
                <Link to={routes.home}>Strona Główna</Link>
            </nav>
        </header>
    );
}