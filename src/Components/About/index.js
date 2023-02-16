import './index.scss'
import React from 'react'

import TwinPeaks from '../../assets/images/twinPeaks.jpg'
import redwoods from '../../assets/images/redwoods.jpg'
import book from '../../assets/images/book.jpg'

const Home = () => {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={TwinPeaks} alt="" className="img" />
      </div>
      <div className="text">
        My name is Nidhi Deshpande and I am brought up in Pune, India - A city
        rich in culture, literature, art, theatre and science. I strive for
        simplicity and I like to bring order amidst chaos. I feel deeply about
        people's psychology, data, and technology, and I was privileged to be
        given the opportunity to work on projects that blend these aspects. I
        desire to continue contributing to developing systems where humans are
        positively impacted.
        <br />
        In my free time, you can catch me Reading, painting or fiddling with my
        violin. <span>&#10024;</span>
      </div>
      <hr style={{ width: '70%', color: '#fff', marginTop: '20px' }} />
      <div className="hobbies">
        <div className="part1">
          <h1 style={{ fontSize: '32px' }}>Travelling</h1>
          <img src={redwoods} class="imageH" />
          <div class="textH">
            Exploring new places is something
            <br /> that makes me extremely happy.
            <br /> I have recently moved to USA and
            <br /> enjoying travelling to all these
            <br /> new places. <br />
            The last place I visited was the
            <br />
            beautiful Henry Cowell Redwoods <br />
            State Park in California.
          </div>
        </div>
        <div className="part1">
          <h1 style={{ fontSize: '32px' }}>Reading</h1>
          <img src={book} class="imageH" />
          <div class="textH">
            My mother is the one who probably
            <br /> inculcated this habit in my
            <br /> childhood.
            <br /> I try to carve out at least <br />
            some time to read books that I enjoy.
            <br />
            The last read was this really intriguing
            <br /> book called 'The man who mistook his <br />
            wife for a hat'.
          </div>
        </div>
      </div>
      <hr style={{ width: '70%', color: '#fff', marginTop: '20px' }} />
      <div class="socialProfile">
        My social profiles are pinned below. Hit me up ! <span>&#10024;</span>
      </div>
    </div>
  )
}

export default Home
