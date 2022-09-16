import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/RoomContainer'
export const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms' subtitle='return to home page'>
          <Link to={'/'} className='btn-primary'>home page</Link>

        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )
}
