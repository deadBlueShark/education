import React from 'react'

class Product extends React.Component {
  upVoteHandler = () => {
    this.props.upVoteProduct(this.props.product.id)
  }

  render() {
    const product = this.props.product

    return (
      <div className="item">
        <div className="image">
          <img src={product.productImageUrl} />
        </div>

        <div className="middle aligned content">
          <div>
            <a onClick={this.upVoteHandler}><i className="large caret up icon" /></a>
            {product.votes}
          </div>
          <div className="description">
            <a href={product.url}>{product.title}</a>
            <p>{product.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={product.productImageUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default Product
