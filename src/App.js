import React, {useState } from 'react'
import Navbar from "./components/Navbar"
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

const App=()=>{
  const API_KEY=process.env.REACT_APP_NEWS_MAN_API_KEY
  const[progress,setProgress]=useState(0)
    return (
      <div>
      <Router>
        <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
        <Routes>
          <Route exact path="/business" element={<News setProgress={setProgress} API_KEY={API_KEY} key="business" country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} API_KEY={API_KEY} key="entertainment" country="in" category="entertainment"/>} />
          <Route exact path="/" element={<News setProgress={setProgress} API_KEY={API_KEY}  key="general" country="in" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} API_KEY={API_KEY} key="health" country="in" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} API_KEY={API_KEY} key="science" country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} API_KEY={API_KEY} key="sports" country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} API_KEY={API_KEY} key="technology" country="in" category="technology"/>} />
          </Routes>
      </Router>
      </div>
    )
  }

  export default App
