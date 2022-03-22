import React, { useContext } from "react"
import OrderItem from "@components/OrderItem"
import AppContext from "../context/AppContext"
import "@styles/MyOrder.scss"
import arrow from "@icons/flechita.svg"
import { Link } from "react-router-dom"

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price
    const sum = state.cart.reduce(reducer, 0)
    return sum
  }

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img
          src={arrow}
          alt='arrow'
          className='img-close'
          onClick={() => toggleOrder()}
        />
        <p className='title'>Mi Orden</p>
      </div>
      <div className='my-order-content'>
        <div className='my-orders'>
          {state.cart.map((product, index) => (
            <OrderItem
              product={product}
              key={`orderItem-${product.id}-${index}`}
            />
          ))}
        </div>
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link to='/checkout'>
          <button className='primary-button' onClick={() => toggleOrder()}>
            Verificar
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default MyOrder
