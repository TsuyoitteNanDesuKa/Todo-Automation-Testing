const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'cokgizlibiranahtar'; // Gerçek bir uygulamada bunu .env dosyasında saklayın

app.use(cors());
app.use(bodyParser.json());

// --- Bellek İçi Veri Depolama ---
let users = [{ id: 1, username: 'testuser', password: 'password' }];
let todos = [];
let nextTodoId = 3;

// --- Kimlik Doğrulama Middleware'i ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // Token not found

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token invalid
        req.user = user;
        next();
    });
};

// --- Rotalar (Endpoints) ---

// POST /login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const accessToken = jwt.sign({ username: user.username, id: user.id }, JWT_SECRET);
        res.json({ token: accessToken });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// GET /items
app.get('/items', authenticateToken, (req, res) => {
    res.json(todos);
});

// POST /items
app.post('/items', authenticateToken, (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: 'Empty text error' });
    }
    const newTodo = {
        id: nextTodoId++,
        text: text,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT /items/:id
app.put('/items/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const todo = todos.find(t => t.id == id);

    if (todo) {
        todo.text = text;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// DELETE /items/:id
app.delete('/items/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(t => t.id == id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        res.json({ message: 'Todo deleted' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`API sunucusu http://localhost:${PORT} adresinde çalışıyor`);
    });
}


module.exports = app; // Testler için app'i dışa aktar