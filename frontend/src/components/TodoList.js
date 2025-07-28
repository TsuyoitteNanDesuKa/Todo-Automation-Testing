import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList({ token, onLogout }) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const api = axios.create({
        baseURL: 'http://localhost:5000',
        headers: { 'Authorization': `Bearer ${token}` }
    });

    useEffect(() => {
        api.get('/items').then(res => setTodos(res.data)).catch(console.error);
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
        const res = await api.post('/items', { text });
        setTodos([...todos, res.data]);
        setText('');
    } catch (err) {
        if (err.response) {
            console.error("Server error:", err.response.data.message);
        } else {
            console.error("Error:", err.message);
        }
    }
    };

    const handleDelete = (id) => {
        api.delete(`/items/${id}`).then(() => {
            setTodos(todos.filter(todo => todo.id !== id));
        });
    };

    const startEditing = (todo) => {
        setEditingId(todo.id);
        setEditingText(todo.text);
    };

    const handleEdit = (id) => {
        api.put(`/items/${id}`, { text: editingText }).then(res => {
            setTodos(todos.map(todo => (todo.id === id ? res.data : todo)));
            setEditingId(null);
            setEditingText('');
        });
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <button onClick={onLogout} className="logout-btn">Log Out</button>
            <form onSubmit={handleAdd}>
                <input
                    name="todo"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add new todo"
                />
                <button type="submit" className="add-btn">Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    className="edit-input"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => handleEdit(todo.id)} className="save-btn">Save</button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <div>
                                    <button onClick={() => startEditing(todo)} className="edit-btn">Edit</button>
                                    <button onClick={() => handleDelete(todo.id)} className="delete-btn">Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;