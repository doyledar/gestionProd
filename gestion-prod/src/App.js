import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import ArticleDetails from './components/articles/ArticleDetails'
import SignUp from './components/auth/SignUp'
import ArticlesList from './components/articles/ArticlesList'
import UpdateArticle from './components/articles/UpdateArticle'
import { connect } from 'react-redux'


class App extends Component {
 
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/articles' component={ArticlesList}/>
            <Route exact path='/article/:id' component={ArticleDetails}/>
            <Route exact path='/article/:id/update/' component={UpdateArticle}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
  
}




export default App;

