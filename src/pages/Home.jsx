import React from 'react'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import keys from '../keys'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID="1" title="Up Coming" fetchURL={keys.requestUpcoming}/>
      <Row rowID="2" title="Popular" fetchURL={keys.requestPopular}/>
      <Row rowID="3" title="Trendling" fetchURL={keys.requestTrending}/>
      <Row rowID="4" title="Top Rated" fetchURL={keys.requestTopRated}/>
      <Row rowID="5" title="Horror" fetchURL={keys.requestHorror}/>
    </>
  )
}

export default Home