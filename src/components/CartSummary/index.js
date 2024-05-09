import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachProduct => {
        total += eachProduct.quantity * eachProduct.price
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total:<span className="span-element">{total}/-</span>
          </h1>
          <p className="items-count-text">{cartList.length} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
