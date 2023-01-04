import axios from "axios";
import React, {useReducer, useEffect} from "react";

const Address = () => {
    // 初期のステートを定義
    const initialState = {
        isLoading: true,
        isError: '',
        data: ''
    }

    // // reducer関数定義
    const reducerFunction = (state, action) => {
        switch (action.type) {
            case 'init':
                return initialState;
            case 'success':
                return {
                    isLoading: false,
                    isError: '',
                    data: action.payload
                };
            case 'fail':
                return {
                    isLoading: false,
                    isError: 'an error occurred',
                    data: ''
                };
            default:
                return state;
        }
    }
    const [dataState, dispatch] = useReducer(reducerFunction, initialState);
    const fetchData = () => {
        console.log("fetch github data!!")
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000/';
        // githubAPI
        const URL = 'https://api.github.com/users/marcy-t'
        axios.get(URL).then(result => {
            const data = result.data;
            console.log(data);
            // dispatch({type: 'success', payload: data.login});
            dispatch({type: 'success', payload: data.name});
        }).catch(error => {
            dispatch({type: 'fail'});
        });
    }

    return(
        <>
            <div>
                <button onClick={fetchData}>get github data</button> 
                <p>{dataState.isLoading ? 'Loading...' : 'Finished!'}</p>
                <p>githubのユーザー名:{dataState.data}</p>
                <p>{dataState.isError ? dataState.isError : ''}</p>
                <div className="line"></div>
           </div>
        </>
    )

}

export default Address