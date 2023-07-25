import React from 'react';
import './App.css';
import Row from './row';
import requests from './Requests'; 
// import Banner from './Banner';
// import Nav from './Nav';

function App() {
	return (
		<div className="app">
      <h1>"Welcome to react app"</h1>
      <h2>"First day of creating Netflix clone"</h2>
			{/* <Nav /> */}
			{/* <Banner /> */}
			{/* <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} /> */}
			{/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
		</div>
	);
}

export default App;