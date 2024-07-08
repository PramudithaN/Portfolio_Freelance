import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Manipulations: React.FC = () => {
    const navigate = useNavigate();

    const images = [
        "./Images/Skull_Island.jpg",
        "./Images/Lakeshan.png",
        "./Images/Submarine.jpg",
        "./Images/Final-I.jpg",
        "/Images/Traven_1.jpg",
        "./Images/Zombie.png",
        "/Images/Approved-CC-ver-1-Fire bender.jpg",
        "./Images/CC-1-Old Car Manipulation (2).jpg",
        "./Images/CC-Moon.jpg",
        "./Images/CTR-Rev.jpg",
        "./Images/DANCER.jpg",
        "./Images/Ed-2-2.jpg",
        "./Images/ED-3.jpg",
        "./Images/Ed-4-1.jpg",
        "./Images/Enhanced.jpg",
        "./Images/Final-I.jpg",
        "./Images/Last Day of School.jpg",
        "./Images/Old Car Manipulation-Edited .jpg",
        "./Images/Pramuditha Nadun.jpg",
        "./Images/Pramuditha Nadun3.png",
        "./Images/Raccoon.jpg",
        "./Images/The Future.jpg",
        "./Images/The Gift.jpg",
        "./Images/The journey.jpg",
        "./Images/The threat.jpg",
        "./Images/VR.jpg",
        "./Images/Zombie.png",
        "./Images/Remini20220217103055200.jpg",
        "./Images/F-Superhero Dog.jpg",
        "./Images/Skyfall.jpg",
        "./Images/GALLE FORT Microworld.jpg",
        "./Images/F-Music-Cover.jpg",
        "./Images/Rev-1-Fish Proj.jpg",
        "./Images/MP-2.jpg",
        "./Images/Rr3 forest-2.jpg",
        "./Images/CC-source.jpg",
        "./Images/Walgama Kodithuwakkuge Pramuditha Nadun.png",
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImage = (imageSrc: string) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.src = imageSrc;
            });
        };

        const loadImages = async () => {
            try {
                await Promise.all(images.map((src) => loadImage(src)));
                setLoading(false); // All images loaded
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        loadImages();
    }, [images]);

    return (
        <div className="manipulations-container">
            {loading && (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            )}
            <button className="back-button" onClick={() => navigate("/")}>
                &larr;
            </button>
            <h1>Photoshop Manipulations</h1>
            <div className="gallery">
                {images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={src} alt={`Manipulation ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Manipulations;
