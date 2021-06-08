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
import { retrieveTypesArticles } from '../../store/actions/old_typesArticles'
import { Link, NavLink } from 'react-router-dom'
import UpdateArticle from './UpdateArticle'
//import {Select} from 'react-select'

class ArticleDetails extends Component {
    // va reprendre l'id dans les props reçues par le routeur
    // const id = props.match.params.id;

    constructor(props){
        super(props)
       // console.log('l22' + this.props)
        this.getArticle = this.getArticle.bind(this)
        this.handleChange = this.handleChange.bind(this)   

        this.state = {
            currentArticle: {},
         }
    }

    componentDidMount() {
        this.getArticle(this.props.match.params.id)
     //   console.log(this.props.typesArticles)
       // this.props.retrieveTypesArticles();
        
    }

    
    getArticle(id){
        ArticleDataService.get(id)
            .then((response) => {
               this.setState({
                    currentArticle: response.data,
                });
                
                
            })
            .catch((e) => {
                console.log(e)
            })
    }

    
    handleChange(e){
        this.setState({ value: e.target.value })
    }
   
    render(){
        const {typesArticles} = this.props
        console.log(typesArticles)        
        console.log(this.state.currentArticle)
        return(
            
        <div className="container">
            <h2 className="indigo-text darken-2">Modification de l'article { this.state.currentArticle.ARTICLE } - Désignation: { this.state.currentArticle.DESIGNATION }  </h2>
                    <div className="row">
                        <form className="col s12 details">
                            <div className="col s4">
                            <select id="typeArticle" value='test'>
                                <option value="type1"> type 1 </option>
                                <option value="type2"> type 2 </option>
                            </select>
                            
                            <TypesArticlesList type={this.state.currentArticle.TYPE}/>
                            <div className={styles.parametres}>
                                <label>Code DLC</label>
                                <input type="text" value={this.state.currentArticle.CODE_DLC} />
                            </div>

                            {/* <TypesArticlesList articleType={this.state.currentArticle.TYPE}/> */}
                            {/* <TypesDLCList /> */} 
                                         
                            {/* <TypesAnimalesList/> */}
                            
                            <div className={styles.parametres}>
                                <label>Espèce animale</label>
                                <input type="text" value={this.state.currentArticle.ESPECE_ANIMALE} />
                            </div>

                            <div className={styles.parametres}>
                                <label>Famille de contamination</label>
                                <input type="text" value={this.state.currentArticle.FAMILLE} />
                            </div>

                            <div className={styles.parametres}>
                                <label>Famille de remplacement</label>
                                <input type="text" value={this.state.currentArticle.REMPLACEMENT} />
                            </div>
                            
                            {/* <TypesRemplacementsList/> */}
                            
                            <div className={styles.parametres}>
                                <label>Point de dosage habituel</label>
                                <input type="text" value={this.state.currentArticle.POINT_DOSAGE} />
                            </div>
                            <div className={styles.parametres}>
                                <label>Unité</label>
                                <input type="text" value={this.state.currentArticle.UNITE} />
                            </div>
                            <div className={styles.parametres}>
                                <label htmlFor="medicament">Médicament</label>
                                <input type="checkbox" id="medicament" name="medicament" value={ this.state.currentArticle.MEDICAMENT}/>
                            </div>                            
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


