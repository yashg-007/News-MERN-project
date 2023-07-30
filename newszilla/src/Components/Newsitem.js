import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title , description , imageUrl , newsUrl }=this.props
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://st.depositphotos.com/1011646/1255/i/950/depositphotos_12553000-stock-photo-breaking-news-screen.jpg"}  className="card-img-top"   alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blanks" className="btn btn-sm btn-primary">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
