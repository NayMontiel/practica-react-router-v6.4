import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { NavBar } from '../components'

export const LayoutPublic = () => {

  const navegation = useNavigation();


  return (
    <>
        <NavBar />
        <main className="container">
            {
              navegation.state === 'loading' && (
                <div className="alert alert-info my-5">
                  Loading...
                </div>
              )
            }
            <Outlet />
        </main>
        
    </>
  )
}
