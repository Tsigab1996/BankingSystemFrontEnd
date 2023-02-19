import React from 'react'
import Header from '../Header/Header'
import PageRoutes from './PageRoutes'

export default function Dashboard() {
  return (

    <React.Fragment>

      <div className='header'>
        <Header />

      </div>
      <div className="bankPages">
        <PageRoutes />

      </div>

    </React.Fragment>
  )
}
