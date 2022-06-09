import React from 'react';

export default function ImageDetailsPage({ imageId, navigateBack }) {
	return (
		<>
			<article>
				<button onClick={navigateBack}> Back </button>

				<img
					alt="art"
					src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
				/>
			</article>
		</>
	);
}
