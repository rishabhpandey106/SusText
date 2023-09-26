import React from 'react'

const Header = ({isToggled}) => {
  return (
    <>
    <h1 className='header'>Text <span><img className='arrow' src="arrow.png" alt=""/></span> Emojis</h1>
    </>
  )
}

export default Header