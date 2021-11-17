import './App.css';
import {useRef, useState} from "react";
import PostList from "./component/postList";
import Button from "./component/UI/Button/button";
import Input from "./component/UI/Input/Input";



function MyInput() {
    return null;
}

const App = () => {

   const [post, setPost] = useState([
       {id: 1, title: 'javaScript 3', body: 'Description' },
       {id: 2, title: 'javaScript 3', body: 'Description' },
       {id: 3, title: 'javaScript 3', body: 'Description' },
   ])

    const [title, setTitle] = useState('000')

    const addNewPost = (e) => {
       e.preventDefault()
        console.log(title)
    }

    return (
    <div className="App">
        <form>
            <Input
                onInput={e => setTitle(e.target.value)}
                type='text'
                value={title}
                placeholder={'asa'}
            />
            <Input/>
            <Button onClick={addNewPost} disablet>добавить</Button>
        </form>
            <PostList post={post} title='Пост про JavaScript'/>
    </div>
    )
}

export default  App;




