import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveTypesAnimales } from '../../store/actions/typesAnimales'
import { NavLink, Link } from 'react-router-dom'

class typesAnimalesList extends Component {
    constructor(props) {
      super(props);
      this.refreshData = this.refreshData.bind(this);
 
      this.state = {
          currentTypeAnimale: null,
          currentIndex: -1,
      }
    }
  
    componentDidMount() {
   
      this.props.retrieveTypesAnimales();
     console.log(this.props)
    }

    refreshData(){
        this.setState({
            currentTypeAnimale: null,
            currentIndex: -1
        })
    }

    handleChange(e){
      this.setState({value: e.target.value})
    }

    render() {
        
        const { typesAnimales, articleEspeceAnimale } = this.props;
        //console.log(this.props)
        return (
          <div className="select">
              <label className="selectTitle">
                  Espèce animale
              </label>
              <select className="selectList" id="especeAnimale" value={ articleEspeceAnimale } onChange={ this.handleChange }>
                  {typesAnimales &&
                    typesAnimales.map((typeAnimale, index) => (
                        <option key={index} value={typeAnimale.CODE} >
                            { typeAnimale.CODE } - { typeAnimale.DESIGNATION } 
                        </option>
                        
                    ))}
                  
              </select>
          </div>
           
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        typesAnimales: state.typesAnimales,
      };
    };
    
    export default connect(mapStateToProps, { retrieveTypesAnimales })(typesAnimalesList); 