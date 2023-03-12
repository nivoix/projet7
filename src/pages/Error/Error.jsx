import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "./Error.css"

const StyledLink =styled(Link)`
color: #FF6060;
font-size: 18px;
font-weight: 500;
margin-top:180px;
margin-bottom: 160px;
`

function Error() {
  return (
    <div>
      <div className='error'>
        <Navbar />
        <div className='cardError'>
          <img className='imgageError' src="./assets/404.png" alt="404"/>
          <div className='textError'>Oups! La page que vous demandez n'existe pas.</div>
        <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error