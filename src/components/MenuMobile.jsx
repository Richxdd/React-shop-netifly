import React from "react"
import "@styles/MenuMobile.scss"

const MenuMobile = () => {
  return (
    <div className='android-menu'>
      <ul>
        <li>
          <a href='/'>CATEGORIAS</a>
        </li>
        <li>
          <a href='/'>Todos</a>
        </li>
        <li>
          <a href='/'>Electronica</a>
        </li>
        <li>
          <a href='/'>Muebles</a>
        </li>
        <li>
          <a href='/'>Juguetes</a>
        </li>
        <li>
          <a href='/'>Otros</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='/orders'>Mis ordenes</a>
        </li>
        <li>
          <a href='/account'>Mi cuenta</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='/' className='email'>
            platzi@example.com
          </a>
        </li>
        <li>
          <a href='/login' className='sign-out'>
            Cerrar Sesion
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuMobile
