import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://rdegi.com/" target="_blank" rel="noopener noreferrer">
        Rdeg
        </a>
        <span className="ms-1">&copy; 2025 Admin.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://rdegi.com/" target="_blank" rel="noopener noreferrer">
          Rdeg Software Development
        </a>
        <span>❤️</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
