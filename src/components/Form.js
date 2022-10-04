import { useState } from 'react';
import styles from '../style.module.css';
import Listitem from './Listitem';

const Form = ()=>{

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

const handleinput= (event)=>{
    setTodo(event.target.value);
}

const handleSubmit = (event)=>{
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    setTodo("");
}

return <div className={styles.formContainer}>
    <form onSubmit={handleSubmit}>
        <input onChange={handleinput} value={todo} className={styles.formInput} type="text" placeholder='Add a note' />
        <button className={styles.formButton} type='submit'>Add</button>
    </form>

    <div className={styles.listContainer}>
        {todoList.map((item,index)=>(
            <Listitem todoitem={item} key ={index}/>
        ))}
        
    </div>
</div>

}

export default Form;