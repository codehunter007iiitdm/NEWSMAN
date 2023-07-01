import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl?imageUrl:"https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"anonnymous"} on {new Date(date).toGMTString()}</small></p>
        </div>
        </div>
        
      </div>
    )
}

export default NewsItem
