import React, { Component } from 'react';
import Form from './component/Form';
import Nav from './component/Nav';
import './App.css';
import axios from 'axios';
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Main from "./component/Main"


const apiKey = "9e76d4b26bee404bb810dc9fa0a15384";



// if (Menu.onclick) {
//     country = "country=usa"
// }

class App extends Component {
constructor(){
    super();
    this.state={
        data:[],
        searchNews: null,
        countryNews: 5,
        search: null,
        info:[]
    }
    
}




 getNews = async (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;

    if (search) {
        axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`)
        .then((res)=>{
            const searchNews = res.data.articles;
            this.setState({searchNews : searchNews, info: searchNews})
        console.log(searchNews);
    });
    } else {
        const foofo = "Fill out the search bar"
        console.log (foofo)
    };
    console.log('data', search)

};
getCountry = async(e) => {
    let country_key="ca"
    let country = e.target.innerText;
    if(country==='USA'){
      country_key="us"
    } else if(country==='Canada'){
      country_key="ca"
    } else if(country==='UK'){
      country_key="gb"
    } else if(country==='China'){
      country_key="cn"
    }
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country_key}&pageSize=10&apiKey=${apiKey}`)
        .then((res)=>{
            const countryNews = res.data.articles;
            this.setState({countryNews : countryNews, info: countryNews})
        console.log(countryNews);
    });
  }


// const countryNews() {`https://newsapi.org/v2/top-headlines?${country}&apiKey=${apiKey}`;

//
// const api_call = await fetch(url);
//
// const data = await api_call.json();


// componentDidMount(){
//    this.getNews();
// }
countryTab = () => {
    let contentData = this.state.info;
    let total = this.state.info.length;
    let contentArr = []

    for(let i=0; i < total; i++){
      contentArr.push(<Main
        title={contentData[i].title} 
        author={contentData[i].author} 
        des={contentData[i].description} 
        img={contentData[i].urlToImage}
        url={contentData[i].url}
        key= {i}
        />);
    }
    console.log('ContentArray', contentData);
    return contentArr
  }

  render() {

    return (
        <div className="wrapper">
             <Form getNews={this.getNews} />
            <Nav getCountry={this.getCountry}
            getNews={this.getNews}/>
            {this.countryTab()}

        </div>
    )
  }
}

export default App;

