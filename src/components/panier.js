import React from 'react';
import { connect } from 'react-redux';

class Panier extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log('number state global', this.props.product);
	}

	render(){
		return (
			<div>
				<h1>Page1</h1>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
  return {
  	product: store.basket
  }
}

export default connect(mapStateToProps)(Panier)
