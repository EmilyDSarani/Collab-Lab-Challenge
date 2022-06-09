import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import ImageDetailsPage from './ImageDetailsPage';
import List from './List';

export function App() {
	//we want our useState to start null so that there is no value assigned to them just set
	const [artwork, setArtwork] = useState(null);
	const [artworkSelected, setArtworkSelected] = useState(null);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			//the json.data will get all of the artwork data that we want
			setArtwork(json.data);
		});
	}
	//this is a work around without using react-router
	//we are sending it to the image page pathing it as "/art"
	//setting the state to "art"
	//pass this to List.jsx
	function navigateToArtwork(art) {
		setArtworkSelected(art);
		// eslint-disable-next-line no-restricted-globals
		history.pushState({}, '', '/art');
	}
	//then we we navigate back, we set the orginal state back to null
	//pass this to ImageDetailPage.jsx
	function navigateBack() {
		// eslint-disable-next-line no-restricted-globals
		history.back();
		setArtworkSelected(null);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{/* no selected art work AND pass down the onsearch */}
			{!artworkSelected && <SearchForm onSearchSubmit={onSearchSubmit} />}
			{/* we need a list view to go to the imagedetailpage */}
			{artwork && !artworkSelected && (
				<List artwork={artwork} navigation={navigateToArtwork} />
			)}
			{/* we want the selected artwork to go to the image detail page */}
			{artworkSelected && (
				<ImageDetailsPage
					imageId={artworkSelected.image_id}
					navigateBack={navigateBack}
				/>
			)}
			<Footer />
		</div>
	);
}
//need to commit something"
