import "../styles/PageLayout.css";

import { useNavigate } from "react-router-dom";

export default function PageLayout({ children, backLink }) {
    const navigate = useNavigate();

    return (
        <main className="page-layout">
            {backLink && (
                <button
                    className="page-layout__back-button"
                    onClick={() => navigate(-1)}
                >
                    Powrót
                </button>
            )}
            {children}
        </main>
    );
}