import React from 'react'

export default function Header() {
    return (
        <div className="d-flex bg-light justify-content-end p-4 custom-header">
        <nav>
          <button className="p-2 btn btn-clear text-dark">Login</button>
          <button className="p-2 btn btn-clear text-dark">Signup</button>
        </nav>
      </div>
    )
}
