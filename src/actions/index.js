import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonplaceholder'; 


export const fetchPostAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPost());

    const userId = _.uniq(_.map(getState().posts, 'userId'))

    userId.forEach(id => dispatch(fetchUserName(id)));
}
//------------------------------------------------------
export const fetchPost = () => async dispatch => {
    const responce = await jsonPlaceholder.get('/posts');

    dispatch({
        type:'FETCH_POST', payload: responce.data
    })
}
//--------------------------------------------------------------------
export const fetchUserName =(id) => async dispatch => {
    const responce = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type:'FETCH_USERNAME', payload: responce.data
    });
}

// export const fetchUser =(id) => dispatch => _fetchuser(id, dispatch);
// const _fetchuser = _.memoize(async (id, dispatch) => {
//     const responce = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type:'FETCH_USER', payload: responce.data
//     });
// })