import './Cart.css'

export default function Cart ({ items, onRemoveItem, onClear }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div id='main'>
      <div className='page'>
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty. Go add some fun items!</p>
        ) : (
          <>
            <ul className='cart-list'>
              {items.map(item => (
                <li key={item.cartId} className='cart-item'>
                  <div className='cart-info'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='cart-image'
                      height={80}
                      width={80}
                    />
                    <div>
                      <div className='name'>{item.name}</div>
                      <div className='price'>${item.price.toFixed(2)}</div>
                    </div>
                  </div>
                  <button
                    className='deletebtn'
                    onClick={() => onRemoveItem(item.cartId)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className='cart-summary'>
              <div>Total: ${total.toFixed(2)}</div>
              <button id='Clearcb' onClick={onClear}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
