require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://0.0.0.0:5500',
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));


const todoRoutes = require('./routes/todo');
app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
