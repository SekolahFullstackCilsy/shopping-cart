import React, {useContext} from 'react'
import {ProductsStyled, Card} from './ProductsStyles'
import {Button} from '../../components/button/Button'
import {DataContext} from '../../contexts/DataContext'

const Product = () => {
  const products = [
    {
      id: 1,
      productName: 'Hijab Modern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
      imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
      stock: 20,
      stock_real: 20,
      price: 150000,
    },
    {
      id: 2,
      productName: 'Hijab Casual',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
      imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
      stock: 30,
      stock_real: 30,
      price: 250000,
    },
    {
      id: 3,
      productName: 'Hijab Cewe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
      imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
      stock: 25,
      stock_real: 25,
      price: 550000,
    },
  ]

  const {dataContext, setDataContext} = useContext(DataContext)

  const addToCart = id => {
    const carts = dataContext ? dataContext.carts : []
    const findProduct = products.find((val) => val.id === id)
    carts.push({...findProduct, qty: 1})
    setDataContext({
      ...dataContext,
      carts
    })
  }
  console.log(dataContext)


  return (
    <div>
      <h2>Welcome, Product</h2>
      <ProductsStyled>
        {products.map((val, key) => (
          <Card key={key}>
            <img src={val.imageUrl} alt={val.productName}/>
            <h2>{val.productName}</h2>
            <p>{val.description}</p>
            <h5>Stock : {val.stock}</h5>
            <h4>Price : {val.price}</h4>
            <Button onClick={() => addToCart(val.id)}>Add To Cart</Button>
          </Card>
        ))}
      </ProductsStyled>
    </div>
  )
}

export default Product