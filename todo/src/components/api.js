import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts"


const API = () => {
    console.log("Call API!!!!")

    const [post, setPost] = useState(null);
    /*
        useEffect(()=>{
            第一引数には実行させたい副作用関数を記述
        }, [依存する変数の配列]) 第二引数には副作用関数の実行タイミングを制御する依存データを記述
        ・useEffectフックを使ってコンポーネントがマウントされた時点でこのリクエストを送信しています
        ・Axiosをインポートし、「.get()」メソッドを用いてGETリクエストをエンドポイントへ送信し、
          「.then()」コールバックを用いて全てのレスポンスデータクォ取得することが可能
    */
    useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data)
        })
    }, []);

    function createPost() {
        axios.post(baseURL, {
            title: "Hello World!",
            body: "This is a new post."
          }).then((response) => {
            setPost(response.data);
          });
      }
    
      if (!post) return "No post!"

      // debug
    //   console.log(post)
    
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={createPost}>Create Post</button>
        </div>
      );
    

}

export default API;

/* GET */
// import { useEffect, useState } from "react";
// import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1"
// const basePOSTURL = "https://jsonplaceholder.typicode.com/posts"

// const API = () => {
//     console.log("Call API!!!!")

//     const [post, setPost] = useState(null);
//     /*
//         useEffect(()=>{
//             第一引数には実行させたい副作用関数を記述
//         }, [依存する変数の配列]) 第二引数には副作用関数の実行タイミングを制御する依存データを記述
//         ・useEffectフックを使ってコンポーネントがマウントされた時点でこのリクエストを送信しています
//         ・Axiosをインポートし、「.get()」メソッドを用いてGETリクエストをエンドポイントへ送信し、
//           「.then()」コールバックを用いて全てのレスポンスデータクォ取得することが可能
//     */
//     useEffect(()=>{
//         axios.get(baseURL).then((response)=>{
//             setPost(response.data)
//         })
//     }, []);

//     if (!post) return null;
//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//         </div>
//     );

// }

// export default API;