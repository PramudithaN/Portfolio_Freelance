import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Manipulations: React.FC = () => {
    const navigate = useNavigate();

    const images = [
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Skull_Island-Yn1k7jFkZhykyu0NAtodHefZ19hkXn.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/12Room%20Alone%20Final(1)-L0HVnmaf7h6PHtP0erPndtdOQGQWFG.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Lakeshan-UXNyqtMjv5VPEyINlre4dHh3gAjVOq.png",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Submarine-FZsatnYmOdqGHgkjNSZHHnGu7c48rU.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Final-I-iokhuOwnE6CeZ5I0Vob3Ah8SHZzZNx.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Traven_1-NsFasISWUkE6FbP5jkQ9FoV3fk845x.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Zombie-RKD1E0M0Ydw3ZyJfFSysZSthzAMyQQ.png",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Approved-CC-ver-1-Fire%20bender-WzQsxhxMbHWLClp98WTtW4JfCiUeQz.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CC-1-Old%20Car%20Manipulation%20(2)-WRbwsjig7M5bIwvEXsbNqRvYNfBfIr.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CC-Moon-jZazP6c3MUfOj32A7PI2ktnS6SD7xi.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CTR-Rev-LG8VodsI0zBLUspmAV47pTShR6jhUE.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Cave-Final-x5lQZsrXTXoaji6jlWJ8PxqTHEKEkz.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/DANCER-wPilHgMOZAscs1QsIHBZFAn4Pwb5cy.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Dinosaur-Qd1W9FZ5cMAoHUN98gyIZM1z3UKF7F.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Ed-2-2-6yWocT7yp7B5X9rVZ7d93JWYOnefZX.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/ED-3-Z7oVGzwR3UdqO4ZykxevXmO8omhNds.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Ed-4-1-LsVYWI1nbG4ryLtPOLJUhUFbwdV5mc.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Enhanced-4jrq6HMjFkpowKoZz0bQ67syAr7Qpl.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Last%20Day%20of%20School-0zfxRQ20dzxPG7NSTzgO6ueZfyxIe7.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Old%20Car%20Manipulation-Edited%20-MuN5RptvdII1bwzR67xrpJy0W2iYVS.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Pramuditha%20Nadun-7XvYgqJ2v2EIJc88WrhAlzheXA9Zjl.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Pramuditha%20Nadun3-No7kIZZqPG17l1VM8GBPTiFVc2WpV9.png",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Raccoon-iAZyxkv3RhTQDSwoWZwSnrkt5PdBTX.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/The%20Future-2X0IPMiTI0y4jDXcNcEzFckye8967Z.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/The%20Gift-SRpAskpFbNwoxAqzjpHGjktu406QdN.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/The%20journey-n0QP6MJAjipiUPjLLkEMbMwQZ5KgWZ.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/The%20threat-hcJLWIip49vSNFRMCs0CjWqhBTzdEN.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/VR-W2c436U0x84VJlooEVy0bbPfuHATZP.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Rev-1-Fish%20Proj-vJVblN12rYAOqrJ6NGiu4dUgCE3kFF.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Remini20220217103055200-D2DYj0kpnYPSfyU4Z0aq1DwA77AgQE.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Superhero%20Dog-ZLpijJFA0bTuJ7RY6kH1sbIwncrGnn.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Skyfall-8UqcLepPYEBqraC651kbA4HdpMtJV3.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/GALLE%20FORT%20Microworld-Sbb4PMGOK82zY9BqWFxqMPwHZ1CwPV.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Music-Cover-ahoD48HFPVu8l76dZTuf1QllLGUFVM.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/MP-2-WX4ZfbLDzf9TSJnbtFZF15UQJzx2rS.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Rr3%20forest-2-LJLNcibp63SQnNv3JHayhR0zHV0TS3.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F_MUD%20Track%20Bikes-u0DqwlAjFLPjUEjURtiLM7RjvB19Ni.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CC-source-XrlejoXquZDWzZyTi8xsMXkV6D1GXO.jpg",
        "https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Walgama%20Kodithuwakkuge%20Pramuditha%20Nadun-yMHFJHRklYjvkSrxJOkZAngAKYORdy.png",
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
