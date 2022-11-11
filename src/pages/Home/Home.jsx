import React from 'react'
import './Home.css'
import Row from '../../components/row/Row';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import requests from '../../requests'

function home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" 
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow = {true}
            />
            <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
            <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
            <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
            <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
            <Row title = "Documentaries" fetchUrl = {requests.fetchDocumantaries}/>
        </div>
    )
}

export default home