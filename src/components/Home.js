import React from 'react'
import ApricotCakeCard from './ApricotCakeCard.js'
import CookieCard from './CookieCard.js'

class Home extends React.Component {

  render(){
    return (
      <div>
        <h2>Home</h2>
        <ApricotCakeCard />
        <CookieCard />
      </div>
    )
  }
}

export default Home
