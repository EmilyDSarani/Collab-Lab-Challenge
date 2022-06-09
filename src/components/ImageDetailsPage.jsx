import React from 'react';

export default function ImageDetailsPage({ imageId }) {
	return (
		<>
			<article>
				<a href="javascript:history.go(-1)">
					<button> Back </button>
				</a>
				<img
					alt="art"
					src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
				/>
			</article>
		</>
	);
}
