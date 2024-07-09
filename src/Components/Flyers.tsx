import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Flyers: React.FC = () => {
	const navigate = useNavigate();

	const images = [
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Enhanced%20(2)-RcOlPsdjb3IEnbRsJ1PTFaoSrkND8P.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Hellcat-xJCUuOJe6mFH0COBnPZVrJcm3byM04.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/F-Poster%20-Enhanced-BhQ8xFnSOq3P7YvBJ8riCuxRYrGz40.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Laka-pc-sale-wronfkFMg8OeUzpDeXo2oZWjP7SM54.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Naadiya_F-M9bBaq08jeLNR9JFTIHfwofXYIQsJX.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Photo%20from%20%E2%80%A2PR%E2%88%86M%E2%88%86%E2%80%A2-CtIMYNoR7ptieCYzEVzLA2dSfxYCSl.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Prama_IMG-04-vvgh19Jb3PF5s8oLvXovNQ8PZMfw1V.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Pramuditha%20Nadun-b4lo0PFFxkMB6Y8gO2d4wa1MlSkTvq.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/The%20Debater-Final%20Poster-8PTNljKetGYJzUSKGQhZkfKz0NntQs.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/ezgif-4-4dc0046e89-HJH5scrKzcpGflVM2hmXYA5MvRvr3J.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/ezgif-4-7dd240caf3-yE91uVpBahcZoM7XxuYrdiCRxBXsJD.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/redo%20ver%20final-qehuSvyFg3NU4wbN3W5mjBOpBqXYS8.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/1-CC-Movie%20poster-W8uCR33ItxU5tEJK5y4dZQNxVjxN9f.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/1-New%20Canva-jSBJl1PS61sOIAm16i7VkrXjQaTVf8.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CC-Poster%202-1yERbqOmUvm1O1wLMW98X2ZyuES3Kb.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/CC-Poster%20Blue%20Tinted-4iuhrClPkU1XXo0FqK0ENeAYMoVkMd.jpg",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Des-Bottom-02-VsBP3SH81vhF1Y2mhWhejzO1yLkuYz.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Wait%20is%20Over-zZiUbuFww2l2LBnKmB0kvI0TS72sz7.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/1-BIGDEBATE-uyX6xDaDLtwSnG2eborgGgDpjCujB2.png",
		"https://7rouaftcqgovbqs4.public.blob.vercel-storage.com/Debate_Winner-oyYlltWx25RjVYACCbTaAujgLzg19r.png",
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
					<div className="spinner-manipulations"></div>
				</div>
			)}
			<button className="back-button" onClick={() => navigate("/")}>
				&larr;
			</button>
			<h1>Flyers</h1>
			<div className="gallery">
				{images.map((src, index) => (
					<div className="gallery-item" key={index}>
						<img src={src} alt={`Flyers ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Flyers;
