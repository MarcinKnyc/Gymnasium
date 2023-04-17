import React from 'react'

const FeatureBox = ({ img, title, text }) => {
  return (
    <div id="features">
      <div className="a-box">
        <div className="a-b-img">
          <img src={img} alt="/" />
        </div>
        <div className="a-b-text">
          <h2>{title}</h2>
          <p style={{ paddingBottom: '10px' }}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureBox
