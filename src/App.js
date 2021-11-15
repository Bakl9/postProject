import './App.css';
import {useState} from "react";
import PostList from "./component/postList";
import Btt from "./component/UI/Button/Btt";
import MyInput from "./component/UI/Input/MyInput";


const App = () => {

   const [post, setPost] = useState([
       {id: 1, title: 'javaScript 3', body: 'Description' },
       {id: 2, title: 'javaScript 3', body: 'Description' },
       {id: 3, title: 'javaScript 3', body: 'Description' },
   ])



    return (
    <div className="App">
        <form>
            <MyInput type="text" placeholder='Название поста'/>
            <MyInput type="text" placeholder='Описние поста'/>
            <Btt>Добавить пост</Btt>
        </form>
            <PostList post={post} title='Пост про JavaScript'/>
    </div>
    )
}

export default  App;




