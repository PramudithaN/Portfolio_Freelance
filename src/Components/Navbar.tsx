// src/Components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Logo-port-CumrPK6E6bR5sga87Ct2RRKiF9KpP4.png"} alt="Logo" />
			</div>
			{/* <div className="navbar-center-text">
				PRAMA
			</div> */}
			<ul className="navbar-links">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						CONTACT
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
