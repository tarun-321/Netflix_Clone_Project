import React from 'react';
import './App.css';
import Row from './row';
import requests from './Requests'; 
import Banner from './Banner';
// import Nav from './Nav';

function App() {
	return (
		<div className="app">
			{/* <Nav /> */}
			{/* <Banner /> */}
			<Banner/>
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;