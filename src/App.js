import './App.css';
import {useState} from "react";
import PostList from "./component/postList";
import Btt from "./component/UI/Button/Btt";


const App = () => {

   const [post, setPost] = useState([
       {id: 1, title: 'javaScript 3', body: 'Description' },
       {id: 2, title: 'javaScript 3', body: 'Description' },
       {id: 3, title: 'javaScript 3', body: 'Description' },
   ])



    return (
    <div className="App">
        <form>
            <input type="text" placeholder='Название поста'/>
            <input type="text" placeholder='Описние поста'/>
            <Btt>Добавить пост</Btt>
        </form>
            <PostList post={post} title='Пост js'/>
    </div>
    )
}

export default  App;




