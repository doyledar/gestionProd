import React,  {Component} from 'react'
import styles from './article.module.css'
import Select from '../Select'
import { connect } from 'react-redux'
import { updateArticle, deleteArticle } from '../../store/actions/articles'
import ArticleDataService from '../../services/ArticleService'
import TypesRemplacementsList from '../typesRemplacements/typesRemplacementsList'
import TypesArticlesList from '../typesArticles/typesArticlesList'
import TypesDLCList from '../typesDLC/typesDLCList'
import TypesAnimalesList from '../typesAnimales/typesAnimalesList'
import { retrieveTypesArticles } from '../../store/actions/typesArticles'
//import {Select} from 'react-select'

class ArticleDetails extends Component {
    // va reprendre l'id dans les props reçues par le routeur
    // const id = props.match.params.id;

    constructor(props){
        super(props)
        console.log(this.props)
        this.getArticle = this.getArticle.bind(this)
        this.handleChange = this.handleChange.bind(this)   

        this.state = {
            currentArticle: {},
            message: '',
            typesArticles:[], 
            id: '',
            type: ''
        }
    }

    componentDidMount() {
        this.getArticle(this.props.match.params.id)
        this.props.retrieveTypesArticles();
        
    }

    
    getArticle(id){
        ArticleDataService.get(id)
            .then((response) => {
                this.setState({
                    currentArticle: response.data,
                });
                console.log('l45' + response.data)
                //console.log(response.data.TYPE)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    removeArticle(){
        this.props
            .deleteArticle(this.state.currentArticle.ARTICLE)
            .then(() => {
                this.props.history.push('/articles')
            })    
            .catch((e) => {
                console.log(e)
            })
    }

    handleChange(e){
        this.setState({ value: e.target.value })
    }

    

    render(){
        console.log(this.state)
        return(
            
        <div className="container">
            <h2 className="indigo-text darken-2">Détails de l'article { this.state.id } - Désignation: { this.state.designation }  </h2>
                    <div className="row">
                        <form className="col s12 details">
                            <div className="col s4">
                            
                            <div className="select">
                                <TypesArticlesList type={ this.state.type } handleChange={ this.handleChange }/>
                                {/* <select className="selectList" value={this.state.currentArticle.TYPE} onChange={this.handleChange}>
                                    {this.state.typesArticles &&
                                        this.state.typesArticles.map((typeArticle, index) => (
                                            <option key={index} value={typeArticle.CODE} >
                                                {index} - { typeArticle.CODE } - { typeArticle.DESIGNATION } 
                                            </option>
                                            
                                        ))}
                                    
                                </select> */}
                            </div>

                            {/* <TypesArticlesList articleType={this.state.currentArticle.TYPE}/> */}
                            {/* <TypesDLCList /> */} 
                                         
                            <p>Remarque: tableau typesDLC vide ???</p>

                            {/* <TypesAnimalesList/> */}
                            
                            <div className="select">
                                <label className="selectTitle">
                                    Famille de contamination
                                </label>
                                <select className="selectList" value={this.state.currentArticle.FAMILLE} onChange={this.handleChange}>
                                    <option value="MP">{this.state.currentArticle.FAMILLE}</option>
                                </select>
                            </div>
                            
                            {/* <TypesRemplacementsList/> */}
                            
                            <div className="select">
                                <label className="selectTitle">
                                    Point de dosage habituel
                                </label>
                                <select className="selectList" value={this.state.currentArticle.POINT_DOSAGE} onChange={this.handleChange}>
                                    <option value="MP">{this.state.currentArticle.POINT_DOSAGE}</option>
                                </select>
                            </div>
                            {/* <div className="select">
                                <label className="selectTitle">
                                    Unité
                                </label>
                                <select className="selectList" value={this.state.currentArticle.UNITE} onChange={this.handleChange}>
                                    <option value="MP">{this.state.currentArticle.UNITE}</option>
                                </select>
                            </div> */}
                    </div>
                    <div className="col s8">
                        <div className={styles.parametres}>
                            <label>Vitesse fosse de réception</label>
                            <input type="text" value={this.state.currentArticle.VITESSE_RECEPTION} />
                        </div>
                        <div className={styles.parametres}>
                            <div className={styles.paramsDet}>
                                <label>Densité kg/m3</label>
                                <input type="text" value={this.state.currentArticle.DENSITE} />
                            </div>
                            <div className={styles.paramsDet}>
                                <label>Degré Brix</label>
                                <input type="text" value={this.state.currentArticle.BRIX} />
                            </div>
                            <div className={styles.paramsDet}>
                                <label>Degré Baumé</label>
                                <input type="text" value={this.state.currentArticle.MAJDENSITE} />
                            </div>
                            
                        </div>
                        <div className={styles.parametres}>
                            <div className={styles.paramsDet}>
                                <label>Stock</label>
                                <input type="text" value={this.state.currentArticle.QTE_STOCK} />
                            </div>
                            <div className={styles.paramsDet}>
                                <label>Stock minimum</label>
                                <input type="text" value={this.state.currentArticle.QTE_STOCK_MIN} />
                            </div>
                        </div>
                        <div className={styles.parametres}>
                            <fieldset>
                                <legend>Tolérance positive</legend>
                                <div className={styles.paramsDet}>
                                    <label>% tolérance</label>
                                    <input type="text" value={this.state.currentArticle.TOL_POS_PRC} />
                                </div>
                                <div className={styles.paramsDet}>
                                    <label>Qté min kg</label>
                                    <input type="text" value={this.state.currentArticle.TOL_POS_KG} />
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Tolérance négative</legend>
                                <div className={styles.paramsDet}>
                                    <label>% tolérance</label>
                                    <input type="text" value={this.state.currentArticle.TOL_NEG_PRC} />
                                </div>
                                <div className={styles.paramsDet}>
                                    <label>Qté min kg</label>
                                    <input type="text" value={this.state.currentArticle.TOL_NEG_KG} />
                                </div>
                            </fieldset>
                            
                        </div>
                        <div className={styles.parametres}>
                                <input type="checkbox" id="medicament" name="medicament" value={ this.state.currentArticle.MEDICAMENT}/>C'est un médicament
                            </div>
                    </div>
                </form>
            </div>
            
        </div>
        )
    }
        
}

const mapStateToProps = (state) => {
    return {
      typesArticles: state.typesArticles,
    };
  };
  
 

  
export default connect(mapStateToProps,{retrieveTypesArticles})(ArticleDetails) ;   


