import React from 'react';
import Product from './Product'
import Products from '../data/seed'

class ProductList extends React.Component {
  render() {
    const products = Products.sort((a, b) => a.votes - b.votes)
    const productComponents = products.map((product) => {
      return <Product key={`product-${product.id}`} product={product} />
    })

    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    )
  }
}

export default ProductList
