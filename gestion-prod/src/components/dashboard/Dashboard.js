import React, { Component } from 'react'
import ArticlesList from '../articles/ArticlesList'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12">
                        <ArticlesList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard