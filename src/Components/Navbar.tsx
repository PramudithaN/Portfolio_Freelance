import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Logo-port-CumrPK6E6bR5sga87Ct2RRKiF9KpP4.png"} alt="Logo" />
			</div>
			<div className="menu-icon" onClick={toggleMenu}>
				☰
			</div>
			<ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
				<li>
					<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
						CONTACT
					</NavLink>
				</li>
				<li>
					<NavLink to="/sketch" className={({ isActive }) => (isActive ? "active" : "")}>
						SKETCH
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
