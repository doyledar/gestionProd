import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveTypesDLC } from '../../store/actions/typesDLC'
import { NavLink, Link } from 'react-router-dom'

class typesDLCList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
      this.handleChange = this.handleChange.bind(this) 
      console.log('l 11 ' + props.type)      
      this.state = { value: props.type } 
    }

    
    componentDidMount() {
   
      this.props.retrieveTypesDLC();
    }

    refreshData(){
        this.setState({
                    })
    }

    handleChange(e){
      this.setState({value: e.target.value})
    }

    

    render() {
        
        const { typesDLC, articleDLC  } = this.props;
        
        
        return (
          <div className="select">
              <label className="selectTitle">
                  Code DLC
              </label>
              
              <select className="selectList" id="DLCArticle" value={ articleDLC } onChange={ this.handleChange }>
                  {typesDLC &&
                    typesDLC.map((typeDLC) => (
                        <option value={typeDLC.CODE} >
                            { typeDLC.CODE } - { typeDLC.DESIGNATION } 
                        </option>
                        
                    ))}
                  
              </select>
          </div>
           
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        typesDLC: state.typesDLC
      };
    };
    
    export default connect(mapStateToProps, { retrieveTypesDLC })(typesDLCList); 