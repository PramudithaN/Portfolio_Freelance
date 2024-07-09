// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css"; // Assuming you have global styles
import ContactUs from "./Components/ContactUs";
import Manipulations from "./Components/Manipulations";
import Flyers from "./Components/Flyers";

const App: React.FC = () => {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/manipulations" element={<Manipulations />} />
						<Route path="/flyers" element={<Flyers />} />
						{/* Other routes */}
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
