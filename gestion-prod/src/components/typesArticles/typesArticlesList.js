import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveTypesArticles } from '../../store/actions/old_typesArticles'
import { NavLink, Link } from 'react-router-dom'

class typesArticlesList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
      this.handleChange = this.handleChange.bind(this) 
      console.log('l 11 ' + props.type)      
      this.state = { value: props.type } 
    }

    
    componentDidMount() {
   
      this.props.retrieveTypesArticles();
    }

    refreshData(){
        this.setState({
                    })
    }

    handleChange(e){
      this.setState({value: e.target.value})
    }

    

    render() {
        
        const { typesArticles, articleType  } = this.props;
        
        console.log(this.state) 
        //console.log('l 42 ' + this.props.articleType)
        return (
          <div className="select">
              <label className="selectTitle">
                  Type
              </label>
              
              <select className="selectList" id="typeArticle" value={ articleType } onChange={ this.handleChange }>
                  {typesArticles &&
                    typesArticles.map((typeArticle) => (
                        <option value={typeArticle.CODE} >
                            { typeArticle.CODE } - { typeArticle.DESIGNATION } 
                        </option>
                        
                    ))}
                  
              </select>
          </div>
           
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        typesArticles: state.typesArticles,
      };
    };
    
    export default connect(mapStateToProps, { retrieveTypesArticles })(typesArticlesList); 