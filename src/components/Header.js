import React from 'react'

export default function Header() {
    return (
        <div className="d-flex bg-light justify-content-end p-4 custom-header">
        <nav>
          <a className="p-2 text-dark" href="#">Login</a>
          <a className="p-2 text-dark" href="#">Signup</a>
        </nav>
      </div>
    )
}
