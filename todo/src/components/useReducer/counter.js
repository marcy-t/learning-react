import React, {useReducer, useEffect} from "react";

const reducerFunction = (state, action) => {
    // actionのタイプによるstateの更新処理を記述する
    switch (action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

const Counter = () => {
    // useReducerの引数にreducerの関数とステートの初期値を渡す
    const [counter, dispatch] = useReducer(reducerFunction, 0);
    useEffect (() =>{
        console.log("render to Counter useEffect!!")
        reducerFunction()
    }, [counter]);

    return(
        <>
            <div>
                <p>useReducerのサンプル１です</p>
                <p>カウント : {counter}</p>
                <button onClick={() => dispatch('increment')}>+1</button>
                <button onClick={() => dispatch('decrement')}>-1</button>
                <button onClick={() => dispatch('reset')}>REST</button>
                <div className="line"></div>
            </div>
        </>
    )

}

export default Counter;