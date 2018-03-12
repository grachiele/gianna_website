import React from 'react'

class Home extends React.Component {

  render(){
    const img0 = require('./images/IMG_6197.jpg');
    const img1 = require('./images/IMG_6198.jpg');
    const img2 = require('./images/IMG_6199.jpg');
    const img3 = require('./images/IMG_6200.jpg');
    const img4 = require('./images/IMG_6201.jpg');
    const img5 = require('./images/IMG_6202.jpg');
    const img6 = require('./images/IMG_6202.jpg');

    const imgList = [img0, img1, img2, img3, img4, img5, img6];

    return (
      <div>
        <h2>Home</h2>

      </div>
    )
  }
}

export default Home
