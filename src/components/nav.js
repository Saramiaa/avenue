import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<nav className="menu">

					<Link className="nav-title" to="/">Home</Link>
				<Link className="nav-title" to="/panier">panier</Link>
				<span>{this.props.product.basket.length}</span>

			</nav>
		)
	}
}

const mapStateToProps = (store) => {
  return {
  	product: store.basket
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
