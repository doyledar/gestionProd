import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveTypesDLC } from '../../store/actions/typesDLC'
import { NavLink, Link } from 'react-router-dom'

class typesDLCList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
 
      this.state = {
          currentTypeDLC: null,
          currentIndex: -1,
      }
    }
  
    componentDidMount() {
   
      this.props.retrieveTypesDLC();
      console.log(this.props)
    }

    refreshData(){
        this.setState({
            currentTypeDLC: null,
            currentIndex: -1
        })
    }

    render() {
        
        const { typesDLC } = this.props;
        
        return (
          <div className="select">
              <label className="selectTitle">
                  Code DLC
              </label>
              <select className="selectList" value='TEST' onChange={this.handleChange}>
                  {typesDLC &&
                    typesDLC.map((typeDLC, index) => (
                        <option key={index}>
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
        typesDLC: state.typesDLC,
      };
    };
    
    export default connect(mapStateToProps, { retrieveTypesDLC })(typesDLCList); 