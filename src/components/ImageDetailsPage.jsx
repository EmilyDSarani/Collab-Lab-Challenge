import React from 'react';

export default function ImageDetailsPage({ imageId, handleToggle }) {
	return (
		<>
			<article>
				<img
					alt="art"
					src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
				/>
			</article>
			<button onClick={handleToggle}> Back </button>
		</>
	);
}
