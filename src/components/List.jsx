import React from 'react';

export default function List({ artwork, navigation }) {
	return (
		<ul>
			{artwork.map((art) => (
				<li key={art.id}>
					<button onClick={() => navigation(art)}>
						{art.title}
						{art.artist}
					</button>
				</li>
			))}
		</ul>
	);
}
