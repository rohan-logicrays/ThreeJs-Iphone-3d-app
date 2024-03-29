import React from 'react'
import AnimatedLogo from "../assets/images/logo-animated.gif"

function Loader() {
  return (
    <div className='loader'>
        <img src={AnimatedLogo} alt="Apple-Loader" className="logo" />
    </div>
  )
}

export default Loader