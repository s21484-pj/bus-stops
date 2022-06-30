import "../styles/BusRoutesLayout.css";

export default function BusRoutesLayout({ children }) {
    return (
        <li className="bus-routes-layout">
            <ul className="bus-routes-layout__content-wrapper">{children}</ul>
        </li>
    );
}