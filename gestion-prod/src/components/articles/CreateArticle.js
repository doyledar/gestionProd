import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticle } from '../../store/action/articles'

// A revoir pour adapter à REDUX

class CreateArticle extends Component {
    // on va stocker dans le state ce que l'utilisateur tape dans l'input => class component
    state = {
        id:'',
        reference: '',
        critere: '',
        designation: '',
        type: '0000 - non défini',
        codeDLC: '0000 - aucun',
        especeAnimale: '0000 - non définie',
        familleContamination: '0000 - non définie',
        familleRemplacement: '0000 - non définie',
        pointDosageHabituel: '0000 - aucun',
        unite: '0000 - non définie',
        vitesseFosseReception: 0,
        densite: 0,
        degreBrix: 0,
        degreBaume: 0,
        qteStock: 0,
        stockMin: 0,
        tolerancePlus: 0,
        qteMinPlus: 0,
        toleranceMoins: 0,
        qteMinMoins: 0,
        medicament: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }  
    onChange = (e) => {
        console.log(e)
    }
    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="id">id</label>
                        <input type="text" id="id" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ref">Référence</label>
                        <input type="ref" id="ref" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="critere">Critère</label>
                        <input type="critere" id="critere" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="designation">Désignation</label>
                        <input type="ref" id="ref" onChange={this.handleChange}/>
                    </div>
                    <select value={this.state.type} onchange={this.handleChange}>
                        <option value="0000 - non défini"></option>
                        <option value="0010 - farines mouture fine"></option>
                        <option value="0011 - farines mouture gros"></option>
                    </select>
                    <select value={this.state.codeDLC} onchange={this.handleChange}>
                        <option value="0000 - aucun"></option>
                        <option value="0001 - code1"></option>
                        <option value="0002 - code2"></option>
                    </select>
                    <select value={this.state.especeAnimale} onchange={this.handleChange}>
                        <option value="0000 - non définie"></option>
                        <option value="0009 - additif/premix"></option>
                        <option value="0010 - volaille"></option>
                    </select>
                    <select value={this.state.familleContamination} onchange={this.handleChange}>
                        <option value="0000 - non définie"></option>
                        <option value="0010 - matière première"></option>
                        <option value="1000 - porcs"></option>
                    </select>
                    <select value={this.state.familleRemplacement} onchange={this.handleChange}>
                        <option value="0000 - non définie"></option>
                        <option value="0010 - famille 1"></option>
                        <option value="1000 - famille 2"></option>
                    </select>
                    <select value={this.state.familleRemplacement} onchange={this.handleChange}>
                        <option value="0000 - non définie"></option>
                        <option value="0010 - famille 1"></option>
                        <option value="1000 - famille 2"></option>
                    </select>
                    <select value={this.state.pointDosageHabituel} onchange={this.handleChange}>
                        <option value="0000 - aucun"></option>
                        <option value="0010 - benne peseuse 1"></option>
                        <option value="1000 - benne peseuse 2"></option>
                    </select>
                    <select value={this.state.unite} onchange={this.handleChange}>
                        <option value="0000 - non définie"></option>
                        <option value="0010 - unité 1"></option>
                        <option value="1000 - unité 2"></option>
                    </select>
                    <div className="input-field">
                        <label htmlFor="vitesseFosseReception">id</label>
                        <input type="text" id="vitesseFosseReception" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enregistrer</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateArticle
