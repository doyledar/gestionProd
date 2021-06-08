import React from 'react'
import { NavLink} from 'react-router-dom'
import styles from './article.module.css'


const ArticleSummary = (props) => {
  
  return (
    
    <div className={styles.summary}>
        <div className="grey-text text-darken-3">
            <span className={styles.reference}>
              <NavLink key={props.id} to={`article/${props.id}`}>
                  {props.id} - {props.reference} - {props.designation} 
              </NavLink>
            </span>
        </div>
    </div>

  )
}

export default ArticleSummary