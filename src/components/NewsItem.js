import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
