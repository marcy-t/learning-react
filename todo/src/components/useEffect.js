import { useEffect, useState } from "react";

const useEffectUsecase = () =>{
    const [counter, setCounter] = useState(0);

    const countUp = () => {
        setCounter(counter+1)
    }
    
    const countDown = () => {
        setCounter(counter-1)
    }

    // useEffectで再レンダーされた場合に実行する処理を記述する。
    useEffect(() => {
        console.log('レンダーされました。');
        document.getElementById('title').innerHTML = `タイトル：${counter}`;
        return () => {
            // clean up処理を記述する。
            console.log('クリーンアップします。');
        };
    }, [counter]);
    return(
        <>
            <h2 id="title">タイトル：初期</h2>
            <div>
                <p>counterは{counter}です。</p>
                <button onClick={countUp}>+1</button>
                <button onClick={countDown}>-1</button>
            </div>
            <div className="line"></div>
        </>
    )
}

export default useEffectUsecase;