import React from 'react';
import { connect } from 'react-redux';
import {deleteProduct} from '../actions'


class Panier extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log('number state global', this.props.product);
		console.log(this.props.product.basket);
	}

	onClickDeleteProduct(deleteProduct) {
		let products = this.props.product.basket.filter( product => product.id !== deleteProduct.id );
		console.log(deleteProduct);
		console.log(products);
		this.props.deleteProduct(products);
	}

	displayProductInBasket(){
		if(this.props.product.basket.length !== 0) {
			return this.props.product.basket.map((product, index)=>{
			return (<div key={index}>
				<h2>{product.title}</h2>
				<img src={product.url} />
				<p>{product.quantity}</p>
				<button
					onClick={()=>{
						this.onClickDeleteProduct(product);
					}}
				>
					Supprimer article
				</button>
			</div>)


		})
		} else {
			return (<div>
				<p>Votre panier est vide</p>
			</div>);
		}

	}

	render(){
		return (
			<div>
				<h1>Page1</h1>
				{this.displayProductInBasket()}

			</div>
		)
	}
}

const mapStateToProps = (store) => {
  return {
  	product: store.basket
  }
}

const mapDispatchToProps = {
	deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Panier)
