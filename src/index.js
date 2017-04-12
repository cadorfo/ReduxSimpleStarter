import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const YOUTUBE_API_KEY = 'AIzaSyC8vT2D9kBHzWGcIK3-n1BJJQSvR6otztc';

const App = function() {
  return  (<div>
     <SearchBar />
     </div>);
}

ReactDOM.render(<App/>, document.querySelector(".container"));
