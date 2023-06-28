import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super()
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

 async componentDidMount(){
      let url=" https://newsapi.org/v2/everything?q=bitcoin&apiKey=098cea60ecfa4aba9a7f22ec7c5a36a2&page=1&pageSize=18";
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles: parsedData.articles,totalArticles:parsedData.totalResults}) 
  }

  handleNextClick=async()=>{
      let url=`https://newsapi.org/v2/everything?q=bitcoin&apiKey=098cea60ecfa4aba9a7f22ec7c5a36a2&page=${this.state.page+1}&pageSize=18`;
      let data=await fetch(url);
      let parsedData=await data.json()
      if(parsedData.articles){
      this.setState({articles: parsedData.articles})
      this.setState({
        page:this.state.page+1
      })
    }
  }

  handlePreviousClick=async()=>{
    let url=`https://newsapi.org/v2/everything?q=bitcoin&apiKey=098cea60ecfa4aba9a7f22ec7c5a36a2&page=${this.state.page-1}&pageSize=18`;
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles: parsedData.articles})
      this.setState({
        page:this.state.page-1,
        nextDisable:false
      })
  }
  render() {
    return (
      <div className="container">
      <h1 className="text- center">Top Headlines</h1>
      <div className="row">
           {this.state.articles.map((ele)=>{
             return <div className="col-md-4" key={ele.url}>
             <NewsItem title={ele.title?ele.title.slice(0,45):""}description={ele.description?ele.description.slice(0,88):""}
             imageUrl={ele.urlToImage} newsUrl={ele.url} />
             
             </div>
           })}
      
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
      <button disabled={this.state.page>=5}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
      </div>
      </div>
    )
  }
}

export default News
