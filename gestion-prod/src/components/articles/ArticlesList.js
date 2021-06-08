import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveArticles } from '../../store/actions/articles'
import { retrieveTypesArticles } from '../../store/actions/typesArticles'
//import { retrieveTypesArticles } from '../../store/actions/typesArticles'
import { NavLink, Link } from 'react-router-dom'

class ArticlesList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
 
      this.state = {
          currentArticle: null,
          currentIndex: -1,
      }
    }
  
    componentDidMount() {
      
      this.props.retrieveArticles();
   //   this.props.retrieveTypesArticles();
    }

    refreshData(){
        this.setState({
            currentArticle: null,
            currentIndex: -1
        })
    }

    render() {
        
        const { articles } = this.props;
        
         /* articles &&
          articles.map((article, index) => (
              console.log(article.DESIGNATION)
          )) */       
        return (
            <div className='container'>
                <ul className="list-group">
                    {articles &&
                    articles.map((article, index) => (
                        <li key={index}>
                            <NavLink  to = {'/article/' + article.ARTICLE} >{ article.ARTICLE } - { article.REFERENCE } - { article.DESIGNATION }</NavLink> 
                        </li>
                    ))}
                </ul>
            </div>
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        articles: state.articles,
        //typesArticles: state.typesArticles
      };
    };
    
    export default connect(mapStateToProps, { retrieveArticles })(ArticlesList); 