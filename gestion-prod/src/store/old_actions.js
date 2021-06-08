export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS'
export const FETCH_ARTICLE_PENDING = 'FETCH_ARTICLE_PENDING'
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE'

export const fetchArticleSuccess =  (articles) => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload: { articles }
})

export const fetchArticlePending = () => ({
    type: FETCH_ARTICLE_PENDING,
})

export const fetchArticleFailure = (error) => ({
    type: FETCH_ARTICLE_FAILURE,
    payload: { error }
})
