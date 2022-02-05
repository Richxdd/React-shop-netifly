import React from "react"
import "@styles/Menu.scss"

const Menu = () => {
  return (
    <div className='Menu'>
      <ul>
        <li>
          <a href='/orders' className='title'>
            Mis ordenes
          </a>
        </li>
        <li>
          <a href='/account'>Mi Cuenta</a>
        </li>
        <li>
          <a href='/login'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
