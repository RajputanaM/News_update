import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News
 extends Component {

    constructor(){
        super();
        this.state={
            articles : this.articles,
            loading : false
        }
    }
  async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f22c6298341a4c1ebd4dded1f4f1577a";
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({articles:parsedata.articles});
    }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
            {this.state.articles && this.state.articles.map((element)=>{
                return  <div className="col md-4" key = {element.url}>
                <Newsitem title = {element.title} description = {element.description}
                 imageUrl = {element.urlToImage}  newsUrl = {element.url} />
           </div>
            })}
        </div>
      </div>
    )
  }
}
