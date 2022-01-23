import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer >
            <nav className="navbar footer">
                <h1>© Jihad Shaheen {year}</h1>
            </nav>
        </footer>
    );
}
