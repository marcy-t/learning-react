import React, {useCallback, useState} from "react";

// React.memo+useCallbackを組み合わせて最適化

// タイトル　コンポーネント(子)を定義する
const Title = React.memo(() => {
    console.log('*Title component');
    return(
        <p>useCallBackの再レンダーを検証</p>
    )
});

// ボタンコンポーネント（子）を定義する。
const Button = React.memo((props) => {
    console.log('*Button component', props.name);
    return (
        <button onClick={props.doClick}>{props.name}</button>
    )
});

// カウンターコンポーネント(子)を定義する
const CounterText = React.memo((props) => {
    console.log('*Count child component', props.text);
    return (
        <p>{props.text}:{props.state}</p>
    )
});

const Counter3 = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(100);
    console.log("render Counter3!!");
    
    const countUpFirstCounter = useCallback(()=>{
        setFirstCounter(firstCounter+1);
    }, [firstCounter]);
    
    const countUpSecondCounter = useCallback(()=>{
        setSecondCounter(secondCounter+100);
    }, [secondCounter]);

    return (
        <>
            <div>
                <Title/>
                <CounterText text="+1ボタンによるカウント" state={firstCounter}/>
                <CounterText text="+100ボタンによるカウント" state={secondCounter}/>
                <Button name="+1" doClick={countUpFirstCounter}></Button>
                <Button name="+100" doClick={countUpSecondCounter}></Button>
                <div className="line"></div>
            </div>
        </>
    )
}

export default Counter3