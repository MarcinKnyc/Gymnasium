import React from 'react'
import img1 from '../images/weigt-lifting.svg'
import img2 from '../images/water-ladder-solid.svg'
import img3 from '../images/bath-solid.svg'
import img4 from '../images/heart-pulse-solid.svg'
import FeatureBox from './FeatureBox'

const Features = () => {
  return (
    <div id="features">
      <h1>Nasze stanowiska</h1>
      <div className="a-container">
        <FeatureBox
          img={img1}
          title="Podnoszenie ciężarów"
          text="Rozbuduj swoje mięśnie i zwiększ swoją siłę."
        />
        <FeatureBox
          img={img4}
          title="Strefa cardio"
          text="Sprawdź nasze maszyny. Spal kalorie, wzmocnij serce oraz odetchnij od codzienności."
        />
        <FeatureBox
          img={img2}
          title="Basen"
          text="Basen zapewni Ci odprężenie i pozwoli Ci zregenerować siły."
        />
        <FeatureBox
          img={img3}
          title="Sauna"
          text="Sauna pomoże Ci zredukować stres oraz poprawić samopoczucie."
        />
      </div>
    </div>
  )
}

export default Features
