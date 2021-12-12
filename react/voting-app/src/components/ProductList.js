import React from 'react';
import Product from './Product'
import Products from '../data/seed'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }

    // Bind `this` before using or define upVoteProduct as arrow function
    this.upVoteProduct = this.upVoteProduct.bind(this)
  }

  componentDidMount = () => {
    const products = this.sortProducts(Products)
    this.setState({products: products})
  }

  upVoteProduct(productId) {
    const nextProducts = this.state.products.map(product => {
      if (product.id !== productId) return product

      return Object.assign({}, product, {votes: product.votes + 1})
    })

    this.sortProducts(nextProducts)
    this.setState({products: nextProducts})
  }

  sortProducts = (products) => {
    return products.sort((a, b) => a.votes - b.votes)
  }

  render() {
    const productComponents = this.state.products.map((product) => {
      return <Product key={`product-${product.id}`} product={product}
        upVoteProduct={this.upVoteProduct} />
    })

    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    )
  }
}

export default ProductList
