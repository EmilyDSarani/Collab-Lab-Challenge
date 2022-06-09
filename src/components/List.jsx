import React from 'react';

export default function List({ artwork, setArtworkSelected }) {
	return (
		<ul>
			{artwork.map((art) => (
				<li key={art.id}>
					<button onClick={() => setArtworkSelected(art)}>
						{art.title}
						{art.artist}
					</button>
				</li>
			))}
		</ul>
	);
}
