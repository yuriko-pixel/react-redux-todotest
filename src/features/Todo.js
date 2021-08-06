import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodo } from './todoSlice';
import { addTodo, deleteTodo, completeTodo } from './todoSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector(selectTodo);
    const [input, setInput] = React.useState('');

    return (
        <div>
            <input type="text" placeholder="Enter" onChange={(e)=> setInput(e.target.value)} value={input} />
            <button onClick={()=> dispatch(addTodo(input))}>Add Todo</button>
            <ul style={{listStyle: 'none'}} role="todoul">
                {todo.map(item => 
                    <li 
                        key={item.id} 
                        style={{background: 'pink', width: '200px', border: '1px solid black', margin: '10px auto', borderRadius: '5px',
                                minHeight: '30px'}}
                    >
                        <input type="checkbox" onClick={() => dispatch(completeTodo(item.id))} />
                        {item.completed === false ? 
                            (<span style={{margin: '0 5px'}} data-testid="test-todo">{item.text}</span>):
                            (<span style={{textDecoration: 'line-through'}} data-testid="test-todo2">{item.text}</span>)}
                        <button onClick={()=> dispatch(deleteTodo(item.id))} 
                            style={{background: 'red', border: 'solid 1px red',borderRadius: '3px',color: 'white'}}>×</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todo