import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="menu">

					<Link className="nav-title" to="/">Home</Link>
				<Link className="nav-title" to="/panier">panier</Link>


			</div>
		)
	}
}

export default Nav
