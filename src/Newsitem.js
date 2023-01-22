import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://www.istockphohttps://www.google.com/search?q=india+images&oq=&aqs=chrome.0.35i39i362l8.133314219j0j15&sourceid=chrome&ie=UTF-8#imgrc=EdbWZn360GdrLMto.com/photo/young-business-woman-stock-photo-gm1308542628-398492009":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target = "_blank" className="btn btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}
