import './index.scss'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import NidhiImage from '../../assets/images/Nidhi.jpg'

const Resume = () => {
  const fetchPDF = () => {
    // using Java Script method to get PDF file
    fetch('Nidhi_CV.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Nidhi_CV.pdf'
        alink.click()
      })
    })
  }

  return (
    <div className="container">
      <div className="timeline">
        <hr style={{ width: '90%', color: '#fff' }} />
        <h1 style={{ marginLeft: '5%', color: '#fff' }}>WORK</h1>
        <hr style={{ width: '90%', color: '#fff' }} />
        <div className="education-details">
          <div className="part-1">
            <VerticalTimeline layout="1 - column - left">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  Senior Software Engineer - Advanced
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  Globant India Pvt Ltd
                </h1>
                <p>July 2021 - November 2022</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  Software Engineer
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  Harman Connected Services
                </h1>
                <p>July 2019 - July 2021</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  Associate Software Engineer
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  Harman Connected Services
                </h1>
                <p>September 2017 - July 2019</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  Intern
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  Harman Connected Services
                </h1>
                <p>January 2017 - September 2017</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
          <div className="part-2">
            Having more than 5 years of experience in the tech industry, I try
            to bring sound knowledge, inquisitive mind, integrity, humility and
            agility with me.
            <br /> I have worked on broad spectrum of technology which includes
            front-end, back-end and mobile. <br />
            <br />
            Please{' '}
            <a
              style={{ color: '#ad0356', fontWeight: 'bold' }}
              onClick={fetchPDF}
            >
              download my resume
            </a>{' '}
            for more details.
            <hr style={{ color: '#999999', margin: '5% 0 5% 0' }} />
            <h1
              style={{ color: '#fff', fontSize: '25px', marginBottom: '30px' }}
            >
              SKILLS
            </h1>
            <span className="tags">ReactJS</span>
            <span className="tags">JavaScript</span>
            <span className="tags">Core Java</span>
            <span className="tags">HTML</span>
            <span className="tags">CSS</span>
            <br />
            <br />
            <span className="tags">React Native</span>
            <span className="tags">C</span>
            <span className="tags">Semantic HTML</span>
            <span className="tags">Node JS</span>
            <span className="tags">SQL</span> <br />
            <br />
            <span className="tags">Tizen OS</span>
            <span className="tags">Android</span>
            <span className="tags">Angular</span>
            <span className="tags">TypeScript</span>
            <span className="tags">Ionic</span> <br />
            <br />
            <span className="tags">Redux</span>
            <span className="tags">MobX</span>
          </div>
        </div>
        <hr style={{ width: '90%', color: '#fff' }} />
        <h1 style={{ marginLeft: '5%', color: '#fff' }}>EDUCATION</h1>
        <hr style={{ width: '90%', color: '#fff' }} />
        <div className="education-details">
          <div className="part-1">
            <VerticalTimeline layout="1 - column - left">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  M.Sc. (Scientific Computing)
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  University of Pune
                </h1>
                <p>2015 - 2017</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#ad0356',
                  color: '#fff',
                  width: '300px',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{ borderRight: '10px solid #ad0356' }}
                iconStyle={{
                  background: '#ad0356',
                }}
              >
                <a
                  className="vertical-timeline-element-title"
                  style={{ fontSize: '20px' }}
                >
                  B.Sc. (Computer Science)
                </a>
                <br />
                <br />
                <h1 className="vertical-timeline-element-subtitle">
                  University of Pune
                </h1>
                <p>2012 - 2015</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
          <div className="part-2">
            I completed my B.Sc. in computer science. Here, the professors
            established a foundation for learning programming skills needed in
            the professional world combined with the academic cores of computer
            science. <br />
            After completing, I wanted to have profound knowledge of the
            computer science field by tapping into the research aspect of
            problem-solving techniques, operating systems, and procedures to
            implement wide-ranging technology stacks. So I pursued master's
            (M.Sc.) in 'Scientific Computing' at the 'Interdisciplinary school
            of scientific computing' at Pune University.
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
