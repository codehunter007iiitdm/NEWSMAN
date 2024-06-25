import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(0)
    const [totalResults,setTotalResults]=useState(0)
    const [start,setStart]=useState(true);
    
   


 const capitalizeFirstLetter=(word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }

  document.title=`${capitalizeFirstLetter(props.category)}-NewsMan`

const fetchMoreData = async () => {
  start && props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page + 1}&pageSize=5`;
  setPage(page + 1);
  try {
    let data = await fetch(url);
    start && props.setProgress(50);
    let parsedData = await data.json();
    start && props.setProgress(100);
    if (parsedData.articles) {
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } else {
      console.error("No articles found in response:", parsedData);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
    setStart(false);
  }
};


useEffect(()=>{
  fetchMoreData();
},[])
    return (
      <>
      <h1 className="text-center">NewsMan - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      
      {loading && <Loading />}
      <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !==totalResults}
      loader={<Loading />}
    >
      <div className="container">
      <div className="row">
          {articles.map((ele, index) => {
  if (!ele) return null;
  return (
    <div className="col-md-4" key={index}>
      <NewsItem
        title={ele.title ? ele.title.slice(0, 45) : ""}
        description={ele.description ? ele.description.slice(0, 88) : ""}
        imageUrl={ele.urlToImage}
        newsUrl={ele.url}
        author={ele.author}
        date={ele.publishedAt}
        source={ele.source?.name}
      />
    </div>
  );
})}

      
      </div>
      </div>

      </InfiniteScroll>
      </>
    )
  }

News.defaultProps={
  country:"in",
  category:"general"
}

News.propTypes={
  country: PropTypes.string,
  category:PropTypes.string,
}

export default News
