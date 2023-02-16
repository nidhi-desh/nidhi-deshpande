import './index.scss'
import React from 'react'

import NidhiImage from '../../assets/images/Nidhi.jpg'

const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <img src={NidhiImage} alt="" className="profile-image" />

        <div className="self-introduction">
          <h1>Hi, there ! </h1>
          I am Nidhi Deshpande - Software Developer, with 5+ years of
          experience. <br />
          <br />I am an empathetic and tenacious programmer, always trying to
          aim for quality. I have been fortunate enough to have worked with
          inspiring leaders, talented co-workers, cutting-edge tech stack, and
          products that were innovativeand exciting to work on.
          <br />
          <br />
        </div>
      </div>

      {/* <div className="intro-extended">
        <div className="self-introduction">
          <h1>Hi, there ! </h1>I am Nidhi Deshpande - Software Developer, with
          5+ years of experience. <br />
          <br />I am an empathetic and tenacious programmer, always trying to
          aim for quality. I have been fortunate enough to have worked with
          supreme leaders, talented co-workers, cutting-edge tech stack, and
          products that were innovative.
          <br />
          <br />
        </div>
        <div className="self-introduction">
          <h1>Hi, there ! </h1>I am Nidhi Deshpande - Software Developer, with
          5+ years of experience. <br />
          <br />I am an empathetic and tenacious programmer, always trying to
          aim for quality. I have been fortunate enough to have worked with
          supreme leaders, talented co-workers, cutting-edge tech stack, and
          products that were innovative.
          <br />
          <br />
        </div>
      </div> */}
      {/* <div className="row extended-intro">
        <div className="techStack">
          {' '}
          <h1>Hi, there ! </h1>I am Nidhi Deshpande - Software Developer, with
          5+ years of experience. <br />
          <br />I am an empathetic and tenacious programmer, always trying to
          aim for quality. I have been fortunate enough to have worked with
          supreme leaders, talented co-workers, cutting-edge tech stack, and
          products that were innovative.
          <br />
          <br />
        </div>
        <div className="interests">
          {' '}
          <h1>Hi, there ! </h1>I am Nidhi Deshpande - Software Developer, with
          5+ years of experience. <br />
          <br />I am an empathetic and tenacious programmer, always trying to
          aim for quality. I have been fortunate enough to have worked with
          supreme leaders, talented co-workers, cutting-edge tech stack, and
          products that were innovative.
          <br />
          <br />
        </div>
      </div> */}
    </div>
  )
}

export default Home
