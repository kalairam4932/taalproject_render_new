import React from 'react'
import { useLocation } from 'react-router-dom'

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
 
  return (
    <div>
         

      <AppSidebar />
      
      <div className="wrapper d-flex flex-column min-vh-100">
          
      {isDashboard && <AppHeader />}
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <div className='mt-2'>
          <AppFooter />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
