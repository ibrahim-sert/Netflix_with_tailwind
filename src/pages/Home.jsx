import React from 'react'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import keys from '../keys'

const Home = () => {
  return (
    <>
      <Main/>
      <Row title="Up Coming" fetchURL={keys.requestUpcoming}/>
      <Row title="Popular" fetchURL={keys.requestPopular}/>
      <Row title="Trendling" fetchURL={keys.requestTrending}/>
      <Row title="Top Rated" fetchURL={keys.requestTopRated}/>
      <Row title="Horror" fetchURL={keys.requestHorror}/>
    </>
  )
}

export default Home