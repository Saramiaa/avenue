import React from 'react';
import { connect } from 'react-redux';
import {getArticle} from '../api/avenue'
import {Link} from 'react-router-dom';
import {addOne} from '../actions'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      min: 0,
      max:15

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
    articles: store.article
  }
}

const mapDispatchToProps = {
  addOne
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
