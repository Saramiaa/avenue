import React from 'react';
import { connect } from 'react-redux';
import {getArticle} from '../api/avenue'
import {Link} from 'react-router-dom';
import {AddProduct} from '../actions'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      min: 0,
      max:16

    }
  }

  componentDidMount(){

    this.setState(
      ()=>{
        getArticle()
        .then((res)=>{
          this.setState({articles: res})
          console.log(res);
        })
      });
    }

    createArticle() {
      return this.state.articles.map((article, index)=> {
        if(index > this.state.min && index < this.state.max) {
          return (<article className="product-item" key={article.id}>
          <h3>{article.title}</h3>
          <img  src={article.thumbnailUrl} className="productImage"/>
          <div className="add-basket">
          <button
         onClick={()=>{
          this.onClickAddProduct(article);
         }}
        >
          Ajouter le produit
        </button>
            <i className="fas fa-plus-circle"></i>
          </div>
        </article>)
      }

    })
  }

  previous(e) {
    if(this.state.min > 16) {
      this.setState({min: this.state.min - 16, max: this.state.max -16 })
    }
  }

  next(e) {
    if(this.state.max < 4999) {
      this.setState({min: this.state.min + 16, max: this.state.max  +16 })
    }
  }

  onClickAddProduct(newProduct) {
  newProduct.quantity = 1;

  let products = this.props.product.basket


  let same = products.findIndex((product) => product.id === newProduct.id)
  if (same === -1) {
    products = [...products, newProduct];
  } else {
    products[same].quantity += newProduct.quantity;
  }

  this.props.AddProduct(products);

  }

  render() {
    return (
      <section id="contents">
        <div className="container">
          <h1>HOME PAGE</h1>

          {this.createArticle()}

        </div>
        <div className="direction">
          <button
            onClick={(e)=>{
              this.previous(e);
            }}>Précédent</button>
          <button
            onClick={(e)=>{
              this.next(e);
            }}>Suivant</button>
        </div>
      </section>

    );
  }
}

// récupérer et stocker donné
const mapStateToProps = (store) => {
  return {
    product: store.basket
  }
}

const mapDispatchToProps = {
  AddProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
