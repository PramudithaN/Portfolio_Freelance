import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading status

    const handleImageLoad = () => {
        setImageLoaded(true); // Set imageLoaded to true when image is loaded
    };

    return (
        <div className="home-container">
            <div className="card" onClick={() => navigate("/manipulations")}>
                {!imageLoaded && <div className="loading-indicator">Loading...</div>}
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
                {!imageLoaded && <div className="loading-indicator">Loading...</div>}
                <img
                    src="https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Hellcat-xJCUuOJe6mFH0COBnPZVrJcm3byM04.jpg"
                    className="card-image"
                    alt="Flyers"
                    onLoad={handleImageLoad} // Call handleImageLoad when image is loaded
                    style={!imageLoaded ? { display: "none" } : {}}
                />
                <div className="card-overlay">
                    <div className="card-title">FLYERS</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
