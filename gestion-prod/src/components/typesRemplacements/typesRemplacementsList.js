import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveTypesRemplacements } from '../../store/actions/typesRemplacements'
import { NavLink, Link } from 'react-router-dom'

class typesRemplacementsList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
 
      this.state = {
          currentTypeRemplacement: null,
          currentIndex: -1,
      }
    }
  
    componentDidMount() {
   
      this.props.retrieveTypesRemplacements();
    }

    refreshData(){
        this.setState({
            currentTypeRemplacement: null,
            currentIndex: -1
        })
    }

    render() {
        
        const { typesRemplacements } = this.props;
        
        return (
          <div className="select">
              <label className="selectTitle">
                  Famille de remplacement
              </label>
              <select className="selectList" value='TEST' onChange={this.handleChange}>
                  {typesRemplacements &&
                    typesRemplacements.map((typeRemplacement, index) => (
                        <option key={index}>
                            {typeRemplacement.CODE} - {typeRemplacement.DESIGNATION} 
                        </option>
                        
                    ))}
                  
              </select>
          </div>
           
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        typesRemplacements: state.typesRemplacements,
      };
    };
    
    export default connect(mapStateToProps, { retrieveTypesRemplacements })(typesRemplacementsList); 