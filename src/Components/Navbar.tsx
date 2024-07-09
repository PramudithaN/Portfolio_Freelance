// src/Components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<ul>
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
