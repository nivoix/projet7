import React, { useEffect, useState } from 'react'
import ApartmentCard from './ApartmentCard'
import Error from '../pages/Error/Error'
import Loader from './Loader'
import './ApartmentGrid.scss'

function ApartmentGrid() {
  const [dataAppts, setdataAppts] = useState ([]);
  const [nofound, setnofound] = useState(false)
  
  useEffect (() =>{
    setTimeout(() => {dataAppt()}, 2000)
    return() => clearTimeout()  
  }, []);
  
  function dataAppt () {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => {
        res ? setdataAppts(res) : setnofound(true)
      })
      .catch((error) => {
        console.log(error);
        setnofound(true)
      })
  }
  if(nofound) return <Error />
  return  (
    <>
    { dataAppts.length < 1 && <Loader /> }
    <div className='bgapartmentgrid'>
      {dataAppts.map((dataAppt) => (<ApartmentCard key={dataAppt.id} id={dataAppt.id} title={dataAppt.title} imageURL= {dataAppt.cover}/>))}
    </div>
    </>
  ) 
}

export default ApartmentGrid