import React, {Component} from 'react';
import style from './style.css'

class Select extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state= {value: 'non définie'}
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    

    render() {
        return (
            <div className="select">
                <label className="selectTitle">
                    Type
                </label>
                <select className="selectList" value={this.state.value} onChange={this.handleChange}>
                    <option value="ND">Non défini</option>
                    <option value="MP">Matière première</option>
                </select>
                
            </div>
            
    );
        }
}

export default Select;
