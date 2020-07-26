import React, {useContext} from 'react'
import {DataContext} from '../../contexts/DataContext'
import { Button } from '../../components/button/Button'
import {CartStyled, CartList, CartSummary} from './CartStyles'

const Cart = () => {
  const {dataContext, setDataContext} = useContext(DataContext)

  const totalSummary = dataContext 
    ? dataContext.carts.reduce((a, b) => a + (b.price * b.qty), 0)
    : 0

  const handleChangeQty = (e, id) => {
    const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
    findProduct.qty = e.target.value
    findProduct.stock = findProduct.stock_real - e.target.value
    setDataContext({...dataContext})
  }

  const handleAjustQty = (type, id) => {
    const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
    const qty = type === '+' ? findProduct.qty + 1 :  findProduct.qty - 1
    findProduct.qty = qty
    findProduct.stock = findProduct.stock_real - qty
    setDataContext({...dataContext})
  }

  console.log(dataContext);
  
  return (
    <div>
      <h2>Daftar Keranjang</h2>
      <CartStyled>
        <CartList>
          {!dataContext ? (
            <h2>Keranjang Kosong!</h2>
          ) : (
            <table width="80%">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataContext && dataContext.carts.map((val, key) => {
                  const subtotal = val.qty * val.price
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.productName}</td>
                      <td>
                        <button onClick={() => handleAjustQty('-', val.id)}>-</button>
                        <input 
                          value={val.qty} 
                          onChange={(e) => handleChangeQty(e, val.id)}
                        />
                        <button onClick={() => handleAjustQty('+', val.id)}>+</button>
                      </td>
                      <td>{val.price}</td>
                      <td>{subtotal}</td>
                      <td><Button>Delete</Button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </CartList>
        <CartSummary>
          <h2>Total : {
            totalSummary
          }</h2>
          <Button>Checkout</Button>
        </CartSummary>
      </CartStyled>
    </div>
  )
}

export default Cart