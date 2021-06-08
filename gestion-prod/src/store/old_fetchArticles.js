import { fetchArticleSuccess, fetchArticlePending } from '../store/actions'
//const url = 'http://192.168.123.55:30300/api/articles/'

//const request = fetch('http://192.168.123.55:30300/api/articles/')


const URL = 'http://192.168.123.55:30300/api/articles/'

///const request = fetch(URL)


export default () => {
    return dispatch => {
        dispatch(fetchArticlePending());

       return fetch('http://192.168.123.55:30300/api/articles/')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchArticleSuccess(json.articles))
                return json.articles
            })
           // .catch(error => dispatch(fetchArticleFailure(error)))

        /* Promise.all(request)
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(console.log(res))
            .then(articles => dispatch(fetchArticleSuccess(articles))) */ 
    }
}

function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response
}



