import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div className="home-container">
			<div className="card" onClick={() => navigate("/manipulations")}>
				{!imageLoaded && <Spinner />}{" "}
				{/* Render Spinner if image is not loaded */}
				<img
					src="https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Last%20Day%20of%20School-xDAedHHijj8cudDm1inUj4zu8Dqu50.jpg"
					className="card-image"
					alt="Manipulations"
					onLoad={handleImageLoad} // Call handleImageLoad when image is loaded
					style={!imageLoaded ? { display: "none" } : {}}
				/>
				<div className="card-overlay">
					<div className="card-title">MANIPULATIONS</div>
				</div>
			</div>
			<div className="card" onClick={() => navigate("/flyers")}>
				{!imageLoaded && <Spinner />}
				<img
					src="https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Hellcat-xJCUuOJe6mFH0COBnPZVrJcm3byM04.jpg"
					className="card-image"
					alt="Flyers"
					onLoad={handleImageLoad}
					style={!imageLoaded ? { display: "none" } : {}}
				/>
				<div className="card-overlay">
					<div className="card-title">FLYERS</div>
				</div>
			</div>
			<div className="social-media-icons">
				<a href="https://web.facebook.com/profile.php?id=100009277186306" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faFacebook} size="2x" />
				</a>
				<a href="https://twitter.com/Prama_psd" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faXTwitter} size="2x" />
				</a>
				<a href="https://www.instagram.com/ad0be_prama?igsh=dHJrMHNmajRmNjJz" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>
                <a href="https://www.linkedin.com/in/pramuditha-nadun-612b1b204/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedinIn} size="2x" />
				</a>
				<a href="https://github.com/PramudithaN" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
			</div>
		</div>
	);
};

export default Home;
