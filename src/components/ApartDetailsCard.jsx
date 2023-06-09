import React, { useState } from 'react'
import './ApartDetailsCard.scss'
import dropdown from '../assets/images/dropdown.png'

function ApartDetailsCard(props) {
  const [isvisible, setisvisible] = useState(true)

  const showCard = () => {
    setisvisible(!isvisible)
  }
  const textCardClass = isvisible ?  "isnovisible" : "textCard"
  const rotate = isvisible ?  "dropDown" : "dropUp"
  return (
      <div className='apartmentCard'>
          <div className='titleCard'onClick={showCard}>{props.title}
          <span><img className={rotate} src={dropdown}  alt="dropdown"/></span>
          </div>
          <div className={textCardClass} >{isvisible? "" : props.description}</div>
      </div>
  )
}

export default ApartDetailsCard