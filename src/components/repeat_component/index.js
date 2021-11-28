import { useState } from 'react';

const RepeatComponent = () => {
    // {id: number; todo: string; done: boolean;}
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const [id, setId] = useState(1);

    const onChangeValue = (event) => {
        setValue(event.target.value);
    };

    const onClickAddButton = () => {
        const newTodo = { id, todo: value, done: false };

        setTodos([...todos, newTodo]);
        setId(id + 1);
    };

    const onClickListItem = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done }
            }

            return todo;
        }))
    }

    const onClickRemoveButton = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChangeValue} />
            <button onClick={onClickAddButton}>추가</button>
            <ul style={{ listStyle: 'none' }}>
                {todos.map(({ id, todo, done }) => (
                    <li key={id} style={{ textDecoration: done ? 'line-through' : 'none' }}>
                        <input type="checkbox" value={done} onClick={() => onClickListItem(id)} />
                        {todo}
                        <button onClick={() => onClickRemoveButton(id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepeatComponent;