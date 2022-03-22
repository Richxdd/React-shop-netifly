import React, { useContext } from "react"
import "@styles/Header.scss"
import Menu from "@components/Menu"
import MyOrder from "../containers/MyOrder"
import menu from "@icons/icon_menu.svg"
import logo from "@logos/logo_yard_sale.svg"
import AppContext from "../context/AppContext"
import shoppingCart from "@icons/icon_shopping_cart.svg"
import MenuMobile from "../components/MenuMobile"
import { Link } from "react-router-dom"

const Header = () => {
  const { state, toggleOrder, toggleMenu, toggleMenuMobile } =
    useContext(AppContext)

  return (
    <nav>
      <img
        src={menu}
        alt='menu'
        className='menu'
        onClick={() => toggleMenuMobile()}
      />
      <div className='navbar-left'>
        <img src={logo} alt='logo' className='nav-logo' />

        <ul>
          <li>
            <Link to='/'>Todos</Link>
          </li>
          <li>
            <Link to='/'>Ropa</Link>
          </li>
          <li>
            <Link to='/'>Electrónica</Link>
          </li>
          <li>
            <Link to='/'>Muebles</Link>
          </li>
          <li>
            <Link to='/'>Juguetes</Link>
          </li>
          <li>
            <Link to='/'>Otros</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={() => toggleMenu()}>
            platzi@example.com
          </li>
          <li className='navbar-shopping-cart' onClick={() => toggleOrder()}>
            <img src={shoppingCart} alt='shopping cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      {state.orderIsOpen && <MyOrder />}
      {state.menuIsOpen && <Menu />}
      {state.menumobileIsOpen && <MenuMobile />}
    </nav>
  )
}

export default Header
